import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import Brands from "./Brands";
import Footer from "./Footer";
import Company from "./Company";
import ClientsReviwe from "./ClientsReviwe";




const Home = () => {
   
 const brands=useLoaderData()
 




    return (
        <div className="">
         <Banner></Banner>
         <p className="text-center text-2xl font-bold">Here Our Some Food Catogory</p>
         <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-12">
         {
           brands.map(brand=><Brands brand={brand} key={brand.id}></Brands>)
         }
            </div>
            <Company></Company>
            <ClientsReviwe></ClientsReviwe>
            <Footer></Footer>
        </div>
    );
};

export default Home;