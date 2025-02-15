import { Apple, AppleIcon, Facebook, Instagram, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const copyrightYear = new Date().getFullYear()

  return (
    <footer className='flex flex-col items-center justify-center mx-auto gap-5 py-12 w-full bg-gray-100'>
        <div className='flex flex-col items-center gap-2'>
            <h3 className='font-bold'>About Nyumbani's Recommandations</h3>
            <p className='text-slate-500 text-[15px] text-center'>Recommandations are based on your location and search activity, such as the homes you've viewed
                and saved and filters you've used. We use this information to bring similar homes to your attention,
                so you don't miss out.
            </p>
            
        <hr className='w-[500px] my-5'/>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-5 text-center justify-center'>
                <span className='text-slate-500 text-[13px]'>About</span>
                <span className='text-slate-500 text-[13px]'>Research</span>
                <span className='text-slate-500 text-[13px]'>Careers</span>
                <span className='text-slate-500 text-[13px]'>Privacy Notice</span>
                <span className='text-slate-500 text-[13px]'>Help</span>
                <span className='text-slate-500 text-[13px]'>Advertise</span>
                <span className='text-slate-500 text-[13px]'>Fair Housing Guide</span>
                <span className='text-slate-500 text-[13px]'>Advocacy</span>
                <span className='text-slate-500 text-[13px]'>Term of use</span>
            </div>
            <div className='flex gap-5 justify-center'>
                <span className='text-slate-500 text-[13px]'>Privacy Portal</span>
                <span className='text-slate-500 text-[13px]'>Cooke Preference</span>
                <span className='text-slate-500 text-[13px]'>Learn</span>
                <span className='text-slate-500 text-[13px]'>AI</span>
                <span className='text-slate-500 text-[13px]'>Mobile Apps</span>
            </div>
            <hr />
            <div className='flex flex-col gap-5 items-center text-center'>
                <p className='text-slate-500 text-[10px]'>Nyumbani Group is committed to ensuring digital accessibility for individuals with disabilities.
                    We are continuously working to improve the accessibility of our <br /> web experience for everyone, and we welcome 
                    your feedback and accomodation requests. If you wish to report an issue, <Link href="" className='text-blue-500'>Please, let us know.</Link>
                </p>
                <div className='flex gap-3'>
                    <button className='border border-black p-1 rounded-md'>
                        <Link className='flex gap-2 justify-center items-center' href="">
                            <img className='w-[20px] h-[20px] text-center' src='assets/images/apple.png' />
                            <p className='text-[10px] text-center items-center'>Download on the <br/> <span className='font-bold text-[12px]'>App Store</span></p>
                        </Link>
                    </button>
                    <button className='border border-black p-1 rounded-md'>
                        <Link className='flex gap-2 justify-center items-center' href="">
                            <img className='w-[20px] h-[20px] text-center' src='assets/images/playstore.png' />
                            <p className='text-[10px] text-center items-center'>Download on the <br/> <span className='font-bold text-[12px]'>Google Play</span></p>
                        </Link>
                    </button>
                </div>
                <div className='flex gap-5 py-5'>
                    <Instagram className='text-green-700 font-bold w-8 h-8 cursor-pointer' />
                    <Facebook className='text-green-700 font-bold w-8 h-8 cursor-pointer' />
                    <X className='text-green-700 font-bold w-8 h-8 cursor-pointer' />
                </div>
                <p className='text-slate-600 text-[11px]'>&copy; {copyrightYear} Nyumbani Inc.</p>
                    

            </div>
        </div>
    </footer>
  )
}

export default Footer