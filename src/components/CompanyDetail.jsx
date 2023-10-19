
import PropTypes from 'prop-types';
const CompanyDetail = ({compani}) => {

 const {company,location,first_publish_date,inventor_name,company_img }=compani;

    return (
        <div>
                     
       <div  className="card  bg-base-100 lg:p-3">
  <figure><img className='lg:w-[400px] w-full h-[200px] rounded-xl'  src={company_img} alt="food/beverage" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold rounded-xl bg-green-600">{company}</h2>
   
  </div>
  <div className="flex justify-center gap-3">
    <p className="text-sm text-justify ">Location:{location}</p>
    <h1 className="text-sm text-justify">Published:{first_publish_date}</h1>
  </div>
     <p className="text-center font-bold text-lg mt-4">Founder:{inventor_name}</p>
    </div>
        </div>
    );
};



CompanyDetail.propTypes={
  compani:PropTypes.object,
  
  
  }






export default CompanyDetail;