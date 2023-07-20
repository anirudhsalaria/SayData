import React from 'react'

const Recents = () => {
    return (
        <div className=' w-full p-3'>
            <div className=' flex justify-between'>
                <div className='ml-5  text-zinc-800 text-xl font-semibold leading-loose'>
                    Recents
                </div>
                <div className='flex  gap-3 mr-5'>
                    <div className='flex cursor-pointer'>
                        <svg className='m-auto' width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group">
                                <path id="Vector" d="M0.408436 0.653763H17.5906C17.8168 0.653763 18 0.837015 18 1.06319C18 1.1877 17.9445 1.29917 17.8568 1.37432L10.9984 8.19844V14.0547C10.9984 14.2169 10.9042 14.3569 10.7675 14.4233L7.53226 16.2913C7.337 16.4042 7.08709 16.3376 6.97386 16.1424C6.93651 16.0778 6.91878 16.0074 6.91893 15.9376H6.91805V8.19712L0.118837 1.35117C-0.0402449 1.19121 -0.0395125 0.932669 0.120448 0.773734C0.200136 0.694485 0.304286 0.654935 0.408436 0.654935V0.653763ZM16.6001 1.47276H1.39061L7.5954 7.72017C7.68211 7.79517 7.7369 7.9062 7.7369 8.02984V15.2294L10.1794 13.8195V8.02984H10.1805C10.1805 7.92495 10.2207 7.82007 10.301 7.74024L16.6001 1.47276Z" fill="#333333" />
                            </g>
                        </svg>
                    </div>
                    <div className='m-auto text-zinc-800 text-md font-medium leading-normal'>Filter</div>
                </div>
            </div>

            {/* Recents content */}

            <div className=' mt-6'>
                <div className='flex px-3 justify-between'>
                    <div className=' text-zinc-800 text-base font-medium leading-[20.90px]'>File Name</div>

                    <div className=' flex md:gap-[138px]  text-zinc-800 text-base font-medium leading-[20.90px]'>
                        <div className=' px-2'>Duration</div>
                        <div className=' px-2'>Created by</div>
                        <div className=' px-2'>Created on</div>
                    </div>
                </div>
            </div>

            <div className=' mt-3 bg-white shadow-xl'>
                <div className='flex p-3 justify-between text-zinc-800 text-base font-normal leading-[20.90px]'>
                    <div className=''>Induction Seminar</div>

                    <div className=' flex md:gap-28'>
                        <div className=' '>1 hr 20 min</div>
                        <div className=''>Shekhar Kushwaha</div>
                        <div className=''>20 march 2023</div>
                    </div>
                </div>
            </div>
            <div className=' mt-3 bg-white shadow-xl'>
                <div className='flex p-3 justify-between text-zinc-800 text-base font-normal leading-[20.90px]'>
                    <div className=''>Induction Seminar</div>

                    <div className=' flex md:gap-28'>
                        <div className=' '>1 hr 20 min</div>
                        <div className=''>Shekhar Kushwaha</div>
                        <div className=''>20 march 2023</div>
                    </div>
                </div>
            </div>
            <div className=' mt-3 bg-white shadow-xl'>
                <div className='flex p-3 justify-between text-zinc-800 text-base font-normal leading-[20.90px]'>
                    <div className=''>Induction Seminar</div>

                    <div className=' flex md:gap-28'>
                        <div className=' '>1 hr 20 min</div>
                        <div className=''>Shekhar Kushwaha</div>
                        <div className=''>20 march 2023</div>
                    </div>
                </div>
            </div>
            <div className=' mt-3 bg-white shadow-xl'>
                <div className='flex p-3 justify-between text-zinc-800 text-base font-normal leading-[20.90px]'>
                    <div className=''>Induction Seminar</div>

                    <div className=' flex md:gap-28'>
                        <div className=' '>1 hr 20 min</div>
                        <div className=''>Shekhar Kushwaha</div>
                        <div className=''>20 march 2023</div>
                    </div>
                </div>
            </div>

            <div className='mt-3 mb-10'>
                <div className=' flex gap-3 justify-center'>
                    <div className='text-orange-500 text-xs font-normal leading-none'>View more</div>
                    <div className='flex cursor-pointer'>
                        <svg className='m-auto' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 9" d="M13 0.5L7 6.5L1 0.500001" stroke="#FF6C0A" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recents
