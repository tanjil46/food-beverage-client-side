import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Products from "./Products";




const Home = () => {
   
 const products=useLoaderData()
 




    return (
        <div>
         <Banner></Banner>
         <p className="text-center text-2xl font-bold">Here Our Some Food Catogory</p>
         <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-12">
         {
            products.slice(0,6).map(product=><Products product={product} key={product._id}></Products>)
         }
            </div>
        </div>
    );
};

export default Home;