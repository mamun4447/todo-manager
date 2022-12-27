import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center p-10">Task Manager</h2>
      <input
        type="text"
        className="w-full text-2xl border-none rounded-md mb-5 bg-slate-50 py-3"
        placeholder="Title..."
        name=""
        id=""
      />
      <hr />
      <textarea
        name=""
        className="w-full rounded-md border-none mt-5 bg-slate-50"
        placeholder="Description..."
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default Home;
