import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B1217] text-gray-300 py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-12 lg:py-12 lg:px-20 overflow-x-auto">
      {/* ---------- TOP SECTION (SINGLE ROW) ---------- */}
      <div className="flex flex-nowrap justify-between items-start gap-4 sm:gap-2 md:gap-4 lg:gap-6 w-max min-w-full">
        {/* LOGO + INFO */}
        <div className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] space-y-2 sm:space-y-3 md:space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.webp" height={30} width={80} alt="logo" className="sm:h-5 sm:w-30 md:h-10 md:w-40" />
          </Link>
          <p className="text-xs sm:text-sm md:text-sm text-gray-400 leading-snug">
            Your trusted travel partner offering premium car experiences for every occasion.
          </p>
          <div className="text-xs sm:text-sm text-gray-400 leading-snug">
            <p>📞 +44 (0) 207 112 8101</p>
            <p>✉️ booking@roldrive.com</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mt-2 sm:mt-3 md:mt-4">
            <Link href="#" aria-label="Facebook" className="p-1 sm:p-2 md:p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition">
              <FaFacebookF className="text-xs sm:text-sm md:text-base" />
            </Link>
            <Link href="#" aria-label="X (Twitter)" className="p-1 sm:p-2 md:p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition">
              <FaXTwitter className="text-xs sm:text-sm md:text-base" />
            </Link>
            <Link href="#" aria-label="Instagram" className="p-1 sm:p-2 md:p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition">
              <FaInstagram className="text-xs sm:text-sm md:text-base" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="p-1 sm:p-2 md:p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition">
              <FaLinkedinIn className="text-xs sm:text-sm md:text-base" />
            </Link>
          </div>
        </div>

        {/* FLEET */}
        <div className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[160px] space-y-1 sm:space-y-2 md:space-y-3">
          <h3 className="text-white font-semibold text-xs sm:text-sm md:text-sm uppercase tracking-wide">Fleet</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-sm">
            <li>Business</li>
            <li>First</li>
            <li>Luxury</li>
            <li>Electric</li>
            <li>SUV</li>
            <li>MVP</li>
            <li>Sprinter</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="flex-shrink-0 w-[130px] sm:w-[150px] md:w-[170px] space-y-1 sm:space-y-2 md:space-y-3">
          <h3 className="text-white font-semibold text-xs sm:text-sm md:text-sm uppercase tracking-wide">Services</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-sm">
            <li>Airport Transfers</li>
            <li>Road Shows</li>
            <li>Intercity Transfers</li>
            <li>Event Transfers</li>
            <li>All Services</li>
          </ul>
        </div>

        {/* TOP CITIES */}
        <div className="flex-shrink-0 w-[110px] sm:w-[130px] md:w-[150px] space-y-1 sm:space-y-2 md:space-y-3">
          <h3 className="text-white font-semibold text-xs sm:text-sm md:text-sm uppercase tracking-wide">Top Cities</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-sm">
            <li>London</li>
            <li>Paris</li>
            <li>New York</li>
            <li>Dubai</li>
            <li>Tokyo</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="flex-shrink-0 w-[130px] sm:w-[150px] md:w-[170px] space-y-1 sm:space-y-2 md:space-y-3">
          <h3 className="text-white font-semibold text-xs sm:text-sm md:text-sm uppercase tracking-wide">FAQ</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-sm">
            <li className="text-gray-300 hover:text-white cursor-pointer">Blogs</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">Career</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">About Us</li>
            <li className="text-yellow-500 hover:text-yellow-400 cursor-pointer">Become A Supplier</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4 mt-10">
        <div className="flex flex-nowrap justify-center sm:justify-start gap-6">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            GDPR Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
      {/* ---------- DIVIDER ---------- */}
      <hr className="border-gray-700 my-4" />
      <p className="text-gray-500">
          © 2024 RolDrive. All Rights Reserved.
        </p>
      {/* ---------- BOTTOM SECTION ---------- */}
      
    </footer>
  );
}
