import ProfileMain from '@/components/profile/ProfileMain';
import { mockAthlete } from "@/content/exerciseData";
import React from 'react';

function page() {
  return (
    <div className="min-h-screen bg-background">
      <ProfileMain athlete={mockAthlete} />
    </div>
  );
}

export default page;