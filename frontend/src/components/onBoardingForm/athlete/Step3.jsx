import { Input } from '@/components/ui/input';

export default function Step3({ formData, setFormData }) {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Physical & Health Metrics</h2>

      <label>Height (cm)</label>
      <Input
        type='number'
        placeholder='Enter height in cm'
        value={formData.height}
        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
      />

      <label>Weight (kg)</label>
      <Input
        type='number'
        placeholder='Enter weight in kg'
        value={formData.weight}
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
      />

      <label>Medical History</label>
      <textarea
        placeholder='Enter any medical conditions or injuries'
        value={formData.medicalHistory}
        onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
        className='border p-2 w-full h-20'
      />
    </div>
  );
}
