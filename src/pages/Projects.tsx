import GoBack from "@/components/Commons/GoBack";
import AllProjects from "@/components/Index/Projects/AllProjects";
import Link from "next/link";
import React from "react";
import { BsArrowUpLeft } from "react-icons/bs";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div>
      <title>Sami&apos; Projects</title>
      <GoBack />
      <AllProjects />
    </div>
  );
};

export default Projects;
