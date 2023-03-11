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
    <div>Where are you going</div>
  )
}

export default Project