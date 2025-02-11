import { Search } from "lucide-react";

const Hero = () => {
    return (
      <section>
        {/* Background Image with Overlay */}
        <div
          className="min-h-[600px] bg-cover bg-no-repeat bg-center w-full overflow-hidden relative"
          style={{ backgroundImage: "url('/assets/images/hero_image.jpg')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pt-48">
            <h1 className="flex  text-6xl font-extrabold mb-12">Discover Homes that Match Your Lifestyle.</h1>
            <input
              type="search"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
              className="py-4 px-5 w-[30rem] rounded-lg text-gray-800 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
            />
            <button>
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;