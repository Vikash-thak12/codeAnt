import React from 'react'

const RootPage = () => {
  return (
    <div className='flex flex-col items-center justify-center md:h-screen max-sm:mt-20'>
        <span className='text-center md:text-4xl font-bold'>Oops!</span>
      <h1 className='md:text-4xl md:px-48 py-5'>
         This route doesn&apos;t exit, Url of this route is &quot;/&quot;
      </h1>
      <h1 className='text-center font-bold md:text-4xl'>Click on the Repositories to see all Repositories</h1>
    </div>
  )
}

export default RootPage
