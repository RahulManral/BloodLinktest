import { useState } from 'react';
import backgroundImage from '../Images/backgroundImage.png';

const Donate = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        bloodType: '',
        district: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/donors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            
            // Alert the user that the data was successfully submitted
            alert('Thank you for your donation! Your information has been submitted.');

            // Optionally, reset the form
            setFormData({
                name: '',
                phone: '',
                bloodType: '',
                district: '',
            });
        } catch (error) {
            console.error('Error adding donor:', error);
            alert('There was an error submitting your information. Please try again.');
        }
    };
    
    return (
        <section className="py-6 bg-red-50 font-customFont bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Become a <span className="text-red-600">Donor</span></h2>
            <p className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6 text-white bg-black lg:mx-80 p-3 rounded-lg font-bold">
              Your donation can save lives! Please fill out the form below to get started.
            </p>
            
            <div className="flex justify-center">
              <form 
                onSubmit={handleSubmit} 
                className="bg-red-50 p-8 rounded-lg shadow-md w-full max-w-lg border-4 border-black mb-24"
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
                  <label className="block text-gray-700" htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="district">District</label>
                  <select 
                    id="district" 
                    name="district" 
                    value={formData.district} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select your District</option>
                    <option value="Central and Western">Central and Western</option>
                    <option value="Eastern District">Eastern</option>
                    <option value="Southern">Southern</option>
                    <option value="Yau Tsim Mong">Yau Tsim Mong</option>
                    <option value="Sham Shui Po">Sham Shui Po</option>
                    <option value="Kowloon City District">Kowloon City District</option>
                    <option value="Wong Tai Sin">Wong Tai Sin</option>
                    <option value="Kwun Tong">Kwun Tong</option>
                    <option value="Tsuen Wan">Tsuen Wan</option>
                    <option value="Tsing Yi">Tsing Yi</option>
                    <option value="Sai Kung">Sai Kung</option>
                    <option value="Tai Po">Tai Po</option>
                    <option value="North">North</option>
                    <option value="Yuen Long">Yuen Long</option>
                    <option value="Tuen Mun">Tuen Mun</option>
                    <option value="Islands">Islands</option>
                    <option value="Lantau Island">Lantau Island</option>
                    <option value="Sha Tin District">Sha Tin District</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="bloodType">Blood Type</label>
                  <select 
                    id="bloodType" 
                    name="bloodType" 
                    value={formData.bloodType} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select your blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
    );
};

export default Donate;