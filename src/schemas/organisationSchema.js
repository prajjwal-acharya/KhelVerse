import { z } from "zod";

const organizationSchema = z.object({
  organizationType: z.string().min(1, "Organization Type is required"),
});

export default organizationSchema;
