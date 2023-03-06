import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import HoveredCard from "./HoveredCard";
import useMousePosition from "@/hooks/useMousePosition";
import { projects } from "@/Data/Projects";
import { project } from "@/utils/typings";

type Props = {};

const Projects = (props: Props) => {
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
      <div className="flex justify-between mt-32">
        <div className="flex-wrap flex space-x-8">

        {
            projects.map((project, id) => {
                return (
                    <ProjectCard key={id} setHoveredDiv={showDiv} project={project} />
                )
            })
        }
        </div>
      </div>
      {isHovered && <HoveredCard project={currHovered} />}
    </>
  );
};

export default Projects;
