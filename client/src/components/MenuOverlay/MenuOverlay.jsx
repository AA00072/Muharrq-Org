import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const MenuOverlay = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center"
        >
            <button 
                className="absolute top-6 left-6 text-3xl text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110" 
                onClick={onClose}
            >
                <FaTimes />
            </button>
            <div className="grid grid-cols-3 gap-6 text-center">
                <Link to="/" className="bg-yellow-500 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">Home</Link>
                <Link to="/projects" className="border-2 border-gray-400 py-4 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Projects</Link>
                <Link to="/about" className="border-2 border-gray-400 py-4 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">About</Link>
                <Link to="/donations" className="border-2 border-gray-400 py-4 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Donations</Link>
                <Link to="/sponsorships" className="border-2 border-gray-400 py-4 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Sponsorships</Link>
                <Link to="/media" className="border-2 border-gray-400 py-4 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Media Center</Link>
            </div>
        </motion.div>
    );
};

export default MenuOverlay;