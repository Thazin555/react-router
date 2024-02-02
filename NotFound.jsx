import React from "react";
import NotImg from "./src/img/notfound.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  const handleToHome = () => {
    nav("/");
  };
  return (
    <div className="flex h-screen">
      <div className="w-[40%] text-center mt-32">
        <h1 className="text-8xl text-orange-700 mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-orange-900 mb-4">
          Page Not Found
        </h2>
        <div className="text-sm text-orange-400 mb-5">
          <p>We're sorry, the page you requested could not be found.</p>
          <p>Please go back to the homepage</p>
        </div>

        <button
          onClick={handleToHome}
          className="bg-orange-700 px-6 py-2 rounded-full uppercase text-white text-xs font-semibold mb-5 hover:bg-orange-500 duration-200"
        >
          Go Home
        </button>
      </div>
      <div className="w-[60%]">
        <img src={NotImg} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
