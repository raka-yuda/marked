import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Product: NextPage = () => {
  return (
    <div>
      <div
        className={`flex flex-col md:container md:flex-col mx-auto md:px-24 md:h-screen `}
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
        <div className="flex flex-row items-center py-4">
          <div className={`title--line`} />
          <p className={`text-xl font-bold px-8`}>Product</p>
        </div>
        <div className="flex md:flex-row flex-col flex-grow">
          <div className={`flex flex-1 flex-col items-center md:py-16 py-4`}>
            <div
              className={`flex justify-center items-center h-80 w-72 p-4 bg-gray-500`}
            >
              <div className={``}>M</div>
            </div>
          </div>
          <div className={`flex flex-1 flex-col md:p-10`}>
            <p className={`text-xl pt-2 font-bold px-8 text-gray-300`}>
              Fashion
            </p>
            <p className={`text-4xl pb-3 px-8 text-black`}>Brand new T-shirt</p>
            <div className={`flex flex-row px-8`}>
              <div className={`mr-2 h-4 w-4 md:h-8 md:w-8`}>
                <Image src="/star-rating.svg" height={48} width={48} />
              </div>
              <div className={`mr-2 h-4 w-4 md:h-8 md:w-8`}>
                <Image src="/star-rating.svg" height={48} width={48} />
              </div>
              <div className={`mr-2 h-4 w-4 md:h-8 md:w-8`}>
                <Image src="/star-rating.svg" height={48} width={48} />
              </div>
              <div className={`mr-2 h-4 w-4 md:h-8 md:w-8`}>
                <Image src="/star-rating.svg" height={48} width={48} />
              </div>
              <div className={`mr-2 h-4 w-4 md:h-8 md:w-8`}>
                <Image src="/star-rating.svg" height={48} width={48} />
              </div>
            </div>
            <p className={`text-4xl py-3 font-bold px-8 text-black`}>$40</p>
            <p className={`text-base pt-3 pb-8 px-8 text-black`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div className="px-8">
              <div className="mt-4 px-16 py-2 bg-gray-600 w-full">
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

export default Product;
