
import PropTypes from 'prop-types';
const ShowReview = ({revie}) => {
 const{name,email,review}=revie

    return (
        <div className="bg-black p-12 space-y-5 rounded-xl">
            <p className="text-2xl text-white font-bold">{name}</p>
            <p className="text-xl text-white">{email}</p>
            <p className="text-white">{review}</p>
        </div>
    );
};


 
ShowReview.propTypes={
  revie:PropTypes.object,
    
    
    }








export default ShowReview;