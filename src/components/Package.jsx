import React, { useState } from "react";
import data from "../data.json";
import backgroundImage from "../assets/aboutusback.jpg";
import { Link } from "react-router-dom";

const Package = () => {
  const [filteredProducts, setFilteredProducts] = useState(data);

  const filterBrand = (category) => {
    const filteredData = data.filter((item) => item.category === category);
    setFilteredProducts(filteredData);
  };

  const filterPrice = (price) => {
    const filteredData = data.filter((item) => item.price === price);
    setFilteredProducts(filteredData);
  };

  const displayProducts = filteredProducts.map((item) => (
    <div
      key={item.productId}
      className="border shadow-xl rounded-lg overflow-hidden hover:shadow-3xl transition duration-300 bg-white bg-opacity-20 backdrop-blur-sm"
    >
      <img
        src={item.image}
        alt={item.productName}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              {item.productName}
            </h1>
            <p className="text-lg text-gray-600 mb-2">Price: {item.price}</p>
          </div>
          <button className="bg-green-500 text-white rounded-full px-4 py-1 hover:bg-white hover:text-green-500 border border-green-500 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className="w-full mx-auto min-h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className='flex flex-row justify-between mx-96'>
        <Link className='my-8' to="/aboutus">About Us</Link>
        <Link className='my-8'to="/contactus">Contact Us</Link>
        <Link className='my-8 text-2xl'to="/">Ocean One</Link>
        <Link className='my-8'to="/packages">Packages</Link>
        <h2 className='my-8'>Booking</h2>
      </nav>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-black flex justify-center items-center m-3 text-xl">
            Packages
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFilteredProducts(data)}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterBrand("dayout")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              Day Outing
            </button>
            <button
              onClick={() => filterBrand("hightea")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              High Tea
            </button>
            <button
              onClick={() => filterBrand("honeymoon")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              Honeymoon
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-black flex justify-center items-center m-3 text-xl">
            Price
          </p>
          <div className="flex justify-between ">
            <button
              onClick={() => filterPrice("LKR 2000")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              LKR 2000
            </button>
            <button
              onClick={() => filterPrice("LKR 4000")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              LKR 4000
            </button>
            <button
              onClick={() => filterPrice("LKR 6000")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              LKR 6000
            </button>
            <button
              onClick={() => filterPrice("LKR 8000")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              LKR 8000
            </button>
            <button
              onClick={() => filterPrice("LKR 10000")}
              className="m-1 rounded-xl px-5 py-1 border border-blue-600 text-black hover:bg-blue-300 hover:text-white"
            >
              LKR 10000
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {displayProducts}
      </div>
    </div>
  );
};

export default Package;