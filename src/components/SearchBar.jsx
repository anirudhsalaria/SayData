import React from 'react'

const SearchBar = () => {
  return (
    <div className=' p-3 text-center relative flex flex-wrap items-stretch justify-center'>
      <input type="search" name="searchbar" id="sb" className='text-zinc-800 w-[824px] h-10 bg-white rounded-l-[20px] shadow border border-orange-500' placeholder='Search your transcriptions' aria-describedby="button-addon1" />
      <button
      className="border border-orange-500 bg-white relative z-[2] flex items-center rounded-r px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md "
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="orange"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
    </button>
    
    </div>
  )
}

export default SearchBar
