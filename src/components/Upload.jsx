import React, { useRef } from 'react';

const Upload = () => {
    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        
        console.log('Selected file:', file);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };



    return (
        <div className=' p-5'>
            <div className=' rounded-lg shadow-2xl p-5 md:flex sm:inline-block'>
                <div className=''>
                    <div className=' text-zinc-800 text-2xl font-semibold leading-loose'>
                        Start New Transcription
                    </div>
                    <div className=' mt-24'>
                        <div className=' text-zinc-800 text-base font-medium leading-[20.90px]'>Select Transcription language</div>
                        <div className=' text-zinc-800 text-sm font-normal leading-[18.70px] mt-3'>
                            <select className='bg-stone-50 border border-orange-500 rounded-md px-2' name="languages" id="language">
                                <option value="English">English (U.K) </option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className=' md:w-[600px] sm:w-full p-5 text-center my-auto'>
                    <div className=' flex'>
                        <svg className="m-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 1">
                                <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M20 0C15.1182 0 10.9216 2.91488 9.04746 7.09069C8.88022 7.46331 8.7685 7.71197 8.68413 7.88942C8.66334 7.93314 8.64652 7.96763 8.63307 7.99458L8.59355 7.99598C8.46635 7.99979 8.29196 8 8 8C3.58172 8 0 11.5817 0 16C0 20.4183 3.58172 24 8 24H8.34315L12.3431 20H8C5.79086 20 4 18.2091 4 16C4 13.7909 5.79086 12 8 12L8.12837 12.0002H8.1284C8.54354 12.0011 9.02685 12.0022 9.42861 11.9214C9.85365 11.8358 10.3451 11.6938 10.828 11.3812C11.3109 11.0687 11.6417 10.6785 11.8937 10.3257C12.0674 10.0827 12.2044 9.80093 12.2966 9.60701C12.4022 9.38487 12.5321 9.09545 12.687 8.75026L12.6968 8.72853C13.9494 5.93742 16.7506 4 20 4C23.2494 4 26.0506 5.93742 27.3032 8.72853L27.313 8.75023C27.4679 9.09543 27.5978 9.38486 27.7034 9.60701C27.7956 9.80093 27.9326 10.0827 28.1063 10.3257C28.3583 10.6785 28.6891 11.0687 29.172 11.3812C29.6549 11.6938 30.1463 11.8358 30.5714 11.9214C30.9731 12.0022 31.4565 12.0011 31.8716 12.0002H31.8716L32 12C34.2091 12 36 13.7909 36 16C36 18.2091 34.2091 20 32 20H27.6569L31.6569 24H32C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8 32 8C31.708 8 31.5336 7.99979 31.4065 7.99598L31.3669 7.99457C31.3535 7.96762 31.3367 7.93314 31.3159 7.88942C31.2315 7.71197 31.1198 7.46331 30.9525 7.09069C29.0784 2.91488 24.8818 0 20 0ZM8.59511 8.06737L8.59547 8.06672L8.59554 8.06666C8.59525 8.06716 8.59511 8.06739 8.59511 8.06737ZM31.4049 8.06737C31.4049 8.06738 31.4047 8.06715 31.4045 8.06666L31.4045 8.06671L31.4049 8.06737Z" fill="#333333" />
                                <path id="Vector 10" d="M20 20L18.5858 18.5858L20 17.1716L21.4142 18.5858L20 20ZM22 38C22 39.1046 21.1046 40 20 40C18.8954 40 18 39.1046 18 38L22 38ZM10.5858 26.5858L18.5858 18.5858L21.4142 21.4142L13.4142 29.4142L10.5858 26.5858ZM21.4142 18.5858L29.4142 26.5858L26.5858 29.4142L18.5858 21.4142L21.4142 18.5858ZM22 20L22 38L18 38L18 20L22 20Z" fill="#333333" />
                            </g>
                        </svg>
                    </div>
                    <div className=' mt-2'>
                        <input
                            type="file"
                            accept="video/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                        />
                        <button onClick={handleClick} className='bg-orange-500 px-4 py-1 text-white rounded-md text-md'>
                            Upload Video/Audio File
                        </button>
                    </div>
                    <div className='mt-1  text-zinc-800 text-xs font-normal leading-none'>
                        or insert Video/Audio link
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
