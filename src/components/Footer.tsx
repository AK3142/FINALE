
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Royal Island</h3>
            <p className="mb-4 text-white/90">
              Experience the authentic beauty of Kerala's backwaters at our luxurious homestay in Munroe Island, Kollam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent/80" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent/80" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c1.532 0 1.713.006 2.32.033 1.575.072 2.3.325 2.839.542.714.276 1.223.605 1.76 1.143.537.537.866 1.046 1.142 1.76.217.54.47 1.264.542 2.839.027.606.033.788.033 2.32s-.006 1.713-.033 2.32c-.072 1.575-.325 2.3-.542 2.839-.276.714-.605 1.223-1.143 1.76-.537.537-1.046.866-1.76 1.142-.54.217-1.264.47-2.839.542-.606.027-.788.033-2.32.033s-1.713-.006-2.32-.033c-1.575-.072-2.3-.325-2.839-.542-.714-.276-1.223-.605-1.76-1.143-.537-.537-.866-1.046-1.142-1.76-.217-.54-.47-1.264-.542-2.839C2.006 13.713 2 13.532 2 12s.006-1.713.033-2.32c.072-1.575.325-2.3.542-2.839.276-.714.605-1.223 1.143-1.76.537-.537 1.046-.866 1.76-1.142.54-.217 1.264-.47 2.839-.542C10.287 2.006 10.468 2 12 2h.315zm-.076 14.5a4.723 4.723 0 01-4.735-4.735 4.723 4.723 0 014.735-4.735 4.723 4.723 0 014.735 4.735 4.723 4.723 0 01-4.735 4.735zm0-12.024a7.289 7.289 0 100 14.578 7.289 7.289 0 000-14.578zm7.895 1.092a1.7 1.7 0 11-3.4 0 1.7 1.7 0 013.4 0z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent/80" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="#home" className="hover:text-accent/80 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent/80 transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-accent/80 transition-colors">Rooms</a></li>
              <li><a href="#booking" className="hover:text-accent/80 transition-colors">Book Now</a></li>
              <li><a href="#location" className="hover:text-accent/80 transition-colors">Location</a></li>
              <li><a href="#contact" className="hover:text-accent/80 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+919995685136">+91 9995685136</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:theroyalislnd123@gmail.com">theroyalislnd123@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-accent/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p>
                  Royal Island<br />
                  Munroe Island, Kollam District<br />
                  Kerala, India
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-white/80 text-sm">
          <p>&copy; {currentYear} Royal Island Homestay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
