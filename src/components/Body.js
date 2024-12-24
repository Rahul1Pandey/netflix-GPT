import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import ErrorPage from './ErrorPage';


const Body = () => {
 const dispatch = useDispatch()

    const Approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login />,
            errorElement:<ErrorPage/>
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email,displayName: displayName,photoURL: photoURL}))
          
        } else {
          dispatch(removeUser())
          
        }
      });
    })


  return (
    <div>
      <RouterProvider router={Approuter} />
    </div>
  )
}



export default Body
