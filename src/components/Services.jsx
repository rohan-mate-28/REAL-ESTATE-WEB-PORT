import React from "react";
import { motion } from "framer-motion";
import { Home, Key, Building2 } from "lucide-react"; // icons

const services = [
  {
    id: 1,
    title: "Buying Property",
    description:
      "Find your dream home with our curated listings and expert guidance.",
    icon: <Home className="w-10 h-10 text-blue-600" />,
  },
  {
    id: 2,
    title: "Selling Property",
    description:
      "Get the best value for your property with our proven selling strategies.",
    icon: <Key className="w-10 h-10 text-blue-600" />,
  },
  {
    id: 3,
    title: "Property Management",
    description:
      "We handle everything from tenants to maintenance for hassle-free ownership.",
    icon: <Building2 className="w-10 h-10 text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            Our Services
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded"></span>
          </h2>
          <p className="text-gray-600 mt-4">
            Professional real estate solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
