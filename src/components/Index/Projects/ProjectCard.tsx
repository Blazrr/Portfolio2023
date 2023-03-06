import { project } from '@/utils/typings'
import Link from 'next/link'
import React from 'react'

type Props = {
  project: project
  setHoveredDiv: (is:boolean, project:project) => void
}

const ProjectCard = ({project, setHoveredDiv}: Props) => {
  console.log(project)
  return (
    <div  onMouseEnter={() => setHoveredDiv(true,project)} onMouseLeave={() => setHoveredDiv(false,project)} className='h-[500px] w-[500px] bg-slate-300' >{project?.project}</div>
  )
}

export default ProjectCard