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
        <div className="text-lg md:text-xl space-y-2 ">
          <p>CONTACT: +91 85112 90999</p>
          <p>Email - teammayurmakwana@gmail.com</p>
        </div>
      </div>

      {/* Bottom Full-width Image */}
      <div className="w-full">
        <img
          src="/your-image-path.png" // Replace with actual path or import
          alt="Footer Background"
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
}
