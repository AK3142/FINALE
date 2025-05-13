
import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Rooms = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const roomFeatures = [
    "King-sized bed with premium linens",
    "Air conditioning",
    "En-suite bathroom",
    "Lake view",
    "Free Wi-Fi",
    "Daily housekeeping",
    "Traditional décor"
  ];

  return (
    <section id="rooms" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Accommodations</h2>
          <p className="text-lg text-gray-700">
            Enjoy comfort and tranquility in our thoughtfully designed rooms
          </p>
        </div>

        <div 
          ref={ref}
          className={cn(
            'transition-all duration-1000 transform',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex flex-col h-full">
                <div className="h-64 md:h-72">
                  <img 
                    src="/lovable-uploads/e1ebdc39-6b0b-480c-a349-998c814642d1.png" 
                    alt="Traditional Kerala Style Home" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Traditional Kerala Architecture</h3>
                  <p className="text-gray-700 mb-4">
                    Experience authentic Kerala living in our traditionally designed homestay featuring beautiful red-tiled roofs, spacious verandas, and elegant wooden details.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex flex-col h-full">
                <div className="h-64 md:h-72">
                  <img 
                    src="/lovable-uploads/20818ce8-ea4c-4794-b81d-5168990278cd.png" 
                    alt="Kerala Style Entrance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Charming Entrance</h3>
                  <p className="text-gray-700 mb-4">
                    Our property features beautiful wooden entrances with traditional Kerala design elements, surrounded by lush tropical vegetation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop" 
                    alt="Luxury Room" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Deluxe Single Room</h3>
                <div className="flex items-center text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  Immerse yourself in comfort and style with our deluxe single rooms. Each room features a king-sized bed, air conditioning, and stunning views of the surrounding backwaters. Perfect for couples or solo travelers seeking a peaceful retreat.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Room Features:</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {roomFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">₹3,000</p>
                    <p className="text-gray-600 text-sm">per night</p>
                  </div>
                  <a 
                    href="#booking" 
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-5 py-2 rounded-md transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-700">
              We have 4 identical deluxe single rooms available for booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
