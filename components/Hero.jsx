import { Search } from "lucide-react";
import Form from 'next/form'

const Hero = () => {
    return (
        <section>
            {/* Background Image with Overlay */}
            <div
                className="min-h-[500px] bg-cover bg-no-repeat bg-center w-full overflow-hidden relative rounded-b-3xl"
                style={{ backgroundImage: "url('/assets/images/hero_image.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pt-40">
                    <div className="flex flex-col gap-4 mb-14 items-center justify-center">
                        <h1 className="text-6xl font-bold"><span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500">Discover Homes</span> that Match Your Lifestyle.</h1>
                        <p className="text-sm font-semibold">Nyumbani is a platform where you can buy, sell, or rent properties and connect with trusted real estate agents.</p>
                    </div>
                    <Form action="/" scroll={false} className="">
                        <input
                            type="search"
                            placeholder="Enter an address, neighborhood, city, or ZIP code"
                            className="py-4 px-5 w-[40rem] rounded-lg text-gray-800 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                        />
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Hero;