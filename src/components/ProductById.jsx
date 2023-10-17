import { useParams } from "react-router-dom";


const ProductById = () => {
  
    const {id}=useParams()
    console.log(id)
    
 

    return (
        <div>
            prduct
        </div>
    );
};

export default ProductById;