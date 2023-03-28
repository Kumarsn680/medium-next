import React from 'react'

const Comment = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex flex-col justify-evenly w-full">
        {/* Header */}
        <div className="mb-8">
          <p className="text-yellow-600">Enjoyed this article ?</p>
          <h1 className="text-3xl font-bold">Leave a Comment below!</h1>
        </div>
        {/* Form */}
        <form className="flex flex-col justify-center mb-10">
          <label className="flex flex-col">
            <span className="text-slate-500">Name</span>
            <input
              className="p-2 border mt-1 mb-4"
              placeholder="Carl Santos"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-slate-500">Email</span>
            <input
              className="p-2 border mt-1 mb-4"
              placeholder="abc123@gmail.com"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-slate-500">Comment</span>
            <textarea
              placeholder="Enter Some Comment"
              className="p-2 h-32 border mt-1 mb-4"
            ></textarea>
          </label>
          <div className='flex justify-center'>
            <input
              type="submit"
              className="bg-yellow-400 w-4/5 py-2"
              value={`Submit`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment