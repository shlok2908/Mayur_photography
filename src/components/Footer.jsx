import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-xs text-black border-t border-white/10 mt-6 pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Social Media */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold text-sm uppercase">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/_mayurmakwanaphotography_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-[#E1306C]" />
            </a>
            <a href="https://www.facebook.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-[#1877F2]" />
            </a>
            <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="w-5 h-5 hover:text-[#FF0000]" />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" aria-label="Phone">
              <Phone className="w-5 h-5 hover:text-[#25D366]" />
            </a>
          </div>
        </div>

        {/* Center: Contact Info */}
        <div className="text-center text-sm leading-relaxed space-y-1">
          <div className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4" /> Nadiad, Gujarat, India</div>
          <div className="flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> contact@mayurphotography.com</div>
          <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> +91 99999 99999</div>
          <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4" /> Mon - Sat, 10:00 AM - 7:00 PM</div>
        </div>

        
        {/* Right: Logo */}
        <div className="rounded px-2 py-1">
          <img
            src="/Logo.png"
            alt="Mayur Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-xs mt-6 text-black/60">
        © {new Date().getFullYear()} Mayur Photography - All rights reserved.
      </div>
    </footer>
  );
}
