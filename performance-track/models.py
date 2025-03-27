from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    strava_id = db.Column(db.BigInteger, unique=True, nullable=False)
    name = db.Column(db.String(100))
    distance = db.Column(db.Float)
    moving_time = db.Column(db.Integer)
    type = db.Column(db.String(50))
    start_date = db.Column(db.String(100))
    calories = db.Column(db.Float, nullable=True)
    average_speed = db.Column(db.Float, nullable=True)
    average_heartrate = db.Column(db.Float, nullable=True)
    average_cadence = db.Column(db.Float, nullable=True)
    average_watts = db.Column(db.Float, nullable=True)

class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    month = db.Column(db.String(20))  # e.g., "2025-03"
    week = db.Column(db.String(20))   # e.g., "2025-W13"
    distance_goal_week = db.Column(db.Float, nullable=True)
    distance_goal_km = db.Column(db.Float, nullable=True)
