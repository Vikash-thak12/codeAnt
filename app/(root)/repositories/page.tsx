import Repositories from '@/components/Repositories'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'


const Repository = () => {
  return (
    <main>
      <section className='mx-5'>
        <div className='flex max-sm:flex-col md:justify-between gap-2 pb-5'>
          <div>
            <h1 className='font-bold text-xl'>Repositories</h1>
            <p>33 total repositories</p>
          </div>
          <div className='flex items-center gap-5'>
            <button className='bg-white border border-gray-500 rounded-md flex items-center gap-2 px-4 py-2 text-black text-sm hover:bg-gray-100 transition-all'>
              <Image src={"/assets/refresh.png"} alt='logo' width={16} height={16} />
              Refresh All
            </button>
            <button className='bg-blue-500 rounded-md flex items-center gap-2 px-2 py-2 text-white text-sm'>
              <Image src={"/assets/add.png"} alt='logo' width={16} height={16} />
              Add Repository
            </button>
          </div>
        </div>
        <div className="flex items-center w-[300px] border border-gray-300 rounded-lg px-3 py-2 gap-2">
          <Image
            src="/assets/gear.png"
            alt="search icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <input
            type="text"
            placeholder="Search Repositories"
            className="flex-1 outline-none border-none text-gray-700"
          />
        </div>
      </section>
      <Separator className='mt-5' />
      <Repositories />
    </main>
  )
}

export default Repository
