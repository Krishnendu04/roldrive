import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1F3344] text-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto 
                      px-3 sm:px-6 md:px-10 lg:px-20 h-16 sm:h-16 md:h-18 lg:h-20 overflow-x-auto whitespace-nowrap">

        {/* Logo */}
        <div className="flex items-center flex-nowrap whitespace-nowrap">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="ROLDRIVE Logo"
              className="h-4 sm:h-6 md:h-8 lg:h-10 w-auto object-contain shrink-0"
              width={130}
              height={62}
            />
          </Link>

        {/* Menu Links */}
        <div className="flex flex-row flex-nowrap items-center 
                        text-[clamp(8px,1.5vw,13px)] font-medium font-sans 
                        space-x-1 sm:space-x-1 md:space-x-2 lg:space-x-6 
                        mx-4 lg:mx-13 sm:mx-8 md:mx-10 mt-1">
          <Link href="#">Services</Link>
          <Link href="#">Fleet</Link>
          <Link href="#">Business Solutions</Link>
          <Link href="#">Cities</Link>
          <Link href="#">Airport Transfers</Link>
        </div>
    </div>
        {/* Right Section */}
        <div className="flex items-center flex-nowrap gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-[clamp(8px,1.2vw,13px)] whitespace-nowrap">
          {/* Contact */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2">
            <Image
              src="/whatsapp.webp"
              alt="WhatsApp"
              className="h-3 sm:h-2 md:h-3 lg:h-5 w-auto object-contain"
              width={20}
              height={20}
            />
            <span className="text-[clamp(8px,1.5vw,13px)]">Contact Us</span>
          </div>

          {/* Language Selector */}
          <select className="bg-transparent border border-gray-600 text-gray-200 
                             rounded-md px-1 sm:px-o.5 md:px-1 lg:px-2 
                             py-px sm:py-1 md:py-2 
                             text-[clamp(8px,1.5vw,13px)] font-semibold focus:outline-none">
            <option value="en">Eng</option>
          </select>

          {/* Sign In Button */}
          <Link
            href="#"
            className="bg-white text-black rounded-md 
                       px-2 sm:px-3 md:px-4 lg:px-6 lg:w-30 sm:w-20
                       py-0.5 sm:py-1 md:py-2 
                       text-[clamp(8px,1.5vw,13px)] font-semibold text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
