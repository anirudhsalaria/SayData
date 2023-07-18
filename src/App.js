import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='w-full flex'>
      <div className='w-[284px]'>
        <Sidebar/>
      </div>
      <div className='border w-full bg-stone-50'>
        Main Content
      </div>
    </div>
  )
}

export default App
