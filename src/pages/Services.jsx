import { FaWifi, FaUtensils, FaHome, FaCar, FaBicycle, FaMapMarkedAlt, FaBriefcase, FaCar as FaCarRental, FaShoppingCart } from 'react-icons/fa';

function Services() {
  const services = [
    { icon: FaWifi, title: 'High Speed Internet', description: 'Optical fiber connections provided in not only in your cabins but rather to all of the Brisphere scenic working spaces and dining areas.' },
    { icon: FaUtensils, title: 'Healthy Meals', description: 'A healthy breakfast and pleasant dinner will be served in your space or in the dining area based on your duration of stay with notice of peak order within 8-10mins.' },
    { icon: FaHome, title: 'Homely Stay', description: 'Designed for working professionals with spacious interiors, comfortable beds, clean bathrooms and more are some of the comforts provided in your space.' },
    { icon: FaCar, title: 'Transportation', description: 'Optical fiber connections provided in not only in your cabins but rather to all of the Brisphere scenic working spaces and dining areas.' },
    { icon: FaBicycle, title: 'Food Delivery', description: 'Optical fiber connections provided in not only in your cabins but rather to all of the Brisphere scenic working spaces and dining areas.' },
    { icon: FaMapMarkedAlt, title: 'Tourism', description: 'Critical fiber connections provided in not only in your cabins but rather to all of the Brisphere scenic working spaces and dining areas.' },
    { icon: FaBriefcase, title: 'Job', description: 'Optical fiber connections provided in not only in your cabins but rather to all of the Brisphere scenic working spaces and dining areas.' },
    { icon: FaCarRental, title: 'Rental Service', description: 'Optical fiber connections provided in not only in your cabins but rather to all of the Brisphere scenic working spaces and dining areas.' },
    { icon: FaShoppingCart, title: 'Online Shop', description: 'Optical fiber connections provided in not only in your cabins but rather to all of the Brisphere scenic working spaces and dining areas.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;