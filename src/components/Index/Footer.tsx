import { changeCursor } from "@/reducers/cursorSlice";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiFrance } from "react-icons/gi";
import { useDispatch } from "react-redux";

type Props = {};

const Footer = (props: Props) => {
  const dispatch = useDispatch();
  const textEnter = () => dispatch(changeCursor("text"));
  const textLeave = () => dispatch(changeCursor("default"));

  return (
    <div className="absolute bottom-[270px] flex justify-between items-center w-4/5 -translate-x-1/2 left-1/2 tranform font-semibold flex-wrap gap-5 mt-">
        <div className="flex justify-center items-center space-x-4">
        <Image src="/logo.png" height={50} width={50} className="rounded" alt="logo" />
      <div>
        <h4>Sami .EL MHAMEDI</h4>
        <h5>Software Developer</h5>
      </div>

        </div>

      <div className="flex space-x-3 list-none text-gray-400 ">
        <li>NextJS</li>
        <li>TailwindCSS</li>
        <li>Framer Motion</li>
        <li>TypeScript</li>
      </div>
      <div className="flex items-center space-x-8 text-xl">
        <a href="https://github.com/Blazrr" target="_blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <FaGithub className="h-8 w-8" />
        </a>
        <div className="flex space-x-2">
          <span>Currently in Paris </span>
          <GiFrance className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
