import React from "react";
import { motion } from "framer-motion";
import {BsArrowUpLeft} from "react-icons/bs"
import Link from "next/link";
import Description from "@/components/About/Description";
import GoBack from "@/components/Commons/GoBack";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
    initial={{x:"-100%"}}
    animate={{x:"0"}}
    exit={{x:"100%"}}
    transition={{ease:"easeIn", duration:.6}}
    >
      <title>About Sami</title>
      <GoBack/>
      <Description/>
    </motion.div>
  );
};

export default About;
