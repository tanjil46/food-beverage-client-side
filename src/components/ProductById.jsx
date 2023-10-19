
import { useLoaderData, useParams } from "react-router-dom";
import BrandsProductShow from "./BrandsProductShow";
import MCD from './img/mcAd.jpg'
import NESTLE from './img/nesleAd.jpg'
import COCA from './img/cocaADD.jpg'
import STAR from './img/starAdd.jpg'

const ProductById = () => {
 
    const {brand_name}=useParams()

    
 const products=useLoaderData()

const brandNameMatching=products.filter(product=>product.brandName==brand_name)











    return (
        <div>

          <div className="">

          <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={MCD}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={NESTLE}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={COCA} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={STAR} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

          </div>



       
          <p className="text-center font-bold text-2xl my-4 bg-gradient-to-r from-green-600 to-orange-600 py-2 rounded-lg text-white">Product List The Brand You Choose</p>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-20">
       
      {
        brandNameMatching.map(brandProduct=><BrandsProductShow brandProduct={brandProduct} key={brandProduct._id}></BrandsProductShow>)
      }

   </div>


        </div>
    );
};

export default ProductById;