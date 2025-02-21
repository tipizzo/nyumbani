import Image from "next/image";
import Link from "next/link";


const Login = () => {
    return (
        <div className="flex w-screen h-screen">
            <div className="relative w-1/2 h-full">

                <Image
                    src="/assets/images/login_image.jpeg"
                    alt="Login - Registration Page"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-green-800 bg-opacity-20">
                    <div className="flex flex-col items-center justify-center relative gap-12 top-60 z-10">
                        <h1 className="text-white text-5xl font-bold">WELCOME TO</h1>
                        <img src="/assets/images/traced-logo_nyumbani.png" className="" />
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center w-1/2 gap-5 bg-gray-100">
                <div className="flex flex-col gap-2 border px-6 py-3 bg-white rounded-xl shadow-md">
                    <h2 className="font-bold text-2xl">Create an account</h2>
                    <p className="text-sm text-slate-500">Please, Sign Up to explore more features</p>
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Full Name</label>
                            <input type="text" placeholder="John Doe" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Phone Number</label>
                            <input type="text" placeholder="+243 974377888" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Email</label>
                            <input type="email" placeholder="example@gmail.com" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Password</label>
                            <input type="password" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Confirm your Password</label>
                            <input type="password" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">Location</label>
                            <input type="text" placeholder="Himbi, Goma/DRC" className="p-2 text-sm w-[450px] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold">User Role</label>
                            <select className="p-2 text-sm w-[450px] border-2 rounded-lg">
                                <option value="tenant">Tenant</option>
                                <option value="tenant">Landlord</option>
                                <option value="tenant">Agent</option>
                            </select>
                        </div>
                        <button className="font-bold border-1 border-green-600 p-2 mt-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-slate-50 text-sm cursor-pointer">
                            Sign Up
                        </button>
                        <div className="flex justify-between gap-2">
                            <button className="border-none bg-white p-1 w-[220px] rounded-lg text-sm hover:bg-gray-200 transition-all duration-300">
                                <Link href="" className="flex gap-3 items-center text-center">
                                    <img src="/assets/images/google.png" className="w-8 h-8" />
                                    <p className="font-semibold">Connect with Google</p>
                                </Link>
                            </button>
                            <button className="border-none bg-white p-1 w-[220px] rounded-lg text-sm hover:bg-gray-200 transition-all duration-300">
                                <Link href="" className="flex gap-3 items-center text-center">
                                    <img src="/assets/images/facebook.png" className="w-8 h-8" />
                                    <p className="font-semibold">Connect with Facebook</p>
                                </Link>
                            </button>
                        </div>
                        <p className="text-center text-sm mt-2">Already have an account ? <Link href="" className="text-blue-700 font-bold cursor-pointer">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
