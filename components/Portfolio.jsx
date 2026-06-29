import Image from "next/image";
const projects = [
  {
    id: 1,
    title: "Aurora Workspace",
    category: "Corporate Website",
    image: "/images/arora.jpg",
  },
  {
    id: 2,
    title: "Verde Café",
    category: "Brand Identity",
    image: "/images/cafe.jpg",
  },
  {
    id: 3,
    title: "Lumina Residence",
    category: "Architecture",
    image: "/images/lumina1.jpg",
  },
  {
    id: 4,
    title: "Nova Commerce",
    category: "E-Commerce Platform",
    image: "/images/nova1.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#1F4D3D] font-semibold">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Selected Work
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of projects crafted with attention to detail,
            functionality, and timeless design.
          </p>

        </div>

        {/* Projects */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="relative h-87.5 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6 bg-white">

                <p className="text-sm uppercase tracking-wider text-[#1F4D3D] font-medium">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}