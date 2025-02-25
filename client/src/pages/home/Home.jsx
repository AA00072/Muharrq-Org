import React from "react";
import Location from "../../components/location/location";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import NewsEventsSection from "../../components/NewsEventsSection/NewsEventsSection";

const Home = () => {
    return (
        <div className="home">
            <HeroSection />

            <NewsEventsSection/>

            <AchievementsSection />

            <ServicesSection />

            <section className="get-involved bg-gray-100 text-center py-16">
                <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Join us in making the world a better place. Volunteer, donate, or spread the word!
                </p>
                <Location />
            </section>
        </div>
    );
};

export default Home;