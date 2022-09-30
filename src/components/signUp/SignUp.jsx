import React from "react";

function SignUp() {
  return (
    <div className="py-6 px-6 lg:px-8 font-raleway">
      <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">
        Sign Up
      </h3>
      <form className="space-y-6" action="#">
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500 "
          />
        </div>
        <div>
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border-b-2 border-gray-50 text-gray-900 text-sm focus:outline-none block w-full p-2.5 focus:border-gray-500 "
          />
        </div>
        <div className="flex justify-between"></div>
        <button
          type="submit"
          className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center"
        >
          Create account
        </button>
        <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center"
        >
          Sign up with Google
        </button>
        <div class="text-sm font-medium text-gray-900">
          Have an account?{" "}
          <span class="cursor-pointer text-gray-600 hover:underline">
            Sign in
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
