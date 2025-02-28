'use client'

import { ArrowRight, Heart, Link2, Star } from "lucide-react"
import Image from "next/image"
import properties from "@/utils/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa"
import { useState } from "react";

const PropertyCard = () => {

    const [likedProperties, setLikedProperties] = useState({})

    const handleLikeButton = (propertyId) => {
        setLikedProperties((prev) => ({
            ...prev,
            [propertyId]: !prev[propertyId]
        }));
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center px-3">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-fit sm:max-w-7xl mx-auto py-10 px-4">
                {properties.slice(0, 4).map(property => (
                    <div key={property.id} className="flex flex-col gap-1 max-w-[350px] sm:max-w-[500px] w-full cursor-pointer rounded-xl shadow-xl hover:bg-gray-100 transition-all duration-300 mb-8 pb-5 relative">
                        <div className="relative w-full h-[200px]">
                            <Image
                                src={property.image}
                                layout="fill"
                                objectFit="cover"
                                alt=""
                                className="rounded-t-xl"
                            />
                        </div>
                        <span className={`absolute w-max text-[10px] 
                            ${property.availability === "available" ? "bg-green-600"
                                : property.availability === "unavailable" ? "bg-red-600"
                                    : property.availability === "pending" ? "bg-orange-600"
                                        : "bg-gray-600"}
                            text-white m-3 p-1 rounded-xl`}>
                            {property.availability}
                        </span>
                        <div className="flex flex-col gap-2 mt-5 px-2">
                            <div className="flex items-center justify-between">
                                <p className="text-[15px] font-bold">{property.neighborhood}, {property.city} - {property.country}</p>
                                <p className="flex gap-1 text-[15px] items-center">
                                    <button className="focus:outline-none" onClick={() => handleLikeButton(property.id)}><FaHeart className={`w-5 h-5 transition-colors duration-200 ${likedProperties[property.id] ? 'text-red-500' : 'text-gray-400' } `} /></button>
                                </p>
                            </div>
                            <p className="text-sm font-light">{property.description}</p>
                            <p className="text-sm font-semibold">Bedroom: {property.bedroom}</p>
                            <p className="text-[15px] font-bold">{property.monthly_price} $ par mois</p>
                            <p className="text-[15px] font-bold">{property.daily_price} $ par jour</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Centered Button */}
            <div className="w-full flex justify-center">
                <Link href="/properties" className="border border-green-600 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white flex items-center justify-center p-2 rounded-xl gap-2 text-sm transition-all duration-300">
                    Explore More <ArrowRight className=" hover:text-white transition-all" />
                </Link>
            </div>
        </motion.div>
    )
}

export default PropertyCard