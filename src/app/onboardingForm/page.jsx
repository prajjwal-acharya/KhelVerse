'use client';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

const RoleSelection = () => {
  const router = useRouter();

  const handleSelectRole = async (role) => {
    const user = auth.currentUser;
    if (!user) {
      console.error('User not found!');
      return;
    }

    try {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role,
        isAuthenticated: false,
        isOnboarded: false, // 🚀 New field to track onboarding completion
      });

      router.push(`/onboardingForm/${role}`); // ✅ Redirect to role-specific form
    } catch (error) {
      console.error('🔥 Error setting role in Firestore:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-2xl font-bold mb-6'>Select Your Role</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {['athlete', 'coach', 'organization'].map((role) => (
          <button
            key={role}
            onClick={() => handleSelectRole(role)}
            className='px-6 py-4 bg-lavender text-black rounded-lg shadow-md hover:bg-black hover:text-lavender transition-colors duration-500'
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;
