import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const DetailsOfProducts = () => {
 
    const {id}=useParams()
    const productDetail=useLoaderData()
   

    const matchIdDetails=productDetail.find(detail=>detail._id===id)

    


   const{name,brandName, type,image,price,shortDescription}=matchIdDetails





 const addCartHandler=()=>{

 const cartAdded={name,type,image,price,shortDescription,brandName}

 console.log(cartAdded)

     fetch('http://localhost:5000/cart',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(cartAdded)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire(
                'Success',
                'Successfully Add To Cart',
                'success'
            )
        }
     })

 }

return (
        <div className="my-5 lg:p-20">
       

       <div className="card bg-base-100 ">
  <figure className="px-10 pt-10">
    <img   src={image} alt="product" className="w-full rounded-xl" />
  </figure>
  <div className="space-y-5">
    <div className="flex justify-center gap-10 py-4">
    <h2 className="bg-green-600 py-2 px-3 rounded-xl font-bold text-white ">{name}</h2>
    <h2 className="bg-green-600 py-2 px-3 rounded-xl font-bold text-white  ">{type}</h2>
    <h2 className="bg-green-600 py-2 px-3 rounded-xl font-bold text-white  ">{price}</h2>
    </div>
    <p className="text-center">{shortDescription}</p>
    <div className="text-center">
      <button onClick={addCartHandler} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>











        </div>
    );
};

export default DetailsOfProducts;