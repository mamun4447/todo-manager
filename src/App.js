import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./Components/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
