import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Films from './pages/Films';
import FilmAlbum from './pages/FilmAlbum';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import JoinUs from './pages/JoinUs';
import Stories from './pages/Stories';

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    // Wait until all assets (images, etc) are fully loaded
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, [location.pathname]); // trigger on every route change

  return (
    <>
      {loading && <Loader />}

      <div className={`${loading ? 'pointer-events-none overflow-hidden h-screen' : ''}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
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
