import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

const items = [
    {
        value: 30,
        name: "Language Support"
    },
    {
        value: "10K",
        name: "Developers"
    },
    {
        value: "100K",
        name: "Hours Saved"
    },
]

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-screen w-full grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-white h-full hidden md:block'>
                <div className='flex items-center justify-center h-screen relative'>
                    {/* first box */}
                    <div className='border border-gray-200 rounded-[30px] shadow-md shadow-gray-200 -mt-40'>
                        <div className='flex items-center gap-4 p-5'>
                            <Image src={"/assets/logo.png"} alt='logo' width={48} height={32} />
                            <p className='font-bold text-xl'>AI to Detect & Autofix bad code</p>
                        </div>
                        <Separator />
                        <div className='mt-5 flex items-center justify-center gap-5 pb-5'>
                            {
                                items.map((val) => (
                                    <div key={val.name} className='flex flex-col items-center justify-between'>
                                        <span className='font-bold'>{val.value}+</span>
                                        <span className='text-sm'>{val.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* second box */}
                    <div className='absolute bottom-[210px] right-40 z-100 bg-white border px-5 py-2 rounded-[20px] min-w-56 border-gray-200 shadow-md shadow-gray-200'>
                        <div className='flex items-center justify-between'>
                            <div className='p-3 bg-[#e6e2ff] rounded-full'>
                                <Image src={"/assets/vec.png"} alt='logo' width={24} height={32} />
                            </div>
                            <div>
                                <div className='flex items-center text-[#0049C6]'>
                                    <FaArrowUp />
                                    <span className='font-bold'>14%</span>
                                </div>
                                <p className='text-xs -mt-1'>This week</p>
                            </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <span className='text-sm font-bold'>Issues Fixed</span>
                            <span className='font-bold text-[32px]'>500K+</span>
                        </div>
                    </div>

                    <div className='absolute bottom-0 left-0'>
                        <Image src={"/assets/Subtract.png"} alt='logo' width={250} height={32} />
                    </div>
                </div>
            </div>
            <div className='bg-yellow-500 w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;
