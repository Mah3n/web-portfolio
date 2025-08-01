import React, { useState, useEffect } from 'react'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import { Sling as Hamburger } from 'hamburger-react' // pastikan kamu sudah install

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setNavbarToggle(false) // close menu after click (on mobile)
    }
  }

  const [navbarToggle, setNavbarToggle] = useState(false)
  const [hamburgColor, setHamburgColor] = useState('#FFFFFF')

  useEffect(() => {
    const navMenu = document.querySelector('.nav-list')
    if (navbarToggle) {
      navMenu.classList.remove('hidden')
      setHamburgColor('#000000')
    } else {
      navMenu.classList.add('hidden')
      setHamburgColor('#FFFFFF')
    }
  }, [navbarToggle]) // Hapus hamburgColor dari dependency array

  return (
    <>
      <nav className='fixed w-full backdrop-blur-md flex justify-between items-center px-4 py-0 md:py-2 text-white z-[99]'>
        <h1 className='md:text-3xl text-2xl pl-2 font-bold logo'>Mahendra.</h1>

        <div className="block md:hidden static z-20">
          <Hamburger
            size={22}
            toggled={navbarToggle}
            toggle={setNavbarToggle}
            color={hamburgColor}
          />
        </div>

        <div className={`circle bg-white rounded-full absolute right-6 top-2 z-10 transition-all duration-500 ease-in-out
          ${navbarToggle ? 'scale-[100]' : 'scale-0'} w-[30px] h-[30px]`}>
        </div>

        <div className="md:static absolute top-[45dvh] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-0 hidden md:block nav-list transition-all duration-300 z-50">
          <ul className='flex flex-col md:flex-row px-4 gap-3 md:gap-6 md:border-none'>
            <li
              className='cursor-pointer text-3xl sm:text-base sm:text-white'
              onClick={() => scrollToSection('home')}
            >
              Home
            </li>
            <li
              className='cursor-pointer text-3xl sm:text-base sm:text-white'
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </li>
            <li
              className='cursor-pointer text-3xl sm:text-base sm:text-white'
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </li>
            <li
              className='cursor-pointer text-3xl sm:text-base sm:text-white'
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      <div id="home"><Home /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  )
}

export default App
