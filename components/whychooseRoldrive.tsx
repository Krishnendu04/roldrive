// components/WhyChooseRolDrive.tsx
import { FC } from "react";
import { FaPlaneDeparture, FaUserTie, FaDollarSign, FaCarSide, FaHeadset } from "react-icons/fa";

const WhyChooseRolDrive: FC = () => {
  const features = [
    {
      icon: <FaPlaneDeparture />,
      title: "60 minutes free airport wait",
      description: "Complete peace of mind for delayed flights",
    },
    {
      icon: <FaUserTie />,
      title: "Professional chauffeurs",
      description: "Uniformed, discreet and well-presented",
    },
    {
      icon: <FaDollarSign />,
      title: "All-inclusive pricing",
      description: "No hidden fees, surcharges or surprises",
    },
    {
      icon: <FaCarSide />,
      title: "Luxury fleet",
      description: "Hand-picked vehicles for a first-class travel experience",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 support",
      description: "Always available for bookings and assistance",
    },
  ];

  return (
    <section className="bg-[#0B0E13] text-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
          Why Choose <span className="text-yellow-400">RolDrive</span>
        </h2>
        <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-sm text-gray-300 max-w-4xl mx-auto">
          Choose a premium chauffeur service in London, trusted by corporate travellers and VIP clients. From airport transfers to business travel, RolDrive delivers a seamless, reliable and comfortable journey every time.
        </p>
      </div>

      {/* All features in a single horizontal row */}
      <div className="flex justify-between items-start flex-wrap gap-2 sm:gap-2 md:gap-4 lg:gap-6">
        {features.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] sm:p-1 md:p-1 lg:p-2"
          >
            <div className="text-yellow-400 text-sm sm:text-sm md:text-xl lg:text-2xl mb-3">
              {icon}
            </div>
            <h3 className="font-semibold text-sm sm:text-xs md:text-sm lg:text-sm mb-1">
              {title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-sm">
              {description}
            </p>
            {/* Vertical Dashed Line Between Features */}
            {index < features.length - 1 && (
              <div
                className="
                  absolute 
                  top-1/2 
                  right-0 
                  transform 
                  -translate-y-1/2 
                  h-[60%] 
                  sm:h-[65%] 
                  md:h-[70%] 
                  lg:h-[75%] 
                  border-r 
                  border-dashed 
                  border-gray-500
                  opacity-50 
                  "
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseRolDrive;
