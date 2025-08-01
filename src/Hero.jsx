import React from 'react';
import { Link } from "react-router";
import './assets/style.css';

function Hero() {
  return (
    <div className='h-[100dvh] w-full flex items-center justify-center relative'>
        <div className="home-wrapper max-w-6xl">
            <h1 className='text-2xl md:text-6xl text-white font-bold mb-1 md:mb-4 text-wrap'>Hello, my name is <span className='text-[#3457D5]'>Mahendra.</span></h1>
            <h2 className='text-base md:text-3xl text-white font-medium inline-block px-2 bg-[#3457D5]'>Im a Web Developer</h2>
            <p className="introduction text-white md:mt-4 mt-2 mb-4 text-justify md:max-w-[50rem] max-w-[20rem] md:text-md">
            I'm a final-year student at the Islamic University of Balitar with a strong passion for web development. 
            I've built several projects, including a library management system, an employee payroll app, and a course recommendation system. 
            My tech stack includes Laravel for the backend and React for the frontend. I'm always eager to learn new technologies and improve my skills through real-world applications.
            </p>
            <Link className='contact px-4 py-2 bg-[#3457D5] hover:bg-white hover:text-[#3457D5] rounded-md text-white transition-all duration-300'>Contact Me</Link>
        </div>
        <div className="absolute right-[1.5rem] md:right-[16rem] top-[12rem] md:top-[7rem] z-[-2] h-[12rem] w-[12rem] md:h-[20rem] md:w-[25rem] bg-[radial-gradient(#ffffff70_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
    </div>
  )
}

export default Hero
