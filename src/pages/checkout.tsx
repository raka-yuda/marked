import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Checkout: NextPage = () => {
  return (
    <div>
      <div className={`flex flex-row md:h-screen`}>
        <div className="flex w-1/2 flex-col bg-gray-600">
          <div className="flex flex-grow justify-center items-center">
            <div
              className={`flex justify-center items-center h-80 w-72 p-4 bg-gray-500`}
            >
              <div className={``}>M</div>
            </div>
          </div>
        </div>
        <div className="flex overflow-y-auto w-full md:w-1/2 flex-col md:px-40 px-4 py-12">
          <div className="flex justify-end items-center py-4">
            <Link href={`/homepage`}>
              <a className={`text-base `}>Cancel</a>
            </Link>
          </div>
          <div className="flex flex-col flex-grow justify-center">
            <div className="flex flex-row items-center">
              <div className={`title--line`} />
              <p className={`text-xl font-bold px-8`}>Marked</p>
            </div>
            <div className="flex flex-row items-center pb-12">
              <p className={`text-5xl font-bold pt-4 pb-8`}>Checkout</p>
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Full Name
            </label>
            <div className="flex w-full pb-4">
              <input
                type="text"
                placeholder="Enter username"
                className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 ..."
              />
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Address
            </label>
            <div className="flex w-full pb-4">
              <input
                type="text"
                placeholder="Enter password"
                className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 ..."
              />
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Email
            </label>
            <div className="flex w-full pb-4">
              <input
                type="text"
                placeholder="Enter password"
                className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 ..."
              />
            </div>
            <div className="flex flex-row justify-between py-3">
              <p className={`text-xl font-bold `}>Marked</p>
              <p className={`text-xl font-bold `}>$40</p>
            </div>

            <div className="flex w-full pt-3 pb-8">
              <div className="mt-4 py-1 bg-gray-500 w-full">
                <p className={`text-white text-base p-4 text-center`}>
                  Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
