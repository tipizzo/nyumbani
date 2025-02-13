'use client'

import { Star } from "lucide-react"
import Image from "next/image"

const PropertyCard = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold mb-12">Discover your Perfect Home</h1>
            <div className=" flex items-stretch w-full justify-around">

                <div className="flex flex-col gap-1 max-w-[350px] cursor-pointer border border-gray-200 rounded-xl shadow-sm">
                    <Image
                        src="/assets/images/apart_1.jpg"
                        width={350}
                        height={300}
                        alt=""
                        className="rounded-xl"
                    />
                    <span className="absolute w-max text-[10px] bg-orange-600 text-white m-3 p-1 border border-none rounded-lg">Rent</span>
                    <div className="flex flex-col gap-2 mt-5 px-2">
                        <div className="flex items-center justify-between">
                            <p className="text-[15px] font-bold">Les Volcans - Goma/DRC</p>
                            <p className="flex gap-1 text-[15px] font-bold items-center"><Star className="" />4.89</p>
                        </div>
                        <p className="text-sm font-light">Cet appartement situé au bord du lac Kivu vous offre une vue unique sur le lac...</p>
                        <p className="text-sm font-semibold">1 livingroom, 3 bedrooms, 2 bathrooms, 1 kitchen</p>
                        <p className="text-[15px] font-bold">500 $ par mois</p>
                        <p className="text-[15px] font-bold">50 $ par jour</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-[350px] cursor-pointer border border-gray-200 rounded-xl shadow-sm">
                    <Image
                        src="/assets/images/apart_2.jpg"
                        width={350}
                        height={300}
                        alt=""
                        className="rounded-xl"
                    />
                    <span className="absolute w-max text-[10px] bg-green-600 text-white m-3 p-1 border border-none rounded-lg">Available</span>
                    <div className="flex flex-col gap-2 mt-5 px-2">
                        <div className="flex items-center justify-between">
                            <p className="text-[15px] font-bold">Les Volcans - Goma/DRC</p>
                            <p className="flex gap-1 text-[15px] font-bold items-center"><Star className="" />4.00</p>
                        </div>
                        <p className="text-sm font-light">Cet appartement situé au bord du lac Kivu vous offre une vue unique sur le lac...</p>
                        <p className="text-sm font-semibold">1 livingroom, 3 bedrooms, 2 bathrooms, 1 kitchen</p>
                        <p className="text-[15px] font-bold">500 $ par mois</p>
                        <p className="text-[15px] font-bold">50 $ par jour</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-[350px] cursor-pointer border border-gray-200 rounded-xl shadow-sm">
                    <Image
                        src="/assets/images/apart_3.jpg"
                        width={350}
                        height={300}
                        alt=""
                        className="rounded-xl"
                    />
                    <span className="absolute w-max text-[10px] bg-red-600 text-white m-3 p-1 border border-none rounded-lg">Not available</span>
                    <div className="flex flex-col gap-2 mt-5 px-2">
                        <div className="flex items-center justify-between">
                            <p className="text-[15px] font-bold">Les Volcans - Goma/DRC</p>
                            <p className="flex gap-1 text-[15px] font-bold items-center"><Star className="" />5.00</p>
                        </div>
                        <p className="text-sm font-light">Cet appartement situé au bord du lac Kivu vous offre une vue unique sur le lac...</p>
                        <p className="text-sm font-semibold">1 livingroom, 3 bedrooms, 2 bathrooms, 1 kitchen</p>
                        <p className="text-[15px] font-bold">500 $ par mois</p>
                        <p className="text-[15px] font-bold">50 $ par jour</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-[350px] cursor-pointer border border-gray-200 rounded-xl shadow-sm">
                    <Image
                        src="/assets/images/apart_1.jpg"
                        width={350}
                        height={300}
                        alt=""
                        className="rounded-xl"
                    />
                    <span className="absolute w-max text-[10px] bg-green-600 text-white m-3 p-1 border border-none rounded-lg">Available</span>
                    <div className="flex flex-col gap-2 mt-5 px-2">
                        <div className="flex items-center justify-between">
                            <p className="text-[15px] font-bold">Les Volcans - Goma/DRC</p>
                            <p className="flex gap-1 text-[15px] font-bold items-center"><Star className="" />3.50</p>
                        </div>
                        <p className="text-sm font-light">Cet appartement situé au bord du lac Kivu vous offre une vue unique sur le lac...</p>
                        <p className="text-sm font-semibold">1 livingroom, 3 bedrooms, 2 bathrooms, 1 kitchen</p>
                        <p className="text-[15px] font-bold">500 $ par mois</p>
                        <p className="text-[15px] font-bold">50 $ par jour</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PropertyCard