import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHtml5,faCss3,faBootstrap,faReact,faGoogle } from '@fortawesome/free-brands-svg-icons'
const From = () => {
    return (
        <>
           <form className='w-4/6'>
           <label className="block my-6 px-1">
                <p className=" uppercase text-xs after:ml-0.5  block  font-medium text-gray-700">
                    Email Adress
                </p>
                <input type="email" name="email" className=" custom-code font-semibold mt-1 px-3 py-2 border-zinc-900  border-2 border-t-0 border-x-0 border-red-600 placeholder-indigo-900 
                focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1"
                 placeholder="johnbanda@example.com" />
            </label>
            <label className="block mt-6 mb-1 px-1">
                <p className=" uppercase text-xs after:ml-0.5  block  font-medium text-gray-700">
                    password
                </p>
                <input type="password" name="password" className=" custom-code font-semibold mt-1 px-3 py-2 border-zinc-900  border-2 border-t-0 border-x-0 placeholder-indigo-900 
                focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1"
                 placeholder="Type password" />
            </label>
                <p className='text-sm text-right px-2 mt-3 underline text-purpleb'><a href="">Forgot Password?</a></p>    
                <input className=' px-0 w-full mt-5 bg-purpleb text-white font-bold py-2 px-4 rounded' type="button" value="Login" />
                <p className=' my-3 text-center text-xs'>Don't have an account? <a className='text-purpleb' href="">Sign Up</a></p>
           </form>
        </>
    )
}

export default From;
