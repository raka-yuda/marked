import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../redux/slices/user-slice";
import { RootState } from "../redux/store";
import { MainAlert, MainNavbar } from "../components";
import Head from "next/head";

const Homepage: NextPage = () => {
  const { user, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          Home | Marked
        </title>
      </Head>
      <MainNavbar />
      <div
        className={`flex-1 md:container md:flex md:flex-col mx-auto xl:px-24 pt-8 md:pt-0 md:h-screen`}
      >
        <div className="flex flex-col items-center overflow-y-auto lg:flex-row flex-grow w-full px-4 md:px-0">
          <div className="flex flex-col flex-grow h-full justify-center lg:w-1/2 mt-24 lg:mt-0 p-4">
            <div className="flex flex-row items-center">
              <div className={`title--line`} />
              <p className={`text-xl font-bold px-8`}>Marked</p>
            </div>
            <div className="w-8/12">
              <p
                className={`md:text-5xl text-4xl leading-normal font-bold pt-4 pb-8`}
              >
                Discover for customize your lifestyle
              </p>
            </div>

            <p className={`md:text-xl text-lg pb-9`}>
              Discover for customize your lifestyle
            </p>
            <div className="flex flex-row items-center">
              <Link href={`/products`}>
                <button className={`border-4 border-black py-4 px-6`}>
                  <div className="flex flex-row items-center">
                    <span className={`mr-4`}>Explore</span>
                    <div className={`title--line`} />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col flex-grow h-screen lg:h-full justify-center w-full lg:w-1/2">
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-gray-300"></div>

            <div className={`absolute w-full h-full`}>
              <div className="flex flex-grow h-full justify-center items-center">
                <div className="relative h-48 w-48 md:h-72 md:w-72 mr-4 mt-4 bg-white border-4 border-black">
                  <div className="relative flex justify-center items-center h-48 w-48 md:h-72 md:w-72 left-4 -top-6 border-4 border-black bg-white bg-center">
                    <div className="w-full h-full flex justify-center items-center p-8">
                      <img src="/online-shop.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`absolute w-full h-full`}>
              {!isLoggedIn && (
                <div className="flex flex-grow h-full items-end">
                  <Link href={`/login`} className="flex flex-row items-center w-1/2">
                    <button className={`py-4 px-6 w-full bg-gray-400`}>
                      <div className="flex flex-row justify-center items-center">
                        <span className={`text-white`}>Login</span>
                      </div>
                    </button>
                  </Link>
                  <Link href={`/register`} className="flex flex-grow items-center w-1/2">
                    <button className={`py-4 px-6 w-full bg-gray-600`}>
                      <div className="flex flex-row justify-center items-center">
                        <span className={`text-white`}>Register</span>
                      </div>
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* {!isLoggedIn && (
              <div className="flex flex-grow bg-gray-300 items-end">
                <div className="flex flex-row items-center w-1/2">
                  <Link href={`/login`}>
                    <button className={`py-4 px-6 w-full bg-gray-400`}>
                      <div className="flex flex-row justify-center items-center">
                        <span className={`text-white`}>Login</span>
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="flex flex-row items-center w-1/2">
                  <Link href={`/register`}>
                    <button className={`py-4 px-6 w-full bg-gray-600`}>
                      <div className="flex flex-row justify-center items-center">
                        <span className={`text-white`}>Register</span>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
