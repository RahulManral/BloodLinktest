import backgroundImage from '../Images/backgroundImage.png';

import { useState } from 'react';

const DeleteData = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/donors', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const donors = await response.json();
            const donorToDelete = donors.find(donor => donor.name === formData.name && donor.phone === formData.phone);

            if (donorToDelete) {
                const deleteResponse = await fetch(`api/donors/${donorToDelete.id}`, {
                    method: 'DELETE',
                });

                if (deleteResponse.ok) {
                    alert('Your donation record has been deleted successfully.');
                    setFormData({ name: '', phone: '' }); // Reset the form
                } else {
                    throw new Error('Error deleting the donor record.');
                }
            } else {
                alert('No matching donor record found.');
            }
        } catch (error) {
            console.error('Error deleting donor:', error);
            alert('There was an error deleting your information. Please try again.');
        }
    };

    return (
        <section className="py-6 bg-red-50 font-customFont bg-fixed bg-cover bg-center " style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3">Delete Your Donation Record</h2>
                <p className="xs:text-sm lg:text-lg xl:text-lg text-center mb-6  text-white bg-black lg:mx-80 p-3 rounded-lg font-bold">
                Please enter your name and phone number to delete your donation record.
        </p>

                <div className="flex justify-center">
                    <form 
                        onSubmit={handleDelete} 
                        className="bg-red-50 p-8 rounded-lg shadow-md w-full max-w-lg border-4 border-black mb-36"
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

                        <button 
                            type="submit" 
                            className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default DeleteData;