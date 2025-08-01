import {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'
import './index.css'

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }  
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [hamburgColor, setHamburgColor] = useState('#FFFFFF');
  useEffect(() => {
    const navMenu = document.querySelector('.nav-list');
    if(navbarToggle == true){
      navMenu.classList.remove('hidden');
      setHamburgColor('#000000');
    } else {
      navMenu.classList.add('hidden');
      setHamburgColor('#FFFFFF');
    }
  }, [navbarToggle, hamburgColor]);
  return (
    <div>
        <nav className='fixed w-full backdrop-blur-md flex justify-between items-center px-4 py-0 md:py-2 text-white z-[99]'>
            <h1 className='md:text-3xl text-2xl pl-2 font-bold logo'>Mahendra.</h1>
            <div className="block md:hidden static z-20">
            <Hamburger className='hamburg' size={22} toggled={navbarToggle} toggle={setNavbarToggle} color={hamburgColor}/>
            </div>
            <div className={`circle bg-white rounded-full absolute right-6 top-2 z-10 transition-all duration-500 ease-in-out
              ${navbarToggle ? 'scale-[100]' : 'scale-0'} w-[30px] h-[30px]`}>
            </div>
            <div className="md:static absolute top-[45dvh] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-0 hidden md:block nav-list transition-all duration-300 z-50">
              <ul className='flex flex-col md:flex-row px-4 gap-3 md:gap-6 md:border-none'>
                  <li className='cursor-pointer text-3xl sm:text-base sm:text-white'>Home</li>
                  <li className='cursor-pointer text-3xl sm:text-base sm:text-white' onClick={() => scrollToSection('experience')}><a href='#experience'>Experience</a></li>
                  <li className='cursor-pointer text-3xl sm:text-base sm:text-white'>Projects</li>
                  <li className='cursor-pointer text-3xl sm:text-base sm:text-white'>Contact</li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar