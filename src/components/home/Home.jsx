import React from 'react'
import { LoreIcon } from '../common/Icons'
import { CARD_DATA_TWO } from '../common/Helper'

const Home = () => {
  return (
    <div className='flex gap-5 min-h-screen justify-center items-center px-3'>
      {CARD_DATA_TWO.map((obj , index) => (
          <div key={index} className='bg-gray-500 p-5 gap-5 flex flex-col hover:bg-white hover:shadow-2xl hover:border hover:border-red-500 duration-300 ease-linear group'>
          <h2 className='text-2xl flex items-center text-white group-hover:text-black'><LoreIcon/>{obj.heading}
                    </h2>
           <p className='text-lg text-white group-hover:text-black'>{obj.post}</p>
           <p className='text-sm text-white group-hover:text-black'>{obj.description}</p>    
           {obj.content.map((val , i) => (
         <a href='#' key={i} className='text-white group-hover:text-black'>
           {val.item}
         </a>
       ))}      
                   </div>
      ))}
    </div>
  )
}

export default Home
