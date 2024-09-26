// src/Pages/Home.jsx
import React from "react";
import Footer from "../Components/Footer";

const Pricing = () => {
  const basic = [
    "Free Domain Name Host",
    "Professional Portfolio For Personal Or Company",
    "Mobile App",
  ];
  const enhancementPackage = [
    "Maintenance Of The Existing",
    "Free Domain Name Host",
    "Feature Additions",
    "Email Support",
  ];
  const standard = [
    "Information Portal",
    "Free Domain Name Host",
    "Enhanced Security",
    "Analytics Dashboard",
  ];
  const ecommerce = [
    "E-Commerce Website",
    "Free Domain Name Host",
    "Inventory Management",
    "Advanced Analytics",
    "Payment Integration",
    "Responsive Design",
  ];
  const premium = [
    "Language Translation",
    "Free Domain Name Host",
    "Payment Integration",
    "SMS Alert",
    "Chat Bot",
  ];

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-20 text-white">
      <h1 className="text-4xl pt-16 font-bold mb-12">Our Pricing Plans</h1>
      <p className="w-2/3 text-center text-gray-300">
        We are passionate about delivering high-quality, custom website solutions tailored to meet the unique needs of your business. Our team of experienced designers and developers is dedicated to providing exceptional service and support at every step of your online journey.
      </p>
      <div className="flex ml-20 mr-20 flex-wrap justify-center gap-8">
        {/* Cards */}
        {[
          {
            title: "Basic",
            price: "$19,999",
            description: "Ideal for personal projects. Includes essential features.",
            items: basic,
          },
          {
            title: "Enhancement Package",
            price: "$200",
            description: "Upgrade your existing plan with additional features and support.",
            items: enhancementPackage,
          },
          {
            title: "Standard",
            price: "$300",
            description: "Best for small businesses with all Basic features.",
            items: standard,
          },
          {
            title: "E-commerce",
            price: "$300",
            description: "Complete solution for online stores with advanced features.",
            items: ecommerce,
          },
          {
            title: "Premium",
            price: "$300",
            description: "Perfect for larger businesses. All Standard features plus advanced tools.",
            items: premium,
          },
        ].map((plan, index) => (
          <div
            key={index}
            className="bg-white/10 mt-16 rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border hover:border-white/20 w-96"
          >
            <h2 className="text-sm text-primary font-bold mb-2">{plan.title}</h2>
            <p className="text-2xl font-bold">{plan.price}</p>
            <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>
            <p className="text-lg text-white mt-4 mb-2">Includes:</p>
            <ul className="list-disc list-inside text-gray-400">
              {plan.items.map((item, index) => (
                <li key={index} className="flex items-start mb-2">
                  <svg className="w-3 h-3 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
   
    </>
  );
};

export default Pricing;

