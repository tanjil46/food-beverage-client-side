

const CompanyDetail = ({compani}) => {

 const {company,location,first_publish_date,inventor_name,company_img }=compani

    return (
        <div>
                     
       <div  className="card  bg-base-100 lg:p-6">
  <figure><img className='lg:w-[400px] w-full h-[200px] rounded-xl'  src={company_img} alt="food/beverage" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold rounded-xl bg-green-600">{company}</h2>
   
  </div>
  <div className="flex justify-center gap-3">
    <p className="text-sm">Location:{location}</p>
    <h1 className="text-sm">Published:{first_publish_date}</h1>
  </div>
     <p className="text-center">Founder:{inventor_name}</p>
    </div>
        </div>
    );
};

export default CompanyDetail;