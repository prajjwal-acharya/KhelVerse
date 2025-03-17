
export default function Step4({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Achievements & Final Details</h2>

      <label>Achievements</label>
      <textarea
        placeholder="Enter notable achievements (optional)"
        value={formData.achievements}
        onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
        className="border p-2 w-full h-20"
      />
    </div>
  );
}
