'use client'

import { House, User } from "lucide-react"
import Link from "next/link"


const Navbar = () => {
    return (
        <nav className="flex items-center justify-around w-full pt-4 px-10 bg-white border-b border-gray-100 shadow-md">
            
            <Link href="" className=" font-extrabold mb-4">
                <h1 className="flex items-center justify-center gap-1 text-2xl">N Y U M B<House className="text-green-600 font-extrabold" />N I </h1>
            </Link>
            <div className="flex gap-8 mb-4">
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Buy
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Rent
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Home Loans
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Find Agent
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Available Locations
                </Link>
            </div>
            <button className="flex gap-1 items-center justify-center text-sm font-semibold border-2 border-green-600 p-2 mb-4 rounded-lg hover:bg-green-600 hover:text-gray-50 transition-all duration-300">
                <User /> Sign In
            </button>

            {/* Desktop Navigation */}



            {/* Mobile Navigation */}

        </nav>
    )
}

export default Navbar