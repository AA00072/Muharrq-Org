import React from "react";
import FadeInSection from "../FadeInSection/FadeInSection";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const whoWeAreData = {
    title: "Who We Are",
    description: "We are a non-profit organization committed to supporting underprivileged communities. Our mission is to provide aid, education, and empowerment to those in need.",
    sections: [
        {
            title: "Our Mission",
            content: "Our mission is to create sustainable solutions for communities in need, ensuring access to education, healthcare, and basic necessities.",
            icon: <FaBullseye className="text-yellow-500 text-3xl mb-4" />
        },
        {
            title: "Our Vision",
            content: "To build a world where every individual has the opportunity to thrive and achieve their full potential regardless of their circumstances.",
            icon: <FaEye className="text-yellow-500 text-3xl mb-4" />
        },
        {
            title: "Our Values",
            values: [
                "Compassion",
                "Integrity",
                "Sustainability",
                "Collaboration",
                "Empowerment"
            ],
            icon: <FaHeart className="text-yellow-500 text-3xl mb-4" />
        }
    ]
};

const WhoWeAreSection = () => {
    return (
        <section className="relative py-16 text-white bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-black">{whoWeAreData.title}</h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-700">{whoWeAreData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {whoWeAreData.sections.map((section, index) => (
                        <FadeInSection key={index}>
                            <div className="bg-white p-6 rounded-lg text-black shadow-md flex flex-col items-center h-full">
                                {section.icon}
                                <h3 className="text-xl font-semibold mb-4 text-center">{section.title}</h3>
                                {section.content ? (
                                    <p className="text-center text-gray-600">{section.content}</p>
                                ) : (
                                    <div className="grid grid-rows-2 grid-flow-col gap-2">
                                        {section.values.map((value, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> {value}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
