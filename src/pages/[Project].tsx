import React from 'react'
import {motion} from "framer-motion"
import { useRouter } from 'next/router'
import { projects } from '@/Data/Projects'
import Head from "next/head";

type Props = {}

const Project = (props: Props) => {
    const currLink = useRouter().query.Project
    const currProject  = projects.filter((item) => item.project === currLink)
    const project = currProject[0]
  return (
    <div>
           <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sami's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 Page</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <p className='text-4xl absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transform font-bold underline'>This Page does not exit </p>
      </div>
  )
}

export default Project