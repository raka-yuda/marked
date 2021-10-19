import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { MainNavbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types/product";
import { addProductToUserCart, UserState } from "../redux/slices/user-slice";
import { RootState } from "../redux/store";
import CardProduct from "../components/card/card-product";
import { fetchProducts, ProductsState } from "../redux/slices/product-slice";
import { useEffect } from "react";

const Products: NextPage = () => {
  const { cart, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const { products, status }: ProductsState = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, [dispatch, fetchProducts]);

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
          {status === "loading" && (
            <div className="col-span-4 w-100 justify-center py-52">
              <p className="font-bold text-center">
                Wait for Fetching Data Products . . .{" "}
              </p>
            </div>
          )}

          {status === "succeeded" &&
            products &&
            products.map((product) => {
              return (
                <CardProduct
                  key={`card-product-${product.id}`}
                  title={`${product.title}`}
                  price={`${product.price}`}
                  bgImage={`${product.image}`}
                  href={`/product/${product.id}`}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
