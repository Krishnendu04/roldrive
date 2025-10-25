"use client";

import Image from "next/image";
import BookForm from "./BookForm";

export default function Banner() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner.webp"
          alt="site banner"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional: add a gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto flex flex-row items-start justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 sm:py-12 md:py-16 gap-6 sm:gap-5 md:gap-9 lg:gap-10 mt-6 sm:mt-8 md:mt-10 lg:mt-25">
        
        {/* LEFT SECTION (Description) */}
        <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 text-white">
          <h1 className="font-bold leading-snug text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="text-yellow-400">Luxury</span> Chauffeur Service in
            <br className="hidden sm:block" />
            London – Airport,<br className="hidden sm:block" /> Corporate & VIP Travel
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-sm max-w-md">
            Professional chauffeurs, luxury vehicles and all-inclusive pricing.
            Complimentary airport waiting, real-time flight monitoring & 24/7
            support.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4  text-white text-sm sm:text-base">
            <p>📞 +44 204 592 0966</p>
            <p>✉️ booking@roldrive.com</p>
            <Image
              src="/whatsapp.webp"
              height={30}
              width={30}
              alt="whatsapp-logo"
              className="rounded-full"
            />
          </div>

          {/* Rating Box */}
          <div className="flex items-center gap-3 sm:mt-6 md:mt-8 lg:mt-10 bg-white/10 p-3 sm:p-4 sm:w-60 md:w-70 lg:w-90 rounded-md w-fit">
            <Image
              src="/GoogleLogo.jpg"
              alt="Google"
              width={35}
              height={35}
              className="bg-white rounded-full p-1"
            />
            <span className="text-sm text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">
              Google Rating <br />
              <span className="font-bold">5.0 ⭐⭐⭐⭐⭐</span>
            </span>
          </div>
        </div>

        {/* RIGHT SECTION (Form) */}
        <BookForm/>
      </div>
    </section>
  );
}
