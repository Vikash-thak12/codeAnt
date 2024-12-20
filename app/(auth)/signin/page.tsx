import Image from 'next/image'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '@/components/ui/separator'

const upperlinks = [
  {
    icon: "/assets/github.png",
    name: "Sign in with Github",
  },
  {
    icon: "/assets/bitbucket.png",
    name: "Sign in with Bitbucket",
  },
  {
    icon: "/assets/azure-devops.png",
    name: "Sign in with Azure Devops",
  },
  {
    icon: "/assets/gitlab.png",
    name: "Sign in with GitLab",
  },
];



const SignInPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='min-h-[560px] w-full md:mx-5 mx-3 bg-white rounded-[20px] p-5'>
        <div className='flex items-center justify-center gap-4 p-5'>
          <Image src={"/assets/logo.png"} alt='logo' width={48} height={32} />
          <p className='text-2xl'>CodeAnt AI</p>
        </div>
        <h1 className='text-center font-bold md:text-3xl text-xl'>Welcome to CodeAnt AI</h1>

        <div className='mt-5'>
          <Tabs defaultValue="account" className="w-full flex flex-col items-center justify-center">
            <TabsList className='w-full grid grid-cols-2'>
              <TabsTrigger value="SAAS">SAAS</TabsTrigger>
              <TabsTrigger value="Self">Self Hosted</TabsTrigger>
            </TabsList>
            <Separator className='my-5' />
            <TabsContent value="SAAS" className='w-full'>
              {
                upperlinks.map((item) => (
                  <div key={item.name} className='flex items-center justify-center mb-2 cursor-pointer gap-5 border border-black md:mx-10 px-5 py-2 rounded-md'>
                    <Image src={item.icon} alt='logo' width={32} height={32} />
                    <p>{item.name}</p>
                  </div>
                ))
              }
            </TabsContent>
            <TabsContent value="Self">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
