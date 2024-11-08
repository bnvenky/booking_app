function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Welcome to Brisphere</h3>
          <p className="text-gray-600 mb-4">
            Brisphere is India&apos;s first true digital tourism ecosystem, designed specifically for remote workers and digital nomads. Located in the breathtaking region of Ladakh, we provide a unique blend of work and travel experiences.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to create an environment where professionals can maintain their productivity while experiencing the cultural richness and natural beauty of Ladakh.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd"
            alt="Ladakh landscape"
            className="rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
