import React from 'react'

const Container = ({children}) => {
  return (
    <div className='border-2 border-yellow-400 w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container