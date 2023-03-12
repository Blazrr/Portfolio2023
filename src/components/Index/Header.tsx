import React from "react";
import { BsMouse } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeCursor } from "@/reducers/cursorSlice";
import { useRouter } from "next/router";
import AnimatedTextWord from "../Commons/AnimatedTextWord";
import { useTheme } from "next-themes";

type Props = {};

const Header = (props: Props) => {

    const dispatch = useDispatch()
  const textEnter = () => dispatch(changeCursor("text"))
  const textLeave = () => dispatch(changeCursor("default"))
  const router = useRouter()
  const {theme, setTheme} = useTheme()

    const goToProject = () => {
      router.push("Projects")
    };
    console.log(theme)

  return (
    <div className=" mt-64  flex justify-between  flex-col lg:flex-row lg:items-center">
      <h1 className="text-4xl font-extrabold tracking-wide  md:text-5xl lg:text-6xl ">
        Hello, I&apos;m Sami, <br /> a French Developer <br /> based in{" "}
        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
          France
        </span>
      </h1>

      <div className="flex lg:items-center flex-col space-y-8">
        <div className="lg:hidden mt-12">
          <button className="bg-purple-500 relative group flex items-center pl-4 pr-12 text-xl font-semibold py-2 rounded hover:bg-purple-400 transition-all duration-300"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={goToProject}>
            Explore
            <div className="absolute right-4 group-hover:right-2 transition-all">
              <AiOutlineArrowRight />
            </div>
          </button>
        </div>
        <div className=" items-center justify-between space-x-8 text-2xl hidden lg:flex ">
          <span>Scroll to explore</span>
          <BsMouse />
        </div>
        <div className="h-[1px] w-full relative lg:flex hidden ">
          <div className="loader">
            <div className="loaderBar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
