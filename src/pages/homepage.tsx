import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import classes from "./homepage.module.css";

const Homepage: NextPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div
      className={`md:container md:flex md:flex-col mx-auto md:px-24 px-4 md:h-screen w-full`}
    >
      <nav
        style={{ height: "140px" }}
        className={`flex flex-row md:px-8 justify-between items-center w-full`}
      >
        <div className="h-10 w-10">
          <Image src="/logo.svg" height={48} width={48} layout="responsive" />
        </div>

        <ul className={"flex flex-row"}>
          <li>
            <p className={`text-base md:px-16 px-2`}>Home</p>
          </li>
          <li>
            <p className={`text-base md:px-16 px-2`}>Explore</p>
          </li>
          <li>
            <p className={`text-base md:px-16 px-2`}>Cart</p>
          </li>
          <li>
            <p className={`text-base md:px-16 px-2`}>Account</p>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row flex-grow w-full">
        <div className="flex flex-col flex-grow h-full justify-center md:w-1/2">
          <div className="flex flex-row items-center">
            <div className={classes["title--line"]} />
            <p className={`text-xl font-bold px-8`}>Marked</p>
          </div>
          <div className="w-8/12">
            <p className={`text-5xl font-bold pt-4 pb-8`}>
              Discover for customize your lifestyle
            </p>
          </div>

          <p className={`text-xl pb-9`}>
            Discover for customize your lifestyle
          </p>
          <div className="flex flex-row items-center">
            <button className={`border-4 py-4 px-6`}>
              <div className="flex flex-row items-center">
                <span className={`mr-4`}>Explore</span>
                <div className={classes["title--line"]} />
              </div>
            </button>
          </div>
        </div>

        <div className="relative flex flex-col flex-grow h-screen md:h-full justify-center md:w-1/2">
          <div className="flex-grow bg-white">
            <div className={`absolute ${classes["vector--right"]}`}>
              <div className="absolute border-4 border-black p-10 top-4 right-4 z-10">
                <div className={`h-56 w-56`}></div>
              </div>

              <div className="border-4 border-black p-10 bg-red-900 z-20">
                <Image src="/online-shop.svg" height={220} width={220} />
              </div>
            </div>
          </div>
          <div className="flex flex-grow bg-gray-300 items-end">
            <div className="flex flex-row items-center w-1/2">
              <button className={`py-4 px-6 w-full bg-gray-400`}>
                <div className="flex flex-row justify-center items-center">
                  <span className={`mr-4 text-white`}>Login</span>
                </div>
              </button>
            </div>
            <div className="flex flex-row items-center w-1/2">
              <button className={`py-4 px-6 w-full bg-gray-600`}>
                <div className="flex flex-row justify-center items-center">
                  <span className={`mr-4 text-white`}>Register</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
