// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import AlbumDetails from "./pages/AlbumDetails";
import Films from "./pages/Films";
import FilmAlbum from "./pages/FilmAlbum";
import Testimonials from "./pages/Testimonials";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import JoinUs from "./pages/JoinUs";
import Stories from "./pages/Stories";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const handleLoad = () => {
      setLoading(false);
    };

    // Wait until DOM fully loaded (images, fonts etc.)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [location.pathname]);

  
  return (
    <>
      {loading && <Loader />}
      <div className={`${loading ? "overflow-hidden h-screen pointer-events-none" : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/:slug" element={<AlbumDetails />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:album" element={<FilmAlbum />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
