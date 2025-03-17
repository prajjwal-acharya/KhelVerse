
import { Input } from "@/components/ui/input";

export default function Step2({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Coaching Experience</h2>

      <label>Years of Experience</label>
      <Input
        type="number"
        placeholder="Enter your experience in years"
        value={formData.experience}
        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
      />

      <label>Certifications</label>
      <Input
        placeholder="Enter your certifications"
        value={formData.certifications}
        onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
      />

      <label>Expertise</label>
      <Input
        placeholder="Enter your expertise (e.g., Strength Training)"
        value={formData.expertise}
        onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
      />
    </div>
  );
}
