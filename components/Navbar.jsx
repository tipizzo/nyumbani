'use client'

import { House, LogOut, Menu, Plus, User, X } from "lucide-react"
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

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-100 shadow-md">
            {/* Logo */}
            <Link href="" className=" font-extrabold">
                <h1 className="flex items-center gap-1 text-2xl">N Y U M B<House className="text-green-600 font-extrabold" />N I </h1>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6">
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Buy
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Rent
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Loans
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Find Agent
                </Link>
                <Link href="" className="text-sm font-semibold hover:text-green-700 transition-all duration-300">
                    Locations
                </Link>
            </div>

            {/* User Actions */}
            <div>
                {session?.user ? (
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/add_item" className="flex text-sm">
                            <Plus /> Create Post
                        </Link>

                        <button type="button" onClick={signOut} className="flex items-center text-sm font-semibold  hover:text-green-700 transition-all duration-300">
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
                                className="flex gap-1 items-center text-sm font-semibold border-2 border-green-600 p-2 mb-4 rounded-lg hover:bg-green-600 hover:text-gray-50 transition-all duration-300"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                            >
                                <User /> Sign In
                            </button>
                        ))}
                    </>
                )}

            </div>

            {/* Burger Menu Mobile */}
            <button onClick={() => setOpenMenu(!openMenu)} className="md:hidden">
                {openMenu ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Navigation */}
            {openMenu && (
                <div className="absolute top-16 right-0 w-60 bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden">
                    <Link href="#" className="text-sm font-semibold hover:text-gren-700">Buy</Link>
                    <Link href="#" className="text-sm font-semibold hover:text-gren-700">Rent</Link>
                    <Link href="#" className="text-sm font-semibold hover:text-gren-700">Loans</Link>
                    <Link href="#" className="text-sm font-semibold hover:text-gren-700">Find Agent</Link>
                    <Link href="#" className="text-sm font-semibold hover:text-gren-700">Locations</Link>
                </div>
            )}



        </nav>
    )
}

export default Navbar