import os
from app import app, db

# Path to the database file
db_path = os.path.join(app.instance_path, 'strava.db')

# Delete existing DB if it exists
if os.path.exists(db_path):
    print(f"🗑️  Removing old database at: {db_path}")
    os.remove(db_path)
else:
    print("✅ No existing database found, creating fresh.")

# Recreate the database
with app.app_context():
    db.create_all()
    print("📦 New database created successfully with updated schema!")
