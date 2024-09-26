import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-bold mb-2">Innovate Tech Team</h2>
                <p className="mb-4">
                    Crafting seamless software solutions that empower businesses and enhance user experiences. Our dedicated team merges creativity with technology to deliver custom software tailored to your needs.
                </p>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="mailto:info@innovatecht.com" className="hover:underline">📧 info@innovatecht.com</a>
                    <a href="http://www.innovatecht.com" className="hover:underline">🌐 www.innovatecht.com</a>
                    <a href="tel:+12345678901" className="hover:underline">📞 +1 (234) 567-8901</a>
                </div>
                <p className="mb-2">📍 123 Innovation Lane, Tech City, ST 12345</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:underline">LinkedIn</a>
                    <a href="#" className="hover:underline">Twitter</a>
                    <a href="#" className="hover:underline">GitHub</a>
                </div>
                <p className="mt-4 text-sm">© 2024 Innovate Tech Team. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

