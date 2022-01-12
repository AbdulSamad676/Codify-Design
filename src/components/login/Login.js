import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHtml5,faCss3,faBootstrap,faReact,faGoogle } from '@fortawesome/free-brands-svg-icons'
import From from './From';

const Login = () => {    
    return (
        <div className="flex flex-wrap">
            <div  className=' flex justify-center items-center bg-purpleb w-full  sm:w-full md:w-1/2 lg:w-2/3 '>
                <h1 className='my-auto font-bold text-5xl text-white uppercase'>Helsb</h1>
            </div>
                
            <div className='flex justify-center items-center bg-white min-h-screen w-full sm:w-full md:w-1/2 lg:w-1/3'>
                <div className=' w-4/6 h-3/4 rounded-lg'>
                    <div className='justify-center'>
                        <p className='text-sm font-semibold drop-shadow'>Dashboard</p>
                        <h2 className='font-medium text-3xl'>Sign In</h2>
                    </div>
                    <div className='flex justify-center w-full border drop-shadow rounded-md border-bhlum mx-auto my-5 text-center p-1' >
                            {/* <FontAwesomeIcon className=' fill-current text-green-700  text-xl' icon={faGoogle}/> */}
                            <img className='  h-5 w-5 mr-2 my-1 ' src={require("./google.png")} alt="" />
                            <p className=' font-semibold drop-shadow'>sign in with google </p>
                    </div>
                    
                    {/* <span className="inline-block align-middle ...">or</span> */}
                   <div className="line-custom">
                    <span className="lineHr "> 
                     <p className='px-2'>or</p>
                    </span>
                    </div>
                    <From/>
                </div>
            </div>
        </div>
    )
}

export default Login;
