import Link from "next/link";
import Image from "next/image";
import { RootState } from "../../redux/store";
import { UserState } from "../../redux/slices/user-slice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import classes from "./main-alert.module.css";

interface Props {
  className?: string;
  isShow: boolean;
  message: string;
}

const MainAlert = ({ className, isShow = false, message }: Props) => {
  //   const [show, setShow] = useState(false);

  return (
    <div
      className={`${
        isShow ? classes.slider : `${classes.slider} ${classes.closed}`
      } fixed bottom-0 left-0 w-full z-50`}
    >
      <div
        className={`flex flex-row h-20 md:h-24 px-4 md:px-40 justify-between items-center w-full z-50  bg-gradient-to-b from-transparent to-gray-500 ${
          className ?? ""
        }`}
      >
        <div className={"flex-1 flex-row"}>
          <p className={`text-right text-white text-base md:text-xl`}>
            {message}
          </p>
        </div>
        {/* <button
          onClick={() => {
            setShow(false);
          }}
        > */}
        {/* <div className="h-6 w-6 md:h-6 md:w-6 mx-6">
          <div className={`flex flex-grow justify-center items-center`}>
            <Image src="/close.svg" height={18} width={18} layout="intrinsic" />
          </div>
        </div> */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default MainAlert;
