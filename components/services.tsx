"use client";

export default function Services() {
  const services = [
    {
      title: "Airport Transfers",
      desc: "Reliable chauffeur-driven airport transfers ensuring comfort and punctuality.",
      img: "/card1.jpg",
    },
    {
      title: "Corporate Travel",
      desc: "Professional corporate chauffeur services for executives and business clients.",
      img: "/card2.jpg",
    },
    {
      title: "Events & VIP Transport",
      desc: "Exclusive transport solutions for VIPs, red carpet events, and conferences.",
      img: "/card3.jpg",
    },
    {
      title: "Flexible Hourly & Day Hire",
      desc: "A dedicated chauffeur at your service for multi-stop schedules and custom itineraries.",
      img: "/card4.jpeg",
    },
    {
      title: "Private Sightseeing & Tours",
      desc: "Personalized tours and sightseeing with experienced local chauffeurs.",
      img: "/card5.jpg",
    },
    {
      title: "Cruise Port Transfers",
      desc: "Seamless, stress-free transfers to and from all major cruise terminals.",
      img: "/card6.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#0f1c27] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-3xl font-bold mb-4">
          <span className="text-[#F6B93B]">London</span> Chauffeur Service
        </h2>
        <p className="text-gray-300 text-sm sm:text-xs md:text-lg max-w-3xl mx-auto">
          Experience a seamless London chauffeur service with professional drivers, luxury vehicles,
          and fully personalised travel for airport journeys, business schedules, VIP events, tours, and more.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-row gap-3 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm h-80 sm:h-96 overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Background Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Text Container */}
            <div
              className="absolute bottom-0 w-full p-4 text-left transition-all duration-500 ease-in-out 
              group-hover:bottom-1/3"
            >
              <h3 className="text-lg sm:text-md font-semibold">{service.title}</h3>
              <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
