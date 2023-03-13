import { Gradient } from '@/components/Commons/Gradient';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

type Props = {}

const CustomBackground = (props: Props) => {
  const {locale} = useRouter()
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    const gradient: any = new Gradient();
    gradient.initGradient("#gradient-canvas");

  },[])

  return (
    <canvas id="gradient-canvas" className='gradient-dark dark:gradient-light' data-transition-in data-js-darken-top /> 
  )
}

export const MemoizedBackground = React.memo(CustomBackground)