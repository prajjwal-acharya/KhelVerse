import { z } from 'zod';

const coachSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  dob: z.string().min(1, 'Date of Birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  experience: z.string().min(1, 'Experience is required'),
  certifications: z.string().min(1, 'Certifications are required'),
  expertise: z.string().min(1, 'Expertise is required'),
  sport: z.string().min(1, 'Sport is required'),
  level: z.string().min(1, 'Coaching Level is required'),
  trainingMode: z.string().min(1, 'Training Mode is required'),
});

export default coachSchema;
