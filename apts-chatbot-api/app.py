from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging

from diet_api import router as diet_router
from career_guidance import router as career_router
from injury_api import router as injury_router

# Initialize FastAPI app
app = FastAPI()

# Enable CORS (for frontend integration)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# Include API Routes
app.include_router(injury_router, prefix="/injury", tags=["Injury Analysis"])
app.include_router(diet_router, prefix="/api", tags=["Diet & Nutrition"])
app.include_router(career_router, prefix="/career", tags=["Career Guidance"])


@app.get("/")
def read_root():
    return {"message": "Welcome to the APTS API!"}
