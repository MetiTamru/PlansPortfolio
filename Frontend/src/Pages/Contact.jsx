import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/send-email', formData);
            alert('Email sent successfully!');
        } catch (error) {
            alert('Error sending email');
        }
    };

    return (
        <div className="mt-20 py-10" style={{ backgroundColor: '#141414' }}>
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
                <p className="mb-10 text-gray-300">
                    We’d love to hear from you! Please fill out the form below or reach out through our contact information.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
                    <div className=" p-6 rounded-lg shadow-lg flex items-center">
                        <FaPhone size={44} className="text-primary mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-gray-500">+(251) 965562373</p>
                        </div>
                    </div>
                    <div className="  p-6 rounded-lg shadow-lg flex items-center">
                        <FaEnvelope size={38} className="text-primary mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-gray-500">abinesilew@gmail.com</p>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg flex items-center">
                        <FaMapMarkerAlt size={44} className="text-primary mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p className="text-gray-500">Adis Ababa,Ethiopia</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className=" p-8 rounded-lg shadow-lg mx-auto max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="name">Name</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded"
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="w-full bg-primary text-white p-2 rounded hover:bg-opacity-80 transition duration-200" type="submit">Send Message</button>
                </form>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-white">Follow Us</h2>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-primary hover:text-opacity-80"><FaGithub size={24} /></a>
                        <a href="#" className="text-primary hover:text-opacity-80"><FaEnvelope size={24} /></a>
                        <a href="#" className="text-primary hover:text-opacity-80"><FaLinkedin size={24} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
