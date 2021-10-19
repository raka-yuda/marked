import classes from "./card-product.module.css";
import Link from "next/link";

type Props = {
  title: string;
  price: string;
  href: string;
  bgImage?: string;
};

const CardProduct = ({ title, price, href, bgImage }: Props) => {
  return (
    <li
      className={`relative cursor-pointer ${bgImage ? "" : "bg-gray-400"} ${
        classes["card-product"]
      }`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Link href={href}>
        <div
          className={`flex justify-between h-80 w-full p-6 items-end bg-gradient-to-b from-transparent via-transparent to-black bg-opacity-0`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <p
              className={`text-white text-xl font-bold mr-6 overflow-ellipsis ${classes["card-product__title"]}`}
            >
              {title}
            </p>
            <p className={`text-white font-bold`}>${price}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardProduct;
