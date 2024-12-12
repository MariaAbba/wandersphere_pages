import React, { useEffect, useState } from 'react'
import img from '../assets/bg-shape-01.jpg'
import testimonial from './../assets/testimonial.jpg'
import feat01 from '../assets/feat-01.jpg'
import feat02 from '../assets/feat-02.jpg'
import img02 from '../assets/img-02.jpg'
import { team } from './../constants'
import quotation from '../assets/quotation.png'
import imgBg from '../assets/img-05.jpg'
import { RiPlanetLine } from 'react-icons/ri'
import { BiPhone } from 'react-icons/bi'
import {
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaPlay,
  FaShareAlt,
  FaTwitter,
} from 'react-icons/fa'
import { GiDeer, GiLion } from 'react-icons/gi'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Carousel from 'react-multi-carousel'
import { BsQuote } from 'react-icons/bs'
import { MdOutlineStarHalf, MdStar } from 'react-icons/md'
import { IoMdStarOutline } from 'react-icons/io'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const responsives = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const features = [
  {
    icon: <FaCheckCircle className="text-orange" />,
    title: 'Safety First Always',
    description:
      'Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.',
  },
  {
    icon: <FaCheckCircle className="text-orange" />,
    title: 'Low Price & Friendly',
    description:
      'Quis autem vel eum iure voluptate velit esse nihilie consequatur.',
  },
  {
    icon: <FaCheckCircle className="text-orange" />,
    title: 'Trusted Travel Guide',
    description:
      'At vero accusamus dignissimos ducimus blanditiis deleniti atque quos.',
  },
]

const About = () => {
  const [hoverCard, setHoverCard] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(2)

  const handleAfterChange = (_, state) => {
    setCurrentSlide(state.currentSlide + 2)
  }

  const Available = ({ icon, title }) => {
    return (
      <div className="flex flex-col gap-4 shadow-xl bg-white rounded-lg p-7 group">
        <span className="bg-[#f3f8f6] text-green w-fit rounded-full p-4 group-hover:text-white group-hover:bg-green">
          {icon}
        </span>
        <p className="font-bold text-lg pb-3">{title}</p>
        <p>
          Sit amet consectetur integer tincidunt sceleries malesuada sceleris
          massa.
        </p>
      </div>
    )
  }

  const Section = ({ title, text, children, image }) => {
    return (
      <div className="max-w-[1320px] mx-auto mt-16 px-3">
        <div className="lg:flex flex-row-reverse gap-8 justify-between">
          <div className="lg:w-1/2">
            <div>
              <h6 className="text-green bg-[#ecf5e8] w-fit rounded-md px-5 py-2 mb-2 font-bold">
                {title}
              </h6>
              <h3 className="lg:text-5xl text-3xl font-bold pb-8 leading-tight">
                {text}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              </p>
            </div>
            {children}
          </div>
          <div className="lg:w-1/2">
            <div className="lg:flex w-full justify-start">
              <img
                src={image}
                alt=""
                width={564}
                height={742}
                className="rounded-t-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ProgressBar = ({ value, text }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-28">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              pathColor: '#63Ab45',
              textColor: '#000',
              trailColor: '#d6d6d6',
              backgroundColor: '#f8f8f8',
            })}
          />
        </div>
        <p className="font-bold mt-2">{text}</p>
      </div>
    )
  }

  const Rating = ({ rating }) => {
    return (
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1
          return (
            <span key={index} className="text-[#ffa801] text-xl">
              {rating >= ratingValue ? (
                <MdStar />
              ) : rating >= ratingValue - 0.5 ? (
                <MdOutlineStarHalf />
              ) : (
                <IoMdStarOutline />
              )}
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <section className="relative bg-black lg:h-[380px]">
        <img src={img} alt="" className="absolute h-full w-full object-cover" />
        <div className="flex flex-col items-start justify-center relative z-10 lg:h-full h-[380px] max-w-[1320px] mx-auto px-6 lg:pt-0 pt-16">
          <span className="lg:text-[52px] text-3xl text-white text-center font-bold relative">
            About
          </span>
          <p className="text-white text-lg text-center my-4">
            People don't take trips, trips take people.
          </p>
        </div>
      </section>

      <section className="bg-[url('/assets/bg-map.png')] bg-cover bg-no-repeat bg-center">
        <div className="lg:flex max-w-[1320px] mx-auto relative pt-[120px] px-3">
          <div className="flex flex-col gap-6 lg:w-[45%] lg:pr-[80px] lg:pb-[150px] lg:pl-[15px]">
            <div className="flex flex-col">
              <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                <h6 className="text-green relative font-semibold">
                  Availability
                </h6>
              </div>
              <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4 lg:leading-[1.2]">
                Explore Wandersphere Real Adventure & Travels
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                excepturi dignissimos magnam iure sapiente beatae exercitationem
                harum magni inventore molestias.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <RiPlanetLine size={50} className="text-green" />
                <span className="flex flex-col gap-2">
                  <p className="font-bold text-lg">Protect Your Life</p>
                  <p>We&apos;re here to help</p>
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-3">
                <div className="flex gap-3">
                  <BiPhone size={50} className="text-orange rounded-full p-1" />
                  <span>
                    <p className="text-sm">Call experts</p>
                    <p className="font-bold">+999 999 999</p>
                  </span>
                </div>
                <button className="bg-green rounded-lg text-white px-8 h-14 font-bold">
                  Discover More
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[55%] lg:absolute right-0 z-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col gap-6 pt-12 px-4">
                <Available
                  icon={<RiPlanetLine size={100} />}
                  title={'Protect Your Life'}
                />
                <Available
                  icon={<RiPlanetLine size={100} />}
                  title={'Protect Your Life'}
                />
              </div>
              <div className="flex flex-col gap-6 px-4">
                <Available
                  icon={<RiPlanetLine size={100} />}
                  title={'Protect Your Life'}
                />
                <Available
                  icon={<RiPlanetLine size={100} />}
                  title={'Protect Your Life'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[url("/assets/camping.jpg")] bg-cover bg-no-repeat bg-center'>
        <div className="relative z-0 py-24">
          <div className="lg:flex gap-12 max-w-[1320px] mx-auto px-6 mt-32">
            <div className="lg:w-1/2">
              <span>
                <button className="animate-pulse border border-white bg-green rounded-full w-20 h-20 flex justify-center items-center mb-8">
                  <FaPlay color="white" />
                </button>
                <p className="text-orange text-xl pb-2">
                  Are you ready to travel?
                </p>
              </span>
              <p className="lg:text-5xl text-[30px] lg:leading-[1.12] font-bold text-white py-7">
                Ready to travel with real adventure and enjoy natural
              </p>
              <button className="bg-green rounded-lg text-white px-8 h-14 mb-4 font-bold">
                Check Availability
              </button>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              <div className="border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-green hover:bg-green hover:text-white transition-bg hover:border">
                <GiDeer className="text-2xl w-20 h-20" />
                <p>Wildlife Tours</p>
              </div>
              <div className="border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-green hover:bg-green hover:text-white transition-bg hover:border">
                <GiLion className="text-2xl w-20 h-20" />
                <p>Wildlife Tours</p>
              </div>
              <div className="border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-green hover:bg-green hover:text-white transition-bg hover:border">
                <GiDeer className="text-2xl w-20 h-20" />
                <p>Wildlife Tours</p>
              </div>
              <div className="border border-gray rounded-lg p-10 flex flex-col items-center gap-4 text-green hover:bg-green hover:text-white transition-bg hover:border">
                <GiDeer className="text-2xl w-20 h-20" />
                <p>Wildlife Tours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section
        image={imgBg}
        text="Great opportunity for adventure & travels"
        title="Who we are"
      >
        <div className="bg-gray-100 my-12 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl flex lg:flex-row flex-col gap-4 items-center lg:gap-16 w-full justify-center">
            <ProgressBar value={50} text="Satisfied Clients" />
            <ProgressBar value={50} text="Success Rate" />
          </div>
        </div>
      </Section>
      <section>
        <div className="max-w-[1320px] mx-auto py-16">
          <div className="flex flex-col items-center">
            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
              <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
              <h6 className="text-green relative font-semibold">
                Team members
              </h6>
            </div>
            <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4 lg:leading-[1.2]">
              The Experts
            </h3>
          </div>
          {/* </div> */}
          <div className="relative pt-8 z-10">
            <Carousel
              responsive={responsive}
              infinite
              autoplay={true}
              itemClass="pb-4 px-2"
            >
              {team.map((item, index) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoverCard(item.id)}
                  onMouseLeave={() => setHoverCard(null)}
                >
                  <div className="relative px-10 z-20">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="rounded-lg object-cover"
                      width={300}
                      height={300}
                    />
                    <div className="absolute bottom-0 right-10 z-30">
                      <div className="transition-opacity duration-300 hover:cursor-pointer">
                        <div className="bg-green h-11 p-4 rounded-br-lg text-white">
                          <FaShareAlt />
                        </div>
                      </div>
                    </div>
                    {hoverCard === item.id && (
                      <div className="absolute bottom-11 right-10 transition-opacity duration-300 opacity-100 hover:cursor-pointer">
                        <div className="flex flex-col">
                          <div className="bg-green p-4 text-white">
                            <FaFacebook />
                          </div>
                          <div className="bg-green p-4 text-white">
                            <FaTwitter />
                          </div>
                          <div className="bg-green p-4 text-white">
                            <FaInstagram />
                          </div>
                          <div className="bg-green p-4 text-white">
                            <FaPinterest />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full p-7 pt-24 text-center box-border bg-white rounded-lg mb-7 -mt-20 shadow-lg">
                    <span>
                      <h3 className="text-2xl font-bold">{item.name}</h3>
                      <p className="text-sm font-medium">{item.position}</p>
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1320px] mx-auto px-3 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 gap-6 flex flex-col items-center">
            <div className="flex flex-col lg:flex-row gap-6 items-baseline">
              <img
                src={feat01}
                alt=""
                className="rounded-lg object-cover w-[300px] h-[300px]"
              />
              <img
                src={feat02}
                alt=""
                className="rounded-lg object-cover w-[300px] h-[350px]"
              />
            </div>
            <img
              src={img02}
              alt=""
              className="rounded-lg object-cover  w-[500px]"
            />
          </div>

          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                <h6 className="text-green relative font-semibold">
                  Who We Are
                </h6>
              </div>
              <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4 ">
                Great opportunity for adventure & travels
              </h3>
            </div>
            <div className="flex flex-col gap-8 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[url("/assets/camping.jpg")] bg-cover bg-no-repeat bg-center'>
        <div className="relative z-20 py-24">
          <div className="flex gap-12 max-w-[1320px] px-6 mx-auto">
            <div className="flex items-center justify-between">
              <p className="lg:w-2/3 lg:text-6xl text-[30px] lg:leading-[1.12] font-bold text-white py-7">
                Ready to travel with real adventure and enjoy natural
              </p>
            </div>
            <span>
              <button className="animate-pulse bg-white rounded-full w-24 h-24 flex justify-center items-center mb-8">
                <FaPlay color="black" />
              </button>
            </span>
          </div>
        </div>
      </section>
      <section className='bg-[url("/assets/bg-map.png")] bg-cover bg-no-repeat bg-center'>
        <div className="max-w-[1320px] mx-auto px-3">
          <div className="lg:flex py-16">
            <div className="lg:w-1/2">
              <img src={quotation} alt="" />
            </div>
            <div className="lg:w-1/2">
              <div className="flex gap-8">
                <BsQuote size={80} className="text-green" />
                <span className="flex flex-col gap-3 items-start">
                  <p className="text-2xl font-bold">Quality Service</p>
                  <Rating rating={5} />
                </span>
              </div>
              <p className="text-xl leading-9 mb-7 py-6 border-b border-[#e2dfeb]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                nihil nesciunt optio? Repudiandae recusandae doloremque, iure
                modi omnis officiis qui.
              </p>
              <div className="flex gap-4 items-center">
                <img
                  src={testimonial}
                  alt="customer photo"
                  className="rounded-full object-cover h-[82px] w-[82px]"
                />
                <span>
                  <p className="text-2xl font-bold">Kevin Smith</p>
                  <p>Customer</p>
                </span>
              </div>
            </div>
          </div>
          <div className="py-16 border-t border-[#E2DFEB]">
            <Carousel
              afterChange={handleAfterChange}
              responsive={responsives}
              infinite
              autoPlay
              arrows={false}
              itemClass="px-2"
            >
              {[...Array(6)].map((_, index) => (
                <div key={index}>
                  <img
                    src="/brand.png"
                    alt={`Brand ${index + 1}`}
                    className={`py-4 flex justify-center items-center hover:animate-pulse hover:opacity-100 hover:bg-[#F3F8F6] ${
                      currentSlide % 6 === index
                        ? 'bg-[#F3F8F6] animate-pulse'
                        : 'flex-col opacity-40'
                    }`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-10 -mb-40 bg-[url(/bg-map.png)] bg-contain relative z-10">
        <Carousel
          responsive={responsives}
          infinite
          autoPlay
          arrows={false}
          itemClass="px-2"
        >
          {[
            '/tour-05.jpg',
            '/tour-04.jpg',
            '/tour-06.jpg',
            '/tour-07.jpg',
            '/tour-08.jpg',
          ].map((item, index) => (
            <div
              key={index}
              className="h-[298px] relative overflow-hidden w-full"
            >
              <img
                src={item}
                alt=""
                className="rounded-lg h-full w-full object-cover hoverImg"
              />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  )
}

export default About
