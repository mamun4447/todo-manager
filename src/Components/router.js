import AllTask from "../Pages/AllTask";
import CompletedTask from "../Pages/CompletedTask";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home");
const { default: Main } = require("./LayOut/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-task",
        element: <AllTask />,
      },
      {
        path: "/completed",
        element: <CompletedTask />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
