import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers/store";
import { changeCursor } from "@/reducers/cursorSlice";

function Cursor() {
  const cursor = useSelector((state: RootState) => state.cursor.value);
  const { x, y } = useMousePosition();
  const variants = {
    default: {
      x: x - 16,
      y: y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: x - 75,
      y: y - 75,
      backgroundColor: "blue",
      mixBlendMode: "difference",
    },
  };

  // const dispatch = useDispatch()
  // const textEnter = () => dispatch(changeCursor("text"))
  // const textLeave = () => dispatch(changeCursor("default"))
  // onMouseEnter={textEnter}
  // onMouseLeave={textLeave}

  return (
    <motion.div
      className="cursor"
      // @ts-ignore
      variants={variants}
      animate={cursor}
    />
  );
}

export default Cursor;
