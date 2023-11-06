import React from 'react'

function Header() {
  return (
    <>
    <div className="bg-gradient-to-b from-myBeige to-black p-6 text-white h-screen flex flex-col ">
      <nav className="flex justify-between ">
        <a href="https://github.com/SeanLovesTea">Github</a>
        <div className="bg-orange-200 bg-opacity-40 rounded-sm p-2 cursor-pointer text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>

      <div className="flex flex-col flex-1 text-center my-36">
        <div>
          <h1>Hello, I'm Sean Concannon</h1>
          <h2>Full Stack web developer</h2>
          <div>React, Express, MongoDB, NodeJs</div>
        </div>
      </div>

      <div className="mt-auto mb-16 relative">
        <div className="flex ">
          <button className="border flex-1 p-2 mr-2 rounded-sm">About Me</button>
          <button className="border flex-1 p-2 mr-2 rounded-sm">Projects</button>
          <button className="border flex-1 p-2 rounded-sm">Contact</button>
        </div>

        <div className="absolute right-1/2 top-20 cursor-pointer hover:-translate-y-3 hover:pb-2 transition-transform ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header