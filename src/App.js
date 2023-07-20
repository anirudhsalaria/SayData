import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import Upload from './components/Upload';
import Connect from './components/Connect';
import Recents from './components/Recents';
import Api from './components/Api';

const App = () => {
  return (
    <div className='w-full flex'>
      <div className='w-[284px]'>
        <Sidebar/>
      </div>
      <div className=' w-full bg-stone-50'>
        <div className=' text-zinc-800 text-[32px] font-semibold leading-[42.90px] p-5 pt-10'>
          Dashboard
        </div>
        <SearchBar/>
        <Upload/>
        <Connect/>
        <Recents/>
        <Api/>
      </div>
    </div>
  )
}

export default App
