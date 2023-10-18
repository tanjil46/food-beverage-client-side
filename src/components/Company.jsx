
import { useEffect, useState } from "react";
import CompanyDetail from "./CompanyDetail";


const Company = () => {
const[Companies,setCompanies]=useState([])

useEffect(()=>{

 fetch('info.json')
 .then(res=>res.json())
 .then(data=>setCompanies(data))









},[])

    return (
        <div>
            <p className="text-center font-bold text-2xl my-4 ">Information Of Our Company</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-10 gap-6">

            {

             Companies.map(compani=><CompanyDetail compani={compani} key={compani.id}></CompanyDetail>)


          }
    </div>

        </div>
    );
};

export default Company;