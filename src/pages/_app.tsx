import Blob from "@/components/Commons/Blob";
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


export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => setIsShown(false), 2800);
  }, []);

  return (
    <>
    <Provider store={store} >
      <AnimatePresence>{isShown && <Intro />}</AnimatePresence>
      {!isShown && (
        <>
          <Navbar />
          <Blob />
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 1,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                 
                },
                animateState: {
                  opacity: 1,

                },
                exitState: {
                },
              }}
              >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </>
      )}
<Cursor/>
          </Provider>

    </>
  );
}
