import { Apple, AppleIcon, Facebook, Instagram, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const copyrightYear = new Date().getFullYear()

    return (
        <footer className='flex flex-col items-center justify-center mx-auto gap-5 py-12 w-full bg-gray-100'>
            <div className='flex flex-col items-center gap-2 px-4 text-center'>
                <h3 className='font-bold text-sm sm:text-lg'>About Nyumbani's Recommandations</h3>
                <p className='text-slate-500 text-xs sm:text-sm'>Recommandations are based on your location and search activity, such as the homes you've viewed
                    and saved and filters you've used. We use this information to bring similar homes to your attention,
                    so you don't miss out.
                </p>

                <hr className='w-[200px] sm:w-[500px] my-5' />
            </div>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-5 text-center px-4'>
                {["About", "Research", "Careers", "Privacy Notice", "Help", 
            "Advertise", "Fair Housing Guide", "Advocacy", "Terms of Use",
            "Privacy Portal", "Cookie Preference", "Learn", "AI", "Mobile Apps"
            ].map((text, idx) => (
                <span key={idx} className="text-slate-500 text-sm sm:text-base cursor-pointer">
                    {text}
                </span>
            ))
            }
            </div>
            <hr className='w-[200px] sm:w-[500px] my-5' />
            <div className='flex flex-col items-center text-center px-4'>
                <p className='text-slate-500 text-xs sm:text-sm'>Nyumbani Group is committed to ensuring digital accessibility for individuals with disabilities.
                    We are continuously working to improve the accessibility of our <br /> web experience for everyone, and we welcome
                    your feedback and accomodation requests. If you wish to report an issue, <Link href="" className='text-blue-500'>Please, let us know.</Link>
                </p>
                <div className='flex flex-col items-center gap-4 mt-5'>
                    <Link href="" className=" font-extrabold">
                        <Image src="/assets/images/traced-logo_nyumbani.png"
                            width={150}
                            height={80}
                            alt=""
                        />
                    </Link>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <button className='border border-black p-2 rounded-md w-36'>
                            <Link className='flex gap-2 justify-center items-center' href="">
                                <img className='w-6 h-6' src='assets/images/apple.png' />
                                <p className='text-xs text-center'>Download on the <br /> <span className='font-bold text-sm'>App Store</span></p>
                            </Link>
                        </button>
                        <button className='border border-black p-2 rounded-md w-36'>
                            <Link className='flex gap-2 justify-center items-center' href="">
                                <img className='w-6 h-6' src='assets/images/playstore.png' />
                                <p className='text-xs text-center'>Download on the <br /> <span className='font-bold text-sm'>Google Play</span></p>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='flex gap-5 py-5'>
                    <Instagram className='text-green-700 w-6 h-6 cursor-pointer' />
                    <Facebook className='text-green-700 w-6 h-6 cursor-pointer' />
                    <X className='text-green-700 w-6 h-6 cursor-pointer' />
                </div>
                <p className='text-slate-600 text-xs'>&copy; {copyrightYear} Nyumbani Inc.</p>


            </div>
        </footer>
    )
}

export default Footer