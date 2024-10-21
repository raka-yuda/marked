import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { authLogin, UserState } from "../redux/slices/user-slice";
import { useEffect, useState } from "react";
import Router from "next/router";
import { MainAlert } from "../components";
import Head from "next/head";

type Props = {
  user: User;
};

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

interface User {
  username: string;
  name: string;
  status: string;
}

interface UserAttributes {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const { user, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const userInput: UserAttributes = {
    username: "",
    password: "",
  };

  const [userLogin, setUserLogin] = useState(userInput);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/homepage");
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
        setAlertMessage("Login Success!");
        setShowAlert(true);
      } else if (firstWord === "error") {
        setAlertMessage("Login Failed!");
        setShowAlert(true);
      }
    }
  }, [user.status]);

  const login = (userLogin: UserAttributes) => {
    dispatch(authLogin(userLogin));
  };

  return (
    <>
      <Head>
        <title>
          Login | Marked
        </title>
      </Head>
      <div className={`flex flex-row md:h-screen`}>
        <div className="hidden md:flex w-1/2 flex-col bg-gray-600"></div>
        <div className="flex overflow-y-auto w-full md:w-1/2 flex-col xl:px-40 md:px-24 px-4 md:py-12 py-8">
          <div className="flex justify-end items-center md:py-4">
            <Link
              href={`/homepage`}
              className={`text-base`}
            >
              Home
            </Link>
          </div>
          <form
            className={`flex flex-col flex-grow justify-center pt-8 md:pt-0"`}
          >
            <div className="flex flex-row items-center">
              <div className={`title--line`} />
              <p className={`md:text-xl text-lg font-bold px-8`}>Marked</p>
            </div>
            <div className="flex flex-row items-center pb-12">
              <p className={`text-4xl md:text-5xl font-bold pt-4 pb-8`}>
                Login
              </p>
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Username
            </label>
            <div className="flex w-full pb-4">
              <input
                value={userLogin.username}
                onChange={(e) => {
                  setUserLogin((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }));
                }}
                id="search"
                type="text"
                autoComplete="search"
                required
                placeholder="Enter username"
                className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
              />
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Password
            </label>
            <div className="flex w-full pb-4">
              <input
                value={userLogin.password}
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
              />
            </div>

            <div className="flex mt-4 pb-8">
              <button
                className={`w-full`}
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                  login(userLogin);
                }}
              >
                <div className="py-1 bg-gray-500 w-full">
                  <p className={`text-white text-base p-4 text-center`}>
                    Login
                  </p>
                </div>
              </button>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400 pb-2">
                Didn’t have an account?
              </p>
              <Link
                href={`/register`}
                className="text-sm text-black"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      {showAlert && <MainAlert isShow={showAlert} message={alertMessage} />}
    </>
  );
};

export default Login;
