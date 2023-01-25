import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value)
  };
  return (
    <section>
      <h1 className="text-3xl font-bold text-center mt-6">Forgot Pasword</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1642480504730-3ba4bbfaa0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form action="">
            <input
              type="email"
              value={email}
              id="email"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              onChange={onChange}
              placeholder="Enter your email address"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account ?{" "}
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 duration-200 transition ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                {" "}
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-700 duration-200 transition ease-in-out ml-1"
                >
                  Sign in Instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white uppercase font-medium text-sm px-7 py-3 rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
             send reset password
            </button>

            <div className="flex my-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
