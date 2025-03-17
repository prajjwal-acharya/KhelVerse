"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/onboardingForm"); // Redirect to Login if not authenticated
    }
  }, [user, router]);

  return user ? children : null; // Render only if user exists
};

export default AuthGuard;
