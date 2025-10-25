export default function RequirementSection() {
  return (
    <section className="flex flex-row flex-nowrap lg:flex-row items-start justify-between w-full min-h-screen bg-[#0f1c27] text-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 gap-10">
      
      {/* Left Side - Description */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 space-y-6">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          <span className="text-[#F6B93B]">Chauffeur</span> Driven Cars <br /> for Any Occasion
        </h1>

        <p className="text-gray-300 text-base sm:text-md leading-relaxed">
          Whether it’s an event, corporate travel or a personalised journey, we
          provide tailored chauffeur solutions across London. Share your
          requirements and we’ll respond within minutes — our average reply time
          is under 3 minutes — with detailed pricing and a call or email back to
          finalise your arrangements.
        </p>

        <p className="font-semibold text-gray-100">
          Seamless, reliable and discreet — every journey handled with exceptional care.
        </p>

        <div className="pt-4 border-t border-dashed border-gray-700">
          <p className="italic text-sm text-[#F6B93B] mb-3">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-serif tracking-wide text-white">Goldman Sachs</span>
            <span className="text-white/90">KPMG</span>
            <span className="text-white/90">Deloitte</span>
            <span className="text-white/90">Amazon</span>
            <span className="text-white/90">Google</span>
            <span className="text-white/90">Microsoft</span>
            <span className="text-white/90">Barclays</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="contact1" className="text-[#F6B93B]" defaultChecked />
            <span>Call me</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="contact1" className="text-[#F6B93B]" />
            <span>Email Me</span>
          </label>
          <p className="text-sm text-yellow-700 ml-auto">Reply within 3 minutes</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-[#132636] p-2 sm:p-4 md:p-6 rounded-2xl shadow-lg flex flex-col space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          Have a <span className="text-[#F6B93B]">Special</span> Requirement?
        </h2>
        <p className="text-gray-300 text-lg sm:text-xs text-center">
          Every journey is unique. Whether it’s a corporate roadshow, VIP event,
          or private sightseeing, we create a tailored chauffeur package for you.
        </p>

        <form className="flex flex-col space-y-2">
          <label className="block text-sm text-gray-400 mb-1 text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-md bg-[#1f3344] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F6B93B] placeholder:text-sm"
          />
          <label className="block text-sm text-gray-400 mb-1 text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md bg-[#1f3344] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F6B93B] placeholder:text-sm"
          />
          <label className="block text-sm text-gray-400 mb-1 text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-md bg-[#1f3344] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F6B93B] placeholder:text-sm"
          />

          <div className="flex flex-wrap items-center space-x-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="contact2" className="text-[#F6B93B]" defaultChecked />
              <span className="text-sm">Call me</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="contact2" className="text-[#F6B93B]" />
              <span className="text-sm">Email Me</span>
            </label>
            <p className="text-xs text-yellow-700 ml-auto">Reply within 3 minutes</p>
          </div>

          <textarea
            placeholder="Describe your requirements"
            className="w-full px-4 py-3 rounded-md bg-[#1f3344] text-white placeholder-gray-400 h-28 focus:outline-none focus:ring-2 focus:ring-[#F6B93B] placeholder:text-sm"
          ></textarea>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="bg-[#F65C02] hover:bg-[#ff7b2d] w-full sm:w-1/2 py-3 rounded-md text-white font-semibold transition-all"
            >
              Submit Requirements
            </button>
            <button
              type="button"
              className="flex items-center justify-center bg-[#132636] border border-gray-400 w-full sm:w-1/2 py-3 rounded-md font-semibold transition-all"
            >
              💬 Chat on Whatsapp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
