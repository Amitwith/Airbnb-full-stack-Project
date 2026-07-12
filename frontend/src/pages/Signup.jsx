import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { authDataContext } from "../context/authContaxt";
import axios from "axios";
import { useContext } from "react";

function Signup() {
  const [show, setShow] = useState(false);
  // console.log(show, setShow.current);
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSignup = async (e) => {
    try {
      e.preventDefault();
      let result = await axios.post(
        serverUrl + "/api/auth/signup",
        {
          username: name,
          email,
          password,
        },
        { withCredentials: true },
      );
      setName("");
      setEmail("");
      setPassword("");

      console.log(result);
    } catch (error) {
      console.log(error.response?.data);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center relative">
        <div className="bg-[red] w-[40px] h-[40px] cursor-pointer text-1xl absolute top-5 left-4 rounded-full flex justify-center items-center">
          <FaArrowLeft
            className="text-[white] w-[25px] h-[25px]"
            onClick={() => navigate("/")}
          />
        </div>
        <form
          action=""
          onSubmit={handelSignup}
          className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center  flex-col md:items-start gap-[10px]"
        >
          <h1 className=" text-[30px] text-[black] pt-10">Welcome to Airbnb</h1>

          <div className="w-[90%] flex items-start justify-start flex-col gap-[10] mt-[30px]">
            <label htmlFor="name" className="text-[20px]">
              Username
            </label>
            <input
              type="text"
              id="name"
              className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-[90%] flex items-start justify-start flex-col gap-[10] ">
            <label htmlFor="email" className="text-[20px]">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px] "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-[90%] flex items-start justify-start flex-col gap-[10] relative">
            <label htmlFor="password" className="text-[20px]">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              id="password"
              className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px] "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!show && (
              <IoEye
                className="absolute right-[12%] bottom-[10%] w-[22px] h-[22px] cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoIosEyeOff
                className="absolute right-[12%] bottom-[10%] w-[22px] h-[22px] cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
          </div>

          <button className=" px-[50px] py-[10px] bg-[red] text-[18px] text-[white] md:px-[100px] rounded-lg mb-2">
            Signup
          </button>
          <p className="text-[18px] ">
            Already have a account?
            <span
              onClick={() => navigate("/login")}
              className="text-[18px] text-[red] p-2 cursor-pointer font-bold "
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
