import os
from flask import Flask, redirect, request, session, render_template
import requests
from dotenv import load_dotenv
from datetime import datetime
from functools import wraps
from models import db, Activity, Goal


# Load .env variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.urandom(24)
DEBUG_MODE = os.getenv("DEBUG_MODE") == "True"

# Database setup
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///strava.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

# OAuth config
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
REDIRECT_URI = os.getenv("REDIRECT_URI")

# ------------------------ AUTH DECORATOR ------------------------
def require_auth(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if DEBUG_MODE:
            return f(*args, **kwargs)
        if not session.get("access_token"):
            return redirect(
                "https://www.strava.com/oauth/authorize?" +
                f"client_id={CLIENT_ID}&response_type=code&redirect_uri={REDIRECT_URI}&scope=read,activity:read_all,profile:read_all&approval_prompt=auto"
            )
        return f(*args, **kwargs)
    return wrapper


# ------------------------ ROUTES ------------------------
@app.route("/")
def home():
    return redirect("/profile")

@app.route("/callback")
def callback():
    code = request.args.get("code")
    if not code:
        return "Authorization failed."

    token_url = "https://www.strava.com/oauth/token"
    payload = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "code": code,
        "grant_type": "authorization_code"
    }
    res = requests.post(token_url, data=payload)
    token_data = res.json()

    session["access_token"] = token_data["access_token"]
    session["refresh_token"] = token_data["refresh_token"]
    session["expires_at"] = token_data["expires_at"]

    return redirect("/activities")

@app.route("/profile")
@require_auth
def profile():
    access_token = session.get("access_token")
    res = requests.get(
        "https://www.strava.com/api/v3/athlete",
        headers={"Authorization": f"Bearer {access_token}"}
    )
    athlete = res.json()
    return render_template("profile.html", athlete=athlete)

@app.route("/activities")
@require_auth
def activities():
    access_token = session.get("access_token")
    res = requests.get(
        "https://www.strava.com/api/v3/athlete/activities",
        headers={"Authorization": f"Bearer {access_token}"}
    )
    activities = res.json()
    saved = 0

    for act in activities:
        if not Activity.query.filter_by(strava_id=act["id"]).first():
            new_activity = Activity(
                strava_id=act["id"],
                name=act["name"],
                distance=act["distance"],
                moving_time=act["moving_time"],
                type=act["type"],
                start_date=act["start_date"],
                calories=act.get("calories"),
                average_speed=act.get("average_speed"),
                average_heartrate=act.get("average_heartrate"),
                average_cadence=act.get("average_cadence"),
                average_watts=act.get("average_watts")
            )
            db.session.add(new_activity)
            saved += 1

    db.session.commit()
    return redirect("/dashboard")

@app.route("/dashboard")
@require_auth
def dashboard():
    activities = Activity.query.order_by(Activity.start_date.asc()).all()

    labels = [act.start_date[:10] for act in activities]
    distances = [round(act.distance / 1000, 2) for act in activities]
    durations = [round(act.moving_time / 60, 2) for act in activities]
    calories = [round(act.calories or 0, 2) for act in activities]  # ✅ New calories data

    # Summary stats
    total_distance = sum(distances)
    total_duration = sum(durations)
    total_activities = len(activities)
    avg_speed = round(sum(act.average_speed or 0 for act in activities) / total_activities, 2) if total_activities else 0
    avg_hr = round(sum(act.average_heartrate or 0 for act in activities if act.average_heartrate) / len([act for act in activities if act.average_heartrate]), 2) if any(act.average_heartrate for act in activities) else 0

    # Goal tracking (monthly)
    month = datetime.now().strftime("%Y-%m")
    week = datetime.now().strftime("%Y-W%U")
    current_month_activities = [act for act in activities if act.start_date.startswith(month)]
    current_month_distance = sum(act.distance for act in current_month_activities) / 1000  # km
    current_week_activities = [act for act in activities if act.start_date.startswith(datetime.now().strftime("%Y-%m-%d")[:8])]
    current_week_distance = sum(act.distance for act in current_week_activities) / 1000

    goal = Goal.query.filter_by(month=month, week=week).first()
    distance_goal = goal.distance_goal_km if goal else 0
    weekly_goal = goal.distance_goal_week if goal else 0

    goal_progress = int((current_month_distance / distance_goal) * 100) if distance_goal else 0
    week_progress = int((current_week_distance / weekly_goal) * 100) if weekly_goal else 0

    return render_template("dashboard.html",
        activities=activities,
        labels=labels,
        distances=distances,
        durations=durations,
        calories=calories,
        total_distance=total_distance,
        total_duration=total_duration,
        total_activities=total_activities,
        avg_speed=avg_speed,
        avg_hr=avg_hr,
        distance_goal=distance_goal,
        goal_progress=goal_progress,
        weekly_goal=weekly_goal,
        week_progress=week_progress
    )


@app.route("/set-goal", methods=["GET", "POST"])
@require_auth
def set_goal():
    if request.method == "POST":
        weekly = request.form.get("weekly")
        monthly = request.form.get("monthly")
        today = datetime.now()

        # Format keys for goal tracking
        current_week = today.strftime("%Y-W%U")
        current_month = today.strftime("%Y-%m")

        # Check if goal exists for this month/week
        goal = Goal.query.filter_by(month=current_month, week=current_week).first()

        if not goal:
            goal = Goal(month=current_month, week=current_week)

        # Update goals if provided
        if weekly:
            goal.distance_goal_week = float(weekly)
        if monthly:
            goal.distance_goal_km = float(monthly)

        db.session.add(goal)
        db.session.commit()

        return redirect("/dashboard")

    return redirect("/dashboard")


# Initialize DB
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
    print("🧪 Running in DEBUG_MODE with dummy data." if DEBUG_MODE else "🔐 Running in LIVE MODE with Strava auth.")

