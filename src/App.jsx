// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import SEO from "./components/SEO";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import AlbumDetails from "./pages/AlbumDetails";
import Films from "./pages/Films";
import FilmAlbum from "./pages/FilmAlbum";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Editorials from "./pages/Editorials";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/faq";

import 'react-phone-input-2/lib/style.css';


export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 5s loading
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <SEO />
      {loading && <Loader />}
      <div className={`${loading ? "overflow-hidden h-screen pointer-events-none" : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/:slug" element={<AlbumDetails />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:album" element={<FilmAlbum />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/editorials" element={<Editorials />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
