import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div class="relative flex items-center justify-center min-h-screen text-gray-800 antialiased flex-col  overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="relative py-3 sm:w-96 mx-auto text-center">
          <span class="text-2xl font-light ">Login to your account</span>
          <div class="mt-4 bg-white shadow-md rounded-lg text-left">
            <div class="h-2 bg-purple-400 rounded-t-md"></div>
            <div class="px-8 py-6 ">
              <label class="block font-semibold"> Email </label>
              <input
                type="text"
                placeholder="Email"
                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />
              <label class="block mt-3 font-semibold"> Password </label>
              <input
                type="password"
                placeholder="Password"
                class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              />
              <div class="flex justify-between items-baseline">
                <button
                  type="submit"
                  class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                >
                  Login
                </button>
                <Link to="/signup" class="text-sm hover:underline">
                  Don't have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" type="button" class="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800">
  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
</Link>
      </div>
    </>
  );
};

export default LogIn;
