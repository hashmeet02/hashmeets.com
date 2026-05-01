import React from 'react'
import resumeBackground from "../assets/resumeBackground.svg"
import cv from "../assets/cv.png"

const Resume = () => {
  return (
<div id='resume'
  className='relative w-full h-screen overflow-hidden' 
  style={{
    backgroundImage: `url(${resumeBackground})`,
    backgroundSize: 'cover', // Adjust to 'contain' for better visibility on small screens
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
  <div
    className='absolute inset-0 flex items-center justify-center z-10'
  >
    <a href="/hashmeet_saini_resume.docx" target="_blank" className='flex items-center justify-center'>
    <div
      className=' bg-blue-500/50  backdrop-blur-md rounded-full w-48 h-48 md:w-72 md:h-72 flex items-center justify-center transition transform hover:scale-150 duration-700 '
    >
      
        <img
          src={cv}
          alt="download resume"
          className='w-24 h-24 md:w-48 md:h-48'
        />
      
    </div>
    </a>
  </div>
</div>



  )
}

export default Resume