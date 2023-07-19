import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className='w-full flex'>
      <div className='w-[284px]'>
        <Sidebar/>
      </div>
      <div className='border w-full bg-stone-50'>
        <div className='border text-zinc-800 text-[32px] font-semibold leading-[42.90px] p-5 pt-10'>
          Dashboard
        </div>
        <SearchBar/>
      </div>
    </div>
  )
}

export default App
