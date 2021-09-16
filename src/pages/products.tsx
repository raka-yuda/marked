import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Products: NextPage = () => {
  return (
    <div>
      <div
        className={`flex-col md:container md:flex md:flex-col mx-auto md:px-24 md:h-screen `}
      >
        <nav
          style={{ minHeight: "140px" }}
          className={`flex flex-row  justify-between items-center`}
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
              <Link href={`/homepage`}>
                <a className={`text-base md:px-16 px-2`}>Explore</a>
              </Link>
            </li>
            <li>
              <Link href={`/homepage`}>
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
