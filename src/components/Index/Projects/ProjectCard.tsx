import { project } from "@/utils/typings";
import Link from "next/link";
import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { changeCursor } from "@/reducers/cursorSlice";
type Props = {
  project: project;
  setHoveredDiv: (is: boolean, project: project) => void;
};

const ProjectCard = ({ project, setHoveredDiv }: Props) => {
  const dispatch = useDispatch();
  const textEnter = () => dispatch(changeCursor("text"));
  const textLeave = () => dispatch(changeCursor("default"));

  return (
    <>
      <div className="flex bg-slate-300  rounded p-4 mt-8 relative  flex-col max-w-[600px] w-[90%]">
        <a
          onMouseEnter={() => setHoveredDiv(true, project)}
          onMouseLeave={() => setHoveredDiv(false, project)}
          href={project.link}
          target="_blank"
        >
          <Image
            src={project.img}
            width={800}
            height={800}
            className="rounded"
            alt="qui va la"
          />
        </a>
        <h2 className="mt-4 font-bold text-xl underline ">{project.project}</h2>
        <p className="mt-2">{project.about}</p>

        <div className="flex mt-2 space-x-2 items-center ">
          {project.techno.map((item: any, id: number) => {
            return (
              <a
                className="w-[50px] h-[50px] relative"
                href={item.link}
                rel="noreferrer"
                target="_blank"
                key={id}
              >
                <Image
                  src={item.img}
                  width={800}
                  height={800}
                  className="rounded-[50%] absolute top-1/2 transform  -translate-y-1/2"
                  alt="qui va la"
                />
              </a>
            );
          })}
        </div>
        <hr className="mt-4" />
        <div className="flex space-x-8 mt-4">
          <a href={project.source} target="_blank" rel="noreferrer">
            <button
              className="btn z-20"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Source Code
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
