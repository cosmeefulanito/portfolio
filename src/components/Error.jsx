import React from 'react'

const Error = ({children}) => {
  return (
    <div className=' bg-red-800 text-white p-2 text-center font-bold mb-5'>{children}</div>
  )
}

export default Error