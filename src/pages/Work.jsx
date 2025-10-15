import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Work = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20 blur-3xl"></div>
      
                  {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center space-y-6 sm:space-y-8 max-w-2xl">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-xs sm:text-sm mb-6 sm:mb-8">
            <span className="text-orange-100">Portfolio Loading</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Coming Soon
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100/80 font-light leading-relaxed px-4">
            Our portfolio is being meticulously crafted. Check back soon to see our work.
          </p>

          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 mt-6 sm:mt-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
                  </div>
                </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Work;
