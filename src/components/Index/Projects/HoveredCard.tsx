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
      className="fixed  top-1/2 left-1/2 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transform "
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      {project?.project}
      
      <div>
        <GlitchedText
          textValue="Check the project"
          className="absolute -bottom-6 transform left-1/2 -translate-x-1/2 rounded-xl bg-white text-black p-2 font-semibold "
        />
      </div>
    </div>
  );
};

export default HoveredCard;
