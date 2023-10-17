import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Products = ({product}) => {

 const{_id,name,image}=product








    return (
        <div>
            <Link to={`/product/${_id}`}>
       <div  className="card  bg-base-100 ">
  <figure><img className='lg:w-[400px] w-full h-[200px]'  src={image} alt="food/beverage" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold rounded-xl bg-green-600">{name}</h2>
   
  </div>
  
</div>

</Link>








        </div>
    );
};



Products.propTypes = {
    product: PropTypes.array
  };




export default Products;