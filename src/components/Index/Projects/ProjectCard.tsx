import { project } from "@/utils/typings";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  project: project;
  setHoveredDiv: (is: boolean, project: project) => void;
};

const ProjectCard = ({ project, setHoveredDiv }: Props) => {
  return (
    <Link
      href={project.project}
      onMouseEnter={() => setHoveredDiv(true, project)}
      onMouseLeave={() => setHoveredDiv(false, project)}
      className="h-[500px] w-[500px] bg-slate-300 cursor-pointer rounded-xl p-6 text-black"
    >
      <h1 className="text-3xl font-semibold">{project.project}</h1>
      <p className="w-4/5 mt-4">{project.about}</p>
    </Link>
  );
};

export default ProjectCard;
