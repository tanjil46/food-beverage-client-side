import { useEffect, useState } from "react";
import ShowReview from "./ShowReview";


const ClientsReviwe = () => {
    const[reviews,setReviews]=useState([])

    useEffect(()=>{
    
     fetch('review.json')
     .then(res=>res.json())
     .then(data=>setReviews(data))
    
    
 },[])
    








    return (
        <div>
            <p className="text-center text-3xl font-bold">What our clients say about us</p>
            
            <div className="text-center my-4">
            <div className="rating rating-lg ">
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
  </div>

</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
    {

        reviews.map((revie,idx)=><ShowReview revie={revie} key={idx}></ShowReview>)
    }
</div>







        </div>
    );
};

export default ClientsReviwe;