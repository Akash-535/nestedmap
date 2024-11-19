import React from 'react'
import { useLocation } from 'react-router-dom'
const CommonHeading = ({text}) => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div>
      <h2 className={`${currentPath === '/' ? "text-red-500" : "text-green-600"}`}>{text}</h2>
    </div>
  )
}

export default CommonHeading
