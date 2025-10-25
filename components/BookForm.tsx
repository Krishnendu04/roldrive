import Image from "next/image";

export default function BookForm(){
  return(
    <div className="flex-1 w-full  max-w-[250px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[320px] xl:max-w-[420px] bg-black/50 backdrop-blur-md rounded-xl p-2 sm:p-4 md:p-6">
              {/* Tabs */}
              <div className="flex justify-between mb-2 gap-4">
                <button className="flex-1 py-2 border border-gray-500 bg-gray-800 text-white rounded-full text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px] font-semibold">
                  Transfer
                </button>
                <button className="flex-1 py-2 border border-transparent bg-gray-800 text-gray-400 rounded-full text-sm sm:text-base hover:text-white transition text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">
                  Hourly
                </button>
              </div>
    
              {/* Form */}
              <form className="space-y-2 sm:space-y-1">
                <div>
                  <label className="block text-sm text-white mb-1 text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">Pick Up</label>
                  <input
                    type="text"
                    placeholder="Enter pick up location"
                    className="w-full bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-xs"
                  />
                </div>
    
                <div>
                  <label className="block text-sm text-white mb-1 text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">Drop Off</label>
                  <input
                    type="text"
                    placeholder="Enter drop off location"
                    className="w-full bg-gray-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-xs"
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
                    <label className="block text-sm text-white mb-1 text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">
                      Pick up date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-gray-800 text-white p-3 rounded placeholder:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white mb-1 text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]">
                      Pick up time
                    </label>
                    <input
                      type="time"
                      className="w-full bg-gray-800 text-white p-3 rounded-md placeholder:text-sm"
                    />
                  </div>
                </div>
    
                <hr className="border-gray-600 my-2" />
    
                <button
                  type="button"
                  className="text-yellow-400 text-sm hover:underline"
                >
                  + Add Return Journey
                </button>
    
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 sm:py-3 rounded font-semibold transition text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]"
                  >
                    Calculate Price
                  </button>
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 bg-black/50 text-white py-2 sm:py-3 rounded font-semibold transition text-[7px] sm:text-[7px] md:text-[10px] lg:text-[13px]"
                  >
                    <Image
                      src="/whatsapp.webp"
                      height={20}
                      width={20}
                      alt="whatsapp-logo"
                      className="rounded-full"
                    />
                    Chat on WhatsApp
                  </button>
                </div>
              </form>
            </div>
  )
}