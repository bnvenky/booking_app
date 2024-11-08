import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X,} from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              
              <span className="text-2xl font-bold text-blue-600">Brisphere</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/discover" className="text-gray-700 hover:text-blue-500 transition">Discover</Link>
            <Link to="/services" className="text-gray-700  hover:text-blue-500 transition">Services</Link>
            <Link to="/about-us" className="text-gray-700  hover:text-blue-500 transition">AboutUs</Link>
            
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/discover" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Discover</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Services</Link>
            <Link to="/about-us" className="block px-3 py-2 text-gray-700 hover:text-rose-600">AboutUs</Link>
            
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;