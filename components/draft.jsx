'use client'

import { House, LogOut, Menu, Plus, User, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Navbar = () => {

    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={`fixed top-0 left-0 flex items-center justify-between w-full px-10 py-2 border-b z-50 transition-all duration-500 ${
            scrolling
              ? "bg-white/80 shadow-md border-gray-100 backdrop-blur-md"
              : "bg-transparent border-transparent shadow-none"
          }`}>
            {/* Logo */}
            <Link href="" className=" font-extrabold">
                <Image src="/assets/images/traced-logo_nyumbani.png"
                    width={110}
                    height={80}
                    alt=""
                />
            </Link>
            {/* Desktop LInk */}

            {session?.user ? (
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
            ) : (
                <></>
            )}
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
                                className="hidden md:flex gap-1 items-center text-sm font-bold border-1 border-green-600 p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-slate-50 transition-all duration-300"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                            >
                                <User /> Create an Account
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
                <div className="absolute top-16 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 z-50 rounded-sm md:hidden">
                    {session?.user ? (
                        <>
                            <Link href="#" className="text-sm font-semibold hover:text-green-700">Buy</Link>
                            <Link href="#" className="text-sm font-semibold hover:text-green-700">Rent</Link>
                            <Link href="#" className="text-sm font-semibold hover:text-green-700">Loans</Link>
                            <Link href="#" className="text-sm font-semibold hover:text-green-700">Find Agent</Link>
                            <Link href="#" className="text-sm font-semibold hover:text-green-700">Locations</Link>
                            <hr />
                        </>
                    ) : (
                        <></>
                    )}

                    {session?.user ? (
                        <>
                            <Link href="/add_item" className="flex text-sm">
                                <Plus /> Create Post
                            </Link>
                            <button type="button" onClick={signOut} className="flex text-sm font-semibold hover:text-green-700">
                                <LogOut /> Sign Out
                            </button>
                            <Link href="/">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="profile"
                                />
                            </Link>
                        </>
                    ) : (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button key={provider.name} onClick={() => signIn(provider.id)}
                                    className="flex gap-1 items-center text-sm font-bold border-1 border-green-600 rounded-lg bg-gradient-to-r from-green-500 to-green-600 p-2 hover:bg-green-600 text-slate-50 transition-all duration-300">
                                    <User /> Sign In
                                </button>
                            ))}
                        </>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar