import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 bg-[#ede3d7] ">
      <div className="relative flex items-center justify-between w-full">
        {/* Left: Logo */}
        <Link
          to="/"
          className="z-20 flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Mayur Logo"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase font-light absolute left-1/2 -translate-x-1/2">
          <li><Link className="nav-link" to="/photography">Photography</Link></li>
          <li><Link className="nav-link" to="/films">Films</Link></li>
          <li><Link className="nav-link" to="/editorials">Editorial</Link></li>
          <li><Link className="nav-link" to="/blog">Blogs</Link></li>
          <li><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
          <li><Link className="nav-link" to="/faq">FAQs</Link></li>
        </ul>

        {/* Right: Instagram + Get In Touch */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/_mayurmakwanaphotography_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-black hover:text-gray-600"
          >
            <Instagram size={20} />
          </a>
          <Link
            to="/contact-us"
            className="bg-[#b89b59] font-semibold px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#f6f0e9] flex flex-col items-center justify-center gap-6 text-xl font-light transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/photography" onClick={() => setIsOpen(false)}>Photography</Link>
        <Link to="/films" onClick={() => setIsOpen(false)}>Films</Link>
        <Link to="/editorials" onClick={() => setIsOpen(false)}>Editorial</Link>
        <Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link>
        <Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <Link to="/faq" onClick={() => setIsOpen(false)}>FAQs</Link>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/_mayurmakwanaphotography_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="mt-4"
        >
          <Instagram size={25} />
        </a>

        {/* Get In Touch Button */}
        <Link
          to="/contact-us"
          onClick={() => setIsOpen(false)}
          className="mt-2 bg-[#b49c64] text-white  px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
}
