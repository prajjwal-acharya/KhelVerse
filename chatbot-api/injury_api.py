import os
import logging
import json
from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import re  # Added to extract JSON safely

# Load environment variables
load_dotenv()

# Retrieve API Key
API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("❌ Missing GEMINI_API_KEY. Please set it in the .env file.")

# Configure Gemini AI
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

# Create FastAPI router
router = APIRouter()

# Configure Logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# Define Request Model
class InjuryDetails(BaseModel):
    injury_type: str
    age: int
    past_injuries: str
    sport: str
    mobility: int  # 1 to 3
    pressure: int  # 1 to 3
    weight_bearing: int  # 1 to 3

# Function to extract JSON from AI response
def extract_json(response_text: str) -> dict:
    """Extract JSON from the AI response safely."""
    try:
        json_match = re.search(r"\{.*\}", response_text, re.DOTALL)
        if json_match:
            json_str = json_match.group(0)
            return json.loads(json_str)
        else:
            raise ValueError("No valid JSON found in AI response.")
    except Exception as e:
        logging.error(f"⚠️ Error parsing AI JSON response: {e}")
        return {"error": "AI response did not return valid JSON."}

# AI-based Injury Analysis Function
def generate_recovery_plan(injury_details: InjuryDetails) -> dict:
    try:
        severity_level = max(injury_details.mobility, injury_details.pressure, injury_details.weight_bearing)

        prompt = f"""
        You are an expert in sports medicine. Generate a **valid JSON response** for an athlete's injury recovery plan.
        The response **must** follow this JSON format **exactly**:
        ```json
        {{
          "starting_content": {{
            "title": "Comprehensive Recovery Plan",
            "disclaimer": "This plan is for informational purposes only and should not replace professional medical advice.",
            "athlete_profile": {{
              "age": {injury_details.age},
              "sport": "{injury_details.sport}",
              "injury": "{injury_details.injury_type}",
              "past_injuries": "{injury_details.past_injuries}",
              "severity": "{'Low' if severity_level == 1 else 'Medium' if severity_level == 2 else 'High'}"
            }}
          }},
          "rehabilitation_plan": {{
            "phase_1": {{
              "title": "Initial Protection & Pain Management (Days 1-7)",
              "goals": ["Reduce pain, swelling, and inflammation", "Protect the injured joint"],
              "protocol": {{
                "Rest": "Avoid weight-bearing activities.",
                "Ice": "Apply ice packs for 15 minutes every 3 hours.",
                "Compression": "Use an elastic bandage for support.",
                "Elevation": "Keep the injured area elevated above heart level."
              }},
              "progression_criteria": "Pain and swelling are reduced significantly."
            }},
            "phase_2": {{
              "title": "Early Movement & Strengthening (Days 7-14)",
              "goals": ["Regain joint mobility", "Begin light exercises"],
              "exercises": {{
                "mobility_drills": ["Ankle circles", "Toe raises", "Heel slides"],
                "strength_training": ["Isometric holds", "Resistance band exercises"]
              }},
              "progression_criteria": "Ability to move joint without sharp pain."
            }},
            "phase_3": {{
              "title": "Functional Rehabilitation (Weeks 3-6)",
              "goals": ["Improve strength and endurance", "Restore balance"],
              "exercises": {{
                "dynamic_stability": ["Single-leg balance", "Proprioceptive drills"],
                "low-impact_cardio": ["Cycling", "Swimming"]
              }},
              "progression_criteria": "Can perform moderate intensity activities without pain."
            }},
            "phase_4": {{
              "title": "Return to Sport (Weeks 6-12)",
              "goals": ["Reintegrate sport-specific movements", "Build full confidence"],
              "exercises": {{
                "sport_drills": ["Agility ladder", "Plyometrics"],
                "gradual_load": ["Jogging", "Acceleration & Deceleration training"]
              }},
              "progression_criteria": "Full pain-free movement and strength restored."
            }}
          }},
          "estimated_recovery_time": {{
            "week_1": "Pain and swelling reduction.",
            "weeks_2_4": "Improving mobility and strength.",
            "weeks_4_6": "Returning to moderate-intensity activities.",
            "weeks_6_12": "Gradual return to full training."
          }},
          "diet_supplements": {{
            "protein": "Lean meats, fish, eggs, plant-based proteins for muscle repair.",
            "hydration": "Drink at least 3 liters of water daily.",
            "anti_inflammatory": ["Turmeric", "Ginger", "Omega-3 fatty acids (salmon, flaxseed)"],
            "vitamins": {{
              "Vitamin C": "For collagen formation (Citrus fruits, bell peppers).",
              "Vitamin D": "For bone health (Sun exposure, fortified dairy).",
              "Calcium": "For muscle function (Leafy greens, dairy)."
            }}
          }},
          "precautions": {{
            "pain": "Avoid pushing through pain, modify exercises as needed.",
            "mental_health": "Stay positive, engage in mindfulness and visualization.",
            "sleep": "Ensure 7-9 hours of quality sleep for optimal healing."
          }}
        }}
        ```
        Return only **valid JSON** with no extra text or explanations.
        """

        response = model.generate_content(prompt)
        
        if not response or not response.text:
            raise ValueError("AI response is empty.")

        response_text = response.text.strip()
        return extract_json(response_text)  # Extract only valid JSON
    except Exception as e:
        logging.error(f"❌ Error in AI response: {str(e)}")
        return {"error": "Failed to generate recovery plan."}

# Injury Analysis Endpoint
@router.post("/analyze_injury/")
async def analyze_injury(injury_details: InjuryDetails):
    try:
        logging.info(f"📩 Received Injury Analysis Request: {injury_details}")
        analysis = generate_recovery_plan(injury_details)
        return JSONResponse(content=analysis, status_code=200)
    except Exception as e:
        logging.error(f"❌ Error Processing Request: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
