import React, { useState } from 'react';
import backgroundImage from '../Images/backgroundImage.png'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log(formData);
  };

  return (
    <section className="py-6 bg-red-50 font-customFont bg-fixed bg-cover bg-center " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Contact <span className="text-red-600">Us</span></h2>
        <p className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6  text-white bg-black lg:mx-80 p-3 rounded-lg font-bold">
          Please fill out the form below or reach us via the provided contact details.
        </p>

        <div className="flex justify-center mb-10 ">
          <form 
            onSubmit={handleSubmit} 
            className="bg-red-50 p-8 rounded-lg shadow-md w-full max-w-lg  border-4 border-black mb-20"
          >
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows="4"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;