import React from 'react'
import Link from "next/link";
function Header() {
  return (
    <div>
        <nav className="bg-blue-600 text-white p-4 flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/training">Training</Link>
            <Link href="/tournaments">Tournaments</Link>
            <Link href="/finance">Finance</Link>
            <Link href="/profile">Profile</Link>
          </nav>
    </div>
  )
}

export default Header