import React, { useState, useEffect } from "react";
import FadeInSection from "../FadeInSection/FadeInSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const newsEvents = [
  {
      image: "../../assets/events/1.png",
  },
  {
      image: "../../assets/events/2.png",
  },
  {
      image: "../../assets/events/3.png",
  },
];

const NewsEventsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsEvents.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + newsEvents.length) % newsEvents.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-10 bg-gray-100 relative">
            <div className="container mx-auto px-4">
                <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-md">
                    <FadeInSection>
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {newsEvents.map((event, index) => (
                                <div key={index} className="min-w-full flex justify-center items-center h-[750px]">
                                    <img
                                        src={event.image}
                                        alt={`Event ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </FadeInSection>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        <FaArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsEventsSection;
