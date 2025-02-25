import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FadeInSection from "../FadeInSection/FadeInSection";


const achievements = [
    { title: "Widow Support Project", description: "Providing financial aid and assistance to widows.", images: ["../../assets/widow-support/1.jpg", "../../assets/widow-support/2.jpg"] },
    { title: "School Bag Project", description: "Distributing school bags and supplies to students.", images: ["../../assets/school-bag/1.jpg", "../../assets/school-bag/2.jpg"] },
    { title: "Mosque Projects", description: "Building and renovating mosques for communities.", images: ["../../assets/mosques/1.jpg", "../../assets/mosques/2.jpg", "../../assets/mosques/3.jpg"] },
    { title: "Mass Marriage Project", description: "Helping individuals afford marriage expenses.", images: ["../../assets/marriage/1.jpg", "../../assets/marriage/2.jpg", "../../assets/marriage/3.jpg"] },
    { title: "Anti-Drugs Awareness Seminar", description: "Educational events about drug crime prevention.", images: ["../../assets/anti-drugs/1.jpg", "../../assets/anti-drugs/2.jpg", "../../assets/anti-drugs/3.jpg"] },
    { title: "Cold & Warmth Project", description: "Providing essential items for winter and summer needs.", images: ["../../assets/cold-warmth/1.jpg", "../../assets/cold-warmth/2.jpg", "../../assets/cold-warmth/3.jpg"] },
    { title: "Islamic Lectures", description: "Organizing religious lectures and educational programs.", images: ["../../assets/lectures/1.jpg", "../../assets/lectures/2.jpg", "../../assets/lectures/3.jpg"] },
    { title: "Ramadan Iftar Project", description: "Distributing meals for those fasting during Ramadan.", images: ["../../assets/iftar/1.jpg", "../../assets/iftar/2.jpg", "../../assets/iftar/3.jpg"] },
];

const AchievementsSection = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    
                <div className="bg-yellow-500 px-6 py-4 rounded-lg shadow-md flex items-center justify-center text-black text-center text-xl font-semibold">
                    Our Achievements
                </div>
                    {achievements.map((item, index) => (
                        <FadeInSection key={index} delay={index * 0.1}>
                            <div className={`p-6 rounded-lg shadow-md transition-all duration-300 ${item.first ? item.bgClass : "bg-white hover:shadow-lg hover:scale-105 cursor-pointer"}`}>
                                {item.first ? (
                                    <div className="text-center">{item.title}</div>
                                ) : (
                                    <AchievementCard item={item} />
                                )}
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AchievementCard = ({ item }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        item.images.forEach((img) => {
            const imgPreload = new Image();
            imgPreload.src = img;
        });
    }, [item.images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % item.images.length);
                setFade(true);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, [item.images.length]);

    return (
        <div className="flex flex-col items-center text-center">
            <img
                src={item.images[currentImage]}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md transition-opacity duration-500"
                style={{ opacity: fade ? 1 : 0 }}
            />
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        </div>
    );
};

AchievementCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default AchievementsSection;