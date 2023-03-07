import Blob from "@/components/Commons/Blob";
import Intro from "@/components/Commons/Intro";
import Navbar from "@/components/Commons/Navbar";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => setIsShown(false), 2800);
  }, []);

  return (
    <>
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
                duration: 0.75,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                animateState: {
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                exitState: {
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}
