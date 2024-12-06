import React from 'react'
import { CiCamera, CiHeart } from 'react-icons/ci'
import Rating from '../components/Rating'
import { IoVideocamOutline } from 'react-icons/io5'
import { MdArrowRight, MdLocationPin, MdPeopleOutline } from 'react-icons/md'
import { LiaDollarSignSolid } from 'react-icons/lia'
import { WiTime3 } from 'react-icons/wi'

export const ToursCard = ({ id, image, name, rating, price }) => {
  return (
    <div>
      <div key={id} className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="rounded-t-lg hoverImg h-[360px] w-full"
        />
        <div className="absolute flex justify-between top-4 left-4 right-4">
          <p className="capitalize bg-[#14B0C3] rounded-md px-2 py-1">
            Featured
          </p>
          <button className="bg-[#00000066] p-1 rounded-md">
            <CiHeart className="text-white text-xl" />
          </button>
        </div>
      </div>

      <div className="border border-[#ebe6de] rounded-b-lg relative">
        <div className="absolute w-full h-5 -top-5 bg-white rounded-t-[20px]"></div>
        <div className="px-6">
          <div className="flex items-center gap-4 justify-between relative">
            <Rating rating={rating} />
            <span className="flex gap-2 shadow px-4 py-1 absolute -top-8 right-0 z-10 bg-white rounded-lg">
              <div className="relative">
                <CiCamera size={24} />
                <button className="bg-green text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0">
                  5
                </button>
              </div>
              <IoVideocamOutline size={24} />
            </span>
          </div>
          <h4>{name}</h4>
          <span className="flex items-center gap-4">
            <MdLocationPin className="text-green text-xl" />
            <p className="text-[#757783] text-sm">Main Street</p>
          </span>
          <span className="text-[#757783] flex py-4 gap-2">
            <LiaDollarSignSolid className="text-green text-xl" /> From
            <p className="text-orange">{price}.00</p>
          </span>
          <div className="flex justify-between border-t py-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <WiTime3 className="text-green" /> 10 days
              </span>
              <span className="flex items-center gap-1">
                <MdPeopleOutline className="text-green" /> 50
              </span>
            </div>
            <a href="/" className="flex items-center gap-2 text-sm mt-2">
              Explore <MdArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
