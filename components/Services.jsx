import Image from "next/image";
import {
  FaLaptopCode,
  FaPalette,
  FaPenNib,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    image: "/images/uiux.jpg",
    icon: <FaPalette size={22} />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging interfaces that deliver seamless user experiences.",
  },
  {
    id: "02",
    image: "/images/web.jpg",
    icon: <FaLaptopCode size={22} />,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites using modern technologies.",
  },
  {
    id: "03",
    image: "/images/branding.jpg",
    icon: <FaPenNib size={22} />,
    title: "Brand Identity",
    description:
      "Creating memorable visual identities that help businesses stand out.",
  },
  {
    id: "04",
    image: "/images/digital.jpg",
    icon: <FaBullhorn size={22} />,
    title: "Digital Marketing",
    description:
      "Helping brands grow through strategic marketing and digital campaigns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FAFAF8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#1F4D3D] font-semibold">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Creative Solutions
            <br />
            Built for Modern Brands.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            From strategy to execution, we help businesses create meaningful
            digital experiences that inspire and deliver lasting results.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-45">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-5">

                {/* Floating Icon */}
                <div className="absolute -top-6 left-6 w-14 h-14 rounded-full bg-[#1F4D3D] text-white flex items-center justify-center shadow-lg border-4 border-white">
                  {service.icon}
                </div>

                {/* Number */}
                <span className="absolute top-6 right-6 text-4xl font-bold text-slate-200"> 
                  {service.id}
                </span>

                <div className="pt-10">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <div className="w-16 h-1 bg-[#1F4D3D] rounded-full mt-4 mb-6"></div>

                  <p className="text-slate-600 leading-7 text-2xl">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-end mt-6">
                    <button className="w-12 h-12 rounded-full border border-[#1F4D3D] text-[#1F4D3D] flex items-center justify-center hover:bg-[#1F4D3D] hover:text-white transition duration-300">
                      <FaArrowRight />
                    </button>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}