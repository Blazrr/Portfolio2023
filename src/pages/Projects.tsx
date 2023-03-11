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
    <motion.div
    initial={{x:"-100%"}}
    animate={{x:"0"}}
    exit={{x:"100%"}}
    transition={{ease:"easeIn", duration:.6}}
    >
            { isHovered && <HoveredCard   />}

    <div>
      <title>Sami&apos; Projects</title>
      <GoBack />
      <AllProjects />
    </div>
    </motion.div>
  );
};

export default Projects;
