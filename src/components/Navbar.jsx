import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Brisphere</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            {['Home', 'Discover', 'Services', 'About Us'].map((link) => (
              <Link 
                key={link} 
                to={`/${link.toLowerCase().replace(' ', '-')}`} 
                className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
