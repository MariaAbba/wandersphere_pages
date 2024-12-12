import React from 'react'
import logo from './../assets/logo2.png'
import { CiSearch } from 'react-icons/ci'
import { IoMdMenu } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
  const [dropdown, setDropdown] = React.useState(false)

  const showDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]">
      <div className="max-w-[1320px] mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center gap-16">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src={logo} alt="logo" className="w-20" />
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <NavLink
              to="/"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Home
            </NavLink>
            <NavLink
              to="/destinations"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Destinations
            </NavLink>

            <NavLink
              to="/news"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              News
            </NavLink>
            <NavLink
              to="/about"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Contacts
            </NavLink>
          </ul>
          <div className="flex gap-4 max-lg:hidden w-40 justify-center">
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
              <CiSearch size={32} />
            </button>
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center  hover:bg-green hover:text-white">
              <BsPersonCircle size={24} />
            </button>
          </div>
          {dropdown ? (
            <div
              className="lg:hidden text-2xl cursor-pointer text-black"
              onClick={showDropdown}
            >
              <MdClose className="text-white  hover:text-green " />
            </div>
          ) : (
            <div
              className="lg:hidden text-2xl cursor-pointer text-black"
              onClick={showDropdown}
            >
              <IoMdMenu className="text-white  hover:text-green " />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-white transition-all ">
            <div className="w-full flex flex-col  items-baseline gap-4">
              <ul className="w-full flex flex-col justify-center items-center">
                <NavLink
                  to="/"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/destinations"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Destinations
                </NavLink>
                <NavLink
                  to="/news"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  News
                </NavLink>
                <NavLink
                  to="/about"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contacts"
                  className="leading-normal no-underline text-white text-lg hover:text-green"
                >
                  Contacts
                </NavLink>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
