
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Location from '@/components/Location';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update title and meta tags
    document.title = 'Royal Island - Luxury Homestay in Munroe Island, Kerala';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Location />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
