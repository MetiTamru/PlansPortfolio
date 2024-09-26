import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black  text-white py-6">
            <div className=" w-full mx-auto text-center">
                <h2 className="text-2xl font-bold mb-2">Innovate Tech Team</h2>
                <p className="mb-4 ml-48 mr-48 text-center text-gray-400">
                    Crafting seamless software solutions that empower businesses and enhance user experiences. Our dedicated team merges creativity with technology to deliver custom software tailored to your needs.
                </p>
                <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
                    <a href="mailto:info@innovatecht.com" className="hover:underline transition duration-300">📧 abinesilew@gmail.com</a>
                   
                    <a href="tel:+12345678901" className="hover:underline transition duration-300">📞 +251965562373</a>
                </div>
                <p className="mb-2 text-gray-500">📍 Adis Ababa, Ethiopia</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://www.linkedin.com/in/abenezer-sileshi-50b9aa329/?otpToken=MTMwNjFhZTkxMjI5Y2ZjMGIxMmUwZmViNDExY2UwYjY4OGM5ZDY0NTljYWU4YjZjN2JjZTAxNjg0ODU5NWFmYWY0ZDBkMGU5NTRiMmVlYzc1NGYzYWVhYTQxNTkzOTRiYjA2ZDRjMDhmOWFmOTY2OGQwZDJkNzVjLDEsMQ%3D%3D&midSig=330D9LtRLUhbs1&eid=mb7e1u-m1i0d8mf-ct&midToken=AQEQbhNpC6VcuA&trkEmail=eml-email_accept_invite_single_01-email%7Eaccept%7Einvite%7Esingle-0-profile_name-null-mb7e1u%7Em1i0d8mf%7Ect-null-null&trk=eml-email_accept_invite_single_01-email%7Eaccept%7Einvite%7Esingle-0-profile_name&originalSubdomain=et" className="hover:underline transition duration-300">   <FaLinkedin color='#FE8325' size={24} /></a>
                    <a href="https://t.me/Aben14i" className="hover:underline transition duration-300"><FaTelegram size={24} color='FE8325'/></a>
                    <a href="https://github.com/abeni-hub" className="hover:underline transition duration-300"><FaGithub size={24} color='FE8325'/></a>
                </div>
                <p className="mt-4 text-sm text-gray-500">© 2024 Innovate Tech Team. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
