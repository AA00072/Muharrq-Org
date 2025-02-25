import React from "react";
import FadeInSection from "../FadeInSection/FadeInSection";

const Location = () => {
    return (
        <FadeInSection>
            <section className="location bg-gray-100 py-10 text-center">
                <div className="container mx-auto flex flex-col md:flex-row shadow-lg p-6 bg-white">
                    <div className="md:w-1/2 flex justify-center">
                        <iframe
                            title="Bahrain Location"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?q=Bahrain&key=AIzaSyAwM435m9qqdGzGZjDFmdrS3D9X44TRkGs"
                        ></iframe>
                    </div>
                    <div className="md:w-1/2 p-6">
                        <h3 className="text-xl font-bold">Address:</h3>
                        <p>198 West 21st Street, Suite 721, Bahrain</p>
                        
                        <h3 className="text-xl font-bold mt-4">Email:</h3>
                        <p>info@charitybahrain.com</p>
                        
                        <h3 className="text-xl font-bold mt-4">Phone:</h3>
                        <p>+973 1234 5678</p>
                        
                        <h3 className="text-xl font-bold mt-4">Follow us on:</h3>
                        <p>Facebook | Twitter | Instagram | LinkedIn</p>
                    </div>
                </div>
            </section>
        </FadeInSection>
    );
};

export default Location;