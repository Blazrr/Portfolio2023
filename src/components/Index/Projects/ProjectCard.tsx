import { project } from "@/utils/typings";
import Link from "next/link";
import React from "react";
import {ParallaxLayer} from "@react-spring/parallax"
import Image from "next/image";
type Props = {
  project: project;
  setHoveredDiv: (is: boolean, project: project) => void;
};

const ProjectCard = ({ project, setHoveredDiv }: Props) => {
  return (
    <>

    {/* <Link
      href={project.project}
      className=" cursor-pointer rounded-xl p-6 text-black h-full overflow-auto	bg-red-300 "
      onMouseEnter={() => setHoveredDiv(true, project)}
    onMouseLeave={() => setHoveredDiv(false, project)}
    >
      <h1 className="text-3xl font-semibold">{project.project}</h1>
      <p className="w-4/5 mt-4">{project.about}</p>
    </Link> */}
    <div
    className="flex bg-slate-300  rounded p-4 mt-8 relative  flex-col max-w-[600px]"
    onMouseEnter={() => setHoveredDiv(true, project)}
    onMouseLeave={() => setHoveredDiv(false, project)}
    
  >
    <Image
      src={project.img}
      width={800}
      height={800}
      className="rounded"
      alt="qui va la"
    />
    <h2 className="mt-4 font-bold text-xl underline ">{project.project}</h2>
    <p className="mt-2">{project.about}</p>

    <div className="flex mt-2 space-x-2 items-center ">
      {project.techno.map((item:any, id:number) => {
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
      <a href={project.link} target="_blank" rel="noreferrer">
        <button className="btn" >Website</button>
      </a>
      <a href={project.source} target="_blank" rel="noreferrer">
        <button className="btn" >Source Code</button>
      </a>
    </div>
  </div>
  </>
  );
};

export default ProjectCard;
