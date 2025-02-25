import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaShoppingCart, FaEnvelope, FaPhone, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "/assets/logo-mc.jpg";
import MenuOverlay from "./../MenuOverlay/MenuOverlay";
import LoginForm from "./../../pages/login/login";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <header>
            {/* Navbar */}
            <nav className="bg-white py-4 shadow-md relative border-b-2 border-yellow-600">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div className="flex items-center space-x-4">
                        <button
                            className="border-2 border-yellow-600 text-yellow-600 px-4 py-2 rounded-full flex items-center hover:bg-yellow-600 hover:text-white transition"
                            onClick={() => setMenuOpen(true)}
                        >
                            Menu <FaBars className="ml-2" />
                        </button>
                        <button 
                            className="border-2 border-yellow-600 text-yellow-600 px-4 py-2 rounded-full flex items-center hover:bg-yellow-600 hover:text-white transition"
                            onClick={() => setLoginOpen(true)}
                        >
                            Login
                        </button>
                        <button className="border-2 border-yellow-600 text-yellow-600 p-3 rounded-full flex items-center hover:bg-yellow-600 hover:text-white transition">
                            <FaHome />
                        </button>
                        <button className="border-2 border-yellow-600 text-yellow-600 p-3 rounded-full flex items-center hover:bg-yellow-600 hover:text-white transition relative">
                            <FaShoppingCart />
                            <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 rounded-full">0</span>
                        </button>
                    </div>
                    <img src={logo} alt="Charity Logo" className="h-18"/>
                </div>
            </nav>

            {/* Menu Overlay */}
            {menuOpen && <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
            {loginOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
                        <button
                            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                            onClick={() => setLoginOpen(false)}
                        >
                            <FaTimes size={20} />
                        </button>
                        <LoginForm isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
