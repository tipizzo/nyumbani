'use client'

import { useState } from "react"

const page = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [images, setImages] = useState([])
    const [bedRooms, setBedRooms] = useState(0)
    const [type, setType] = useState('')
    const [status, setStatus] = useState('available')

    const handleImageChange = (e) => {
        setImages([...e.targetfiles]);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-1/2 gap-5 bg-gray-100">
                <div className="flex flex-col gap-2 border px-6 py-3 bg-white rounded-xl shadow-md">
                    <h2 className="font-bold text-2xl"></h2>
                    <p className="text-sm text-slate-500"></p>
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Description</label>
                            <input type="text" placeholder="A mi-villa located in Kituku..." className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setDescription(e.target.value)} value={description} required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Price</label>
                            <input type="text" placeholder="500 $" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setPrice(e.target.value)} value={price} required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Location</label>
                            <input type="email" placeholder="Himbi, Goma/DRC" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setLocation(e.target.value)} value={location} required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Bedrooms</label>
                            <input type="0 - 100" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setBedRooms(e.target.value)} value={bedRooms} required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Status</label>
                            <input type="available" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setStatus(e.target.value)} value={status} required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Type</label>
                            <select className="p-2 text-sm w-[450px] border-2 rounded-lg" onChange={(e) => setType(e.target.value)} value={type}>
                                <option value="tenant">House</option>
                                <option value="tenant">Apartment</option>
                                <option value="tenant">Land</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Images</label>
                            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
                        </div>
                        <button className="font-bold border-1 border-green-600 p-2 mt-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-slate-50 text-sm cursor-pointer">
                            Create
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default page
