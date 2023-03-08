import { changeCursor } from "@/reducers/cursorSlice";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

const Header = (props: Props) => {

  const dispatch = useDispatch()
  const textEnter = () => dispatch(changeCursor("text"))
  const textLeave = () => dispatch(changeCursor("default"))
  return (
    <div className="relative h-[101vh] -z-20 ">
    <div className="absolute bottom-52 left-12" onMouseEnter={textEnter}  onMouseLeave={textLeave}>
      <h1 className="text-3xl font-extrabold tracking-wide  md:text-5xl lg:text-6xl">
        Hello, I&apos;m Sami, <br /> a French Developer <br /> based in{" "}
        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
          France
        </span>
      </h1>
    </div>
    </div>
  );
};

export default Header;
