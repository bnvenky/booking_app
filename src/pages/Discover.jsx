import { useState, useEffect } from 'react';
import axios from 'axios';

function Discover() {
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Discover</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=random`}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.body}</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;