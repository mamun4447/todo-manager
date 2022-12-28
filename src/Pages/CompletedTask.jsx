import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const CompletedTask = () => {
  const [tasks, setTasks] = useState();
  const { user } = useContext(AuthContext);

  fetch(`http://localhost:5000/complete/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data?.data);
      setTasks(data?.data);
    });
  return (
    <div className="container mx-auto flex flex-col gap-2 mt-20">
      {tasks?.map((task) => (
        <div className="flex flex-row gap-40 shadow-xl rounded-md p-5 px-10 w-[75%] mx-auto items-center justify-center">
          <p onClick="">
            <input type="checkbox" className="cursor-pointer" name="" id="" />
          </p>
          <Link to={`/description/${task?._id}`} className="underline">
            {task?.title}{" "}
          </Link>
          <p>{task?.description}</p>
          <div className="flex flex-row justify-center items-center gap-2">
            <button
              type="button"
              className="bg-purple-700 text-white p-1 rounded-md"
            >
              Recover
            </button>
            <button
              type="button"
              className="bg-red-700 text-white p-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTask;
