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
  const router = useRouter()
  useEffect(() => {
    const goToProject = (e:any) => {
      if (e?.target?.body?.clientWidth > 500){
        router.push("Projects")
      }
      console.log(e?.target?.body?.clientWidth)
    };
    document.addEventListener("scroll", goToProject, true);

    return () => document.removeEventListener("scroll", goToProject, true);
  }, [router]);
  return (
    <motion.div className=" relative w-4/5 mx-auto"
    initial={{x:"-100%", opacity: 0}}
    animate={{x:0 ,opacity: 1}}
    exit={{x:"100%",opacity: 0}}
    transition={{ ease: "easeOut",duration: .8 }} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sami's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Scroll to Discover</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="absolute h-full w-full md:-bottom-16 -bottom-2 lg:-bottom-32 xl:-bottom-48  left-0">
      <Header />
      <Footer/>
      <div className="mt-64 hidden lg:block">You found it !</div>
      </div>

    </motion.div>
  );
}
