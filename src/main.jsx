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
import ProductById from './components/ProductById';
import Login from './components/Login';
import Resister from './components/Resister';
import AuthProvider from './components/AuthProvider';


const router=createBrowserRouter([

  {
    path:'/',
    element:<Roots></Roots>,
    errorElement:<ErrorHanlder></ErrorHanlder>,
    children:[
     {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('http://localhost:5000/product')
     },
     {
      path:'/product',
      element:<Addproduct></Addproduct>
     },
     {
      path:'/product/:id',
      element:<ProductById></ProductById>,
      loader:()=>fetch('http://localhost:5000/product')
     
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/resis',
      element:<Resister></Resister>

     }

     






    ]
  }










])











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
