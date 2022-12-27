import AddTask from "../Pages/AddTask";
import CompletedTast from "../Pages/CompletedTast";
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
        path: "/add-task",
        element: <AddTask />,
      },
      {
        path: "/completed",
        element: <CompletedTast />,
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
