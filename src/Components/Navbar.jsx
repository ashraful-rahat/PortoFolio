import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[rgb(32,37,40)] text-white px-6 py-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-semibold">
        <Link to="/">MySite</Link>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="lg:hidden flex flex-col items-center space-y-2 cursor-pointer" onClick={toggleMenu}>
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-8 h-1 bg-white"></span>
      </div>

      {/* Navigation links */}
      <div className={`lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
