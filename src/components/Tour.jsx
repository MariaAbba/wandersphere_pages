import React, { useState } from 'react'
import slider from './../assets/phi.jpg'
import CardSlider from './CardSlider'
import Sidebar from './Sidebar'
import { BsSortAlphaDown } from 'react-icons/bs'
import tourData from './../constants/data'
import { ToursCard } from '../pages/Tours'
import ReactPaginate from 'react-paginate'
import { RiPlanetLine } from 'react-icons/ri'

const Tour = () => {
  const [sortAsc, setSortAsc] = useState(true)
  const [sortCriterion, setSortCriterion] = useState('name')
  const [currentPage, setCurrentPage] = useState(0)
  const itemPerPage = 6

  const handleSortChange = (event) => {
    setSortCriterion(event.target.value)
    setSortAsc(true)
  }

  const sortData = (tourData) => {
    return tourData.sort((a, b) => {
      if (sortCriterion === 'name') {
        if (a.name && b.name) {
          return sortAsc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        }
        return 0
      } else if (sortCriterion === 'price') {
        return sortAsc ? a.price - b.price : b.price - a.price
      } else if (sortCriterion === 'rating') {
        return sortAsc ? a.rating - b.rating : b.rating - a.rating
      }
      return 0
    })
  }

  const sortedData = sortData([...tourData])
  const offset = currentPage * itemPerPage
  const currentPageData = sortedData.slice(offset, offset + itemPerPage)
  const pageCount = Math.ceil(tourData.length / itemPerPage)

  const handlePageClick = (tourData) => {
    setCurrentPage(tourData.selected)
  }

  return (
    <div>
      <section className="relative bg-black lg:h-[380px]">
        <img
          src={slider}
          alt=""
          className="absolute w-full h-full object-cover"
        />
        Rating
        <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1380px] px-6 lg:pt-0 pt-16 mx-auto">
          <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">
            Explore the World
          </span>
          <p className="text-white text-center text-2xl my-2">
            People Don't Take, Trips Take People
          </p>
        </div>
      </section>
      <CardSlider />
      <section className="lg:flex gap-8 max-w-[1320px] mx-auto px-3">
        <Sidebar />

        <div className="lg:2/3">
          <div className="flex lg:flex-row flex-col justify-between py-4 pb-2 text-[#82828A]">
            <span className="flex gap-2">
              <strong>{tourData.length}</strong> Tours
            </span>
            <span className="flex gap-2">
              <span className="flex gap-2 items-center">
                Sort By{' '}
                <BsSortAlphaDown
                  className="cursor-pointer"
                  onClick={() => setSortAsc(!sortAsc)}
                />
              </span>
              <select
                name=""
                id=""
                value={sortCriterion}
                onChange={handleSortChange}
              >
                <option value="name">Country</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </span>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {currentPageData?.map((item, index) => (
              <ToursCard
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
          <ReactPaginate
            previousClassName="hidden"
            nextLabel={'Next >>'}
            nextClassName="border-2 rounded-[4px] px-4 h-10 flex items-center hover:border-green"
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="flex items-center gap-3 pt-8"
            pageLinkClassName="h-10 flex items-center px-4 border-2 rounded-[4px] hover:border-green"
            activeLinkClassName="border-2 border-green rounded-[4px] "
          />
        </div>
      </section>
      <div className="bg-[url('/bg-shape-04.png')] bg-green bg-no-repeat bg-cover relative z-10 lg:mb-0 -mb-24">
        <div className="lg:py-16 py-8 lg:px-3 px-4 lg:flex justify-between items-center max-w-[1320px] mx-auto">
          <div className="flex items-center gap-4 lg:mb-0 mb-4">
            <RiPlanetLine color="white" size={64} />
            <span className="text-white">
              <p className="text-sm">QUISQUE VEL ORTOR</p>
              <h4 className="lg:text-4xl text-2xl font-bold">
                Ready to adventure and enjoy natural
              </h4>
            </span>
          </div>
          <button className="bg-white rounded-lg text-lg shadow py-4 px-8 font-bold">
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tour
