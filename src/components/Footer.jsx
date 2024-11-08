import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Brisphere</h3>
            <p className="text-gray-600">
              Spituk, Ladakh,<br />
              India, 194101<br />
              +91 - 7764997033<br />
              amit.jha8700@gmail.com
            </p>
            <Link to="/location" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Location
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Discover', 'Services', 'About Us'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Legal</h3>
            <ul className="space-y-2">
              {['Terms and Conditions', 'Privacy Policy', 'Refunds'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
