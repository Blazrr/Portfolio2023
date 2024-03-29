import Head from "next/head";
import Header from "@/components/Index/Header";
import Projects from "@/components/Index/Projects/AllProjects";
import Intro from "@/components/Commons/Intro";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Cursor from "@/components/Commons/Cursor";
import Footer from "@/components/Index/Footer";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const goToProject = (e: any) => {
      if (e?.target?.body?.clientWidth > 500) {
        router.push("Projects");
      }
      console.log(e?.target?.body?.clientWidth);
    };
    document.addEventListener("scroll", goToProject, true);

    return () => document.removeEventListener("scroll", goToProject, true);
  }, [router]);
  return (
    <>
    <motion.div className="fixed h-full w-4/5 -translate-x-1/2 left-1/2  md:-bottom-16 bottom-4 lg:-bottom-32 xl:-bottom-48  transform"
         initial={{x:"75%"}}
         animate={{x:"-50%"}}
         exit={{x:"-100%"}}
         transition={{ease:"easeIn", duration:.6}}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sami's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Scroll to Discover</title>
        <link rel="icon" href="/logo.png" />
      </Head>

     
        <Header />
        <Footer />
    
      </motion.div>

      <p className="absolute top-[3000px] hidden md:block text-4xl left-0 text-transparent">
        You found it
      </p>
    </>
  );
}
