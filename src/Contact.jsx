import React, { useRef, useState } from 'react'
import * as motion from 'motion/react-client'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './index.css'

function Contact() {
  const form = useRef()
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )      
      .then(
        (result) => {
          console.log(result.text)
          setSent(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="h-[80dvh] bg-[#010409] flex justify-center items-center">
      <div className="w-3/4 text-white">
        <motion.h4 className="text-4xl ml-10 font-semibold mb-4">
          Contact
        </motion.h4>

        <div className="flex flex-col md:flex-row gap-8 ml-10">
          <div className="flex-1">
            <p className="text-gray-400 mb-4">
              Feel free to reach out to me for collaborations, opportunities, or just a friendly chat!
            </p>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2">
                <FiMail className="text-xl text-blue-400" />
                <span>hendrahendra777999000@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-xl text-green-400" />
                <span className="cursor-pointer">+62 857-0709-3294</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-xl text-red-400" />
                <span>Blitar, Indonesia</span>
              </li>
            </ul>
            {sent && (
              <p className="text-green-400 mt-4">Your message has been sent!</p>
            )}
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 bg-[#0f172a] p-6 rounded-xl shadow-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-[#1e293b] text-white text-sm outline-none focus:ring-2 ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-[#1e293b] text-white text-sm outline-none focus:ring-2 ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 rounded bg-[#1e293b] text-white text-sm outline-none focus:ring-2 ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
