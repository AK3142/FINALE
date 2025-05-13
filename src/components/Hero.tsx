
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: "url('/lovable-uploads/cbfca5b7-76b2-4073-a590-9b1b5ad329ec.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow fade-in">
            Welcome to Royal Island
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-shadow animation-delay-200 fade-in">
            Experience Kerala's serene backwaters at our luxury homestay
          </p>
          <div className="animation-delay-400 fade-in">
            <a 
              href="#booking" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
            >
              Book Your Stay
            </a>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex justify-center animation-delay-600 fade-in">
            <a 
              href="#about" 
              className="text-white p-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 animate-bounce" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
