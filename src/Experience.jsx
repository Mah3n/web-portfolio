    import {useState, useEffect} from 'react'
    import * as motion from "motion/react-client"
    import { LiaGithub } from "react-icons/lia";
    import './index.css'
    import IMG2 from './assets/img/2.png'

    function Experience() {
    return (
        <div className='h-auto sm:h-[80dvh] sm:rounded-t-none rounded-t-3xl sm:bg-[#111418] bg-white/5 flex justify-center items-center relative overflow-hidden'>
            <div className="wrapper h-3/4 p-4 px-4 sm:px-10">
                <motion.h3 className='mt-2 text-white text-4xl underline'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{
                        duration: 1,
                    }}
                >
                    Experience
                </motion.h3>
                <div className="mt-2 sm:mt-4 h-[60%] card-experience flex flex-col sm:flex-row gap-4 sm:gap-6 px-2 py-2">
                    <motion.div className='sm:w-[75%]'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{
                            duration: 1,
                        }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">Frontend Developer – <span className="text-blue-500">PT. Rafli Kreasi Teknologi</span></h2>
                        <p className="text-sm text-gray-400 mb-2">15 Januari 2024 – 28 Februari 2024</p>
                        <p className="text-white font-semibold mb-1">Job Description:</p>
                        <p className="text-gray-300 leading-relaxed text-justify">
                        Designed and developed the user interface for a school payment application (tuition fees, contributions, etc.) and a digital cooperative system. Responsible for creating the UI/UX in Figma and implementing it using Laravel Blade and Tailwind CSS. Focused on delivering an intuitive user experience and consistent design.
                        </p>
                    </motion.div>
                    <div className="right w-full sm:w-[45%] flex items-center justify-center relative">
                        <div className="img-wrapper">
                            <img src={IMG2} alt="experience_img" width={500} height={450} className="experience-img transform transition-transform duration-500 ease-out"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-[200px] h-[200px] absolute left-[-2rem] top-4 blur-[100px] rounded-full opacity-30 z-10"></div>
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-[300px] h-[300px] absolute right-[-5rem] bottom-4 blur-[100px] rounded-full opacity-30 z-10"></div> */}
        </div>
    )
    }

    export default Experience