import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen bg-zinc-800 '>
      <div className=' pt-10 py-2.5 px-5 flex justify-between'>
        <div className=''>
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="image" className='w-11 h-11 rounded-[5px]' />
        </div>
        <div className='grid grid-rows-1 ml-[12px] '>
          <span className='text-white text-[13px] font-normal leading-[20.90px]'>Shekhar Kushwaha</span>
          <span className='text-orange-500 text-[13px] font-normal leading-[20.90px]'>Upgrade to Pro</span>
        </div>
        <div className=' flex'>
          <svg className=' m-auto' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 15">
              <path id="Vector 9" d="M7 13L13 7L7 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path id="Vector 10" d="M1 13L7 7L1 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
