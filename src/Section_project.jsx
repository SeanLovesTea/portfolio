import React from 'react'

function Section_project({backgroundColor}) {
  return (
    <>
    <div className={`h-screen bg-${backgroundColor}`}>
      <div className='p-8 flex h-full w-full'>

        <div className='w-1/3 flex flex-col'>
          <img src='#' className='w-full h-full'></img>
          <div className='mt-16 h-1 border border-black border-r-0'></div>
        </div>

        <div className='w-1/3 flex flex-col'>
          <div className='p-2 border border-black border-r-0'>Project Title
          </div>
          <div className='h-full'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem fuga minus impedit sint voluptates sequi rem, commodi nesciunt tenetur atque obcaecati voluptatibus facilis minima hic veniam, ipsum suscipit ullam!
          </div>
          <div className='mt-16 h-1 border border-black border-l-0'></div>
        </div>

        <div className='w-1/3 flex flex-col h-full'>
        <div className='p-2 border border-l-0 border-black text-black text-opacity-0 '>Project Title</div>
          <div className='h-full pl-12'>
              <div>more tech bla bla</div>
              <ul>
                <li>point 1</li>
                <li>point 2</li>
                <li>point 3</li>
              </ul>
              <div>
                <div>JS</div>
                <div>React</div>
                <div>Node</div>
                <div>Mongo</div>
              </div>
            </div>
            <div className='flex pl-12'>
              <button className='flex-grow border border-black p-2 mr-2'>Review Code</button>
              <button className='flex-grow border border-black p-2'>See It Live</button>
            </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Section_project