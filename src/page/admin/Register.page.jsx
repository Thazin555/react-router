import React, { useEffect, useState } from "react";
import { api } from "../../service/baseurl";
import { useNavigate } from "react-router-dom";
import { Auth, AuthRegister } from "../../service/user.service";
import Sign_up from "../../img/signup.svg";

const RegisterPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (finder) {
      nav("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.get("user");
    const finder = data.find(
      (i) => i.username === formData.username || i.email === formData.email
    );
    // console.log(finder);
    if (finder) {
      nav("/register");
      throw new Error("User account already exists....");
    } else {
      const reg_data = await AuthRegister("user", formData);
      if (reg_data) {
        nav("/admin");
      }
    }
  };

  const handleToAdmin = () => {
    nav("/admin");
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-[40%] h-screen flex flex-col justify-center items-center">
          <img src={Sign_up} alt="img" className="w-[80%]" />
        </div>
        <div className="w-[60%] p-10">
          <div className="flex justify-end items-center gap-3">
            <p className="text-xs text-gray-400">Already have an account?</p>
            <button
              onClick={handleToAdmin}
              className="border border-gray-400 rounded-full px-4 py-1 uppercase text-xs font-bold text-gray-400 hover:bg-orange-400 hover:text-white hover:border-orange-400 duration-300"
            >
              Sign in
            </button>
          </div>
          <div className="p-10 w-[80%]">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Welcome to BookNet!</h1>
              <p className="text-sm text-gray-400 hover:text-orange-500 duration-200">
                Register your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex flex-col mb-5">
                <label htmlFor="username" className="mb-2 font-bold">
                  Name
                </label>
                <input
                  value={formData.username}
                  onChange={(e) => {
                    setFormData((pre) => ({
                      ...pre,
                      username: e.target.value,
                    }));
                  }}
                  type="text"
                  name="username"
                  id="username"
                  className="p-2 border-2 border-gray-300 rounded-md focus-visible:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-600"
                  required
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="mb-2 font-bold">
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((pre) => ({ ...pre, email: e.target.value }));
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="p-2 border-2 border-gray-300 rounded-md focus-visible:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-600"
                  required
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="password" className="mb-2 font-bold">
                  Password
                </label>
                <input
                  value={formData.password}
                  onChange={(e) => {
                    setFormData((pre) => ({
                      ...pre,
                      password: e.target.value,
                    }));
                  }}
                  type="password"
                  name="password"
                  id="password"
                  className="p-2 border-2 border-gray-300 rounded-md focus-visible:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-orange-400 text-white py-2 w-[25%] rounded-full uppercase text-sm font-semibold hover:bg-orange-500 hover:text-gray-700 duration-300"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
