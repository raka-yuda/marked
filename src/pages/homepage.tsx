import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { MainNavbar } from "../components";

import classes from "./homepage.module.css";

const Homepage: NextPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={`relative`}>
      <MainNavbar />
      <div
        className={`flex-1 md:container md:flex md:flex-col mx-auto md:px-24 pt-36 md:pt-0  md:h-screen `}
      >
        <div className="flex flex-col overflow-y-auto md:flex-row flex-grow w-full px-4 md:px-0">
          <div className="flex flex-col flex-grow h-full justify-center md:w-1/2">
            <div className="flex flex-row items-center">
              <div className={`title--line`} />
              <p className={`text-xl font-bold px-8`}>Marked</p>
            </div>
            <div className="w-8/12">
              <p
                className={`md:text-5xl text-4xl leading-tight font-bold pt-4 pb-8`}
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

          <div className="relative flex flex-col flex-grow h-screen md:h-full justify-center md:w-1/2">
            <div className="flex-grow bg-white">
              <div className={`absolute ${classes["vector--right"]}`}>
                <div className="absolute border-4 border-black p-10 top-4 right-4 z-10">
                  <div className={`h-32 w-32 md:h-56 md:w-56`}></div>
                </div>

                <div className="border-4 border-black p-10 bg-white z-20">
                  <div className={`h-32 w-32 md:h-56 md:w-56`}>
                    <Image src="/online-shop.svg" height={220} width={220} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow bg-gray-300 items-end">
              <div className="flex flex-row items-center w-1/2">
                <Link href={`/login`}>
                  <button className={`py-4 px-6 w-full bg-gray-400`}>
                    <div className="flex flex-row justify-center items-center">
                      <span className={`mr-4 text-white`}>Login</span>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="flex flex-row items-center w-1/2">
                <Link href={`/register`}>
                  <button className={`py-4 px-6 w-full bg-gray-600`}>
                    <div className="flex flex-row justify-center items-center">
                      <span className={`mr-4 text-white`}>Register</span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
