function HeroSection() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen items-center px-4 md:px-16 gap-8">
        {/* Left Section */}
        <div className="col-span-1">
          {/* Headings */}
          <h1 className="text-right text-5xl md:text-7xl lg:text-9xl font-bold leading-tight text-red-600">
            YOUR FEET
          </h1>
          <h1 className="text-right text-5xl md:text-7xl lg:text-9xl font-bold leading-tight text-gray-900">
            DESERVE
          </h1>
          <h1 className="text-right text-5xl md:text-7xl lg:text-9xl font-bold leading-tight text-gray-900">
            THE BEST
          </h1>
  
          {/* Paragraph */}
          <p className="text-right text-sm md:text-lg mt-6 text-gray-600">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br />
            PROVIDE YOU WITH THE BEST FOOTWEAR <br />
            AVAILABLE IN THE MARKET.
          </p>
  
          {/* Buttons */}
          <div className="flex justify-end mt-8 space-x-4">
            <button className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
              Shop Now
            </button>
            <button className="border border-gray-400 text-gray-700 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Categories
            </button>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="col-span-1 flex justify-center items-center">
          <img
            src="images/hero-image.png"
            alt="Hero"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  