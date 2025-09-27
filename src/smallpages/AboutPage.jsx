// src/pages/AboutPage.jsx
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-900 text-center mb-8"
        >
          About Us
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-16"
        >
          We are a passionate real estate company committed to connecting people
          with their dream properties. With years of experience, a dedicated
          team, and a customer-first approach, we provide seamless property
          buying, selling, and renting experiences.
        </motion.p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Who We Are
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our journey began with a mission to simplify the real estate
              process for everyone. Whether you are a first-time buyer, an
              experienced investor, or looking to rent, we offer solutions
              tailored to your needs.
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">
              Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We aim to provide transparency, trust, and technology-driven
              services to ensure every client feels confident in their property
              decisions. From start to finish, we are by your side.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="About Us"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          {[
            { label: "Years of Experience", value: "10+" },
            { label: "Happy Clients", value: "500+" },
            { label: "Properties Sold", value: "1200+" },
            { label: "Awards Won", value: "15" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
