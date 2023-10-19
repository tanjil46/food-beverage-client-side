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
import DetailsOfProducts from './components/DetailsOfProducts';
import CardAdd from './components/CardAdd';
import UpdateForm from './components/UpdateForm';
import PrivateRouteOfAddProduct from './components/PrivateRouteOfAddProduct';
import PrivateDetails from '../PrivateDetails';
import PrivateOfCart from './components/PrivateOfCart';
import NoData from './components/NoData';


const router=createBrowserRouter([

  {
    path:'/',
    element:<Roots></Roots>,
    errorElement:<ErrorHanlder></ErrorHanlder>,
    children:[
     {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('brand.json')
     },
      
     
     {
      path:'/product',
      element:<PrivateRouteOfAddProduct><Addproduct></Addproduct></PrivateRouteOfAddProduct>
     },
     {
      path:'/product/:brand_name',
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

     },
     {
      path:'/details/:id',
      element:<PrivateDetails><DetailsOfProducts></DetailsOfProducts></PrivateDetails>,
      loader:()=>fetch('http://localhost:5000/product')
     },
     {
      path:'/cart',
      element:<PrivateOfCart><CardAdd></CardAdd></PrivateOfCart>,
      loader:()=>fetch('http://localhost:5000/cart')
     },
     {
      path:'/update/:id',
      element:<UpdateForm></UpdateForm>,
    
     },
     {
      path:'/nodata',
      element:<NoData></NoData>
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
