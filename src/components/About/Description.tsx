import React from 'react'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
type Props = {}

const Description = (props: Props) => {
  return (
    <AnimatePresence>
    <motion.div
      className="w-4/5 mx-auto pt-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="flex items-center justify-center">
        <h3
          className="text-2xl"
      
        >
          Currently open to new opportunities
        </h3>
      </h1>

      <div className="mt-8 mx-auto flex justify-center flex-col max-w-xl">
        <h3 className="  decoration-2">About me</h3>
        <hr  />
        <p className="mt-4">
          Hi, I&apos;m Sami ! I&apos;m a front-end developer based in Paris
          . After working as an operations technician, i&apos;ve decided to
          change my career path and specialize in web development. My
          passion for creative and innovative web applications helps me
          thrive along the way. I&apos;m currently specialized in ReactJS
          and plan on expanding my knowledge with different frameworks.
        </p>
      </div>

      <div className="mt-8 mx-auto flex justify-center flex-col max-w-xl">
        <h3 className="decoration-2">Tools & Technologies</h3>
        <hr  />

        <div className="flex mt-6">
          <h4 className="font-bold ">Languages</h4>
          <hr  />

          <p className="ml-4 ">Python, Javascript, Typescript, C</p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">Frameworks and Libraries</h4>
          <hr  />

          <p className="ml-4">React, NextJS, NodeJS, Supabase</p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">Styling and Components</h4>
          <hr  />

          <p className="ml-4 ">TailwindCSS, ChakraUI, Bootstrap (S)CSS</p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">Others</h4>
          <hr  />

          <p className="ml-4 ">Git, Figma, Unix</p>
        </div>
      </div>

      <div className="mt-8 mx-auto flex justify-center flex-col max-w-xl">
        <h3 className=" decoration-2">Education</h3>
        <hr  />
        <div className="flex mt-6">
          <h4 className="font-bold ">2023-2024</h4>
          <p className="ml-4">Software Development at O&apos;Clock</p>
        </div>
        <div className="flex mt-6">
          <h4 className="font-bold ">2023</h4>
          <p className="ml-4">ReactJS Bootcamp at GRETA92 in Boulogne</p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">2021</h4>
          <p className="ml-4">
            Bachelor of Computer Science at Paris XIII in Villetaneuse
          </p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">2020</h4>
          <p className="ml-4">
            High school degree (Speciality sciences of engeneering) at
            Charles de Gaulle in Rosny
          </p>
        </div>
      </div>

      <div className="mt-8 mx-auto flex justify-center flex-col max-w-xl">
        <h3 className="decoration-2">Socials</h3>
        <hr  />
        <a
          href="https://www.linkedin.com/in/samielm/"
          className="mt-6 flex items-center space-x-2"
        >
          <FaLinkedin /> <p>My linkedin</p> <FaExternalLinkAlt />
        </a>

        <a
          href="https://github.com/Blazrr"
          className="mt-4 flex items-center space-x-2"
        >
          <FaGithub /> <p>https://github.com/Blazrr</p>{" "}
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className="mt-8 mx-auto flex justify-center flex-col max-w-xl">
        <h3 className="  decoration-2">Hobbies</h3>
        <hr  />

        <div className="flex mt-6">
          <h4 className="font-bold">Video Games</h4>
          <p className="ml-4 ">
            Fun way to discover, learn and connect with people
          </p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">Programming</h4>
          <p className="ml-4 ">Help problem solving in real life</p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">Keyboards</h4>
          <p className="ml-4 ">
            Because making something with your own hands and using it daily
            feels amazing.
          </p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">Manga and Animes</h4>
          <p className="ml-4 ">
            Fun way to increase your general Knowledge
          </p>
        </div>
        <div className="flex mt-4">
          <h4 className="font-bold">Music</h4>
          <p className="ml-4 ">
            allows us to feel nearly or possibly all emotions that we
            experience in our lives
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
  )
}

export default Description