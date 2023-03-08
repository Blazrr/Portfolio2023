import React from "react";
import { motion } from "framer-motion";
import {BsArrowUpLeft} from "react-icons/bs"
import Link from "next/link";
import Description from "@/components/About/Description";
import GoBack from "@/components/Commons/GoBack";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <GoBack/>
      <Description/>
    </motion.div>
  );
};

export default About;
