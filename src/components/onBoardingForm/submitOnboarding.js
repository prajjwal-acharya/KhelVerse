import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
export const submitOnboarding = async (formData, user, router, dispatch, setRole) => {
  if (!user?.uid) {
    console.error("User not found! Cannot save to Firestore.");
    return;
  }
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      name: user.name,
      email: user.email,
      photoURL: user.photoURL,
      role: formData.role, 
      ...formData, 
      isOnboarded: true,
      isAuthenticated: true,
      createdAt: new Date().toISOString(),
    }, { merge: true });
    dispatch(setRole(formData.role));
    router.push(`/dashboard/${formData.role}`);
  } catch (error) {
    console.error("🔥 Error saving user:", error);
  }
};
