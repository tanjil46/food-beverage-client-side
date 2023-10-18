import { Link } from "react-router-dom";



const BrandsProductShow = ({brandProduct}) => {

    
  
 const{_id,name,brandName,image,price,type,rating}=brandProduct



    return (
        <div>
          

          <div className="card  p-20 ">
  <figure><img className="lg:w-[400px] w-full h-[200px] " src={image} alt="brand Product" /></figure>
  <div className="p-6">

    <div className="space-y-4">
    <h2 className="text-lg font-bold ">Name:{name}</h2>
    <p className='text-lg font-bold'>BrandName:{brandName}</p>
    <p className='text-lg font-bold'>Type:{type}</p>
    </div>
      <div className="flex justify-center gap-6 py-4">
        <h1 className="text-lg bg-pink-600 py-2 px-3 font-bold rounded-lg text-white ">Price:{price}</h1>
        <h2 className="text-lg bg-green-600 py-2 px-3 font-bold rounded-lg text-white ">Rating:{rating}</h2>
      </div>



 <div className="flex justify-between">
      <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>


      <button className="btn btn-secondary">Update Now</button>
      </div>

  </div>
</div>








        </div>
    );
};

export default BrandsProductShow;