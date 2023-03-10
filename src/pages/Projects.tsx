import GoBack from "@/components/Commons/GoBack";
import AllProjects from "@/components/Index/Projects/AllProjects";
import Link from "next/link";
import React from "react";
import { BsArrowUpLeft } from "react-icons/bs";
import {motion} from "framer-motion"
import HoveredCard from "@/components/Index/Projects/HoveredCard";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers/store";

type Props = {};

const Projects = (props: Props) => {
  const isHovered  = useSelector((state: RootState) => state.hoveredDiv.value);

  return (
    <>
            { isHovered && <HoveredCard   />}

    <motion.div
    initial={{opacity:0, x:"-100%"}}
    animate={{opacity:1, x:0}}
    exit={{x:"100%"}}
    transition={{ ease: "easeOut",duration: .5 }}>
      <title>Sami&apos; Projects</title>
      <GoBack />
      <AllProjects />
    </motion.div>
    </>
  );
};

export default Projects;
