'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Separator } from '@radix-ui/react-select'
import { cn } from '@/lib/utils'


const Header = () => {

  const [isopen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <main className='p-5 md:hidden lg:hidden xl:hidden'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src={"/assets/logo.png"} alt='logo' width={32} height={32} />
          <p className='font-semibold text-xl'>CodeAnt AI</p>
        </div>
        <div>
          <Sheet open={isopen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Image src={"/assets/bars.png"} alt='logo' width={24} height={24} />
            </SheetTrigger>
            <SheetContent className='w-full h-[500px]' side={"top"}>
              <SheetHeader>
                <SheetTitle>
                  <div className='flex items-center gap-2'>
                    <Image src={"/assets/icon.png"} alt='logo' width={40} height={40} />
                    <p>CodeInt AI</p>
                  </div>
                </SheetTitle>
                <Separator />
                <div>
                  <nav className='mt-5 flex-1 text-brand'>
                    <ul className='flex flex-col gap-2 flex-1'>
                      {navItems.map(({ name, url, icon }) => (
                        <Link href={url} key={name}>
                          <li className={cn("flex items-center gap-5 px-4 py-3 rounded-lg", (pathname == url) && "bg-blue-500")}>
                            <Image src={icon} alt='logo' width={32} height={32} />
                            <p className={cn("hidden lg:block text-black", (pathname == url) && "text-black")}>Vikash</p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </nav>
                </div>
                <Separator />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </main>
  )
}

export default Header
