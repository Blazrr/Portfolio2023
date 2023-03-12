import { Gradient } from '@/components/Commons/Gradient';
import { useTheme } from 'next-themes';
import React from 'react'

type Props = {}

const CustomBackground = (props: Props) => {

    const gradient: any = new Gradient();
    gradient.initGradient("#gradient-canvas");
    const {theme, setTheme} = useTheme()
    console.log(theme)
  return (
    <canvas id="gradient-canvas" className={` ${theme === "light" ? "gradient-color"   : "dark:gradient-color-dark"} `} data-transition-in data-js-darken-top /> 

  )
}

export const MemoizedBackground = React.memo(CustomBackground)