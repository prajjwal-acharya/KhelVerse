"use client";
import Link from "next/link";

function DashboardPage() {
  return (
    //here we will add conditional rendering (of dashboard view) for different users: athlete,coach,sponsor
    <div className="text-wrap">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-green-400">Here we will add conditional rendering (of dashboard view) for different users: athlete,coach,sponsor</p>
      <p>Select a section to navigate to:</p>
      <ul className="mt-4 list-disc pl-6">
        <li><Link href="/training" className="text-blue-600">Training</Link></li>
        <li><Link href="/tournaments" className="text-blue-600">Tournaments</Link></li>
        <li><Link href="/finance" className="text-blue-600">Finance</Link></li>
        <li><Link href="/profile" className="text-blue-600">Profile</Link></li>
      </ul>
    </div>
  );
}
export default DashboardPage
