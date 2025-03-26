import os
import logging
import json
from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import re

# Load environment variables
load_dotenv()

# Retrieve API Key
API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("❌ Missing GEMINI_API_KEY. Please set it in the .env file.")

# Configure Gemini AI
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

# Initialize API Router
router = APIRouter()

# Configure Logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

# Define Request Model
class CareerQuery(BaseModel):
    sport: str  # Example: "Swimming"
    level: str  # Example: "National"
    experience: int  # Years of experience
    goal: str  # Example: "Become a coach"
    education_interest: str  # Example: "Yes" or "No"
    skills: str  # Example: "Certified in sports nutrition, Basic physiotherapy knowledge"

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

# AI-based Career Advice Generation
# AI-based Career Advice Generation
def generate_career_advice(career_query: CareerQuery) -> dict:
    try:
        prompt = f"""
        Based on the following athlete details, suggest the **top 3 best-suited career paths in the Indian sports ecosystem** with a **step-by-step roadmap** for each:
        - **Sport:** {career_query.sport}
        - **Competition Level:** {career_query.level}
        - **Experience:** {career_query.experience} years
        - **Career Goal:** {career_query.goal}
        - **Interested in Higher Education:** {career_query.education_interest}
        - **Skills & Certifications:** {career_query.skills}

        Consider the Indian sports landscape, including government schemes, sports academies, job opportunities, and sponsorships available in India. Provide:
        1. **Career Path Name**
        2. **Why it fits the athlete** (specific to India)
        3. **Step-by-step roadmap** to achieve this career (including relevant Indian organizations, courses, and funding options)

        **Response Format (JSON):**
        ```json
        {{
          "career_guidance": [
            {{
              "career_path": "Career Path Name",
              "why_fits": "Why this career is a good fit in India based on market demand and athlete skills.",
              "roadmap": [
                {{
                  "step_number": 1,
                  "title": "Step 1 Title",
                  "description": "Actionable step with relevant Indian institutes, certifications, or funding."
                }},
                {{
                  "step_number": 2,
                  "title": "Step 2 Title",
                  "description": "Concise action with details on local opportunities or training programs."
                }},
                {{
                  "step_number": 3,
                  "title": "Step 3 Title",
                  "description": "Long-term goals or specialization options focused on India's sports ecosystem."
                }}
              ]
            }}
          ]
        }}
        ```
        - Each step should be **short but actionable**.
        - Advice must remain **practical and relevant** for athletes in **India**.
        - Return only **valid JSON**.
        """

        response = model.generate_content(prompt)

        if not response or not response.text:
            raise ValueError("AI response is empty.")

        response_text = response.text.strip()
        return extract_json(response_text)  # Extract only valid JSON
    except Exception as e:
        logging.error(f"❌ Error in AI response: {str(e)}")
        return {"error": "Failed to generate career advice."}


# Career Advice Endpoint
@router.post("/generate_career_advice/")
async def generate_career(career_query: CareerQuery):
    try:
        logging.info(f"📩 Received Career Advice Request: {career_query}")
        career_advice = generate_career_advice(career_query)
        return JSONResponse(content=career_advice, status_code=200)
    except Exception as e:
        logging.error(f"❌ Error Processing Request: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
      