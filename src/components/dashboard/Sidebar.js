import React from 'react'

const Sidebar = () => {
    return (
        <>
         <div className="flex flex-wrap justify-center flex-col items-center ">
            <div className='mt-5 mb-7'>
            <h1 className='text-white uppercase text-3xl'> Helsb</h1>
            </div>
            <div className='w-4/6 mt-5 mb-7'>
            <img className=' w-full  ' src={require("../icons/profile.png")} alt="" />
            </div>
            <div className=' my-5 flex flex-wrap justify-center items-center border text-center p-4'>
                <div className='w-2/4 border border bg-white'>I am routers </div>
                <div className='w-2/4 border border bg-white'>I am routers</div>    
                <div className='w-2/4 border border bg-white'>I am routers</div>
                <div className='w-2/4 border border bg-white'>I am routers</div>
            </div>
            <div className='flex flex-wrap justify-center items-center my-5 p-2 '>
            <img className=' ' src={require("../icons/logout.png")} alt="" />
                <p className='m-2 text-white font-extralight'> Logout</p>
            </div>
         </div>
        </>
    )
}

export default Sidebar;
