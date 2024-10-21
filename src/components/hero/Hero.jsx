import React from 'react'
import { LoreIcon } from '../common/Icons'
import { CARD_DATA } from '../common/Helper'
const Hero = () => {
  return (
    <div className='flex gap-5 min-h-screen justify-center items-center px-3'>
           {CARD_DATA.map((val , i) => (
        <div key={i} className='bg-gray-500 p-5 gap-5 flex flex-col hover:bg-white hover:shadow-2xl hover:border hover:border-red-500 duration-300 ease-linear group'>
         <h2 className='text-2xl flex items-center text-white group-hover:text-black'><LoreIcon/>{val.heading}
                   </h2>
          <p className='text-lg text-white group-hover:text-black'>{val.post}</p>
          <p className='text-sm text-white group-hover:text-black'>{val.description}</p>    
          {val.content.map((obj , i) => (
        <a href='#' key={i} className='text-white group-hover:text-black'>
          {obj.item}
        </a>
      ))}      
                  </div>
      ))}
                   </div>
  )
}

export default Hero
