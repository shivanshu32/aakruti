import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Villas', href: '#villas' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo - Fixed width for balance */}
          <a href="#home" className="flex items-center space-x-2 lg:w-48">
            <img
              src="/aakrutideveloper.png"
              alt="Aakruti Developers"
              className="h-16 md:h-[72px] w-auto"
            />
          </a>

          {/* Desktop Navigation - Centered absolutely */}
          <div className="hidden lg:flex items-center justify-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#C9A962] ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Fixed width for balance */}
          <div className="hidden lg:flex items-center justify-end lg:w-48">
            <a
              href="tel:919105079000"
              className="font-sans flex items-center space-x-2 bg-[#C9A962] text-white px-5 py-2.5 rounded-full font-medium text-sm tracking-wide hover:bg-[#A68B4B] transition-colors duration-200"
            >
              <Phone size={18} />
              <span>+91 9105079000</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-2xl shadow-xl">
            <div className="flex flex-col space-y-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:919105079000"
                className="font-sans flex items-center justify-center space-x-2 bg-[#C9A962] text-white px-5 py-3 rounded-full font-medium tracking-wide mt-4"
              >
                <Phone size={18} />
                <span>+91 9105079000</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
