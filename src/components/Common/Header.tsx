import { Link } from 'gatsby'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full h-16 justify-between px-8 bg-[#161B22]">
      <Link to="/" className="flex items-center font-bold text-2lg">
        <h1 className="md:text-2xl text-sm">{`{ HIRA99 : Blog }`}</h1>
      </Link>
      <nav className="">
        <ul className="flex h-full items-center">
          <li className="">
            <AiFillGithub className="w-10 h-10 cursor-pointer" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
