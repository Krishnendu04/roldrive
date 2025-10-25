import BookForm from "./BookForm";

export default function BookLondon() {
  return (
    <section className="flex flex-row flex-nowrap items-start justify-between w-full min-h-screen bg-[#0f1c27] text-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 gap-8">
      
      {/* Left Side - Description */}
      <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-5 md:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Book Your London <br/><span className="text-[#F6B93B]">Chauffeur Today</span> 
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed">
          From Healthrow transfers to corporat roadshows, secure your chauffeur with RolDrive. Availability is limited during peak seasons — reserve now.
        </p>

        <p className="font-semibold text-gray-100 text-sm sm:text-base">
          Seamless, reliable and discreet — every journey handled with exceptional care.
        </p>

        <div className="pt-4 border-t border-dashed border-gray-700">
          <p className="italic text-xs sm:text-sm text-[#F6B93B] mb-2">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <span className="font-serif tracking-wide text-white">Goldman Sachs</span>
            <span className="text-white/90">KPMG</span>
            <span className="text-white/90">Deloitte</span>
            <span className="text-white/90">Amazon</span>
            <span className="text-white/90">Google</span>
            <span className="text-white/90">Microsoft</span>
            <span className="text-white/90">Barclays</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-2 text-xs sm:text-sm">
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="contact1" className="text-[#F6B93B]" defaultChecked />
            <span>Call me</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="contact1" className="text-[#F6B93B]" />
            <span>Email Me</span>
          </label>
          <p className="ml-auto text-yellow-700">Reply within 3 minutes</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full sm:w-1/2 md:w-3/5 lg:w-1/2 flex justify-center">
        <BookForm />
      </div>
    </section>
  );
}
