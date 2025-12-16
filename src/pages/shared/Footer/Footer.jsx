import ProfastLogo from "../ProfastLogo/ProfastLogo";
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">

        {/* Logo & Description */}
        <aside className="flex flex-col items-center gap-4">
          <ProfastLogo />
          <p className="text-base sm:text-lg max-w-3xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base mt-4">
            <p className="cursor-pointer hover:text-primary">Services</p>
            <p className="cursor-pointer hover:text-primary">Coverage</p>
            <p className="cursor-pointer hover:text-primary">About Us</p>
            <p className="cursor-pointer hover:text-primary">Pricing</p>
            <p className="cursor-pointer hover:text-primary">Blog</p>
            <p className="cursor-pointer hover:text-primary">Contact</p>
          </div>
        </aside>

        {/* Social Icons */}
        <nav>
          <div className="flex justify-center gap-6">
            <FaLinkedin className="w-7 h-7 hover:text-primary cursor-pointer" />
            <FaFacebook className="w-7 h-7 hover:text-primary cursor-pointer" />
            <FaTwitter className="w-7 h-7 hover:text-primary cursor-pointer" />
            <FaYoutube className="w-7 h-7 hover:text-primary cursor-pointer" />
          </div>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
