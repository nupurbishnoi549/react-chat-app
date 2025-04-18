import React from 'react'

const CustomBtn = ({text,myClass}) => {
  return (
      <button className={` text-white cursor-pointer  rounded-full border-2 border-white px-12 py-4 text-base font-medium transition-all duration-300 hover:bg-white hover:text-[#1E71FF] hover:scale-105 ${myClass}`}>
          {text}
   </button>
   
  )
}

export default CustomBtn
