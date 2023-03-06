import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const currPath = useRouter().asPath
  return (
    <nav className='mt-6'> 
        <div>
            <ul className='flex space-x-4 md:space-x-6 lg:space-x-8 font-semibold'>
                <Link href="/" className={`${currPath == "/" && "underline font-bold underline-offset-4"}`} >Works</Link>
                <Link href="/About" className={`${currPath == "/About" && "underline font-bold underline-offset-4"}`}>About</Link>
                <Link href="/Contact" className={`${currPath == "/Contact" && "underline font-bold underline-offset-4"}`}>Contact</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar