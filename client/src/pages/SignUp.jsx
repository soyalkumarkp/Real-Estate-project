import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 class="text-center font-semibold my-7">Sign Up</h1>
      <form class="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          class="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          class="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          class="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase transition duration-300 hover:bg-slate-800 hover:text-gray-100">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
