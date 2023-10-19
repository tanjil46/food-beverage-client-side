import { Link } from "react-router-dom";


const NoData = () => {
    return (
        <div className="text-center space-y-5 my-10">
        <div className="">
        <p className="text-center text-red-700 text-6xl">404</p>
        <p className="text-center font-bold text-6xl">PRODUCT UNAVAILABLE</p>
        </div>
           <div className="">
           <Link className="btn btn-error" to='/'>Back to Home</Link>
           </div>

</div>
    );
};

export default NoData;