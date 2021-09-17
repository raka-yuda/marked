import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { MainNavbar } from "../components";

const Products: NextPage = () => {
  return (
    <div>
      <MainNavbar />
      <div
        className={`flex-col md:container md:flex md:flex-col mx-auto xl:px-24 pt-24 md:pt-36 md:h-screen `}
      >
        <div className="flex flex-row items-center p-4">
          <div className={`title--line`} />
          <p className={`text-xl font-bold px-8`}>Explore all products</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
          <li className={`p-4 bg-gray-400`}>
            <div className={`flex justify-center items-center h-60`}>M</div>
            <div className="flex flex-row justify-between items-center">
              <p className={`text-xl font-bold`}>
                Brand New Black and White T-shirt
              </p>
              <p className={`text-xl font-bold`}>$48</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
