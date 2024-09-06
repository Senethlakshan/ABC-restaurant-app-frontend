import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';
import recipe1 from '../../../assets/recipe1.png';
import recipe2 from '../../../assets/recipe2.png';
import recipe3 from '../../../assets/recipe3.png';
import heroimage from '../../../assets/heroimage.webp';
import Footer from '../../Footer/Footer';

const About: React.FC = () => {
    return (
        <div className="about-container">
            {/* Header Section */}
            <Navbar />

            {/* Hero Section */}
            <section className="hero bg-cover bg-center text-center py-20" style={{ backgroundImage: `url(${heroimage})` }} >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-white"
                >
                    Welcome to ABC Restaurant 
                </motion.h1>
                <p className="text-white mt-4">Experience the authentic flavors of Korea.</p>
            </section>

            {/* Introduction Section */}
            <section className="introduction p-8 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-700">
                Experience authentic Korean cuisine at its finest at ABC Restaurant. Our restaurant brings you the rich, bold flavors of Korea, from sizzling BBQ to savory stews, crafted with fresh ingredients and traditional recipes. At ABC, we are passionate about offering a culinary journey that captures the heart of Korean food culture. Join us for an unforgettable dining experience where tradition meets taste.                </p>
            </section>

            {/* Image Gallery Section */}
            <section className="image-gallery p-8">
                <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-3 gap-4">
                    {/* Replace with actual images */}
                    <img
                        src={recipe1}
                        alt="Gallery Image 1"
                        className="rounded-lg shadow-lg"
                        width="300"  // Set desired width in pixels
                        height="200" // Set desired height in pixels
                    />
                    <img
                        src={recipe3}
                        alt="Gallery Image 2"
                        className="rounded-lg shadow-lg"
                        width="300"  // Set desired width in pixels
                        height="200" // Set desired height in pixels
                    />
                    <img
                        src={recipe2}
                        alt="Gallery Image 3"
                        className="rounded-lg shadow-lg"
                        width="300"  // Set desired width in pixels
                        height="200" // Set desired height in pixels
                    />

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
