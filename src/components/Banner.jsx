
import BANNER from './img/food-banner.jpg'
const Banner = () => {



    const bannerStyle={
    
        backgroundImage:`url(${BANNER})`
    }




    return (
        <div>
            
            <div className="hero min-h-screen rounded-lg" style={bannerStyle}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl md:text-5xl text-purple-700 font-bold">Live For Foods </h1>
      <p className="mb-5 text-sm md:text-lg font-bold ">Great food advertisements should make your mouth water, your belly growl, and your heart warm. </p>
   
    </div>
  </div>
</div>


        </div>
    );
};

export default Banner;