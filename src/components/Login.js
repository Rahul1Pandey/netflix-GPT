import React, {  useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase"
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { profilepicture,BG_URL } from '../utils/constant';




const Login = () => {

  const [isSignInForm,setisSignInForm] = useState(true)
  const [errorMessage ,seterrorMessage] = useState()
 
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick=()=>{
    // validateForm 
    
    // console.log(email.current.value)
    // console.log(password.current.value)

    const message = checkValidData(email.current.value,password.current.value)
    seterrorMessage(message)
    
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
       .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value , 
        photoURL: profilepicture
      })
      .then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(
          addUser({
            uid: uid, 
            email: email,
            displayName: displayName,
            photoURL: photoURL}))
        
      }).catch((error) => {
        seterrorMessage(error.message)
      });
      

      })
     .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         seterrorMessage(errorCode+ "-" + errorMessage )
    // ..
  });
    }
     else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user)
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode+ "-" + errorMessage )
      });
     }
  }

const toggleSignInForm = ()=>{
  setisSignInForm(!isSignInForm)
}

  return (
    <div>
     <Header />
     <div className='absolute'>
        <img src={BG_URL} alt="bg-logo"></img>
     </div>
     <form  onSubmit={(e)=>e.preventDefault() }
      className='bg-black absolute w-4/12 my-36 mx-auto right-0 left-0 text-white px-20 
                rounded-lg bg-opacity-80'>
            <h1 className='px-2 mt-10 mb-7  font-semibold text-4xl '>{isSignInForm ? "Sign In" : "Sign up"}</h1>
            
           { !isSignInForm && (<input ref={name} type='text' placeholder='Name' className='p-4 my-2  w-72 
             bg-gray-800 rounded-md bg-opacity-30 border border-gray-500'>
            </input>)}

            <   input ref={email} type='text' placeholder='Email or mobile number' className='p-4 my-2  w-72 
             bg-gray-800 rounded-md bg-opacity-30 border border-gray-500'>
            </input>

            <input ref={password} type='password' placeholder='Password' className='p-4 my-2  w-72 bg-gray-800      rounded-md bg-opacity-30 border border-gray-500'>
            </input>
            <p className='text-red-600 font-bold text-lg'>{errorMessage}</p>

            <button 
               className='p-3 my-4 w-72 bg-red-600 rounded-md hover:bg-red-700 '
                onClick={handleButtonClick}>
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
