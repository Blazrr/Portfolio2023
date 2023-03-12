import Cursor from "@/components/Commons/Cursor";
import Intro from "@/components/Commons/Intro";
import Navbar from "@/components/Commons/Navbar";
import { store } from "@/reducers/store";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from 'next-themes'
import  { MemoizedBackground } from "@/components/Commons/CustomBackground";
// Create your instance

export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => setIsShown(false), 2800);
  }, []);
  return (
    <>
    <ThemeProvider enableSystem={true} attribute="class">

      <Provider store={store}>
        <AnimatePresence>{isShown && <Intro />}</AnimatePresence>
        {!isShown && (
          <>
          <ToastContainer />
          <MemoizedBackground/>
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.div key={router.route}>
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </>
        )}
        <Cursor />
      </Provider>
      </ThemeProvider>
    </>
  );
}
