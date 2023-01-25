import React from "react";
import { FcGoogle } from "react-icons/fc";
const OAuth = () => {
  return (
    <button className="flex justify-center items-center w-full bg-red-700 text-white uppercase py-3 px-7 text-sm font-medium hover:bg-red-800 transition duration-150 ease-in-out active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg rounded">
      <FcGoogle className="mr-2 rounded-full bg-white text-2xl"/> Continue with google
    </button>
  );
};

export default OAuth;
