import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">Welcome to APTS</h1>
      <div className="text-center">
      <h1 className="text-3xl font-bold">Athlete Management Platform</h1>
      <p className="mt-4">Manage your training, tournaments, and finances efficiently.</p>
      <Link href="/dashboard" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        Go to Dashboard
      </Link>
    </div>
    </div>
  );
}
