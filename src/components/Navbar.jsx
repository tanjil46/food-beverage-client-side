import { Link, NavLink } from "react-router-dom";

import LOGO from './img/logo.jpg'


const Navbar = () => {

    return (
    <div className="my-4">















     <nav className="flex justify-between items-center  lg:px-12 px-8 rounded-xl"    >
     

     <div className="">
        <img className="w-[150px] rounded-3xl" src={LOGO}></img>
    </div>


   <div className="space-x-4 ">
      <NavLink  to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home</NavLink>








<NavLink to="/product" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Add Product</NavLink>

<NavLink to="/cart" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>My Cart</NavLink>

</div>

   
  <div className="">
    <Link to='/login'>Login</Link>
  </div>


 </nav>


  

        </div>
    );
};

export default Navbar;