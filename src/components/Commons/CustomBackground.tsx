import { Gradient } from '@/Gradient';
import React from 'react'

type Props = {}

const CustomBackground = (props: Props) => {

    const gradient: any = new Gradient();
    gradient.initGradient("#gradient-canvas");
  return (
    <canvas id="gradient-canvas" data-transition-in data-js-darken-top /> 

  )
}

export const MemoizedBackground = React.memo(CustomBackground)