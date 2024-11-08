import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaWifi, FaUtensils, FaHome, FaCar, FaBicycle, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=6');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const services = [
    { icon: FaWifi, title: 'High Speed Internet', description: 'Stay connected with high-speed internet, accessible from all areas in Brisphere.' },
    { icon: FaUtensils, title: 'Healthy Meals', description: 'Enjoy balanced, nutritious meals delivered to your space or available in the dining area.' },
    { icon: FaHome, title: 'Homely Stay', description: 'Experience cozy accommodations with comfortable beds, spacious interiors, and clean bathrooms.' },
    { icon: FaCar, title: 'Transportation', description: 'Reliable transport options available for sightseeing and exploring Ladakh.' },
    { icon: FaBicycle, title: 'Food Delivery', description: 'On-demand food delivery services to satisfy your cravings while you work or explore.' },
    { icon: FaMapMarkedAlt, title: 'Tourism', description: 'Guided tours to help you explore and enjoy the beauty of Ladakh.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Work from
                <span className="block text-blue-600">Ladakh</span>
              </h1>
              <motion.p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                India&apos;s first true digital tourism ecosystem
              </motion.p>
              <motion.div
                className="mt-4 space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="https://www.facebook.com/Brisphereladakh/"
                  className="text-gray-400 hover:text-gray-500 transform transition duration-200 hover:scale-110"
                >
                  <FaFacebook className="h-6 w-6 inline" />
                </a>
                <a
                  href="https://www.instagram.com/brisphere/"
                  className="text-gray-400 hover:text-gray-500 transform transition duration-200 hover:scale-110"
                >
                  <FaInstagram className="h-6 w-6 inline" />
                </a>
              </motion.div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/booking"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 transition duration-200 ease-in-out"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105"
                src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1731044398/7-Valleys-In-Ladakh_rpczcp.jpg"
                alt="Scenic view of Ladakh landscape"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=random`}
                    alt={`Avatar of ${testimonial.name}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.body}</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">read more</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;








