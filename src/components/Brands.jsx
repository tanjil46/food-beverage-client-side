import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const Brands = ({brand}) => {

 const{brand_name,image}=brand;

//`/product/${brand_name}` 






    return (
        <div>
            <Link to={brand_name? `/product/${brand_name}` :'/nodata'}>
              
       <div  className="card  bg-base-100 ">
  <figure><img className='lg:w-[400px] w-full h-[200px]'  src={image} alt="food/beverage" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold rounded-xl bg-green-600">{brand_name}</h2>
   
  </div>
  
</div>

</Link>








        </div>
    );
};



Brands.propTypes = {
    brand: PropTypes.object
  };




export default Brands;
