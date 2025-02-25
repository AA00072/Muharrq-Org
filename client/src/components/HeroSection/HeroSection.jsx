import React from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Hero Image */}
            <img src="/assets/Hero.png" alt="Hero Banner"className="absolute inset-0 w-full h-full object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">

                {/* Title Animation */}
                <motion.h1
                    className="text-3xl md:text-5xl font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Muharraq Charity Society
                </motion.h1>

                {/* Description Animation */}
                <motion.p
                    className="mt-2 text-lg md:text-xl max-w-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    More than 35 years have passed since the establishment of the association...
                </motion.p>

                {/* Button Animation */}
                <motion.button
                    className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold text-lg transition-all hover:bg-yellow-600 hover:text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Contact Us
                </motion.button>
            </div>
        </div>
    );
};

export default HeroSection;
