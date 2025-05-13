
import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation();
  const { ref: ref4, isVisible: isVisible4 } = useScrollAnimation();

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Discover Royal Island</h2>
          <div 
            ref={ref1} 
            className={cn(
              'transition-all duration-1000 transform',
              isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <p className="text-lg text-gray-700 mb-6">
              Nestled in the serene backwaters of Munroe Island in Kollam, Royal Island offers an authentic Kerala homestay experience in harmony with nature.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
        </div>

        <div ref={ref3} className="mb-16">
          <div
            className={cn(
              'transition-all duration-1000 transform',
              isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            <div className="h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/e769be1b-d828-4f0e-94b0-1cc278e808c5.png" 
                alt="Royal Island Traditional Kerala Home" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div ref={ref2} className="grid md:grid-cols-2 gap-10 items-center">
          <div 
            className={cn(
              'transition-all duration-1000 transform',
              isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">A Tranquil Retreat</h3>
            <p className="text-gray-700 mb-4">
              Royal Island is located in the picturesque Munroe Island, surrounded by the tranquil backwaters of Kerala. Our homestay offers the perfect blend of traditional Kerala architecture and modern comforts.
            </p>
            <p className="text-gray-700 mb-6">
              Wake up to the gentle sounds of water lapping against the shore, birds chirping, and the rustle of palm trees. Immerse yourself in the natural beauty and rich cultural heritage of Kerala.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Waterfront location with panoramic views
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Traditional Kerala cuisine prepared with local ingredients
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Kayaking and backwater cruises available
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Cultural experiences and local village tours
              </li>
            </ul>
          </div>
          
          <div 
            ref={ref4}
            className={cn(
              'grid grid-cols-2 gap-4',
              'transition-all duration-1000 transform',
              isVisible4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}
          >
            <Card className="overflow-hidden shadow-md">
              <CardContent className="p-2">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="/lovable-uploads/e1e5ff18-de2d-45cb-abd2-5605501e7c86.png" 
                    alt="Kerala Backwater Houseboat" 
                    className="w-full h-full object-cover rounded-sm"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-md">
              <CardContent className="p-2">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="/lovable-uploads/7f4aace1-ffe9-4483-b403-2b7301513c81.png" 
                    alt="Traditional Kerala Boat" 
                    className="w-full h-full object-cover rounded-sm"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-md">
              <CardContent className="p-2">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="/lovable-uploads/37901ab4-5283-45fb-82fe-4005c109fc4f.png" 
                    alt="Mangrove Vegetation" 
                    className="w-full h-full object-cover rounded-sm"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-md">
              <CardContent className="p-2">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="/lovable-uploads/810ac777-29f9-473e-824a-d96a8d2685b0.png" 
                    alt="Kerala Palm Trees" 
                    className="w-full h-full object-cover rounded-sm"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

