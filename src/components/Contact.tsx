
import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions? We're here to help you plan your perfect stay
          </p>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className={cn(
            'max-w-4xl mx-auto grid md:grid-cols-2 gap-10 transition-all duration-1000 transform',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="bg-secondary/80 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-foreground border-b border-gray-300 pb-2">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-md mr-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a href="tel:+919995685136" className="text-gray-700 hover:text-primary">+91 9995685136</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-md mr-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a href="mailto:theroyalislnd123@gmail.com" className="text-gray-700 hover:text-primary">theroyalislnd123@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-md mr-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Address</h4>
                  <p className="text-gray-700">
                    Royal Island<br />
                    Munroe Island, Kollam District<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-md mr-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Office Hours</h4>
                  <p className="text-gray-700">Open 24/7 for inquiries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-foreground border-b border-gray-200 pb-2">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="contactName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="contactSubject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="contactSubject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="contactMessage"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
