import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllTask = () => {
  const [tasks, setTasks] = useState();
  const { user } = useContext(AuthContext);

  fetch(`http://localhost:8000/incomplete/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setTasks(data.data);
    });
  return (
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Title
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>

            <th scope="col" class="py-3 px-6">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {task.title}
              </th>
              <td class="py-4 px-6">Sliver</td>
              <td class="py-4 px-6">Laptop</td>
              <td class="py-4 px-6">$2999</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
