import React from 'react';
import { FaChartLine, FaComment, FaLaptop, FaMobile, FaPaintBrush, FaWrench } from 'react-icons/fa';

const servicesData = [
    {
        title: "Custom Software Development",
        description: "We create tailored software solutions that meet your unique business needs, ensuring scalability and efficiency.",
        icon: <FaWrench size={36} className="text-yellow-600"/>
    },
    {
        title: "Mobile App Development",
        description: "Our team designs and develops intuitive mobile applications for both iOS and Android platforms, focusing on user experience and performance.",
        icon: <FaMobile size={36} className="text-yellow-600"/>
    },
    {
        title: "Web Development",
        description: "We build responsive and engaging websites that enhance user interaction and boost your online presence, utilizing the latest web technologies.",
        icon: <FaLaptop size={36} className="text-yellow-600"/>
    },
    {
        title: "UI/UX Design",
        description: "Our design team focuses on creating user-friendly interfaces and seamless experiences that captivate and engage your audience.",
        icon: <FaPaintBrush size={36} className="text-yellow-600"/>
    },
    {
        title: "Digital Marketing",
        description: "We offer comprehensive digital marketing strategies to enhance your brand visibility and reach your target audience effectively.",
        icon: <FaChartLine size={36} className="text-yellow-600"/>
    },
    {
        title: "IT Consulting",
        description: "Our experts provide insights and strategies to optimize your IT infrastructure, ensuring you are aligned with your business goals.",
        icon: <FaComment size={36} className="text-yellow-600 text-center"/>
    },
];

const Services = () => {
    return (
        <div className="mt-28 mb-36 py-10">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                <p className="mb-6 mr-52 ml-52 text-gray-400">
                    At Innovate Tech Team, we offer a wide range of services to help your business thrive in the digital age. Our dedicated team is committed to delivering quality solutions tailored to your needs.
                </p>
                <div className="grid  ml-20 mr-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-lg transition-transform mt-10 transform hover:scale-105">
                            <div className="text-4xl text-center mb-4">{service.icon}</div>
                            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                            <p className="text-gray-400 text-md mt-5">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
