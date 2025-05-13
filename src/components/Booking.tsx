
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const Booking = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    rooms: '1',
    adults: '1',
    children: '0',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the booking data to a server
    console.log('Booking submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      rooms: '1',
      adults: '1',
      children: '0',
      message: ''
    });
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Book Your Stay</h2>
          <p className="text-lg text-gray-700 mb-6">
            Reserve your peaceful retreat at Royal Island
          </p>
          <div className="w-16 h-1 bg-primary/60 mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className={cn(
            'max-w-3xl mx-auto transition-all duration-1000 transform',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date *</label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date *</label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
                    <select
                      id="rooms"
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="1">1 Room</option>
                      <option value="2">2 Rooms</option>
                      <option value="3">3 Rooms</option>
                      <option value="4">4 Rooms</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                    <select
                      id="adults"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5 Adults</option>
                      <option value="6">6 Adults</option>
                      <option value="7">7 Adults</option>
                      <option value="8">8 Adults</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                    <select
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                      <option value="4">4 Children</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Any special requests or preferences?"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Request Booking
                  </button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    * We'll contact you shortly to confirm availability and process your booking.
                  </p>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Direct Booking</h3>
                <p className="text-gray-700">
                  For immediate booking confirmation, please contact us directly:
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <a 
                    href="tel:+919995685136"
                    className="inline-flex items-center px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-md transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +91 9995685136
                  </a>
                  <a 
                    href="mailto:theroyalislnd123@gmail.com"
                    className="inline-flex items-center px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-md transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
