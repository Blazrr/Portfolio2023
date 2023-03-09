import React from 'react'
import {AnimatePresence, motion} from "framer-motion"
import GlitchedText from './GlitchedText'
type Props = {}

const Intro = (props: Props) => {
  return (
    <motion.div className='text-white h-full w-full absolute top-0 left-0 bg-black flex items-center justify-center'
    initial={{opacity:0, y:"-100%"}}
    animate={{opacity:1, y:0}}
    exit={{y:"-100%"}}
    transition={{ ease: "easeOut",duration: .5 }}
    >
       <motion.div
       initial={{opacity:0}}
       animate={{ opacity:1}}>
        <GlitchedText textValue='WELCOME TO MY PORTFOLIO' className=' text-xl md:text-4xl lg:text-6xl font-extrabold bg-white text-black p-6 rounded-xl'/>
        <div className='absolute bottom-8 -translate-x-1/2 left-1/2 transform w-full'>
            <p className='text-xl md:text-2xl text-center '>Built by Sami</p>
        </div>
        </motion.div> 
    </motion.div>

  )
}

export default Intro