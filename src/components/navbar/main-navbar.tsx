import Link from "next/link";
import { RootState } from "../../redux/store";
import { UserState } from "../../redux/slices/user-slice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

interface Props {
  className?: string;
}

const MainNavbar = ({ className }: Props) => {
  const { user, isLoggedIn }: UserState = useSelector(
    (state: RootState) => state.user
  );

  return (
    <div className={`absolute top-0 w-full`}>
      <nav
        className={`fixed flex flex-row justify-center h-24 xl:h-36 xl:px-24 w-full z-50 bg-white shadow md:shadow-none ${
          className ?? ""
        }`}
      >
        <div className="container flex flex-row items-center justify-between px-4  xl:w-full">
          <div className="h-8 w-8 md:h-10 md:w-10 mx-8 xl:mx-20">
            <img src="/logo.svg" className="w-full" />
          </div>
          <ul className={"flex flex-row"}>
            <li>
              <Link 
                href={`/homepage`}
                className={`text-base font-bold md:px-10 xl:px-16 px-2`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href={`/products`}
                className={`text-base font-extralight md:px-10 xl:px-16 px-2`}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link 
                href={`/cart`}
                className={`text-base md:px-10 xl:px-16 px-2`}  
              >
                Cart
              </Link>
            </li>
            <li>
              <p className={`text-base md:px-10 xl:px-16 px-2`}>
                {isLoggedIn ? user?.name : "Account"}
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
