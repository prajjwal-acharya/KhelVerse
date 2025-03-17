"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Next.js router for navigation
import { signInWithGoogle } from "@/firebase/auth"; // Import login function
import {useDispatch} from "react-redux"

function HeroSection() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  
  const handleGetStarted = async () => {
    const { user, isNewUser } = await signInWithGoogle(dispatch); // ✅ Remove `router` from argument
  
    if (user) {
      console.log("User Logged In:", user);
      
      if (isNewUser) {
        router.push("/onboardingForm"); // 🆕 New user → Role selection
      } else if (user.role) {
        router.push(`/dashboard/${user.role}`); // ✅ Existing user → Redirect to role-based dashboard
      } else {
        router.push("/onboardingForm"); // Edge case: No role set
      }
    }
  };

  return (
    <div className="relative h-screen w-full text-white">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/indiaOlympics.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Translucent Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Overlay Content */}
      <div className="relative flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h1 className="font-sprintura text-[70px] tracking-wider">APTS</h1>
        <h2 className="text-[48px]">Empowering India's Athletes, One Click at a Time</h2>
        <p>Your talent deserves more than just hard work—it needs the right support.</p>
        <p>Welcome to the future of athlete management, where technology meets passion.</p>
        <span>Track. Train. Triumph.</span>
        <span>One platform, endless possibilities.</span>
        <button
          onClick={handleGetStarted} // Trigger Google login
          className="mt-4 px-6 py-3 rounded-2xl bg-lavender text-black font-semibold hover:bg-purple-300 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
