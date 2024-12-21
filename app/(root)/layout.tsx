import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <main className='flex h-screen'>
      <Sidebar />
      <section className='flex flex-1 flex-col h-full'>
         <Header />
        <div className='md:mt-5 md:mx-5 min-h-[650px] flex-1 py-7 lg:mb-7 md:rounded-[30px] lg:mr-7 bg-white overflow-auto remove-scrollbar'>
          {children}
        </div>
      </section>
    </main>
  )
}

export default layout
