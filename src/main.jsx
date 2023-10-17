import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots';
import ErrorHanlder from './components/ErrorHanlder';
import Home from './components/Home';
import Addproduct from './components/Addproduct';


const router=createBrowserRouter([

  {
    path:'/',
    element:<Roots></Roots>,
    errorElement:<ErrorHanlder></ErrorHanlder>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/product',
      element:<Addproduct></Addproduct>
     }






    ]
  }










])











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
