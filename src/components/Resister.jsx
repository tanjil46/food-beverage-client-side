import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Resister = () => {
const navigate=useNavigate()
const {createUser}=useContext(AuthContext)


const resisterHandler=e=>{



    e.preventDefault()
    
   
 const email=e.target.email.value
 const password=e.target.password.value
 console.log(email,password)

 if(password.length<6){
    return Swal.fire(
        'Warning!',
        'Your Password Must be  Minimum Six characters',
        'warning'
    ) 
    }
    else if(!/[A-Z]/.test(password)){
        return Swal.fire(
            'Warning!',
            'There Must Be a Capital latter',
            'warning'
        )

  
    }
    else if(!/[@$!%*?&]/.test(password)){
        return Swal.fire(
            'Warning!',
            'There Must Be a Special latter',
            'warning'
        )

        


    }
    


  createUser(email,password)
  .then((result)=>{
   console.log(result.user)
   Swal.fire(
    'Sucess!',
    'Succesfully Resistered',
     'success'
   )
   navigate('/')

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
        <div>
            

            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500">
      <form onSubmit={resisterHandler} className="card-body">
     
        <div className="form-control">

        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type='text' placeholder="name" name="name"  className="input input-bordered" />

          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="photo url" name="photo"  className="input input-bordered"  />






          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex">
          <input
          
          type='password'     placeholder="password" name="password" className="input input-bordered" required />
         
         </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
        </div>
           <p className="">Already Resistered!<Link className="text-white text-xl" to='/login'>Login </Link> </p>
      </form>
       
    </div>
    </div>
</div>

        </div>
    );
};

export default Resister;