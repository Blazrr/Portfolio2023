import React from 'react'
import {motion} from "framer-motion"
import GlitchedText from './GlitchedText'
type Props = {}

const Intro = (props: Props) => {
  return (
    <motion.div className='text-white h-screen w-screen absolute top-0 left-0 bg-black flex items-center justify-center'
    initial={{opacity:1, y:0}}
    animate={{ y:"-100%"}}
    transition={{ delay: 3,ease: "easeOut",duration: .3 }}
    >
       <motion.div
       initial={{opacity:0}}
       animate={{ opacity:1}}>
        <GlitchedText textValue='WELCOME TO MY PORTFOLIO' className=' text-xl md:text-4xl lg:text-6xl font-extrabold bg-white text-black p-6 rounded-xl'/>
        <div className='absolute bottom-8 -translate-x-1/2 left-1/2 transform w-full'>
            <p className='text-xl md:text-2xl text-center '>Built with &#128150; by Sami</p>
        </div>
        </motion.div> 
    </motion.div>
  )
}

export default Intro