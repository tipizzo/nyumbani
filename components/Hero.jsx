'use client'

import { Search } from "lucide-react";
import Form from 'next/form'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section>
            {/* Background Image with Overlay */}
            <div
                className="min-h-[500px] sm:min-h-[600px] bg-cover bg-no-repeat bg-center w-full overflow-hidden relative rounded-b-md"
                style={{ backgroundImage: "url('/assets/images/hero_image.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 pt-32 sm:pt-40 text-center">
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-14 items-center justify-center">
                        <h1 className="text-4xl sm:text-6xl font-bold"><span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-200">Discover Homes</span> {" "} that Match Your Lifestyle.</h1>
                        <p className="text-sm sm:text-base font-semibold max-w-xl">Nyumbani is a platform where you can buy, sell, or rent properties and connect with trusted real estate agents.</p>
                    </motion.div>
                    <Form action="/" scroll={false} className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                        <input
                            type="search"
                            placeholder="Enter an address, neighborhood, city, or ZIP code"
                            className="py-3 px-4 sm:py-4 sm:px-5 w-full rounded-lg text-gray-800 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                        />
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Hero;