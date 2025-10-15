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
    <header className="fixed top-0 w-full h-20 bg-black border-b border-nova-glass-border z-50 px-6 md:px-12 lg:px-24">
      <div className="h-full flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-space font-bold text-nova-accent hover:text-nova-accent-bright transition-colors">
          Nova AI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-inter transition-colors ${
                location.pathname === link.path
                  ? 'text-nova-accent-bright'
                  : 'text-nova-text-tertiary hover:text-nova-text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-nova-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-nova-glass-border">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-inter transition-colors ${
                  location.pathname === link.path
                    ? 'text-nova-accent-bright'
                    : 'text-nova-text-tertiary hover:text-nova-text-primary'
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