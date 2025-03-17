import { z } from "zod";

const athleteSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dob: z
    .string()
    .refine((val) => {
      const dob = new Date(val);
      const today = new Date();
      const currentYear = today.getFullYear();
      const minAge = 10;

      // Ensure DOB is a valid date and the age is 10 or older
      const age = currentYear - dob.getFullYear();
      if (age < minAge || dob > today) return false;
      return true;
    }, "Invalid Date of Birth or age is less than 10 years"),
  sport: z.string().min(3, "Sport name must be valid"),
  height: z.number().min(50, "Height must be valid"),
  weight: z.number().min(20, "Weight must be valid"),
  heartRate: z.number().min(30, "Heart rate must be valid"),
  sleepHours: z.number().min(1, "Sleep hours must be at least 1"),
  primaryGoal: z.enum([
    "Improve Endurance",
    "Increase Speed",
    "Build Strength",
    "Optimize Training Efficiency",
  ]),
});

export default athleteSchema;
