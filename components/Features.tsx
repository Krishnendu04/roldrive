import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner.webp" 
          alt="site banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 container mx-30 mt-25 px-6 py-10 flex flex-col lg:flex-row items-start justify-between gap-20">
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-white">
            <span className="text-yellow-400">Luxury</span> Chauffeur Service in<br/>
            London – Airport,<br/> Corporate & VIP Travel
          </h1>
          <p className="text-gray-300 text-base md:text-sm">
            Professional chauffeurs, luxury vehicles and all-inclusive pricing.
            Complimentary airport waiting, real-time flight monitoring & 24/7
            support.
          </p>

          <div className="flex flex-row text-white space-y-2 text-sm gap-3">
            <p>📞 +44 204 592 0966</p>
            <p>✉️ booking@roldrive.com</p>
            <Image src="/whatsapp.webp" height={30} width={30} className="rounded-full " alt="whatsapp-logo"/>
          </div>

          <div className="flex items-center gap-3 mt-20 bg-white/10 p-3 px-5 rounded-md w-fit">
            <Image
              src="/GoogleLogo.jpg"
              alt="Google"
              width={30}
              height={30}
              className="bg-white rounded-full p-1"
            />
            <span className="text-sm w-l md:text-base text-white w-60 md:w-70 lg:w-80">
              Google Rating <br/><span className="font-bold">5.0 ⭐⭐⭐⭐⭐</span>
            </span>
          </div>
        </div>

        {/* RIGHT SECTION (FORM) */}
        <div className="flex-1 bg-black/50 backdrop-blur-md rounded-xl p-6 md:p-8 w-full max-w-md">
          <div className="flex justify-between mb-6 gap-4">
            <button className="flex-1 py-1 border text-sm border-gray-500 bg-gray-800 text-white rounded-full font-semibold">
              Transfer
            </button>
            <button className="flex-1 py-1 border text-sm bg-gray-800 border-transparent rounded-full text-gray-400 hover:text-white transition">
              Hourly
            </button>
          </div>

          <form className="space-y">
            <div>
              <label className="block text-sm mb-1 text-white">Pick Up</label>
              <input
                type="text"
                placeholder="Enter pick up location"
                className="w-full bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white">Drop Off</label>
              <input
                type="text"
                placeholder="Enter drop off location"
                className="w-full bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              type="button"
              className="text-yellow-400 text-sm hover:underline"
            >
              + Add Stop
            </button>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-white">Pick up date</label>
                <input
                  type="date"
                  className="w-full bg-gray-800 text-white p-3 rounded"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Pick up time</label>
                <input
                  type="time"
                  className="w-full bg-gray-800 text-white p-3 rounded"
                  placeholder="Pick up date"
                />
              </div>
            </div>
            <br/>
            <hr className="text-gray-500"/>
            <button
              type="button"
              className="text-yellow-400 text-sm hover:underline"
            >
              + Add Return Journey
            </button>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                type="submit"
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded font-semibold transition"
              >
                Calculate Price
              </button>
              <button
                type="button"
                className="flex-1 bg-black/50 text-white py-2 rounded font-semibold transition"
              >
                💬 Chat on Whatsapp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
