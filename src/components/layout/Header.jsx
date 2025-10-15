import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 w-full h-20 bg-transparent backdrop-blur-md border-b border-orange-400/10 z-50 px-6 md:px-12 lg:px-24">
      <div className="h-full flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-space font-medium bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent hover:from-orange-400 hover:to-yellow-500 transition-all drop-shadow-lg">
          Nova AI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-inter transition-colors drop-shadow-lg ${
                location.pathname === link.path
                  ? 'text-orange-300 font-semibold'
                  : 'text-orange-200/70 hover:text-orange-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-300 drop-shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-orange-400/10">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-inter transition-colors ${
                  location.pathname === link.path
                    ? 'text-orange-300 font-semibold'
                    : 'text-orange-200/70 hover:text-orange-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
