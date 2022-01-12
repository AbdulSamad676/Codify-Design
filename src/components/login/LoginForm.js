import React from 'react'
import FormHead from './FormHead';
import Form from './From'
const LoginForm = () => {
    return (
        <>
        <div className=' flex justify-center items-center flex-col bg-white w-full p-4 sm: w-full md:w-1/2 lg:w-1/3'>
                <FormHead/>
                <Form/>
        </div>
        </>
    )
}

export default LoginForm;
