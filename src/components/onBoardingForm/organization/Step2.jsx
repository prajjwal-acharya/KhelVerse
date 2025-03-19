import { Input } from '@/components/ui/input';

export default function Step2({ formData, setFormData }) {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Location & Sports Offered</h2>

      <label>Location</label>
      <Input
        placeholder='Enter city or address'
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />

      <label>Sports Offered</label>
      <Input
        placeholder='Enter sports offered (e.g., Football, Tennis)'
        value={formData.sportsOffered}
        onChange={(e) => setFormData({ ...formData, sportsOffered: e.target.value })}
      />
    </div>
  );
}
