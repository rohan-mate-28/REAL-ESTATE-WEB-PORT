import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Modern Villa in Koregaon Park",
    location: "Pune, India",
    price: "₹1.5 cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Apartment in Baner",
    location: "Pune, India",
    price: "₹95 Lakh",
    image: "https://images.unsplash.com/photo-1515575550379-b923bc71669b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1aWxkaW5ncHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Cozy Family Home in Viman Nagar",
    location: "Pune, India",
    price: "₹85 lakh",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Elegant Penthouse in Kalyani Nagar",
    location: "Pune, India",
    price: "₹2.5 cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb3BlcnR5fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Spacious 3BHK Apartment in Hinjewadi",
    location: "Pune, India",
    price: "88 Lakh",
    image: "https://images.unsplash.com/photo-1674746760908-461a3f97175d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Contemporary Home in Aundh",
    location: "Pune, India",
    price: "₹44.5 Lakh",
    image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  // Add more realistic properties up to 15
];

export default function PropertyPage() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Explore Our Properties
        </h2>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {property.title}
                </h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-lg font-bold text-indigo-600 mt-2">
                  {property.price}
                </p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
