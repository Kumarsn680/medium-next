import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex h-20 p-2 justify-between items-center w-full max-w-6xl">
      <div className="flex justify-evenly items-center w-2/5">
        <Link href="/" className="md:mr-2">
          <img src="/medium-logo.svg" className="object-cover w-44 "></img>
        </Link>
        <div className="hidden w-3/5 md:flex  justify-evenly items-center ">
          <Link href="/about" className="cursor-pointer md:mr-1">
            <h3>About</h3>
          </Link>
          <Link href="/contact" className="cursor-pointer md:mr-1">
            <h3>Contact</h3>
          </Link>
          <Link href="/follow" className="cursor-pointer md:mr-1">
            <h3 className="py-1 px-3 bg-green-600 text-white rounded-xl">
              Follow
            </h3>
          </Link>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-44 md:w-1/5">
        <Link href="/follow">
          <h4>Sign In</h4>
        </Link>
        <Link href="/follow">
          <h3 className="text-green-600 border-2 border-green-600 rounded-xl py-1 px-3">
            Get Started
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
