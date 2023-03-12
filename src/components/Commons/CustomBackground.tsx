import { Gradient } from '@/components/Commons/Gradient';
import { useTheme } from 'next-themes';
import React from 'react'

type Props = {}

const CustomBackground = (props: Props) => {
  const { resolvedTheme } = useTheme()
    const gradient: any = new Gradient();
    gradient.initGradient("#gradient-canvas");
    const darkStyle = {   "--gradient-color-1": "#043D5D ","--gradient-color-2": "#032E46 ","--gradient-color-3": "#23B684 ","--gradient-color-4": "#0F595E ",} as React.CSSProperties;

    const lightStyle = {   "--gradient-color-1": "#c3e4ff ","--gradient-color-2": "#6ec3f4 ","--gradient-color-3": "#eae2ff ","--gradient-color-4": "#b9beff ",} as React.CSSProperties;


    console.log(resolvedTheme)
  return (
    // @ts-ignore
    <canvas id="gradient-canvas" style={resolvedTheme === "dark" ? darkStyle : lightStyle} data-transition-in data-js-darken-top /> 

  )
}

export const MemoizedBackground = React.memo(CustomBackground)