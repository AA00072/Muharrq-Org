import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo-footer.jpg";
import { FaEnvelope, FaPhone, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-12">
            <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6 text-center md:text-left">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="Charity Logo" className="h-50 mb-5" />
                    <p className="text-sm">© 2024 Charity Organization. All Rights Reserved.</p>
                </div>
                
                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/contact" className="hover:text-yellow-600 transition">Contact Us</Link></li>
                        <li><Link to="/complaints" className="hover:text-yellow-600 transition">Complaints & Warnings</Link></li>
                        <li><Link to="/faq" className="hover:text-yellow-600 transition">FAQ</Link></li>
                        <li><Link to="/careers" className="hover:text-yellow-600 transition">Careers</Link></li>
                        <li><Link to="/news" className="hover:text-yellow-600 transition">Charity News</Link></li>
                    </ul>
                </div>
                
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900">About the Charity</h3>
                    <ul className="space-y-2">
                        <li><Link to="/emergency-aid" className="hover:text-yellow-600 transition">Emergency Cases & Campaigns</Link></li>
                        <li><Link to="/projects" className="hover:text-yellow-600 transition">Charity Projects</Link></li>
                        <li><Link to="/orphan-sponsorship" className="hover:text-yellow-600 transition">Orphan Sponsorship</Link></li>
                        <li><Link to="/charity-programs" className="hover:text-yellow-600 transition">Charity Programs</Link></li>
                        <li><Link to="/general-donations" className="hover:text-yellow-600 transition">General Donations</Link></li>
                    </ul>
                </div>
            </div>
            
            {/* Social Media & Payments Section - Next to Each Other */}
            <div className="mt-10 px-6 flex flex-col md:flex-row justify-center items-center space-x-10 text-center">
                {/* Social Media Icons */}
                <div className="flex space-x-6">
                    <FaInstagram className="text-gray-500 hover:text-gray-900 text-2xl cursor-pointer" />
                    <FaYoutube className="text-gray-500 hover:text-gray-900 text-2xl cursor-pointer" />
                    <FaTwitter className="text-gray-500 hover:text-gray-900 text-2xl cursor-pointer" />
                    <FaFacebook className="text-gray-500 hover:text-gray-900 text-2xl cursor-pointer" />
                </div>
                
                {/* Payment Methods */}
                <div className="flex space-x-4">
                    <img src="../../assets/visa.png" alt="Visa" className="h-8" />
                    <img src="../../assets/mastercard.png" alt="Mastercard" className="h-8" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
