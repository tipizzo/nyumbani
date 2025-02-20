'use client'
import Link from "next/link"

import { ArrowBigRight, Bot, ChartArea, ListCheck, MessageCircle } from "lucide-react"

const About = () => {
    return (
        <section className="flex flex-col items-center justify-center mt-16 w-full">
            <h1 className="text-xl sm:text-2xl font-semibold text-center">Making Property Transactions Seamless & Hassle-Free</h1>
            <div className="flex flex-col sm:flex-row sm:justify-between mt-10 items-center w-full max-w-5xl gap-6">
                <div className="flex flex-col items-center text-center w-2/3 sm:w-1/3 p-5 border rounded-lg shadow-md gap-6">
                    <ListCheck className="text-green-700 w-10 h-10" />
                    <h3 className="text-gray-800 font-bold">List Your Property</h3>
                    <p className="text-xs">Sell or rent your propery in just a few clicks</p>
                    <button>
                        <Link href="" className="font-bold text-sm text-green-800 hover:text-green-500 transition-all duration-500">List Now...</Link>
                    </button>
                </div>
                <div className="flex flex-col items-center text-center w-2/3 sm:w-1/3 p-5 border rounded-lg shadow-md gap-6">
                    <MessageCircle className="text-green-700 w-10 h-10" />
                    <h3 className="text-gray-800 font-bold">Real-Time Chat</h3>
                    <p className="text-xs">Instantly communicate with property owners and agents.</p>
                    <button>
                        <Link href="" className="font-bold text-sm text-green-800 hover:text-green-500 transition-all duration-500">Chat Now...</Link>
                    </button>
                </div>
                <div className="flex flex-col items-center text-center w-2/3 sm:w-1/3 p-5 border rounded-lg shadow-md gap-6">
                    <Bot className="text-green-700 w-10 h-10" />
                    <h3 className="text-gray-800 font-bold">24/7 Support</h3>
                    <p className="text-xs">Get assistance in securing home loans and mortgages.</p>
                    <button>
                        <Link href="" className="font-bold text-sm text-green-800 hover:text-green-500 transition-all duration-500">Learn More...</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About