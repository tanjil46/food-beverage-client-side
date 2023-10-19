import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const CartShow = ({addCart,addCarts,setAddcarts}) => {

 const{_id,image,brandName,price}=addCart;






 const deleteCartHandler=(_id)=>{

  
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })


      .then((result) => {
        if (result.isConfirmed) {
      fetch(`http://localhost:5000/cart/${_id}`,{
                method:'DELETE'
             } )
             .then(res=>res.json())
             .then(data=>{
                console.log(data)
            if(data.deletedCount > 0){
                    Swal.fire(
                            'Deleted!',
                         'Your file has been deleted.',
                             'success'
                         )

                         
             const cartDeleted=addCarts.filter(add=>add._id!==_id)
             setAddcarts(cartDeleted)
                }
        



             })
            }
    })
 }


 return (
        <div className="flex justify-between bg-orange-400 m-10 items-center p-4 rounded-xl">
            
        <div className="">
            <img className="w-[160px] h-[180px] " src={image}></img>
        </div>

       <div className="space-y-3">
        <p className="text-lg font-bold text-center text-white rounded-lg bg-green-600 py-2 px-3 w-[180px]">Price:{price}</p>
        <h1 className="text-lg font-bold text-center text-white rounded-lg bg-green-600 py-2 px-3 w-[180px]">Brand:{brandName}</h1>

       </div>


        <div className="">

            <button onClick={()=>deleteCartHandler(_id)} className="btn btn-error">X</button>
        </div>









        </div>
    );
};



CartShow.propTypes={
  addCart:PropTypes.object,
  addCarts:PropTypes.any,
  setAddcarts:PropTypes.any
    
    
    }






export default CartShow;