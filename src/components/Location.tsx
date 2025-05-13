
import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const Location = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="location" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Location</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover the beauty of Munroe Island, a hidden gem in Kollam, Kerala
          </p>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 transform',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div>
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-foreground">About Munroe Island</h3>
              <p className="text-gray-700 mb-4">
                Munroe Island (Mundrothuruthu) is a cluster of eight small islets located at the confluence of Ashtamudi Lake and the Kallada River. Named after Colonel Munroe, the British Resident of the former Travancore state, this hidden paradise offers:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Picturesque landscapes with backwaters, mangroves, and coconut groves</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Local village life and traditional fishing communities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bird watching and wildlife spotting opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Kayaking through narrow canals and experiencing the backwater ecosystem</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">How to Reach Us</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-medium">By Air:</span> Nearest airport is Trivandrum International Airport (70 km)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-medium">By Train:</span> Kollam Junction Railway Station (15 km)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-medium">By Road:</span> Well-connected by road from major cities in Kerala
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Royal Island Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0478422686143!2d76.60517377462329!3d8.998748589752472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06073b504aa643%3A0x10732bc4bd51167e!2sThe%20Royal%20Island!5e0!3m2!1sen!2sus!4v1715548804385!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 text-right">
              <a 
                href="https://www.google.com/maps/place/The+Royal+Island/@8.998746,76.6062408,18.25z/data=!4m9!3m8!1s0x3b06073b504aa643:0x10732bc4bd51167e!5m2!4m1!1i2!8m2!3d8.9987319!4d76.6071284!16s%2Fg%2F11ks2r_3n0?entry=ttu" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80"
              >
                <span>View on Google Maps</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
