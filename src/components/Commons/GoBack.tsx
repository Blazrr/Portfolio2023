import { changeCursor } from '@/reducers/cursorSlice'
import Link from 'next/link'
import React from 'react'
import { BsArrowUpLeft } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

type Props = {}

const GoBack = (props: Props) => {

     const dispatch = useDispatch()
  const textEnter = () => dispatch(changeCursor("text"))
  const textLeave = () => dispatch(changeCursor("default"))
 


  return (
    <Link href="/" className="fixed -top-12  left-16 font-bold flex items-center !z-50  p-2"  onMouseEnter={textEnter}
    onMouseLeave={textLeave}><BsArrowUpLeft className="h-8 w-8 " /> <span className="ml-2">GO BACK</span></Link>
  )
}

export default GoBack