import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-heading text-2xl font-bold tracking-tight text-white mb-4 block">
              Luca<span className="text-secondary">Landscaping</span> & Detailing
            </span>
            <p className="text-gray-400 mt-4 max-w-sm">
              Luxury lawn care, exterior cleaning, and auto detailing services that make your home and vehicles look brand new.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-semibold flex items-center">
                Nextdoor
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 shrink-0 text-secondary" />
                <span>Serving Suburban Neighborhoods</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-secondary" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 shrink-0 text-secondary" />
                <a href="mailto:info@lucalandscaping.com" className="hover:text-white transition-colors">info@lucalandscaping.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Luca Landscaping & Auto Detailing. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
