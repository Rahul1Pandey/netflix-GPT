import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setisSignInForm] = useState(true)

const toggleSignInForm = ()=>{
  setisSignInForm(!isSignInForm)
}

  return (
    <div>
     <Header />
     <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" alt="bg-logo"></img>
     </div>
     <form className='bg-black absolute w-4/12 my-36 mx-auto right-0 left-0 text-white px-20 
                rounded-lg bg-opacity-80'>
            <h1 className='px-2 mt-10 mb-7  font-semibold text-4xl '>{isSignInForm ? "Sign In" : "Sign up"}</h1>
            
           { !isSignInForm && (<input type='text' placeholder='Name' className='p-4 my-2  w-72 
             bg-gray-800 rounded-md bg-opacity-30 border border-gray-500'>
            </input>)}

            <input type='text' placeholder='Email or mobile number' className='p-4 my-2  w-72 
             bg-gray-800 rounded-md bg-opacity-30 border border-gray-500'>
            </input>

            <input type='password' placeholder='Password' className='p-4 my-2  w-72 bg-gray-800      rounded-md bg-opacity-30 border border-gray-500'>
            </input>

            <button 
               className='p-3 my-4 w-72 bg-red-600 rounded-md hover:bg-red-700 '>
                {isSignInForm ? "Sign In" : "Sign up"}
              </button>
            <h1 className='align-middle mx-32'>OR</h1>
            <button 
              className='p-2 my-4 w-72 bg-opacity-40 bg-gray-500 rounded-md hover:bg-opacity-50 hover:ease-in-out' >
                Use a Sign-in code
            </button>
            <h1 className='mx-20  cursor-pointer hover:border-b hover:text-gray-500'>Forget password ?</h1>
            {/* <h1 className='my-6 text-lg' >
                <input type="checkbox" className='m-3 text-lg'></input>
                  Remember me
            </h1> */}

            <p className='text-base text-gray-300 my-8' onClick={toggleSignInForm}>New to Netflix ? 
              <span className='text-white hover:border-b-2 cursor-pointer'
                 >{ isSignInForm ? " Sign up now." :" Sign In Now"}</span>
            </p>

     </form>
    </div>
  )
}

export default Login
