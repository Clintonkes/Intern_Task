import React from 'react'

const SignUpBanner = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white shadow-lg py-8'>
        <div className='w-full flex justify-center flex-col items-center gap-1 pb-8 border-b-2'>
            <h2 className='text-4xl px-2 py-1 bg-red-500 text-white rounded-full font-extrabold'>W</h2>
            <p className='font-semibold'>Track Time on WorkWise</p>
            <p className='text-sm text-gray-500'>Pay only for the Hours worked</p>
        </div>
        <div className='flex flex-col justify-center items-center pt-5 gap-1'>
            <p className='font-semibold text-lg'>Sign Up </p>
            <a href="#" className='text-red-600 text-sm'>Learn More</a>
        </div>
    </div>
  )
}

export default SignUpBanner