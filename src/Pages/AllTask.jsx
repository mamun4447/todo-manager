import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllTask = () => {
  const [tasks, setTasks] = useState();
  const { user } = useContext(AuthContext);

  fetch(`http://localhost:5000/incomplete/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data?.data);
      setTasks(data?.data);
    });

  return (
    <div className="container mx-auto flex flex-col gap-2 mt-20 justify-center items-center">
      {tasks?.map((task) => (
        <div className="flex flex-row gap-32 shadow-xl rounded-md p-5 px-10 w-[50%] mx-auto justify-center items-center">
          <p onClick="">
            <input type="checkbox" className="cursor-pointer" name="" id="" />
          </p>
          <Link to={`/description/${task?._id}`} className="underline">
            {task?.title}{" "}
          </Link>
          <p>{task?.description}</p>
          <button
            type="button"
            className="bg-red-700 text-white p-1 rounded-md"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
