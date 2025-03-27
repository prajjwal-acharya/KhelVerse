from app import app, db
from models import Activity
from datetime import datetime, timedelta
import random

with app.app_context():
    base_date = datetime.now() - timedelta(days=10)
    for i in range(10):
        activity_date = (base_date + timedelta(days=i)).strftime("%Y-%m-%dT%H:%M:%SZ")
        strava_id = 9000000000 + i

        if not Activity.query.filter_by(strava_id=strava_id).first():
            dummy_activity = Activity(
                strava_id=strava_id,
                name=f"Test Run {i+1}",
                distance=random.uniform(3000, 10000),  # meters
                moving_time=random.randint(1000, 3600),  # seconds
                type="Run",
                start_date=activity_date,
                calories=random.randint(200, 800),
                average_speed=round(random.uniform(2.5, 4.5), 2),
                average_heartrate=random.randint(120, 160),
                average_cadence=random.randint(70, 90),
                average_watts=None
            )
            db.session.add(dummy_activity)

    db.session.commit()
    print("✅ 10 dummy activities injected into the database.")
