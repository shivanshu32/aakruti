import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Villas', href: '#villas' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/aakrutideveloper.png"
              alt="Aakruti Developers"
              className="h-32 w-auto mb-6 bg-white rounded-lg p-2"
            />
            <p className="font-sans text-gray-400 mb-6 leading-relaxed text-sm">
              Shri Vrinda Aakruti Village — An everlasting township offering premium plots 
              and villas in the spiritual heart of Mathura.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A962] transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C9A962] tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-sans text-gray-400 text-sm hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C9A962] tracking-wide">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-1" />
                <span className="font-sans text-gray-400 text-sm">
                  Satoha - Naugaon Road, Goverdhan Road, Mathura, UP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                <div className="font-sans text-gray-400 text-sm">
                  <a href="tel:9568600700" className="hover:text-white transition-colors">
                    9568-600-700
                  </a>
                  <span className="mx-2">|</span>
                  <a href="tel:9105600700" className="hover:text-white transition-colors">
                    9105-600-700
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                <a
                  href="mailto:info@earthousing.com"
                  className="font-sans text-gray-400 text-sm hover:text-white transition-colors"
                >
                  info@earthousing.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Download */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-[#C9A962] tracking-wide">Download Brochure</h4>
            <p className="font-sans text-gray-400 text-sm mb-4">
              Get complete project details, floor plans, and pricing in our comprehensive e-brochure.
            </p>
            <a
              href="/brochure.pdf"
              download="Aakruti-Village-Brochure.pdf"
              className="font-sans inline-flex items-center space-x-2 bg-[#C9A962] text-white px-6 py-3 rounded-xl font-semibold text-sm tracking-wide hover:bg-[#A68B4B] transition-colors"
            >
              <span>Download Now</span>
            </a>

            <div className="mt-8">
              <h5 className="font-sans font-semibold mb-3 text-sm">Legal</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-sans text-gray-500 text-xs hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-sans text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Shri Vrinda Aakruti Village. All rights reserved.
            </p>
            <p className="font-sans text-gray-500 text-sm">
              Developed by{' '}
              <a href="https://abscod.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A962] font-medium hover:underline">
                Abscod Informatics
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
