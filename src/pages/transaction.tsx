import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

const Transaction: NextPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={`relative`}>
      <div
        className={`flex-1 px-4 md:container md:flex md:flex-col mx-auto md:px-24  md:h-screen `}
      >
        <nav
          style={{ height: "140px" }}
          className={`flex flex-row md:px-8 justify-between items-center`}
        >
          <div className="h-10 w-10">
            <Image src="/logo.svg" height={48} width={48} layout="responsive" />
          </div>

          <ul className={"flex flex-row"}>
            <li>
              <Link href={`/homepage`}>
                <a className={`text-base md:px-16 px-2`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href={`/products`}>
                <a className={`text-base md:px-16 px-2`}>Explore</a>
              </Link>
            </li>
            <li>
              <Link href={`/cart`}>
                <a className={`text-base md:px-16 px-2`}>Cart</a>
              </Link>
            </li>
            <li>
              <Link href={`/homepage`}>
                <a className={`text-base md:px-16 px-2`}>Account</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-row items-center">
          <div className={"title--line"} />
          <p className={`text-xl font-bold px-8`}>Marked</p>
        </div>
        <div className="flex flex-col md:flex-row md:flex-grow w-full">
          <div className="flex flex-col flex-grow h-full justify-center">
            <div className="py-12 w-full md:w-8/12">
              <p className={`text-4xl md:text-5xl pt-4 pb-8`}>
                Every package that we send is included love. Thank you!
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-grow  h-full md:w-1/2">
            <div className="flex flex-grow justify-center items-center bg-white">
              <div className="relative border-4 border-black p-10 bg-white">
                <div className={`h-32 w-32 md:h-56 md:w-56`}>
                  <Image src="/online-shop.svg" height={220} width={220} />
                </div>
                <div className={`absolute top-4 right-4`}>
                  <div className="border-4 border-black p-10">
                    <div className={`h-32 w-32 md:h-56 md:w-56`}></div>
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
