import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import HoveredCard from "./HoveredCard";
import useMousePosition from "@/hooks/useMousePosition";
import { projects } from "@/Data/Projects";
import { project } from "@/utils/typings";
import { Parallax } from "@react-spring/parallax";

type Props = {};

const AllProjects = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [currHovered, setCurrHovered] = useState<project>();
  const showDiv = (isShown: boolean, project: project): void => {
    if (isShown) {
      setCurrHovered(project);
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };
  return (
    <>
      <div className="flex mt-32">
        <div className=" flex gap-8 items-center mx-auto flex-col justify-center " >
          {projects.map((project, id) => {
            return (
              <ProjectCard key={id} setHoveredDiv={showDiv} project={project} />
            );
          })}
        </div>
      </div>
      {isHovered && <HoveredCard project={currHovered} />}
    </>
  );
};

export default AllProjects;
