import React from 'react'
import { FaCircleChevronUp } from 'react-icons/fa6'


const ScrollToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
     
    })
  }
  return (
  
    <button
    className='scroll-to-top' onClick={scrollToTop}><FaCircleChevronUp /></button>
  )
}

export default ScrollToTopButton