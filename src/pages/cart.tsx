import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { MainNavbar, RowProduct } from "../components";

import classes from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToUserCart,
  addQuantityCartProduct,
  reduceQuantityCartProduct,
  removeCartProduct,
  UserState,
} from "../redux/slices/user-slice";
import { RootState } from "../redux/store";
import { ProductsState } from "../redux/slices/product-slice";
import { useEffect } from "react";
import { Product } from "../types/product";
import { useRouter } from "next/router";
import { CartProduct } from "../types/cart-product";
import { route } from "next/dist/server/router";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { cart, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const { products, status }: ProductsState = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    console.log(cart);
  }, [isLoggedIn]);

  // const addToCart = (product: Pro) => {
  //   if (!isLoggedIn) {
  //     // router.push("/login");
  //   } else {
  //     dispatch(addProductToUserCart(product));
  //   }
  // };

  const addQuantity = (product: Product) => {
    dispatch(addQuantityCartProduct(product));
  };

  const reduceQuantity = (product: Product) => {
    dispatch(reduceQuantityCartProduct(product));
  };

  const removeProduct = (product: Product) => {
    dispatch(removeCartProduct(product));
  };

  const checkoutCart = (cart: CartProduct[]) => {
    if (cart.length > 0) {
      router.push("/checkout");
    }
  };
  return (
    <div>
      <MainNavbar className={`bg-black`} />
      <div
        className={`flex-col md:container md:flex md:flex-col mx-auto xl:px-24 pt-24 md:pt-36 h-screen`}
      >
        <div className="min-w-max w-full"></div>
        <div className="flex flex-col flex-grow">
          <div className="flex flex-row items-center p-4">
            <div className={`title--line`} />
            <p className={`text-xl font-bold px-8`}>Your Cart</p>
          </div>
          <div
            className={`flex flex-grow overflow-auto ${classes["cart-table__height"]}`}
          >
            <table className="border-separate border-spacing-0 w-full">
              <thead className={`sticky top-0 bg-white `}>
                <tr className={`sticky top-0 bg-white border-b-2 border-black`}>
                  <th className={`border-b-2 border-black`}>
                    <p className={`text-base p-4`}>Product</p>
                  </th>
                  <th className={`border-b-2 border-black`}>
                    <p className={`text-base p-4`}>Description</p>
                  </th>
                  <th className={`border-b-2 border-black`}>
                    <p className={`text-base p-4`}>Quantity</p>
                  </th>
                  <th className={`border-b-2 border-black`}>
                    <p className={`text-base p-4`}>Price</p>
                  </th>
                  <th className={`border-b-2 border-black`}>
                    <p className={`text-base p-4`}>Delete</p>
                  </th>
                </tr>
              </thead>
              <tbody className={``}>
                {cart &&
                  cart.map((item) => {
                    return (
                      <RowProduct
                        key={`row-product-` + item.id}
                        product={item}
                        reduce={() =>
                          item.quantity <= 1
                            ? removeProduct(item)
                            : reduceQuantity(item)
                        }
                        add={() => addQuantity(item)}
                        remove={() => removeProduct(item)}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className="flex md:justify-end p-4 w-full">
            <button
              onClick={() => checkoutCart(cart)}
              className="px-16 py-2 bg-gray-500 w-full md:w-3/12"
            >
              <p className={`text-white text-base p-4 text-center`}>Checkout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
