import React from "react";
import FadeInSection from "../FadeInSection/FadeInSection";
import { FaHandsHelping, FaChild, FaBriefcaseMedical, FaRing, FaMosque, FaUtensils, FaTshirt, FaConciergeBell, FaHandHoldingHeart, FaDove } from "react-icons/fa";

const services = [
    { title: "Sponsorship for Needy Families", description: "Provide financial and essential support to struggling families.", icon: <FaHandsHelping /> },
    { title: "Orphans and Widows Support", description: "Assist orphans and widows with essential needs and care.", icon: <FaChild /> },
    { title: "Medical Assistance", description: "Offer financial aid for medical treatments and healthcare support.", icon: <FaBriefcaseMedical /> },
    { title: "Marriage Assistance", description: "Help individuals and families cover marriage expenses.", icon: <FaRing /> },
    { title: "Mosque Construction and Renovation", description: "Contribute to building and renovating  mosques.", icon: <FaMosque /> },
    { title: "Food Basket Distribution", description: "Support families by providing essential food supplies.", icon: <FaUtensils /> },
    { title: "Eid Clothing Program", description: "Provide new clothes for underprivileged families during Eid.", icon: <FaTshirt /> },
    { title: "Ramadan Iftar Program", description: "Help provide meals for those fasting during Ramadan.", icon: <FaConciergeBell /> },
    { title: "Zakat Al-Fitr Program", description: "Ensure Zakat Al-Fitr donations reach those in need.", icon: <FaHandHoldingHeart /> },
    { title: "Sacrificial Animal Program", description: "Donate for Qurbani (sacrificial animal) distribution.", icon: <FaDove /> },
];

const ServicesSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-yellow-500 px-6 py-4 rounded-lg shadow-md flex items-center justify-center text-black text-center text-xl font-semibold">
            Our Services
          </div>
          {services.map((service, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all">
                <div className="text-4xl text-center">{service.icon}</div>
                <h3 className="text-lg font-semibold mt-4 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {service.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
