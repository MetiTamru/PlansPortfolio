import React from 'react';
import { FaUsers, FaFlag, FaBullseye } from 'react-icons/fa';

const aboutData = [
    {
        title: "Our Mission",
        description: "To empower communities through innovative technology solutions, fostering growth and enhancing digital literacy.",
        icon: <FaBullseye size={38} className="text-primary" />
    },
    {
        title: "Our Vision",
        description: "To be a leading tech organization recognized for its commitment to quality, integrity, and community impact.",
        icon: <FaFlag size={38} className="text-primary" />
    },
    {
        title: "Our Team",
        description: "We have a diverse team of passionate professionals dedicated to delivering exceptional results and fostering collaboration.",
        icon: <FaUsers size={38} className="text-primary" />
    },
];

const About = () => {
    return (
        <div className="mt-28 py-10">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="mb-10 text-gray-400 max-w-2xl mx-auto">
                    At Innovate Tech Team, we are committed to leveraging technology to drive change and improve lives. Our focus is on building innovative solutions that empower our clients and communities.
                </p>
                <div className="grid ml-20 mr-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutData.map((item, index) => (
                        <div key={index} className=" p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="text-4xl text-center mb-4">{item.icon}</div>
                            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                            <p className="text-gray-400 text-md">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
