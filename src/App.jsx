import Contact from "./components/Contact";
import About from "./components/About";
import FeaturedProperties from "./components/FeaturedProperties";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Route, Router, Routes } from "react-router-dom";
import PropertyPage from "./smallpages/PropertyPage";
import AboutPage from "./smallpages/AboutPage";
 
export default function App() {
  return (
    <>

      <Navbar logoText="Magica" phone="+91 98765 43210" />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedProperties />
              <About />
              <Services />
              <Contact />
            </>
          }
        />

        {/* Properties Page */}
        <Route path="/properties" element={<PropertyPage />} />

        {/* About Page */}
        <Route path="/Aboutpage" element={<AboutPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />
      </Routes>

       <Footer/>
    </>
  );
}
