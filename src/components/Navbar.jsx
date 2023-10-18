import { Link, NavLink } from "react-router-dom";

import LOGO from './img/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {



 const{user,userLogOut}=useContext(AuthContext)





 const userSingOutHandler=()=>{
    userLogOut()
    .then(()=>{
      
        Swal.fire(
            'Sucess!',
            'Succesfully LogOut',
             'success'
           )

    })
    .catch(error=>{
        console.log(error.message)
        Swal.fire(
            'Error!',
            `${error.message}`,
            'error'
        )
    })
 }
 
 















    return (
    <div className="my-4">















     <nav className="navbar flex lg:justify-between lg:flex-row lg:items-center flex-col justify-center   lg:px-12 px-8 rounded-xl space-y-5"    >
     

     <div className="">
        <img className="w-[150px] rounded-3xl" src={LOGO}></img>
    </div>


   <div className="space-x-4 font-bold text-center text-white py-3 rounded-lg px-4 w-full lg:w-[50%] lg:text-lg bg-gradient-to-r from-green-500 to-pink-500  ">
      <NavLink  to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home</NavLink>








<NavLink to="/product" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Add Product</NavLink>

<NavLink to="/cart" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>My Cart</NavLink>

</div>

   
  <div className="flex items-center">
    {
        user&&<p className="font-bold bg-blue-500 py-2 px-4 text-white rounded-2xl">{user.email}</p>
    }

   {
    user? <button  onClick={userSingOutHandler} className="btn bg-gradient-to-r from-purple-500 to-pink-500 ">Sing Out</button>:
    <Link className="btn bg-gradient-to-r from-blue-500 to-pink-500" to='/login'>Login</Link>
   }







   
  </div>


 </nav>


  

        </div>
    );
};

export default Navbar;