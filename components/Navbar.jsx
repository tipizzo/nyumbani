'use client'

import { House, LogOut, Plus, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Navbar = () => {

    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    }, [])

    return (
        <nav className="flex items-center justify-around w-full pt-4 px-10 bg-white border-b border-gray-100 shadow-md">

            <Link href="" className=" font-extrabold mb-4 sm:mb-2">
                <h1 className="flex items-center justify-center gap-1 text-2xl">N Y U M B<House className="text-green-600 font-extrabold" />N I </h1>
            </Link>
            {session?.user ? (
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
            ): (
                <>
                
                </>
            )}
            
            <div>
                {session?.user ? (
                    <div className="flex items-center gap-6 mb-4">
                        <Link href="/add_item" className="flex text-sm">
                            <Plus /> Create Post
                        </Link>

                        <button type="button" onClick={signOut} className="flex gap-1 items-center justify-center text-sm font-semibold  hover:text-green-700 transition-all duration-300">
                            <LogOut /> Sign Out
                        </button>

                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>

                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                className="flex gap-1 items-center justify-center text-sm font-semibold border-2 border-green-600 p-2 mb-4 rounded-lg hover:bg-green-600 hover:text-gray-50 transition-all duration-300"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                            >
                                <User /> Sign In
                            </button>
                        ))}
                    </>
                )}

            </div>


            {/* Desktop Navigation */}



            {/* Mobile Navigation */}
            


        </nav>
    )
}

export default Navbar