import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import {LOGO, SUPPORTED_LANGUAGES} from "../utils/constant"
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch()

  const Navigate = useNavigate()
  const user = useSelector(store => store.user) 
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='w-screen absolute px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src={LOGO} alt="logo">
      </img>
     
      {user && (
          <div className='flex p-2 gap-4'>

           {showGptSearch && (
             <select className='px-2 mt-2 bg-gray-900 text-white' 
                  onChange={handleLanguageChange}>
                 {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
             </select>)}

            <button className='bg-purple-600 text-white px-3 py-1 mx-4 mt-2 rounded-lg'
              onClick={handleGptSearchClick}>
              {showGptSearch? "HomePage":"GPT Search"}
            </button>
            <img className='w-12 h-12 mt-1 rounded-full' src={user.photoURL} alt="user-icon" />
            <button onClick={handleSignOut} 
              className='bg-red-600 text-white  rounded-lg px-5 py-2 font-bold float-right '>
               Sign Out
            </button>
       </div>)
      }
    </div>
  ) 
}

export default Header;
