import React, { useRef,useEffect } from "react";
import { text } from "stream/consumers";

type Props = {
    textValue?: string;
    className?: string;

};

const GlitchedText = ({textValue, className}: Props) => {
  const textRef = useRef< HTMLParagraphElement >(null)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const toRandom = () => {
    let iteration = 0;
    
    const interval = setInterval(() => {
      if (textRef.current?.innerText ){
 
      textRef.current.innerText = textRef.current?.innerText
        .split("")
        .map((letter:string, index:number) => {
          if(index < iteration) {
            if (textRef?.current?.dataset.value != undefined){
            return textRef.current.dataset.value[index];
            }
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if (textRef?.current?.dataset.value != undefined){

      if(iteration >= textRef.current.dataset.value.length){ 
        clearInterval(interval);
      }
    }
      
      iteration += 1 / 3;
    }
    }, 30);
  }
  

  useEffect(() => {
    toRandom()
    const interval = setInterval(() => {
      toRandom()
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (

      <p
        className={`${className} glitched cursor-default`}
        data-value={textValue}
        ref={textRef}
      >
        {textValue}
      </p>

  );
};

export default GlitchedText;
