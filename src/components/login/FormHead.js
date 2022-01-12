import React from 'react'

const FormHead = () => {
    return (
        <>
            <div className=' w-4/6 rounded-lg'>
                <div className='justify-center'>
                    <p className='text-sm font-semibold drop-shadow'>Dashboard</p>
                    <h2 className='font-medium text-3xl'>Sign In</h2>
                </div>
                <div className='flex justify-center w-full border drop-shadow rounded-md border-bhlum mx-auto my-5 text-center p-1' >
                    <img className='  h-5 w-5 mr-2 my-1 ' src={require("./../icons/google.png")} alt="" />
                    <p className=' font-semibold drop-shadow'>sign in with google </p>
                </div>
                <div className="line-custom">
                    <span className="lineHr ">
                        <p className='px-2'>or</p>
                    </span>
                </div>

            </div>
        </>
    )
}

export default FormHead;
