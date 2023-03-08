import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers/store";
import { changeCursor } from "@/reducers/cursorSlice";
import {BiCross} from "react-icons/bi"

function Cursor() {
  const cursor = useSelector((state: RootState) => state.cursor.value);
  const { x, y } = useMousePosition();
  const variants = {
    default: {
      x: x - 16,
      y: y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: x - 50,
      y: y - 50,
      backgroundColor: "purple",
      mixBlendMode: "difference",
    },
  };

  // const dispatch = useDispatch()
  // const textEnter = () => dispatch(changeCursor("text"))
  // const textLeave = () => dispatch(changeCursor("default"))
  // onMouseEnter={textEnter}
  // onMouseLeave={textLeave}

  return (
    <>
    <motion.div
      className="cursor "
       // @ts-ignore
      variants={variants}
      animate={cursor}
      />
      <div  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transform !pointer-events-none  " style={{top:`${y}px`, left:`${x}px`}}>
        <BiCross/>
      </div>
     
      </>
  );
}

export default Cursor;
