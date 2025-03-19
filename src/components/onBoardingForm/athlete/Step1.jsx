import { Input } from '@/components/ui/input';

export default function Step1({ formData, setFormData }) {
  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Personal Information</h2>

      <label>First Name</label>
      <Input
        placeholder='Enter first name'
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />

      <label>Last Name</label>
      <Input
        placeholder='Enter last name'
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />

      <label>Date of Birth</label>
      <Input
        type='date'
        value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
      />

      <label>Gender</label>
      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        className='border p-2 w-full'
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
  );
}
