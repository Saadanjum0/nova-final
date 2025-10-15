import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-400/10 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-space font-medium bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent mb-4">Nova AI</h3>
            <p className="text-orange-200/70 text-base leading-relaxed">
              Design-driven AI engineering studio crafting the next generation of intelligent systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-space font-semibold text-orange-100 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-orange-200/70 hover:text-orange-300 transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="text-orange-200/70 hover:text-orange-300 transition-colors duration-200">
                About
              </Link>
              <Link to="/work" className="text-orange-200/70 hover:text-orange-300 transition-colors duration-200">
                Work
              </Link>
              <Link to="/contact" className="text-orange-200/70 hover:text-orange-300 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-space font-semibold text-orange-100 mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-orange-200/70">
                <Mail size={18} className="text-orange-400" />
                <a href="mailto:hello@novaai.studio" className="hover:text-orange-300 transition-colors duration-200">
                  hello@novaai.studio
                </a>
              </div>
              <div className="flex items-center gap-3 text-orange-200/70">
                <MapPin size={18} className="text-orange-400" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-orange-200/70">
                <Clock size={18} className="text-orange-400" />
                <span>PKT (UTC+5)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-400/10 pt-8 text-center">
          <p className="text-orange-200/50 text-sm">
            © 2024 Nova AI. All rights reserved. Building intelligence with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
