// components/Navbar.jsx
"use client"; // Add this for Next.js 13+ client components
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },

    // { 
    //   name: 'Pages', 
    //   path: '#',
    //   dropdown: true,
    //   subItems: [
    //     { name: 'Team', path: '/team' },
    //     { name: 'FAQ', path: '/faq' },
    //     { name: 'Testimonials', path: '/testimonials' },
    //   ]
    // }
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#E7EECD] shadow-md' : 'bg-[#E7EECD]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* Replace SVG with Image component */}
              <Image 
                src="/images/logo.png" 
                alt="Gaurnish HealthCare Logo" 
                width={60} 
                height={70} 
                className="h-[70px] w-auto" 
                priority
              />
              <span className="text-[#2d5134] font-bold text-xl md:text-2xl">Gaurnish HealthCare</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button 
                    onClick={toggleDropdown}
                    className="flex items-center text-[#2d5134] hover:text-[#e05d3d] transition-colors px-3 py-2 text-lg font-medium"
                  >
                    {item.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className={`text-lg font-medium ${
                    pathname === item.path 
                      ? 'text-[#e05d3d]' 
                      : 'text-[#2d5134] hover:text-[#e05d3d]'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Link 
              href="/bookconsultation"
              className="inline-flex items-center justify-center px-6 py-2 border border-[#2d5134] text-[#2d5134] hover:bg-[#2d5134] hover:text-white transition-colors rounded-sm font-medium"
            >
             Book Consultation 
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2d5134]"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navItems.map((item) => (
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left text-[#2d5134] hover:text-[#e05d3d] block px-3 py-2 text-base font-medium flex justify-between items-center"
                >
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`pl-4 transition-all duration-200 ${dropdownOpen ? 'block' : 'hidden'}`}>
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.path}
                      className="block px-3 py-2 text-base font-medium text-[#2d5134] hover:text-[#e05d3d]"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === item.path
                    ? 'text-[#e05d3d]'
                    : 'text-[#2d5134] hover:text-[#e05d3d]'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-[#2d5134] text-[#2d5134] hover:bg-[#2d5134] hover:text-white transition-colors rounded-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;