import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { MainNavbar } from "../components";

import { useState } from "react";

const Transaction: NextPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <MainNavbar />
      <div
        className={`flex-col md:container md:flex md:flex-col mx-auto xl:px-24 py-24 md:py-36 md:h-screen `}
      >
        <div className="flex flex-row items-center p-4">
          <div className={`title--line`} />
          <p className={`text-xl font-bold px-8`}>Marked</p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-grow w-full p-4">
          <div className="flex flex-col flex-grow h-full justify-center">
            <div className="py-12 w-full md:w-8/12">
              <p
                className={`text-4xl md:text-5xl leading-normal font-bold pt-4 pb-8 `}
              >
                Every package that we send is included love. Thank you!
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-grow  h-full md:w-1/2">
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
        </div>
      </div>
    </div>
  );
};

export default Transaction;
