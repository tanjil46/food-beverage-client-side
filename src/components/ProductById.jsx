
import { useLoaderData, useParams } from "react-router-dom";
import BrandsProductShow from "./BrandsProductShow";


const ProductById = () => {
 
    const {brand_name}=useParams()

    
 const products=useLoaderData()






 const brandNameMatching=products.filter(product=>product.brandName==brand_name)





 console.log(brandNameMatching)





    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
       
      {
        brandNameMatching.map(brandProduct=><BrandsProductShow brandProduct={brandProduct} key={brandProduct._id}></BrandsProductShow>)
      }

   </div>


        </div>
    );
};

export default ProductById;