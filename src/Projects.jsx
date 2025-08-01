import React from 'react'
import * as motion from 'motion/react-client'
import { SiGithub } from "react-icons/si"
import { FiGlobe } from "react-icons/fi"
import projectData from './projects/projects'
import './index.css'

const getTechColor = (tech) => {
  switch (tech.toLowerCase()) {
    case 'html':
      return 'text-orange-900 border-orange-900'
    case 'css':
      return 'text-blue-900 border-blue-900'
    case 'javascript':
      return 'text-yellow-500 border-yellow-500'
    case 'laravel':
      return 'text-red-900 border-red-900'
    case 'tailwind':
      return 'text-blue-500 border-blue-500'
    case 'react':
      return 'text-sky-600 border-sky-600'
    case 'nextjs':
      return 'text-black border-black'
    case 'firebase':
      return 'text-yellow-700 border-yellow-700'
    case 'mongodb':
      return 'text-green-700 border-green-700'
    default:
      return 'text-gray-500 border-gray-500'
  }
}

function Projects() {
  return (
    <div className='h-[80dvh] bg-[#030b19] flex justify-center items-center text-ye'>
      <div className="project-wrapper w-3/4">
        <motion.h4 className='text-white text-4xl ml-10 font-semibold'>
          Projects
        </motion.h4>

        <div className="card-wrapper flex gap-6 max-w-500px overflow-x-auto mt-5 ml-10 relative scroll-smooth scrollbar-hide snap-x snap-mandatory">
          {projectData.map((project, index) => (
            <div key={index} className="snap-start card-projects flex flex-col w-[15rem] h-[23rem] rounded-3xl shrink-0">
              <div className="img-card w-full h-[13rem] relative">
                <div className="img-mask w-full h-full">
                  <img
                    src={project.img}
                    alt={`card-${index}`}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <a href={index === 0 ? project.link : project.github} target="_blank" rel="noreferrer" className="github-button absolute w-[50px] h-[50px] bg-white right-2 bottom-2 rounded-full flex items-center justify-center z-50">
                  {index === 0 ? <FiGlobe className="cursor-pointer text-xl" /> : <SiGithub className="cursor-pointer text-xl" />}
                </a>
              </div>

              <div className="text max-h-[7rem] p-2">
                <p className="text-white font-medium">{project.nama}</p>
                <div className="tech-wrapper flex flex-wrap gap-1 mt-1">
                  {project.techstack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[.75rem] px-2 border rounded ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-[.625rem] text-justify line-clamp-3 mt-1">
                  {project.deskripsi || "Project deskripsi tidak tersedia."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
