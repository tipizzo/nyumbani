'use client'

import { useState } from "react"

const page = () => {

    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [userRole, setUserRole] = useState('Tenant')

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-1/2 gap-5 bg-gray-100">
                <div className="flex flex-col gap-2 border px-6 py-3 bg-white rounded-xl shadow-md">
                    <h2 className="font-bold text-2xl"></h2>
                    <p className="text-sm text-slate-500"></p>
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold">Description</label>
                                <input type="text" placeholder="John Doe" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setFullName(e.target.value)} value={fullName} required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold">Price</label>
                                <input type="text" placeholder="+243 974377888" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                            </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Location</label>
                            <input type="email" placeholder="example@gmail.com" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Password</label>
                            <input type="password" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        </div>
                        <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold">Confirm your Password</label>
                                <input type="password" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold">Location</label>
                                <input type="text" placeholder="Himbi, Goma/DRC" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" onChange={(e) => setLocation(e.target.value)} value={location} required />
                            </div>
                        <div className="flex flex-col gap-1">
                                <label className="text-sm font-semibold">User Role</label>
                                <select className="p-2 text-sm w-[450px] border-2 rounded-lg" onChange={(e) => setUserRole(e.target.value)} value={userRole}>
                                    <option value="tenant">Tenant</option>
                                    <option value="tenant">Landlord</option>
                                    <option value="tenant">Agent</option>
                                </select>
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
