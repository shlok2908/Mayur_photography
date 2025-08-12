export default function Footer() {
  return (
    <footer className="bg-[#ede3d7] text-[#7b8669] font-serif">
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        
        {/* Logo */}
        <img 
          src="/logo.png" 
          alt="Mayur Logo"
          className="h-16 w-auto mb-4"
        />

        {/* Contact Info */}
        <div className="text-lg md:text-xl space-y-2">
          <p>CONTACT: +91 85112 90999</p>
          <p>Email - teammayurmakwana@gmail.com</p>
        </div>
      </div>

      {/* Bottom Full-width Image */}
      <div className="w-full">
        {/* Mobile Image */}
        <img
          src="/footer.webp"
          alt="Footer Background Mobile"
          className="block md:hidden w-full h-auto"
        />

        {/* Desktop Image */}
        <img
          src="/footer-desktop.jpg"
          alt="Footer Background Desktop"
          className="hidden md:block w-full h-auto"
        />
      </div>
    </footer>
  );
}
