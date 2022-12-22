import React from 'react'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import LinkedIn from '../assets/linkedIn.png'

const Contact = () => {
  return (
    <div className='bg-lightBlack w-full h-full flex flex-col justify-center items-center text-white text-center px-12 animate-fade-in'>
      <h2 className='text-xl md:text-5xl'>I'd love to collabrate with you</h2>
      <p className='italic text-lg text-gray-400 my-5'>Feel free to reach out and connect with me on any of these social media platform.</p>
      <p className=''>You're just a click away!</p>
      <div className='flex gap-5 my-10 justify-center items-center'>
        <a href="https://www.instagram.com/kesemeka/" target="_blank" className='w-10 h-10'>
            <img src={Instagram} alt="instageam" />
        </a>
        <a href="https://www.linkedin.com/in/clinton-ogayi/" target="_blank" className='w-10 h-10'>
            <img src={LinkedIn} alt="linkedIN" />
        </a>
        <a href="https://www.twitter.com/ClintonOgayi/" target="_blank" className='w-10 h-10'>
            <img src={Twitter} alt="twitter" />
        </a>
      </div>
      </div>
  )
}

export default Contact