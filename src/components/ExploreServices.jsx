
import { Link } from "react-router-dom";

export default function ExploreServices() {
  const services = [
    {
      icon: "public/assets/ser1.png",
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: "public/assets/ser2.png",
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: "public/assets/ser3.png",
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: "public/assets/ser4.png",
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: "public/assets/ser5.png",
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      icon: "public/assets/ser6.png",
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 mb-2 uppercase tracking-wide text-sm font-medium">
            Welcome to RegisterKaro.in
          </p>
          <h2 className="text-3xl font-bold">Explore Our Services</h2>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg group hover:shadow-md transition-shadow flex flex-col items-center"
            >
              {index % 3 !== 2 && index < 6 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-[#E5E2DF]" />
              )}
             
              <div className="mb-4">
               <img src={service.icon} alt="" />

              </div>
              <h3 className="text-xl font-bold mb-6 text-center">{service.title}</h3>
              <p className="text-[#282728] mb-10 text-center">{service.description}</p>
              <Link
                to="#"
                className="flex items-center justify-center text-sm gap-x-2 font-medium text-[#001038]"
              >
                <span> Learn more</span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3599 8.44043C16.3599 12.7217 12.8911 16.1904 8.60989 16.1904C4.32864 16.1904 0.859891 12.7217 0.859891 8.44043C0.859891 4.15918 4.32864 0.69043 8.60989 0.69043C12.8911 0.69043 16.3599 4.15918 16.3599 8.44043ZM2.35989 8.44043C2.35989 11.9092 5.14114 14.6904 8.60989 14.6904C12.0474 14.6904 14.8599 11.9092 14.8599 8.44043C14.8599 5.00293 12.0474 2.19043 8.60989 2.19043C5.14114 2.19043 2.35989 5.00293 2.35989 8.44043ZM4.60989 9.06543V7.81543C4.60989 7.62793 4.76614 7.44043 4.98489 7.44043H8.60989V5.34668C8.60989 5.03418 8.98489 4.84668 9.23489 5.09668L12.3286 8.19043C12.4849 8.34668 12.4849 8.56543 12.3286 8.72168L9.23489 11.8154C8.98489 12.0654 8.60989 11.8779 8.60989 11.5342V9.44043H4.98489C4.76614 9.44043 4.60989 9.28418 4.60989 9.06543Z"
                    fill="#001038"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-12">
          {/* Replaced shadcn Button with normal button */}
          <button className="bg-[#1C4670] hover:bg-[#1e3a8a]/90 text-white px-6 py-3 rounded-md">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
  
}
