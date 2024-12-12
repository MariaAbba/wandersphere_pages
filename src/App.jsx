import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import About from './components/About'

import { useEffect } from 'react'

import Blog from './components/Blog'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/news" element={<Blog />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  )
}

export default App
