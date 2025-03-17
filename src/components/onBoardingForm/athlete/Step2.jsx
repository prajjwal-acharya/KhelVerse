import { Input } from "@/components/ui/input";

export default function Step2({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sports & Experience</h2>

      <label>Sport</label>
      <Input
        placeholder="Enter primary sport"
        value={formData.sport}
        onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
      />

      <label>Experience Level</label>
      <select
        value={formData.experienceLevel}
        onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
        className="border p-2 w-full"
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Professional</option>
      </select>
    </div>
  );
}

