import { Input } from '@/components/ui/input';

export default function Step1({ formData, setFormData }) {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Organization Basic Info</h2>

      <label>Organization Name</label>
      <Input
        placeholder='Enter organization name'
        value={formData.orgName}
        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
      />

      <label>Type</label>
      <Input
        placeholder='Academy, Club, Federation, etc.'
        value={formData.orgType}
        onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
      />

      <label>Established Year</label>
      <Input
        type='number'
        placeholder='Enter year of establishment'
        value={formData.establishedYear}
        onChange={(e) => setFormData({ ...formData, establishedYear: e.target.value })}
      />
    </div>
  );
}
