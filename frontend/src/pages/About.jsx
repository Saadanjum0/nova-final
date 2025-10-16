import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-purple-900/20 blur-3xl"></div>

                  {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center space-y-6 sm:space-y-8 max-w-2xl">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-xs sm:text-sm mb-6 sm:mb-8">
            <span className="text-orange-100">Under Construction</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
            Coming Soon
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100/80 font-light leading-relaxed px-4">
            We're crafting our story. Stay tuned to learn more about Nova AI.
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
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default About;
