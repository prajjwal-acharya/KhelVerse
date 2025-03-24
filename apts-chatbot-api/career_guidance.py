import os
import google.generativeai as genai
from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv

# Load API Key
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Configure Gemini AI
genai.configure(api_key=GEMINI_API_KEY)

# Initialize FastAPI Router
router = APIRouter()

def generate_career_recommendation(sport, level, experience, goal, education_interest, skills):
    """Fetch top 3 career paths with a detailed step-wise roadmap from Gemini AI."""
    
    prompt = f"""
    Based on the following athlete details, suggest the **top 3 best-suited career paths in the Indian sports ecosystem** with a **highly detailed step-by-step roadmap** for each:
    
    - **Sport:** {sport}
    - **Competition Level:** {level}
    - **Experience:** {experience} years
    - **Career Goal:** {goal}
    - **Interested in Higher Education:** {education_interest}
    - **Skills & Certifications:** {skills}
    
    **Output Format:**
    Return a JSON response structured like this:
    ```json
    {{
      "career_guidance": [
        {{
          "career_path": "Career Path Name",
          "why_fits": "A detailed explanation of why this career is suitable for the athlete in India, considering current industry trends, market demand, and athlete skills.",
          "roadmap": [
            {{
              "step_number": 1,
              "title": "Step 1 Title",
              "description": "Step 1 detailed explanation, including key actions, possible resources, certification programs, Indian institutes, funding options, or practical tips."
            }},
            {{
              "step_number": 2,
              "title": "Step 2 Title",
              "description": "Step 2 detailed explanation with actionable steps and real-world examples relevant to the Indian sports industry."
            }},
            {{
              "step_number": 3,
              "title": "Step 3 Title",
              "description": "Step 3 detailed explanation, including long-term growth opportunities and specialization."
            }}
          ]
        }},
        ...
      ]
    }}
    ```
    
    **Important Instructions for the AI:**
    - Each roadmap step should have a **clear title** (e.g., "Get Certified as a Coach").
    - Each **description should be at least 4-6 sentences long** with practical guidance.
    - Mention relevant **Indian institutes, government schemes, or job opportunities** where applicable.
    - Ensure **step-wise progression** from beginner-level actions to expert-level mastery.

    **Avoid:**
    - Generic or vague responses.
    - Listing all steps in one paragraph.
    - Ignoring India-specific details.
    """
    
    model = genai.GenerativeModel("gemini-2.0-flash")
    response = model.generate_content(prompt)
    
    try:
        structured_data = eval(response.text)  # Convert Gemini's response into a dictionary
        return structured_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error parsing response: {str(e)}")

# FastAPI Endpoint
@router.post("/generate_career/")
async def get_career_guidance(data: dict):
    """API endpoint to get career guidance for an athlete."""
    try:
        sport = data.get("sport")
        level = data.get("level")
        experience = data.get("experience")
        goal = data.get("goal")
        education_interest = data.get("education_interest")
        skills = data.get("skills")

        if not all([sport, level, experience, goal, education_interest, skills]):
            raise HTTPException(status_code=400, detail="Missing required fields!")

        result = generate_career_recommendation(sport, level, experience, goal, education_interest, skills)
        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
