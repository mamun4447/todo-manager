import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import ImageUpload from "../Components/ImageUpload";
import { AuthContext } from "../Context/AuthProvider";

const Home = () => {
  const [imageUrl, setImageUrl] = useState();
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.value;

    //<<==< Image Hosting >==>>//
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=1b41abcbd3e3a0a9277f75dc7cb38414`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => setImageUrl(imgData?.data?.url));

    const task = {
      title,
      description,
      userEmail: user?.email,
      status: "incomplete",
      image: imageUrl,
    };
    // console.log(task);

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Task added to 'all tasks'!");
        // console.log(data);
        form.reset();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto">
      <h2 className="text-4xl text-center p-10">Task Manager</h2>
      <div className="flex">
        <input
          type="text"
          className="w-full text-2xl border-none rounded-md mb-5 bg-purple-5  0 py-3"
          placeholder="Title..."
          name="title"
          id=""
        />
        <input
          type="file"
          className="w-full text-2xl border-none rounded-md mb-5 bg-purple-5  0 py-3"
          name="image"
          id=""
        />
      </div>
      <hr />
      <textarea
        name="description"
        className="w-full rounded-md border-none mt-5 bg-slate-50"
        placeholder="Description..."
        id=""
        cols="30"
        rows="10"
      ></textarea>

      <button type="submit" className="bg-purple-700 text-white p-2 rounded-md">
        Add Task
      </button>
    </form>
  );
};

export default Home;
