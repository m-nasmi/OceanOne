import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import AboutUsImage from '../assets/aboutus.jpg';
import AboutUsLeft from '../assets/aboutusl.jpg';
import AboutUsRight from '../assets/aboutusr.jpg';
import AboutUsBackground from '../assets/aboutusback.jpg';
import '../../src/image.css'; // Import the CSS file

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
      {/* Background Image */}
      <img
        src={AboutUsBackground}
        alt="Ocean One Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Navbar */}
      <nav className='absolute top-0 left-0 right-0 flex flex-row justify-between mx-48 my-8'>
        <h2>About Us</h2>
        <h2>Contact Us</h2>
        <h1>OCEAN ONE</h1>
        <h2>Packages</h2>
        <h2>Booking</h2>
      </nav>

      {/* Images */}
      <div className="absolute left-0 right-0 flex justify-center mt-36 space-x-8"> {/* Adjusted margin-top */}
        <img src={AboutUsLeft} alt="Left Image" className="w-1/4 tilt-box" />
        <img src={AboutUsImage} alt="Middle Image" className="w-1/4 tilt-box" />
        <img src={AboutUsRight} alt="Right Image" className="w-1/4 tilt-box" />
      </div>

      {/* Glassmorphism Box */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-center items-center mb-24 mx-36"> {/* Adjusted margin-bottom */}
      <h1 className="text-4xl text-black text-center font-bold mb-4">THE BEST HOTEL TO STAY</h1>
        <div className="glass-effect p-6 rounded-lg">
          {/* Content */}
          
          <p className="text-black text-lg text-center mx-4 sm:mx-8 md:mx-24 lg:mx-48 xl:mx-96">
            Welcome to Ocean One, where luxury meets natural beauty along the stunning shores of Sri Lanka. Established over two decades ago, our hotel offers thoughtfully decorated rooms and suites with modern amenities and breathtaking ocean views. Enjoy gourmet dining, a luxurious spa, an outdoor pool, and a fully equipped fitness center, all complemented by exceptional service. Committed to sustainability and community support, we invite you to experience the ultimate in seaside relaxation and make unforgettable memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;