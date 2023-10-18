import { useLoaderData } from "react-router-dom";


const UpdateForm = () => {

    const products=useLoaderData()

    const{_id,name,image,type,price,rating,brandName}=products

  console.log(products)

    const updateProductHandler=event=>{

        event.preventDefault()
       
           const name=event.target.name.value;
           const image=event.target.img.value;
           const type=event.target.type.value;
           const price=event.target.price.value;
          
           const rating=event.target.rating.value;
           const brandName=event.target.brand.value;
          
          
          const updateProduct={name,image,type,price,rating,brandName}
           
   
        fetch(`http://localhost:5000/product/${_id}`,{
       method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updateProduct)

        })
         .then(res=>res.json())
        .then(data=>{
        console.log(data)

        })
        

    









    }













    return (
        <div>

            
            
        

         <div className="my-6 p-24 bg-orange-300">
         <p className="text-center text-2xl font-bold text-pink-600">Please Update Your Products</p>
          
          <form onSubmit={updateProductHandler}>
         {/* first  */}

          <div className="flex justify-between">

         <div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-pink-600">Name</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Product Name" name="name" defaultValue={name} className="input input-bordered" />
  </label>
</div>



<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-pink-600">Type</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Product Type" name="type" defaultValue={type} className="input input-bordered" />
  </label>
</div>

</div>

                              {/* second */}



                              <div className="flex justify-between">

<div className="form-control">
<label className="label">
<span className="label-text font-bold text-pink-600">Price</span>
</label>
<label className="input-group">

<input type="text" placeholder="Product Price" name="price" defaultValue={price} className="input input-bordered" />
</label>
</div>



<div className="form-control">
<label className="label">
<span className="label-text font-bold text-pink-600">Brand Name</span>
</label>
<label className="input-group">

<input type="text" placeholder="Product Brand" name="brand" defaultValue={brandName} className="input input-bordered" />
</label>
</div>

</div>



                      {/* third */}




                      <div className="flex justify-between">

<div className="form-control">
<label className="label">
<span className="label-text font-bold text-pink-600">Rating</span>
</label>
<label className="input-group">

<input type="text" placeholder="Product Rating" name="rating" defaultValue={rating} className="input input-bordered" />
</label>
</div>



<div className="form-control">
<label className="label">
<span className="label-text font-bold text-pink-600">Image</span>
</label>
<label className="input-group">

<input type="text" placeholder="Product Image" name="img" defaultValue={image} className="input input-bordered" />
</label>
</div>

</div>











 <div className="text-center my-6">
    <button type="submit" className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500">Update Product</button>
 </div>


</form>

         </div>


            
        </div>
    );
};

export default UpdateForm;