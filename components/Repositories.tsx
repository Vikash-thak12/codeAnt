import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'
import { repo } from '@/constants'

const Repositories = () => {
    return (
        <main className='max-h-[450px] overflow-auto remove-scrollbar'>
            {
                repo.map((item) => {
                    return (
                        <>
                            <section key={item.id} className='flex flex-col gap-2 md:gap-4 w-full p-4 cursor-pointer'>
                                <div className='flex items-center gap-5'>
                                    <h1 className='font-bold text-lg md:text-xl'>{item.name}</h1>
                                    <button className='text-[#1570EF] text-sm border-2 px-3 md:px-4 bg-[#d9e9f6] border-[#9bccf2] rounded-full'>{item.mode}</button>
                                </div>
                                <div className='flex items-center justify-start gap-6 md:gap-10'>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-sm'>{item.lang}</p>
                                        <div className='w-2 h-2 bg-[#1570EF] rounded-full' />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image src={"/assets/database.png"} alt='logo' width={14} height={14} />
                                        <span className='text-sm line-clamp-1'>{item.space} KB</span>
                                    </div>
                                    <p className='text-sm line-clamp-1'>Updated {item.day} {item.day > 1 ? "days" : "day"} ago</p>
                                </div>
                            </section>
                            <Separator />
                        </>
                    )
                })
            }
        </main>
    )
}

export default Repositories
