import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { authDataContext } from "../context/authContaxt";
import axios from "axios";

function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handellogin = async (e) => {
    try {
      e.preventDefault();
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      setEmail("");
      setPassword("");
      console.log(result);
    } catch (error) {
      console.log(error.response?.data);
      console.log(error.message);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      <div className="bg-[red] w-10 h-10 cursor-pointer text-1xl absolute top-5 left-4 rounded-full flex justify-center items-center">
        <FaArrowLeft
          className="text-[white] w-6 h-6"
          onClick={() => navigate("/")}
        />
      </div>
      <form
        action=""
        onSubmit={handellogin}
        className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center  flex-col md:items-start gap-[10px]"
      >
        <h1 className=" text-[30px] text-[black]">Welcome to Airbnb</h1>
        <div className="w-[90%] flex items-start justify-start flex-col gap-[10] ">
          <label htmlFor="email" className="text-[20px]">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]"
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
        <button className=" px-[50px] py-[10px] bg-[red] text-[18px] text-[white] md:px-[100px] rounded-lg mb-3">
          Login
        </button>
        <p className="text-[18px]">
          Create New Account
          <span
            onClick={() => navigate("/signup")}
            className="text-[18px] text-[red] p-2 cursor-pointer font-bold"
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
