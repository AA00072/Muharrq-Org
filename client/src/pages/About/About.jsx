import React from "react";
import WhoWeAreSection from "../../components/WhoWeAre/WhoWeAre";

const About = () => {
  return (
      <div className="home">

          <WhoWeAreSection />
          
          <section className="get-involved bg-gray-100 text-center py-16">
              <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
              <p className="text-lg max-w-2xl mx-auto">
                  Join us in making the world a better place. Volunteer, donate, or spread the word!
              </p>
          </section>
      </div>
  );
};

export default About;