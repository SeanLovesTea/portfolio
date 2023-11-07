import React from 'react';

function Project_section({
  backgroundColor,
  borderColor,
  textColor,
  image,
  description,
  smallDescriton,
  points,
  techstack,
  github,
  liveSite,
  reversed,
}) {
  console.log(`border-${borderColor}, ${reversed}`)
  return (
    <>
      <div className={`h-screen bg-${backgroundColor} text-${textColor}`}>
        <div className='flex flex-col p-8 h-full w-full'>
        <div className={`flex ${reversed && 'flex-row-reverse '} h-full w-full`}>
            <div className={`w-1/3 flex flex-col m${reversed ? 'l' : 'r'}-6`}>
              <img src={image} className='w-full h-full' alt='Project Image' />
            </div>
            <div className='w-2/3 flex'>
              <div className='w-1/2 flex flex-col'>
                <div className={`p-2 border border-${borderColor} border-r-0`}>
                  Project Title
                </div>
                <div className={`h-1 border border-${borderColor} border-t-0 border-r-0 mb-6`}></div>
                <div className='h-full'>{description}</div>
              </div>

              <div className='w-1/2 flex flex-col h-full'>
                <div className={`p-2 border border-${borderColor} border-l-0 text-black text-opacity-0`}>
                  Project Title
                </div>
                <div className={`h-1 border border-${borderColor} border-t-0 border-l-0 mb-6`}></div>
                <div className='h-full pl-12'>
                  <div className='h-1/3'>{smallDescriton}</div>
                  <div className='h-1/3'>
                    <ul>
                      {points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='h-1/3 flex flex-col justify-end pb-6'>
                    <div className='flex'>
                      {techstack.map((tech, index) => (
                        <div key={index}>{tech}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className={`mt-16 h-1 border border-${borderColor} w-2/3`}></div>
            <div className='flex w-1/3 pl-14'>
              <button className={`flex-grow border border-${borderColor} p-2 mr-2`}>Review Code</button>
              <button className={`flex-grow border border-${borderColor} p-2`}>See It Live</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project_section;
