import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import DayOut from "../assets/dayout1.jpg";
import HighTea from "../assets/hightea1.jpg";
import HoneyMoon from "../assets/honeymoon1.jpg";
import DayOut2 from "../assets/dayout2.jpg";
import HoneyMoon2 from "../assets/honeymoon2.jpg";
import AboutUsBackground from '../assets/aboutusback.jpg';
import '../home.css'

const Home = () => {
  return (
    
    <div className='h-screen' style={{backgroundImage: `url(${AboutUsBackground})`}}>
      <nav className='flex flex-row justify-between mx-96'>
      <Link className='my-8' to="/aboutus">About Us</Link>
        <Link className='my-8'to="/contactus">Contact Us</Link>
        <Link className='my-8 text-2xl'to="/">Ocean One</Link>
        <Link className='my-8'to="/packages">Packages</Link>
        <h2 className='my-8'>Booking</h2>
      </nav>

      <div className='flex justify-center items-center my-12'>
        <div className='text-center text-blue-800'>
          <h1 className='text-2xl'>
            WELCOME TO<br />
          </h1>
          <h1 className='text-7xl '>
            Ocean One<br />
          </h1>
          <h1 className='text-2xl'>
            Where tranquility meets luxury
          </h1>
        </div>
      </div>

      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        className="my-8 custom-carousel"
      >
        <div>
          <img src={DayOut} alt="Day Out" className="carousel-image rounded-md" />
        </div>
        <div>
          <img src={HighTea} alt="High Tea" className="carousel-image rounded-md" />
        </div>
        <div>
          <img src={HoneyMoon} alt="Honey Moon" className="carousel-image rounded-md" />
        </div>
        <div>
          <img src={DayOut2} alt="Honey Moon" className="carousel-image rounded-md" />
        </div>
        <div>
          <img src={HoneyMoon2} alt="Honey Moon" className="carousel-image rounded-md" />
        </div>
      </Carousel>

      <div className='flex justify-center items-center'>
        <div className='flex flex-row space-x-8'>
          <div>
            <label className='block text-lg font-medium' htmlFor='check-in-date'>Check-in Date</label>
            <input
              type='date'
              id='check-in-date'
              className='mt-2 p-2 border rounded-md'
            />
          </div>
          <div>
            <label className='block text-lg font-medium' htmlFor='check-out-date'>Check-out Date</label>
            <input
              type='date'
              id='check-out-date'
              className='mt-2 p-2 border rounded-md'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <button className="mt-8 text-2xl bg-green-500 text-white rounded-full px-4 py-1 hover:bg-white hover:text-green-500 border border-green-500 transition duration-300">
          Book Now
        </button>
      </div>
    </div>

  );
};

export default Home;