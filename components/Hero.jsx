import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[6px] font-semibold mb-6 text-[#1F4D3D]">
              Creative Design Agency
            </p>

            <h1 className="text-6xl lg:text-7xl font-bold leading-[1.05] text-slate-900">
              We design
              <br />
              digital experiences
              <br />
              that inspire action.
            </h1>

            <p className="mt-8 text-xl leading-9 max-w-lg text-slate-600">
              Helping ambitious brands create beautiful websites,
              memorable identities, and meaningful digital products
              that leave a lasting impression.
            </p>

            <div className="flex gap-5 mt-12">

              <button className="bg-[#1F4D3D] text-white px-9 py-4 rounded-full font-semibold shadow-lg hover:bg-[#16392E] transition duration-300">
                Start Project
              </button>

              <a
  href="#portfolio"
  className="border border-slate-300 px-7 py-4 rounded-full hover:bg-white transition inline-flex items-center justify-center"
>
  View Portfolio
</a>

            </div>

          </div>

          {/* Right */}
          <div className= "relative w-full h-145 lg:h-150">

            <Image
              src="/images/hero.png"
              alt="Modern Architecture"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover rounded-[28px] shadow-2xl ring-1 ring-slate-200"
            />

          </div>

        </div>

      </div>
    </section>
  );
}