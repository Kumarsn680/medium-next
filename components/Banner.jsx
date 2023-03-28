import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-6xl shadow-md shadow-slate-400 p-2 bg-yellow-400">
      <div className="w-full flex flex-col items-center py-10 max-w-xl md:w-4/5 lg:w-1/2 px-4 ">
        <h3 className="text-6xl  mb-4 font-serif ">
          <span className="underline">Medium</span>
          <span> </span>
          {`is a place to write&sbquo; read&sbquo; and connect`}
        </h3>
        <h6>
          It&apos;s easy and free to post on any topic and connect with millions
          of readers
        </h6>
      </div>
      <div className="hidden md:flex">
        <img
          src="/medium-small-logo.svg"
          className="object-cover md:w-32 lg:w-64 pr-10"
        />
      </div>
    </div>
  );
};

export default Banner;
