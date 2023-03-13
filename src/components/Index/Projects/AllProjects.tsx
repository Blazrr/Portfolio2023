import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import HoveredCard from "./HoveredCard";
import useMousePosition from "@/hooks/useMousePosition";
import { projects } from "@/Data/Projects";
import { project } from "@/utils/typings";
import { Parallax } from "@react-spring/parallax";

type Props = {};

const AllProjects = (props: Props) => {

  return (
    <>
      <div className="flex pt-44 mx-auto">
        <div className=" flex gap-8 items-center mx-auto flex-wrap justify-center  ">
          {projects.map((project, id) => {
            return (
              <ProjectCard key={id}  project={project} />
            );
          })}
        </div>
      </div>
     
    </>
  );
};

export default AllProjects;
