import Blob from '@/components/Commons/Blob'
import Intro from '@/components/Commons/Intro'
import Navbar from '@/components/Commons/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react"
export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setIsShown(false), 2800);
  },[])
  return (
    <>
          <AnimatePresence>{isShown && <Intro />}</AnimatePresence>
    {!isShown && <>
      <Navbar/>
    <Blob/>
  <Component {...pageProps} />
  </>
    }
  
  </>
  )
}
