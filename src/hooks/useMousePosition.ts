import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{x:number, y:number}>({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event:PointerEvent):void => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("pointermove", mouseMoveHandler);

    return () => {
      document.removeEventListener("pointermove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}