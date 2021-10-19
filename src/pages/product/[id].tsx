import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { MainNavbar } from "../../components";
import { Product as ProductType } from "../../types/product";
import { addProductToUserCart, UserState } from "../../redux/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchProducts, ProductsState } from "../../redux/slices/product-slice";
import { useEffect } from "react";

import { useRouter } from "next/router";

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { cart, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  const { products, status }: ProductsState = useSelector(
    (state: RootState) => state.products
  );

  const addToCart = (product: ProductType) => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      dispatch(addProductToUserCart(product));
    }
  };

  return (
    <div>
      <MainNavbar />
      <div
        className={`flex flex-col md:container md:flex-col mx-auto xl:px-24 pt-24 md:pt-36 md:h-screen `}
      >
        <div className="flex flex-row items-center p-4">
          <div className={`title--line`} />
          <p className={`text-xl font-bold px-8`}>Product</p>
        </div>
        <div className="flex md:flex-row flex-col flex-grow">
          <div className={`flex flex-1 flex-col items-center md:py-16 py-4`}>
            <div
              className={`flex justify-center items-center h-80 w-72`}
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "180px",
              }}
            >
              {/* <div className={``}>M</div> */}
              <div
                className={`flex justify-between h-full w-full p-6 items-end bg-gradient-to-b from-transparent via-transparent to-black opacity-40`}
              ></div>
            </div>
          </div>
          <div className={`flex flex-1 flex-col md:p-10`}>
            <p className={`text-xl pt-2 font-bold px-8 text-gray-300`}>
              {product.category.toLowerCase()}
            </p>
            <p className={`md:text-4xl text-3xl pb-3 px-8 text-black`}>
              {product.title}
            </p>
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
            <p
              className={`md:text-4xl text-3xl py-3 font-bold px-8 text-black`}
            >
              ${product.price}
            </p>
            <p className={`text-base pt-3 pb-8 px-8 text-black`}>
              {product.description}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="px-8"
            >
              <div className="mt-4 px-16 py-2 bg-gray-600 w-full">
                <p className={`text-white text-base p-4 text-center`}>
                  Add to cart
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const { id } = context.query;
  const res = await fetch(
    `http://marked-api-development.herokuapp.com/api/product/${id}`
  );
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    }, // will be passed to the page component as props
  };
};

export default Product;
