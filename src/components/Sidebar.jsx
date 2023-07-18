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

      <div className=' grid grid-rows-1 p-4 gap-5 mt-6'>
        <div className='flex  px-[20px] py-[7px] gap-2 bg-orange-500 rounded-md'>
          <div className=' flex'>
            <svg className='m-auto' width="15" height="15" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 16">
                <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M0.392088 7.42945C0 8.28193 0 9.25176 0 11.1914V17.2491C0 19.9429 0 21.2898 0.836838 22.1266C1.59619 22.886 2.7755 22.9563 5 22.9628V15.8207C5 14.2427 6.27918 12.9635 7.85714 12.9635H12.1429C13.7208 12.9635 15 14.2427 15 15.8207L12.1429 15.8207H7.85714L7.85715 22.9635H12.1429V15.8207H15V22.9628C17.2245 22.9563 18.4038 22.886 19.1632 22.1266C20 21.2898 20 19.9429 20 17.2491V11.1914C20 9.25177 20 8.28193 19.6079 7.42945C19.2158 6.57696 18.4795 5.9458 17.0068 4.68349L15.5782 3.45899C12.9163 1.17737 11.5854 0.0365601 10 0.0365601C8.41461 0.0365601 7.08367 1.17737 4.42179 3.45899L4.42179 3.45899L2.99322 4.68349C1.52052 5.9458 0.784175 6.57696 0.392088 7.42945Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className='text-white text-sm font-semibold leading-relaxed'>
            Dashboard
          </div>
        </div>
        <div className='flex  px-[20px] py-[7px] gap-2  rounded-md'>
          <div className=' flex'>
            <svg className="m-auto" width="15" height="15" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 17">
                <rect id="Rectangle 25" x="2" y="4.83334" width="20" height="16.6667" rx="2.22222" stroke="#C3C3C3" stroke-width="2.22222" />
                <path id="Vector 3" d="M3.11108 10.3889H20.8889" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
                <path id="Vector 4" d="M8.66669 15.9445H15.3334" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
                <path id="Line 1" d="M7.55554 1.5L7.55554 5.94444" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
                <path id="Line 2" d="M16.4445 1.5L16.4445 5.94444" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
              </g>
            </svg>
          </div>
          <div className='text-white text-sm font-semibold leading-relaxed'>
            Calender
          </div>
        </div>
        <div className='flex  px-[20px] py-[7px] gap-2  rounded-md'>
          <div className=' flex'>

            <svg className='m-auto' width="15" height="15" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 18">
                <path id="Rectangle 4017" d="M2 12.75C2 10.393 2 9.21447 2.73223 8.48223C3.46447 7.75 4.64298 7.75 7 7.75H7.42893C8.45081 7.75 8.96175 7.75 9.42117 7.9403C9.8806 8.1306 10.2419 8.49189 10.9645 9.21447L11.7855 10.0355C12.5081 10.7581 12.8694 11.1194 13.3288 11.3097C13.7883 11.5 14.2992 11.5 15.3211 11.5H17C19.357 11.5 20.5355 11.5 21.2678 12.2322C22 12.9645 22 14.143 22 16.5V16.5C22 18.857 22 20.0355 21.2678 20.7678C20.5355 21.5 19.357 21.5 17 21.5H7C4.64298 21.5 3.46447 21.5 2.73223 20.7678C2 20.0355 2 18.857 2 16.5V12.75Z" stroke="#C3C3C3" stroke-width="2.5" />
                <path id="Vector 232" d="M19.5 11.5V6.5C19.5 4.14298 19.5 2.96447 18.7678 2.23223C18.0355 1.5 16.857 1.5 14.5 1.5H9.5C7.14298 1.5 5.96447 1.5 5.23223 2.23223C4.5 2.96447 4.5 4.14298 4.5 6.5V7.75" stroke="#C3C3C3" stroke-width="2.5" />
              </g>
            </svg>
          </div>
          <div className='text-white text-sm font-semibold leading-relaxed'>
            Folder
          </div>
        </div>
        <div className='flex  px-[20px] py-[7px] gap-2  rounded-md'>
          <div className=' flex'>

            <svg className='m-auto' width="15" height="15" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 19">
                <path id="Vector 8" d="M7.77777 15.3889L7.77777 12.0556" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
                <path id="Vector 9" d="M12.2222 15.3889L12.2222 12.0556" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
                <path id="Rectangle 41" d="M0 6.5H20V6.5C18.9646 6.5 18.4469 6.5 18.0385 6.66916C17.494 6.8947 17.0614 7.32731 16.8358 7.87181C16.6667 8.28019 16.6667 8.79791 16.6667 9.83333V16.5C16.6667 18.5951 16.6667 19.6427 16.0158 20.2936C15.3649 20.9444 14.3174 20.9444 12.2222 20.9444H7.77777C5.68265 20.9444 4.63508 20.9444 3.98421 20.2936C3.33333 19.6427 3.33333 18.5951 3.33333 16.5V9.83333C3.33333 8.79791 3.33333 8.28019 3.16418 7.87181C2.93863 7.32731 2.50603 6.8947 1.96152 6.66916C1.55314 6.5 1.03543 6.5 0 6.5V6.5Z" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
                <path id="Ellipse 45" d="M7.8535 2.46732C7.98012 2.34919 8.2591 2.24481 8.6472 2.17036C9.0353 2.09591 9.51082 2.05556 10 2.05556C10.4892 2.05556 10.9647 2.09591 11.3528 2.17036C11.7409 2.24481 12.0199 2.34919 12.1465 2.46732" stroke="#C3C3C3" stroke-width="2.22222" stroke-linecap="round" />
              </g>
            </svg>

          </div>
          <div className='text-white text-sm font-semibold leading-relaxed'>
            Trash
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
