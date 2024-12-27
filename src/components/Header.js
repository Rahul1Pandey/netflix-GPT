import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import {LOGO} from "../utils/constant"


const Header = () => {
  const dispatch = useDispatch()

  const Navigate = useNavigate()
  const user = useSelector(state => state.user) 

  const handleSignOut = () => {
    signOut(auth)
    .then(() => { })
    .catch((error) => {
      Navigate("/error")
    });
  };


  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid, 
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        )
        Navigate("/browse")
      } else {
        dispatch(removeUser())
        Navigate("/")
      }
    });
    return () => unsubscribed()
  },[])

  return (
    <div className='w-screen absolute px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src={LOGO} alt="logo">
      </img>
     
      {user && <div className='flex p-2 gap-4'>
        <img className='w-12 h-12 mt-1 rounded-full' src={user.photoURL} alt="user-icon" />
        <button onClick={handleSignOut} className='bg-red-600 text-white  rounded-lg px-5 py-2 font-bold float-right '>
          Sign Out
        </button>
      </div>}
    </div>
  ) 
}

export default Header;
