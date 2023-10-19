import { Link } from "react-router-dom";

import PropTypes from 'prop-types'

const BrandsProductShow = ({brandProduct}) => {

    
  
 const{_id,name,brandName,image,price,type,rating}=brandProduct



    return (
        <div>
          

          <div className="card bg-red-300 p-10 ">
  <figure><img className="rounded-lg w-full h-[200px] md:h-[300px] " src={image} alt="brand Product" /></figure>
  <div className="p-6 space-y-6">

  <div className="flex justify-center gap-6 py-4">
        <h1 className="text-lg bg-pink-600 py-2 px-4 font-bold rounded-lg text-white ">Price:{price}</h1>
        <h2 className="text-lg bg-green-600 py-2 px-3 font-bold rounded-lg text-white ">Rating:{rating}</h2>
      </div>

   <div className=" flex justify-center items-center gap-3">
    <h2 className="text-lg  ">Name:<span className="font-bold">{name}</span></h2>
    <p className='text-lg '>BrandName:<span className="font-bold">{brandName}</span></p>
    </div>
    <p className='text-lg text-center rounded-md bg-orange-600'>Type:<span className="font-bold text-white">{type}</span></p>
   
     



 <div className="flex justify-between">
      <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>


      <Link to={`/update/${_id}`} className="btn btn-secondary">Update Now</Link>
      </div>

  </div>
</div>








        </div>
    );
};



BrandsProductShow.propTypes={
 brandProduct:PropTypes.object,
  
  
  }






export default BrandsProductShow;