
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorPage from './ErrorPage'


const Body = () => {

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


  return (
    <div>
      <RouterProvider router={Approuter} />
    </div>
  )
}



export default Body
