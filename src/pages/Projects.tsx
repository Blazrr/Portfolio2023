import GoBack from "@/components/Commons/GoBack";
import AllProjects from "@/components/Index/Projects/AllProjects";
import Link from "next/link";
import React from "react";
import { BsArrowUpLeft } from "react-icons/bs";
import {motion} from "framer-motion"
import HoveredCard from "@/components/Index/Projects/HoveredCard";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers/store";
import Head from "next/head";

type Props = {};

const Projects = (props: Props) => {
  const isHovered  = useSelector((state: RootState) => state.hoveredDiv.value);

  return (
    <>
    { isHovered && <HoveredCard   />}
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sami's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sami&apos; Projects</title>
        <link rel="icon" href="/logo.png" />
      </Head>

   
    <motion.div
    initial={{x:"100%"}}
    animate={{x:"0"}}
    exit={{x:"-100%"}}
    transition={{ease:"easeIn", duration:.6}}
    >

    <div>
      <title>Sami&apos; Projects</title>
      <GoBack />
      <AllProjects />
    </div>
    </motion.div>
    </>
  );
};

export default Projects;
