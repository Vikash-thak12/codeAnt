'use client'
import { bottomItems, navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const Sidebar = () => {

    const pathname = usePathname();
    return (
        <aside className='h-screen relative overflow-auto remove-scrollbar flex-col w-[90px] lg:w-[250px] xl:w-[300px] hidden md:flex px-5 py-7 bg-white'>
            <div className='md:block lg:hidden xl:hidden'>
                <Image src={"/assets/logo.png"} alt='logo' width={48} height={32} />
            </div>
            <div className='hidden lg:flex items-center gap-2'>
                <Image src={"/assets/logo.png"} alt='logo' width={32} height={32} />
                <h1 className='font-medium text-2xl'>CodeAnt AI</h1>
            </div>

            <div className='mt-5 hidden lg:block'>
                <Select>
                    <SelectTrigger className="w-full p-5 border-2 border-black ">
                        <SelectValue placeholder="UtkarshDhairyaPanwar" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">UtkarshDhairyaPanwar1</SelectItem>
                        <SelectItem value="dark">UtkarshDhairyaPanwar2</SelectItem>
                        <SelectItem value="system">UtkarshDhairyaPanwar3</SelectItem>
                    </SelectContent>
                </Select>
            </div>


            <nav className='mt-5 flex-1'>
                <ul className='flex flex-col gap-4 flex-1'>
                    {navItems.map(({ name, url, icon }) => (
                        <Link href={url} key={name}>
                            <li className={cn("flex items-center gap-5 px-4 py-3 rounded-lg", (pathname == url) && "bg-blue-500")}>
                                <Image src={icon} alt='logo' width={28} height={32} />
                                <p className={cn("hidden lg:block text-black", (pathname == url) && "text-white")}>{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>

            <nav className='mt-5 flex-1 relative'>
                <ul className='flex flex-col gap-2 flex-1 absolute bottom-0 w-full'>
                    {bottomItems.map(({ name, url, icon }) => (
                        <Link href={url} key={name}>
                            <li className={cn("flex items-center gap-5 px-4 py-3 rounded-lg", (pathname == url) && "bg-blue-500")}>
                                <Image src={icon} alt='logo' width={28} height={32} />
                                <p className={cn("hidden lg:block text-black", (pathname == url) && "text-white")}>{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
