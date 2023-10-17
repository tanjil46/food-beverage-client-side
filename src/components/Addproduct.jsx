

const Addproduct = () => {




 const addProductHandler=event=>{

 event.preventDefault()

    const name=event.target.name.value;
    const image=event.target.img.value;
    const type=event.target.type.value;
    const price=event.target.price.value;
    const shortDescription=event.target.short.value;
    const rating=event.target.rating.value;

    const productInfo={name,image,type,price,shortDescription,rating}
    
 console.log(productInfo)



 }





















    return (
        <div>
            
        

         <div className="my-6 p-24 bg-orange-300">
         <p className="text-center text-2xl font-bold text-pink-600">Please Add Your Products</p>
           <form onSubmit={addProductHandler}>


         {/* first  */}

          <div className="flex justify-between">

         <div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-pink-600">Name</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Product Name" name="name" className="input input-bordered" />
  </label>
</div>



<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-pink-600">Type</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Product Type" name="type" className="input input-bordered" />
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

<input type="text" placeholder="Product Price" name="price" className="input input-bordered" />
</label>
</div>



<div className="form-control">
<label className="label">
<span className="label-text font-bold text-pink-600">Short_Description</span>
</label>
<label className="input-group">

<input type="text" placeholder="Product Description" name="short" className="input input-bordered" />
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

<input type="text" placeholder="Product Rating" name="rating" className="input input-bordered" />
</label>
</div>



<div className="form-control">
<label className="label">
<span className="label-text font-bold text-pink-600">Image</span>
</label>
<label className="input-group">

<input type="text" placeholder="Product Image" name="img" className="input input-bordered" />
</label>
</div>

</div>

 <div className="text-center my-6">
    <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500">Add Product</button>
 </div>


</form>

         </div>

















        </div>
    );
};

export default Addproduct;