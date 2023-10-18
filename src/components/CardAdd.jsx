import { useLoaderData } from "react-router-dom";
import CartShow from "./CartShow";
import { useState } from "react";


const CardAdd = () => {

  
    const loaderAddCarts=useLoaderData()

 const[addCarts,setAddcarts]=useState(loaderAddCarts)

  
    
    return (
        <div>
            <p className="text-center font-bold text-2xl">Your Carts</p>
            
        {
          addCarts.map(addCart=><CartShow addCarts={addCarts} setAddcarts={setAddcarts} addCart={addCart} key={addCarts._id}></CartShow>)  
        }


        </div>
    );
};

export default CardAdd;