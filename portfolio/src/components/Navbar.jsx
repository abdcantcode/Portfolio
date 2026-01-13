import React from 'react'

const Navbar = () => {
  return (
    
      <div className='navbar h-10 w-[75%] m-auto bg-black text-white flex items-center justify-between rounded-4xl p-10'>
        <div className='navbar-left '>
          <h4>ABDULLAH</h4>
        </div>

        <div className='navbar-right flex gap-5'>
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Contact Me</a>
        </div>

      </div>
    
  )
}

export default Navbar
