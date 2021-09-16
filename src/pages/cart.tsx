import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
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
          <p className={`text-xl font-bold px-8`}>Your Cart</p>
        </div>

        <table className="table-auto relative border-collapse">
          <thead
            className={`sticky top-0 bg-white border-b-2 border-gray-500 shadow`}
          >
            <tr className={``}>
              <th className={`border-b-2 border-gray-500`}>Title</th>
              <th className={`border-b-2 border-gray-500`}>Author</th>
              <th className={`border-b-2 border-gray-500`}>Views</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`h-60`}>
              <td>Intro to CSS</td>
              <td>Adam</td>
              <td>858</td>
            </tr>
            <tr className={`h-60`}>
              <td>Intro to CSS</td>
              <td>Adam</td>
              <td>858</td>
            </tr>
            <tr className={`h-60`}>
              <td>Intro to CSS</td>
              <td>Adam</td>
              <td>858</td>
            </tr>
            <tr className={`h-60`}>
              <td>Intro to CSS</td>
              <td>Adam</td>
              <td>858</td>
            </tr>
            <tr className="bg-emerald-200">
              <td>
                A Long and Winding Tour of the History of UI Frameworks and
                Tools and the Impact on Design
              </td>
              <td>Adam</td>
              <td>112</td>
            </tr>
            <tr>
              <td>Intro to JavaScript</td>
              <td>Chris</td>
              <td>1,280</td>
            </tr>
          </tbody>
        </table>

        {/* <div className={`overflow-x-auto md:overflow-x-hidden`}>
          <div className="sticky top-0 flex flex-row justify-between items-center border-b-2 border-gray-500 bg-white">
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Product</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Description</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Quantity</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Price</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Delete</p>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center border-b-2 border-gray-500">
            <div className="flex-1">
              <div className={`p-4 bg-gray-400 m-4`}>
                <div
                  className={`flex flex-grow justify-center items-center h-36`}
                >
                  <p className={`text-base p-4`}>M</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Brand new t-shirt</p>
            </div>
            <div className="flex flex-1 px-16 justify-between items-center">
              <div className={`border-2 border-gray-500 p-2`}> - </div>
              <p className={`text-base p-4`}>1</p>
              <div className={`border-2 border-gray-500 p-2`}> + </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>$40</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>x</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-b-2 border-gray-500">
            <div className="flex-1">
              <div className={`p-4 bg-gray-400 m-4`}>
                <div
                  className={`flex flex-grow justify-center items-center h-36`}
                >
                  <p className={`text-base p-4`}>M</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Brand new t-shirt</p>
            </div>
            <div className="flex flex-1 px-16 justify-between items-center">
              <div className={`border-2 border-gray-500 p-2`}> - </div>
              <p className={`text-base p-4`}>1</p>
              <div className={`border-2 border-gray-500 p-2`}> + </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>$40</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>x</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-b-2 border-gray-500">
            <div className="flex-1">
              <div className={`p-4 bg-gray-400 m-4`}>
                <div
                  className={`flex flex-grow justify-center items-center h-36`}
                >
                  <p className={`text-base p-4`}>M</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Brand new t-shirt</p>
            </div>
            <div className="flex flex-1 px-16 justify-between items-center">
              <div className={`border-2 border-gray-500 p-2`}> - </div>
              <p className={`text-base p-4`}>1</p>
              <div className={`border-2 border-gray-500 p-2`}> + </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>$40</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>x</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-b-2 border-gray-500">
            <div className="flex-1">
              <div className={`p-4 bg-gray-400 m-4`}>
                <div
                  className={`flex flex-grow justify-center items-center h-36`}
                >
                  <p className={`text-base p-4`}>M</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>Brand new t-shirt</p>
            </div>
            <div className="flex flex-1 px-16 justify-between items-center">
              <div className={`border-2 border-gray-500 p-2`}> - </div>
              <p className={`text-base p-4`}>1</p>
              <div className={`border-2 border-gray-500 p-2`}> + </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>$40</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className={`text-base p-4`}>x</p>
            </div>
          </div>
        </div> */}

        <div className="flex md:justify-end p-4">
          <div className="mt-4 px-16 py-2 bg-gray-500 w-full md:w-3/12">
            <p className={`text-white text-base p-4 text-center`}>Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
