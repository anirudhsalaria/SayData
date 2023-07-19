import React from 'react'

const Connect = () => {
    return (
        <div className='w-full  md:flex sm:inline-block p-4'>
            <div className=' p-2 shadow-2xl rounded-lg'>
                <div className='text-zinc-800 text-lg font-medium leading-normal'>Connect your Google calendar</div>
                <div className='mt-2 w-[270px] text-zinc-800 text-sm font-normal leading-[18.70px]'>Sync your google calendar for seamless event transcriptions.</div>

                <div className='mt-3  flex justify-between'>
                    <div>
                        <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="g-calendar">
                                <g id="g-calendar_2">
                                    <path id="Vector" d="M37.9095 -2.28882e-05H31.2443V9.71045H40.9971V2.73808C40.9998 2.73808 40.5152 0.264784 37.9095 -2.28882e-05Z" fill="#1967D2" />
                                    <path id="Vector_2" d="M31.2472 41.1775V41.2013V41.2225L41 31.512H40.9126L31.2472 41.1775Z" fill="#1967D2" />
                                    <path id="Vector_3" d="M41.0009 31.513V31.4246L40.9125 31.513H41.0009Z" fill="#FBBC05" />
                                    <path id="Vector_4" d="M41 9.71044H31.2472V31.4246H41V9.71044Z" fill="#FBBC05" />
                                    <path id="Vector_5" d="M40.9126 31.512H31.2472V41.1775L40.9126 31.512Z" fill="#EA4335" />
                                    <path id="Vector_6" d="M31.2472 31.512H40.9126L41 31.4246H31.2472V31.512Z" fill="#EA4335" />
                                    <path id="Vector_7" d="M31.2232 41.2024H31.2481V41.1775L31.2232 41.2024Z" fill="#34A853" />
                                    <path id="Vector_8" d="M9.53281 31.4246V41.2013H31.2231L31.2469 31.4246H9.53281Z" fill="#34A853" />
                                    <path id="Vector_9" d="M31.2471 31.512V31.4246L31.2232 41.2013L31.2471 41.1775V31.512Z" fill="#34A853" />
                                    <path id="Vector_10" d="M-6.10352e-05 31.4246V38.2222C0.0873251 40.4281 2.45999 41.2013 2.45999 41.2013H9.53298V31.4246H-6.10352e-05Z" fill="#188038" />
                                    <path id="Vector_11" d="M9.53304 9.71048H31.2472V0H2.73545C2.73545 0 0.174772 0.264807 0 3.00027V31.4247H9.53304V9.71048Z" fill="#4285F4" />
                                    <g id="31">
                                        <path d="M16.6369 27.0294C16.1401 27.0294 15.6611 26.9643 15.1998 26.8342C14.7503 26.7041 14.3363 26.5089 13.9578 26.2487C13.5793 25.9767 13.2422 25.6396 12.9465 25.2374C12.6627 24.8353 12.4438 24.368 12.2901 23.8358L14.4723 22.9664C14.6261 23.5578 14.8863 24.0073 15.253 24.3148C15.6197 24.6105 16.081 24.7584 16.6369 24.7584C16.8853 24.7584 17.1218 24.7229 17.3466 24.6519C17.5713 24.5691 17.7664 24.4568 17.932 24.3148C18.0976 24.1729 18.2277 24.0073 18.3224 23.818C18.4288 23.617 18.482 23.3922 18.482 23.1438C18.482 22.6234 18.2869 22.2153 17.8966 21.9196C17.5181 21.6239 16.9917 21.4761 16.3175 21.4761H15.2707V19.3648H16.2288C16.4654 19.3648 16.696 19.3352 16.9207 19.2761C17.1455 19.2169 17.3406 19.1282 17.5062 19.0099C17.6837 18.8798 17.8197 18.7202 17.9143 18.5309C18.0207 18.3298 18.074 18.0992 18.074 17.839C18.074 17.4368 17.932 17.1115 17.6482 16.8631C17.3643 16.6029 16.9799 16.4728 16.4949 16.4728C15.9745 16.4728 15.5723 16.6148 15.2885 16.8986C15.0164 17.1707 14.8272 17.4782 14.7207 17.8212L12.5917 16.9519C12.6981 16.6562 12.8578 16.3545 13.0707 16.047C13.2836 15.7277 13.5498 15.4438 13.8691 15.1954C14.2003 14.9352 14.5847 14.7282 15.0223 14.5744C15.46 14.4088 15.9627 14.326 16.5304 14.326C17.11 14.326 17.6363 14.4088 18.1095 14.5744C18.5944 14.74 19.0084 14.9707 19.3514 15.2664C19.6944 15.5502 19.9605 15.8932 20.1498 16.2954C20.339 16.6857 20.4337 17.1115 20.4337 17.5728C20.4337 17.9277 20.3864 18.247 20.2917 18.5309C20.2089 18.8148 20.0966 19.0691 19.9546 19.2938C19.8127 19.5185 19.6471 19.7137 19.4579 19.8793C19.2804 20.0331 19.0971 20.1573 18.9079 20.2519V20.3938C19.4756 20.6186 19.9428 20.9793 20.3095 21.4761C20.688 21.9729 20.8772 22.5998 20.8772 23.3568C20.8772 23.889 20.7767 24.3799 20.5756 24.8293C20.3745 25.267 20.0847 25.6514 19.7062 25.9826C19.3396 26.3138 18.896 26.5681 18.3756 26.7455C17.8552 26.9347 17.2756 27.0294 16.6369 27.0294Z" fill="#4285F4" />
                                        <path d="M25.1141 26.7455V17.3422L22.9673 18.247L22.1157 16.2777L25.6818 14.6099H27.4383V26.7455H25.1141Z" fill="#4285F4" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='flex cursor-pointer'>
                        <svg className='m-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 6">
                                <circle id="Ellipse 47" cx="12" cy="12" r="12" fill="#FF6C0A" />
                                <path id="Vector 52" d="M12 6.66667L12 17.3333" stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                <path id="Vector 53" d="M17.3333 12L6.66666 12" stroke="white" stroke-width="1.6" stroke-linecap="round" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='md:ml-4  p-2 shadow-2xl rounded-lg'>
                <div className='text-zinc-800 text-lg font-medium leading-normal'>Connect your Google calendar</div>
                <div className='mt-2 w-[270px] text-zinc-800 text-sm font-normal leading-[18.70px]'>Sync your google calendar for seamless event transcriptions.</div>

                <div className='mt-4  flex justify-between'>
                    <div>
                        <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="g-meet">
                                <g id="meet">
                                    <path id="Vector" d="M0 31.5404C0 33.0557 1.21133 34.2831 2.70378 34.2831H2.74265C1.22733 34.2831 0 33.0557 0 31.5404Z" fill="#FBBC05" />
                                    <path id="Vector_2" d="M23.2348 10.2849V17.4455L32.6809 9.65869V2.74265C32.6809 1.22733 31.4696 0 29.9771 0H9.51241L9.49413 10.2849H23.2348Z" fill="#FBBC05" />
                                    <path id="Vector_3" d="M23.2348 24.6084H9.47128L9.45528 34.2831H29.9771C31.4719 34.2831 32.6809 33.0557 32.6809 31.5404V25.2963L23.2348 17.4478V24.6084Z" fill="#34A853" />
                                    <path id="Vector_4" d="M9.51241 0L0 10.2849H9.49641L9.51241 0Z" fill="#EA4335" />
                                    <path id="Vector_5" d="M0 24.6084V31.5404C0 33.0557 1.22733 34.2831 2.74265 34.2831H9.45527L9.47127 24.6084H0Z" fill="#1967D2" />
                                    <path id="Vector_6" d="M9.49641 10.2849H0V24.6084H9.47127L9.49641 10.2849Z" fill="#4285F4" />
                                    <path id="Vector_7" d="M40.9866 29.1018V5.56071C40.454 2.43638 37.1011 6.01782 37.1011 6.01782L32.6832 9.65869V25.2941L39.0073 30.5485C41.2905 30.8548 40.9866 29.1018 40.9866 29.1018Z" fill="#34A853" />
                                    <path id="Vector_8" d="M23.2348 17.4455L32.6832 25.2963V9.66097L23.2348 17.4455Z" fill="#188038" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='flex cursor-pointer'>
                        <svg className='m-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 6">
                                <circle id="Ellipse 47" cx="12" cy="12" r="12" fill="#FF6C0A" />
                                <path id="Vector 52" d="M12 6.66667L12 17.3333" stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                <path id="Vector 53" d="M17.3333 12L6.66666 12" stroke="white" stroke-width="1.6" stroke-linecap="round" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect
