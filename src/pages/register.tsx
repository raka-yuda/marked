import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { authRegister, UserState } from "../redux/slices/user-slice";
import { RootState } from "../redux/store";
import { MainAlert } from "../components";

interface UserAttributes {
  name: string;
  address: string;
  email: string;
  username: string;
  password: string;
}

const Register: NextPage = () => {
  const { user, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const userInput: UserAttributes = {
    name: "",
    address: "",
    email: "",
    username: "",
    password: "",
  };

  const [userRegister, setUserLogin] = useState(userInput);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    if (showAlert) {
      let timer1 = setTimeout(() => setShowAlert(false), 2000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [showAlert]);

  useEffect(() => {
    if (user.status !== null) {
      const firstWord = user.status.split("_")[0].toLowerCase();
      console.log(user.status);
      if (firstWord === "success") {
        setAlertMessage("Register Success!");
        setShowAlert(true);
      } else if (firstWord === "error") {
        setAlertMessage("Register Failed!");
        setShowAlert(true);
      }
    }
  }, [user.status]);

  const register = (userRegister: UserAttributes) => {
    console.log(userRegister);
    dispatch(authRegister(userRegister));
  };

  return (
    <div>
      <div className={`flex flex-row md:h-screen`}>
        <div className="hidden md:flex w-1/2 flex-col bg-gray-600"></div>
        <div className="flex overflow-y-auto w-full md:w-1/2 flex-col md:px-40 px-4 md:py-12 py-8">
          <div className="flex justify-end items-center md:py-4">
            <Link href={`/homepage`}>
              <a className={`text-base`}>Home</a>
            </Link>
          </div>
          <div className="flex flex-col flex-grow justify-center">
            <div className="flex flex-row items-center">
              <div className={`title--line`} />
              <p className={`text-xl font-bold px-8`}>Marked</p>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                register(userRegister);
              }}
            >
              <div className="flex flex-row items-center pb-12">
                <p className={`text-5xl font-bold pt-4 pb-8`}>Register</p>
              </div>
              <label htmlFor="username" className="text-sm text-gray-400">
                Name
              </label>
              <div className="flex w-full pb-4">
                <input
                  value={userRegister.name}
                  onChange={(e) => {
                    setUserLogin((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }));
                  }}
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
                  required
                />
              </div>
              <label htmlFor="username" className="text-sm text-gray-400">
                Address
              </label>
              <div className="flex w-full pb-4">
                <input
                  value={userRegister.address}
                  onChange={(e) => {
                    setUserLogin((prevState) => ({
                      ...prevState,
                      address: e.target.value,
                    }));
                  }}
                  id="address"
                  type="text"
                  placeholder="Enter address"
                  className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
                  required
                />
              </div>
              <label htmlFor="username" className="text-sm text-gray-400">
                Email
              </label>
              <div className="flex w-full pb-4">
                <input
                  value={userRegister.email}
                  onChange={(e) => {
                    setUserLogin((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }));
                  }}
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
                  required
                />
              </div>
              <label htmlFor="username" className="text-sm text-gray-400">
                Username
              </label>
              <div className="flex w-full pb-4">
                <input
                  value={userRegister.username}
                  onChange={(e) => {
                    setUserLogin((prevState) => ({
                      ...prevState,
                      username: e.target.value,
                    }));
                  }}
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
                  required
                />
              </div>
              <label htmlFor="username" className="text-sm text-gray-400">
                Password
              </label>
              <div className="flex w-full pb-4">
                <input
                  value={userRegister.password}
                  onChange={(e) => {
                    setUserLogin((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }));
                  }}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
                  required
                />
              </div>

              <div className="flex w-full pb-8 mt-4">
                <button className={`w-full`} type="submit">
                  <div className=" py-1 bg-gray-500 w-full">
                    <p className={`text-white text-base p-4 text-center`}>
                      Register
                    </p>
                  </div>
                </button>
              </div>
            </form>

            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400 pb-2">
                Already have an account?
              </p>
              <Link href={`/login`}>
                <a className="text-sm text-black">Login</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showAlert && <MainAlert isShow={showAlert} message={alertMessage} />}
    </div>
  );
};

export default Register;
