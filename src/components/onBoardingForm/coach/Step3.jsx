import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {Input} from "@/components/ui/input"

export default function Step3({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Coaching Preferences</h2>

      <label>Sport</label>
      <Input
        placeholder="Enter your sport"
        value={formData.sport}
        onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
      />

      <label>Coaching Level</label>
      <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Beginner">Beginner</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Pro">Pro</SelectItem>
        </SelectContent>
      </Select>

      <label>Preferred Training Mode</label>
      <Select value={formData.trainingMode} onValueChange={(value) => setFormData({ ...formData, trainingMode: value })}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Training Mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Online">Online</SelectItem>
          <SelectItem value="Offline">Offline</SelectItem>
          <SelectItem value="Hybrid">Hybrid</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
