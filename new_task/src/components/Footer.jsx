import React from 'react'

const Footer = () => {
  return (
    <div className='w-full shadow-lg py-6 px-3 bg-white'>
      <div className='flex flex-wrap gap-2 text-xs text-gray-500'>
        <a href="#" className='pr-1 footer-link'>Help Center</a>
        <a href="#" className='pr-1 footer-link'>About</a>
        <a href="#" className='pr-1'>Privacy Policy</a>
        <a href="#" className='pr-1 footer-link'>Community Guidelines</a>
        <a href="#" className='pr-1'>Cookies Policy</a>
        <a href="#" className='pr-1 footer-link'>Career</a>
        <a href="#" className='pr-1 footer-link'>Language</a>
        <a href="#" className='pr-1'>Copyright Policy</a>
      </div>
      <div className='mt-3 flex text-sm items-center gap-1'>
        <div className='flex gap-2 items-center'>
          <h3 className='bg-red-500 px-2 py-1 text-white font-bold rounded-full'>W</h3>
          <p className='text-red-500 font-bold'>Workwise</p>
        </div>
        <div className='text-xs text-gray-500'>
          <p>&copy; Copyright 2017</p>
        </div>
      </div>
    </div>
  )
}

export default Footer