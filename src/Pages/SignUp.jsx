import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const { user, userSignUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirm = from.confirm.value;

    if (password !== confirm) {
      return navigate("/");
    }

    //<==< User Registration >==>//
    userSignUp(email, password)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => console.log(error));

    //<==< Set Name >==>//
    // setName(name)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="relative flex items-center min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Create your new account</span>
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-white shadow-md rounded-lg text-left"
        >
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <div className="px-8 py-6 ">
            {/* <==< Name >==> */}
            <label className="block font-semibold"> Name </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            />

            {/* <==< Email >==> */}
            <label className="block font-semibold"> Email </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            />

            {/* <===< Password >===> */}
            <label className="block mt-3 font-semibold"> Password </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            />

            {/* <===< Confirm Password >===> */}
            <label className="block mt-3 font-semibold">Confirm Password</label>
            <input
              type="confirm"
              name="confirm"
              placeholder="Confirm Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            />

            {/*<== Button==> */}
            <div className="flex justify-between items-baseline">
              <button
                type="submit"
                className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
              >
                Login
              </button>
              <Link to="/login" className="text-sm hover:underline">
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Link
        to="/"
        type="button"
        class="text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Icon description</span>
      </Link>
    </div>
  );
};

export default SignUp;
