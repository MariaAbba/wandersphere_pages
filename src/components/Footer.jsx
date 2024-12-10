import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import logo from '../assets/logo2.png'
import { BsInstagram, BsLinkedin, BsSendCheck, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import {
  MdOutlineLocationOn,
  MdOutlineMailOutline,
  MdPhone,
} from 'react-icons/md'
import headphone from './../assets/headphones.png'
import globe from './../assets/globe.png'

const Footer = () => {
  return (
    <footer className="bg-[#1d231f] pt-44">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex gap-16 pb-20">
          <div className="flex justify-between items-center lg:pb-0 pb-8">
            <span className="flex gap-4 items-center lg:w-3/4">
              <img src={headphone} alt="" height={80} width={80} />
              <p className="lg:text-3xl text-lg text-white">
                Need any support for tour & travels?{' '}
              </p>
            </span>
            <div className="lg:w-1/4 lg:flex hidden justify-end">
              <button className="bg-green text-white rounded-full w-16 h-16 flex items-center justify-center">
                <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between lg:border-0 border-t border-[#FFFFFF1A] lg:pt-0 pt-8 ">
            <span className="flex gap-4 items-center lg:w-3/4">
              <img src={globe} alt="" height={80} width={80} />
              <p className="lg:text-3xl text-lg text-white">
                Ready to Get Started With Vacations!{' '}
              </p>
            </span>
            <div className="lg:w-1/4 lg:flex hidden justify-end">
              <button className="bg-orange text-white rounded-full w-16 h-16 flex items-center justify-center">
                <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FFFFFF1A] pt-20 pb-10 lg:w-11/12">
          <div className="lg:flex gap-10">
            <div className="lg:w-1/3 text-white">
              <img src={logo} alt="" width={130} />
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center gap-2 justify-center">
                <button className="rounded-full p-3 hover:bg-white hover:text-black bg-[#262d28]">
                  <BsTwitter size={14} color="white" />
                </button>
                <button className="rounded-full p-3  hover:bg-white hover:text-black bg-[#262d28]">
                  <FaFacebook size={14} color="white" />
                </button>
                <button className="rounded-full p-3  hover:bg-white hover:text-black bg-[#262d28]">
                  <BsInstagram size={14} color="white" />
                </button>
                <button className="rounded-full p-3  hover:bg-white hover:text-black bg-[#262d28]">
                  <BsLinkedin size={14} color="white" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/5 text-white">
              <h6 className="text-xl font-bold my-5 lg:mt-0">Pages</h6>
              <ul className="flex flex-col gap-4">
                <a href="#" className="hover:text-green">
                  About Us
                </a>

                <a href="#" className="hover:text-green">
                  Community Blog
                </a>

                <a href="#" className="hover:text-green">
                  Work with us
                </a>

                <a href="#" className="hover:text-green">
                  Privacy Policy
                </a>

                <a href="#" className="hover:text-green">
                  Contact US
                </a>
              </ul>
            </div>
            <div className="flex flex-col lg:w-1/3 text-white">
              <h6 className="text-white text-xl font-bold my-5 lg:mt-0">
                Newsletter
              </h6>
              <p className="my-5">
                Subscribe to our newsletter to get our latest update & news
              </p>

              <div className="relative h-14 flex items-center">
                <label htmlFor="emailInput" className="sr-only">
                  Email Address
                </label>
                <input
                  id="emailInput"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full bg-white  rounded-l-lg  px-3 outline-none"
                />
                <button className="bg-green text-white w-12 h-full flex items-center justify-center text-2xl rounded-r-lg">
                  <BsSendCheck />
                </button>
              </div>
              <label className="pt-2 sr-only" htmlFor="checkboxInput">
                <input type="checkbox" id="checkboxInput" /> I agree to all
                terms and policies.
              </label>
            </div>

            <div className="pt-[15px]">
              <ul className="flex flex-col gap-4  text-white">
                <li className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-[#262d28] rounded-full w-fit justify-center p-4 hover:text-green">
                    <MdPhone className="text-green" />
                  </button>
                  <span>
                    <p className="text-sm text-gray-500">Drop a Line</p>
                    <p>+00 (123) 456 889</p>
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-[#262d28] rounded-full w-fit justify-center p-4 hover:text-green">
                    <MdOutlineMailOutline className="text-green" />
                  </button>
                  <span>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p>qKp7o@example.com</p>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-[#262d28] rounded-full w-fit justify-center p-4 hover:text-green">
                    <MdOutlineLocationOn className="text-green" />
                  </button>
                  <span>
                    <p className="text-sm text-gray-500">Visit Office</p>
                    <p>583 Main Str. New York, USA</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
