import { useTheme } from 'next-themes'
import React from 'react'
import {FaSun, FaMoon} from "react-icons/fa"


type Props = {}

const Darkmode = (props: Props) => {
    const {theme, setTheme} = useTheme()
    const { resolvedTheme } = useTheme()

    const changeTheme = () => {
        if (resolvedTheme === "light") setTheme("dark")
        else setTheme("light")       
    }
  return (


    <button className='fixed top-6 right-6 rounded p-2 border-2 border-black dark:border-white z-[9001]' onClick={changeTheme}>{resolvedTheme === "light" ? <FaMoon/> : <FaSun/>}
    </button>

  )
}

export default Darkmode