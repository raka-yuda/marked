import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCartProduct, UserState } from "../redux/slices/user-slice";
import { RootState } from "../redux/store";
import { ProductsState } from "../redux/slices/product-slice";
import { useRouter } from "next/router";
import { CartProduct } from "../types/cart-product";
import { useEffect, useState } from "react";

const Checkout: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  const { cart, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const { products, status }: ProductsState = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (cart.length > 0) {
      cart.forEach((product) => {
        setTotalPrice((prevState) => {
          const rawPrice = product.quantity * parseFloat(product.price);
          const num = Number(rawPrice); // The Number() only visualizes the type and is not needed
          const roundedString = num.toFixed(2);
          const roundedPrice = Number(roundedString);
          return prevState + roundedPrice;
        });
      });
    }
  }, [cart]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/products");
    }
  }, [isLoggedIn]);

  const payCartProduct = (cart: CartProduct[]) => {
    console.log("pay");
    if (cart.length > 0) {
      dispatch(removeAllCartProduct());
      // console.log(cart);
      router.push("/transaction");
    }
  };

  const backToPreviousPage = () => {
    router.back();
  };
  return (
    <div>
      <div className={`flex flex-col-reverse md:flex-row md:h-screen`}>
        <div className="flex md:w-1/2 w-full p-12 flex-col bg-gray-600">
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
            <button onClick={backToPreviousPage}>
              <a className={`text-base `}>Cancel</a>
            </button>
          </div>
          <div className="flex flex-col flex-grow justify-center">
            <div className="flex flex-row items-center">
              <div className={`title--line`} />
              <p className={`text-xl font-bold px-8`}>Marked</p>
            </div>
            <div className="flex flex-row items-center pb-12">
              <p className={`md:text-5xl text-4xl font-bold pt-4 pb-8`}>
                Checkout
              </p>
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Full Name
            </label>
            <div className="flex w-full pb-4">
              <input
                type="text"
                placeholder="Enter username"
                className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
              />
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Address
            </label>
            <div className="flex w-full pb-4">
              <input
                type="text"
                placeholder="Enter password"
                className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
              />
            </div>
            <label htmlFor="username" className="text-sm text-gray-400">
              Email
            </label>
            <div className="flex w-full pb-4">
              <input
                type="text"
                placeholder="Enter password"
                className="mt-2 p-4 border-2 border-black w-full focus:outline-none focus:ring focus:border-blue-300 rounded-none"
              />
            </div>
            <div className="flex flex-row justify-between py-3">
              <p className={`text-xl font-bold `}>Total Price</p>
              <p className={`text-xl font-bold `}>${totalPrice}</p>
            </div>

            <div className="flex w-full pt-3 pb-8">
              <button
                onClick={() => payCartProduct(cart)}
                className="mt-4 bg-gray-500 w-full"
              >
                <p className={`text-white text-base p-4 text-center`}>
                  Checkout
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
