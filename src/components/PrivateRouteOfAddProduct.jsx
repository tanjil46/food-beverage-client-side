import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import PropTypes from 'prop-types';

const PrivateRouteOfAddProduct = ({children}) => {

const location=useLocation()
 const {user,loading}=useContext(AuthContext)



 if(loading){
    return <span className="loading loading-spinner loading-lg"></span>;
}
 if(user){
    return children
 }






    return <Navigate state={location.pathname} to='/login'></Navigate>
};



PrivateRouteOfAddProduct.propTypes={
    children:PropTypes.node,
    
    
    }


export default PrivateRouteOfAddProduct;