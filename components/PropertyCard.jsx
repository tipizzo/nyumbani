'use client'

import { Star } from "lucide-react"
import Image from "next/image"
import properties from "@/utils/data";

const PropertyCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 w-max mx-auto py-14 px-4">
                {properties.map(property => (
                    <div key={property.id} className="flex flex-col gap-1 max-w-[350px] cursor-pointer rounded-xl shadow-xl hover:bg-gray-100 transition-all duration-300 mb-8 pb-5">
                        <Image
                            src={property.image}
                            width={350}
                            height={300}
                            alt=""
                            className="rounded-xl"
                        />
                        <span className={`absolute w-max text-[10px] 
                            ${property.availability === "available" ? "bg-green-600" 
                            : property.availability === "unavailable" ? "bg-red-600"
                            : property.availability === "pending" ? "bg-orange-600" 
                            : "bg-gray-600"}
                             text-white m-3 p-1 rounded-xl`}>{property.availability}</span>
                        <div className="flex flex-col gap-2 mt-5 px-2">
                            <div className="flex items-center justify-between">
                                <p className="text-[15px] font-bold">{property.neighborhood}, {property.city} - {property.country}</p>
                                <p className="flex gap-1 text-[15px] font-bold items-center"><Star className="" /></p>
                            </div>
                            <p className="text-sm font-light">{property.description}</p>
                            <p className="text-sm font-semibold">Bedroom: {property.bedroom}</p>
                            <p className="text-[15px] font-bold">{property.monthly_price} $ par mois</p>
                            <p className="text-[15px] font-bold">{property.daily_price} $ par jour</p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default PropertyCard