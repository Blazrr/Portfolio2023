import React from 'react'
import {motion} from "framer-motion"
import { useRouter } from 'next/router'
import { projects } from '@/Data/Projects'

type Props = {}

const Project = (props: Props) => {
    const currLink = useRouter().query.Project
    const currProject  = projects.filter((item) => item.project === currLink)
    const project = currProject[0]
  return (
    <motion.div
    initial={{y:"100%", opacity: 0}}
    animate={{y:0 ,opacity: 1}}
    exit={{y:"100%",opacity: 0}}
    transition={{ ease: "easeOut",duration: .5 }}

    >[Prohjjject]</motion.div>
  )
}

export default Project