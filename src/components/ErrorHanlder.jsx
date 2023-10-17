import { Link } from "react-router-dom";


const ErrorHanlder = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <p className="text-center text-6xl">OPPS!</p>
            <Link className="btn" to='/'>Back to Home</Link>
        </div>
    );
};

export default ErrorHanlder;