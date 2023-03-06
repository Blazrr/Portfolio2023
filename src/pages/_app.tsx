import Blob from '@/components/Commons/Blob'
import Intro from '@/components/Commons/Intro'
import Navbar from '@/components/Commons/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <Blob/>
  <Component {...pageProps} />
  </>
  )
}
