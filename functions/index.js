import functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


/**
 * AI-Based Injury Prediction API
 * Endpoint: /predict-injury
 */
app.post("/predict-injury", async (req, res) => {
  try {
    const { age, matchesPlayed, fatigueLevel, pastInjuries, recoveryTime, trainingIntensity } = req.body;

    const prompt = `
    Analyze the injury risk for an athlete based on the following data:
    - Age: ${age}
    - Matches Played: ${matchesPlayed}
    - Fatigue Level: ${fatigueLevel}
    - Past Injuries: ${pastInjuries}
    - Recovery Time after Injury: ${recoveryTime}
    - Training Intensity: ${trainingIntensity}

    Generate the output in a **point-wise format** with **four elements per point**:

    🔹 **Format:**
    \`\`\`
    [Sl No] [Predicted Risk: High/Medium/Low] [Cause of Risk] [What it can affect]
    \`\`\`
    `;

    const result = await model.generateContent(prompt);
    const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    res.json({ success: true, response: responseText });

  } catch (error) {
    console.error("Error in /predict-injury:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * AI-Based Recovery Plan API
 * Endpoint: /recovery-plan
 */
app.post("/recovery-plan", async (req, res) => {
  try {
    const { injuryType, age, pastInjuries, sport, severityLevel } = req.body;

    const prompt = `
    Generate a **personalized recovery plan** for an athlete with the following details:
    - **Injury Type**: ${injuryType}
    - **Age**: ${age} years
    - **Sport**: ${sport}
    - **Past Injuries**: ${pastInjuries}
    - **Injury Severity Level**: ${severityLevel} (1 = Low, 2 = Medium, 3 = High)

    Provide:
    1️⃣ **Rehabilitation Plan** (Exercises suited for severity level)
    2️⃣ **Estimated Recovery Time**
    3️⃣ **Diet & Supplements for faster healing**
    4️⃣ **Precautions to prevent re-injury**
    `;

    const result = await model.generateContent(prompt);
    const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    res.json({ success: true, response: responseText });

  } catch (error) {
    console.error("Error in /recovery-plan:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * AI-Based Diet Plan API
 * Endpoint: /diet-plan
 */
app.post("/diet-plan", async (req, res) => {
  try {
    const { sport, position, age, weight, height, goal } = req.body;

    const prompt = `
    Suggest a **daily meal plan** for an athlete with the following details:
    - **Sport**: ${sport}
    - **Position**: ${position}
    - **Age**: ${age}
    - **Weight**: ${weight} kg
    - **Height**: ${height} cm
    - **Training Goal**: ${goal} (e.g., muscle gain, endurance, fat loss)

    Provide a structured meal plan including:
    - **Breakfast**
    - **Lunch**
    - **Dinner**
    - **Snacks**
    - **Macronutrient Breakdown (Protein, Carbs, Fats)**
    `;

    const result = await model.generateContent(prompt);
    const responseText = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    res.json({ success: true, response: responseText });

  } catch (error) {
    console.error("Error in /diet-plan:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Export as Firebase Function
export const api = functions.https.onRequest(app);
