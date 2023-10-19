import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

const{userSingIn,googleLogIn }=useContext(AuthContext)
const navigate=useNavigate()
const location =useLocation()

const loginHandler=e=>{
    e.preventDefault()


   
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email,password)
   
   
  userSingIn(email,password)
  .then((result)=>{
   console.log(result.user)
   Swal.fire(
    'Sucess!',
    'Succesfully Login',
     'success'
   )

 navigate(location?.state? location.state:'/')

 
  })
  .catch(error=>{
  console.log(error.message)
  Swal.fire(
    'Error!',
    `${error.message}`,
    'error'
  )
  })

};


const googleLogInHandler=()=>{
     googleLogIn()
     .then((result)=>{
        console.log(result.user)
        Swal.fire(
          'Sucess!',
          'Succesfully Login',
           'success'
         )
      
       })
       .catch(error=>{
       console.log(error.message)
        
       })
}









    return (
        <div>
            
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
  

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-gradient-to-r from-blue-600 to-fuchsia-500">
    <div className="">
    <p className="text-center text-xl font-bold">Login Now</p>
       </div>
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-600 text-white font-bold">Login</button>
        </div>
        <p className=""> <span className="text-lg font-bold text-red-700">New Here!</span> <Link className="btn font-bold  bg-gradient-to-r from-yellow-500 to-orange-500 "  to='/resis'>Resister</Link> Or</p>
        <p className="text-center">Login With</p>
        <button onClick={googleLogInHandler} className="btn bg-gradient-to-r from-blue-500 to-orange-500">Google</button>
      </form>
      




    </div>
  </div>
</div>












        </div>
    );
};

export default Login;