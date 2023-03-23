import { changeCursor } from '@/reducers/cursorSlice'
import { useTheme } from 'next-themes'
import React from 'react'
import {FaSun, FaMoon} from "react-icons/fa"
import { useDispatch } from 'react-redux'


type Props = {}

const Darkmode = (props: Props) => {
    const {theme, setTheme} = useTheme()
    const { resolvedTheme } = useTheme()

    const changeTheme = () => {
        textLeave()
        if (resolvedTheme === "light") setTheme("dark")
        else setTheme("light")       
    }

    const dispatch = useDispatch()
    const textEnter = () => dispatch(changeCursor("text"))
    const textLeave = () => dispatch(changeCursor("default"))
  return (


    <button className='fixed top-6 right-6 rounded p-2 border-2 border-black dark:border-white z-[9001]' onClick={changeTheme} onMouseOver={textEnter} onMouseLeave={textLeave} >{resolvedTheme === "light" ? <FaMoon/> : <FaSun/>}
    </button>

  )
}

export default Darkmode