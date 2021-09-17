import Link from "next/link";
import Image from "next/image";

const MainNavbar = () => {
  return (
    <div className={`absolute top-0 w-screen`}>
      <nav
        className={`fixed flex flex-row h-24 md:h-36 md:px-40 justify-between items-center w-full z-50 bg-white shadow md:shadow-none`}
      >
        <div className="h-10 w-10 mx-8">
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
    </div>
  );
};

export default MainNavbar;
