import React from "react";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firbase";
import { useNavigate } from "react-router-dom";
const OAuth = () => {

  const navigate = useNavigate()
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // Check for the user
      const docRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate('/')
    } catch (error) {
      toast.error("Could not authorized with this google email");
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex justify-center items-center w-full bg-red-700 text-white uppercase py-3 px-7 text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg rounded"
    >
      <FcGoogle className="mr-2 rounded-full bg-white text-2xl" /> Continue with
      google
    </button>
  );
};

export default OAuth;
