import GlitchedText from "@/components/Commons/GlitchedText";
import useMousePosition from "@/hooks/useMousePosition";
import { project } from "@/utils/typings";
import Image from "next/image";
import React from "react";

type Props = {

};

const HoveredCard = ({  }: Props) => {
  const { x, y } = useMousePosition();

  return (
    <div
      className=" top-1/2 left-1/2 fixed pointer-events-none z-40  -translate-x-1/2 -translate-y-1/2 transform "
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <GlitchedText
        textValue="Check the project"
        className="mt-4 rounded-xl bg-white text-black p-2 font-semibold whitespace-nowrap	"
      />
    </div>
  );
};

export default HoveredCard;
