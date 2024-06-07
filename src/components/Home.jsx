import React from 'react';

const Home = () => {
  return (
    <div>
      <nav className='flex flex-row justify-between mx-4 sm:mx-8 md:mx-24 lg:mx-48 xl:mx-96 my-8'>
        <h2>About Us</h2>
        <h2>Contact Us</h2>
        <h1>OCEAN ONE</h1>
        <h2>Packages</h2>
        <h2>Booking</h2>
      </nav>

      <div className='flex justify-center items-center my-48'>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
          WELCOME TO <br />
          Ocean One <br />
          Where tranquility meets luxury
        </h1>
      </div>

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
    </div>
  );
};

export default Home;
