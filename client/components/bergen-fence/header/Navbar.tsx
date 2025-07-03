import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// Remove next/image import as it's not compatible with Vite

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-white shadow-md' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <img
                  src="/logo.png"
                  alt="Bergen Fence Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-space">
                  Bergen Fence
                </h1>
                <p className="text-sm text-modern-green-600 font-medium">
                  Since 1953
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-700 hover:text-modern-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <a 
                  href="tel:201-641-2111" 
                  className="text-lg font-semibold text-gray-900 hover:text-modern-green-600 transition-colors"
                >
                  201-641-2111
                </a>
                <p className="text-sm text-modern-green-600">Free Estimates</p>
              </div>
              <Button 
                asChild
                className="bg-modern-green-600 hover:bg-modern-green-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 transform"
              >
                <Link to="/quotes">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-modern-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-modern-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-modern-green-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-gray-200">
            <a
              href="tel:201-641-2111"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-modern-green-600"
            >
              <span className="font-semibold">Call Us:</span> 201-641-2111
            </a>
            <Button
              asChild
              className="w-full mt-3 bg-modern-green-600 hover:bg-modern-green-700 text-white py-2.5 rounded-lg font-medium shadow-lg"
            >
              <Link to="/quotes" onClick={() => setIsOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
