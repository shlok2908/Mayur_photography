import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 bg-white shadow text-Black">
      <div className="relative flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="z-10 flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo.png" 
            alt="Mayur Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>


        {/* Center: Desktop Menu (absolutely centered) */}
        <ul className="hidden md:flex gap-8 text-sm uppercase font-light absolute left-1/2 -translate-x-1/2">
          <li><Link className="nav-link" to="/photography">Photography</Link></li>
          <li><Link className="nav-link" to="/films">Films</Link></li>
          <li><Link className="nav-link" to="/editorials">Editorial</Link></li>
          <li><Link className="nav-link" to="/testimonials">Blogs</Link></li>
          <li><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
          <li><Link className="nav-link" to="/join-us">Join Us</Link></li>
        </ul>

        {/* Right: Hamburger (Mobile Only) */}
        <div className="md:hidden z-10">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col gap-4 mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/photography" className="nav-link" onClick={() => setIsOpen(false)}>Photography</Link>
        <Link to="/films" className="nav-link" onClick={() => setIsOpen(false)}>Films</Link>
        <Link to="/editorials" className="nav-link" onClick={() => setIsOpen(false)}>Editorial</Link>
        <Link to="/testimonials" className="nav-link" onClick={() => setIsOpen(false)}>Blogs</Link>
        <Link to="/contact-us" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
        <Link to="/join-us" className="nav-link" onClick={() => setIsOpen(false)}>Join Us</Link>
      </div>
    </nav>
  );
}
