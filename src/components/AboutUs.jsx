import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import AboutUsImage from '../assets/aboutus.jpg';
import AboutUsLeft from '../assets/aboutusl.jpg';
import AboutUsRight from '../assets/aboutusr.jpg';
import AboutUsBackground from '../assets/aboutusback.jpg';
import '../../src/image.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt-box'), {
      max: 10,
      speed: 200,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      perspective: 500,
      transition: true,
    });
  }, []);

  return (
    <div className="relative h-screen">
      <img
        src={AboutUsBackground}
        alt="Ocean One Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <nav className='absolute top-0 left-0 right-0 flex flex-row justify-between mx-96 my-8'>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link className='text-2xl' to="/">Ocean One</Link>
        <Link to="/packages">Packages</Link>
        <h2>Booking</h2>
      </nav>

      <div className="absolute left-0 right-0 flex justify-center mt-36 space-x-8">
        <img src={AboutUsLeft} alt="Left Image" className="w-1/4 tilt-box rounded-xl" />
        <img src={AboutUsImage} alt="Middle Image" className="w-1/4 tilt-box rounded-xl" />
        <img src={AboutUsRight} alt="Right Image" className="w-1/4 tilt-box rounded-xl" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-center items-center mb-24 mx-36 shadow-3xl">
      <h1 className="text-4xl text-black text-center font-bold mb-4">THE BEST HOTEL TO STAY</h1>
        <div className="glass-effect p-6 rounded-lg">
          
          <p className="text-black text-lg text-center mx-4 sm:mx-8 md:mx-24 lg:mx-48 xl:mx-96">
            Welcome to Ocean One, where luxury meets natural beauty along the stunning shores of Sri Lanka. Established over two decades ago, our hotel offers thoughtfully decorated rooms and suites with modern amenities and breathtaking ocean views. Enjoy gourmet dining, a luxurious spa, an outdoor pool, and a fully equipped fitness center, all complemented by exceptional service. Committed to sustainability and community support, we invite you to experience the ultimate in seaside relaxation and make unforgettable memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;