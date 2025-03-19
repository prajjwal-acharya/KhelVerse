import { Input } from '@/components/ui/input';

export default function Step3({ formData, setFormData }) {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Contact Details</h2>

      <label>Contact Person</label>
      <Input
        placeholder="Enter contact person's name"
        value={formData.contactPerson}
        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
      />

      <label>Email</label>
      <Input
        type='email'
        placeholder='Enter contact email'
        value={formData.contactEmail}
        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
      />

      <label>Phone</label>
      <Input
        type='tel'
        placeholder='Enter contact phone number'
        value={formData.contactPhone}
        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
      />
    </div>
  );
}
