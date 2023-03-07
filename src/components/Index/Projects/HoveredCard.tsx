import GlitchedText from "@/components/Commons/GlitchedText";
import useMousePosition from "@/hooks/useMousePosition";
import { project } from "@/utils/typings";
import Image from "next/image";
import React from "react";

type Props = {
  project?: project;
};

const HoveredCard = ({ project }: Props) => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed top-1/2 left-1/2 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transform "
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className="relative -top-24">

          <Image src={project?.img || "null"} height={300} width={300} alt="project image" className="rounded-xl  "  />
      </div>

      
      <div >
        <GlitchedText
          textValue="Check the project"
          className="absolute bottom-4 transform left-1/2 -translate-x-1/2 rounded-xl bg-white text-black p-2 font-semibold whitespace-nowrap	"
        />
      </div>
    </div>
  );
};

export default HoveredCard;
