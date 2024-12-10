import React, { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FaPeopleCarry, FaUsers } from 'react-icons/fa'
import { MdOutlineParagliding, MdSearch } from 'react-icons/md'
import ReactSlider from 'react-slider'
import Rating from './Rating'
import img1 from '../../public/paris.jpg'
import img2 from '../../public/amsterdam.jpg'
import img3 from '../../public/ny.jpg'

const cardData = [
  {
    image: img1,
    rating: '4',
    price: '819',
    title: 'Rainbow Mountain Red Valley',
  },
  {
    image: img2,
    rating: '4',
    price: '619',
    title: 'Rainbow Mountain Red Valley',
  },
  {
    image: img3,
    rating: '4',
    price: '319',
    title: 'Rainbow Mountain Red Valley',
  },
]

const Sidebar = () => {
  const [value, setValue] = useState([399, 1999])

  const Card = () => {
    return (
      <>
        {cardData.map((item, index) => (
          <div key={index} className="flex gap-6 border-b last:border-0 pt-4">
            <img
              src={item.image}
              alt="card"
              className="rounded-lg object-cover"
              width={90}
              height={65}
            />
            <span className="flex flex-col items-baseline gap-1">
              <Rating rating={item.rating} />
              <h4 className="text-base">{item.title}</h4>
              <span className="text-gray-500 text-sm flex items-center gap-2">
                From <p className="text-green">{item.price}.00</p>
              </span>
            </span>
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="flex flex-col gap-8 lg:w-1/3">
      <div className="p-4 w-full bg-white shadow-lg rounded-lg">
        <div className="mb-4 flex items-center border-b py-4">
          <MdOutlineParagliding className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2"> Destinations</h3>
            <select name="" id="" className="w-full rounded outline-none">
              <option value="">London</option>
              <option value="">Paris</option>
              <option value="">Dubai</option>
              <option value="">Edinburgh</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex items-center border-b py-4">
          <FaPeopleCarry className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2"> Activity</h3>
            <select name="" id="" className="w-full rounded outline-none">
              <option value="">City Tours</option>
              <option value="">Shopping </option>
              <option value="">Dining Experiences</option>
              <option value="">Nightlife</option>
              <option value="">Hiking/Trekking</option>
              <option value="">Rock Climbing</option>
              <option value="">Safari Tours</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex items-center border-b py-4">
          <AiOutlineCalendar className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2">Date From:</h3>
            <input type="date" className="w-full rounded" />
          </div>
        </div>
        <div className="mb-4 flex items-center border-b py-4">
          <FaUsers className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2">Guests</h3>
            <input type="number" className="w-full rounded" min="0" max="45" />
          </div>
        </div>
        <div className="mb-4 flex items-center border-b py-4">
          <div className="w-full">
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="flex justify-between mb-3">
              <div className="bg-blue-500 text-white px-2 rounded">
                ${value[0]}
              </div>
              <div className="bg-blue-500 text-white px-2 rounded">
                ${value[1]}
              </div>

              <ReactSlider
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={399}
                max={1999}
                value={value}
                onChange={(value) => setValue(value)}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={(value) => `Thumb value ${value}`}
                renderTrack={({ key, ...props }, state) => {
                  const { index } = state
                  const trackStyle =
                    index === 1 ? { backgroundColor: '#007bff' } : {}
                  return (
                    <div
                      {...props}
                      key={key}
                      style={{ ...props.style, ...trackStyle }}
                    />
                  )
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-lg">Languages</h3>
            <div className="flex flex-col">
              {['English', 'Spanish', 'French', 'German', 'Arabic'].map(
                (language) => (
                  <label
                    key={language}
                    className="inline-flex items-center mt-2"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-green"
                    />
                    <span className="ml-2">{language}</span>
                  </label>
                )
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-lg">Amenities</h3>
            <div className="flex flex-col">
              {[
                'Credit Cards Payment',
                'Free Wi-Fi',
                'Pets Allowed',
                'Wheelchair Access',
                'Smoking Allowed',
                'Pool',
                'Laundry Service',
              ].map((amenity) => (
                <label key={amenity}>
                  <input
                    type="checkbox"
                    className="inline-flex items-center mt-2"
                  />
                  <span className="ml-2">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="w-full bg-green text-white rounded-lg h-16 my-4 flex justify-center items-center font-bold">
            <MdSearch /> Search
          </button>
        </div>
      </div>

      <div className="rounded-lg border px-8 py-4">
        <h3 className="text-xl font-semibold pb-4">Last Minute</h3>
        <Card />
      </div>

      <div className="relative group overflow-hidden rounded-[10px] shadow-lg">
        <img
          src={img1}
          alt=""
          className="w-full h-[350px] object-cover rounded-[10px] transition-transform duration-700 ease-in-out group-hover:scale-125"
        />
        <span className="bg-orange rounded-lg px-5 text-white text-xs absolute top-5 right-5 uppercase font-bold leading-8 whitespace-pre">
          3 Tours
        </span>
        <div
          className="absolute bottom-0 w-full p-5 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:bg-opacity-100
"
        >
          <p className="text-green text-xl font-bold flex-col">
            Travel to{' '}
            <span className="text-white text-2xl group-hover:text-gray-800">
              United Kingdom
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
