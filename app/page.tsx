import Image from "next/image";
import NccSplash from "./NccSplash";
const products = [
  { name: "Ductable AC", desc: "Advanced commercial air conditioning systems", icon: "❄️" },
  { name: "Tower AC", desc: "Powerful cooling for large spaces", icon: "🏢" },
  { name: "Split AC", desc: "Efficient cooling solutions", icon: "🌬️" },
  { name: "Water Cooler", desc: "Reliable drinking water cooling", icon: "🚰" },
  { name: "Water Chiller", desc: "Industrial water cooling solutions", icon: "💧" },
  { name: "Deep Freezer", desc: "Reliable commercial refrigeration", icon: "🧊" },
  { name: "Cold Room", desc: "Temperature-controlled storage solutions", icon: "❄️" },
  { name: "Industrial AC", desc: "Heavy-duty industrial cooling", icon: "🏭" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NccSplash />
      <header className="bg-[#142D4E] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            
         <div className="flex items-center gap-3">
  <Image
    src="/ncc-logo.jpeg"
    alt="NCC Logo"
    width={65}
    height={65}
    className="object-contain mix-blend-screen"
  />
  <div>
    <h1 className="text-xl font-black">NAZMI CLIMATE COOL</h1>
    <p className="text-xs tracking-widest text-slate-300">
      PRIVATE LIMITED
    </p>
  </div>
</div>
         </div> <nav className="hidden md:flex gap-7 text-sm">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="bg-white text-[#142D4E] px-5 py-3 rounded-lg font-bold text-sm">
            Get a Quote
          </a>
        </div>
      </header>

      <section id="home" className="bg-gradient-to-r from-[#10243D] to-[#315B83] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-slate-300 tracking-[0.25em] text-sm font-bold">
            HVAC • COOLING • REFRIGERATION
          </p>
          <h2 className="text-4xl md:text-6xl font-black max-w-3xl mt-6 leading-tight">
            Engineering Comfort. Delivering Excellence.
          </h2>
          <p className="text-slate-200 max-w-xl mt-6 text-lg">
            Innovative air conditioning and industrial cooling solutions
            for commercial and industrial requirements.
          </p>
          <a href="#products" className="inline-block mt-9 bg-white text-[#142D4E] px-8 py-4 rounded-lg font-bold">
            Explore Our Products →
          </a>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-blue-700 font-bold tracking-widest text-sm">ABOUT OUR COMPANY</p>
        <h2 className="text-3xl md:text-4xl font-black mt-3">Welcome to Nazmi Climate Cool</h2>
        <p className="text-slate-600 leading-8 max-w-3xl mt-5">
          Nazmi Climate Cool Pvt. Ltd. provides air conditioning,
          refrigeration and industrial cooling solutions. Our focus is
          on dependable products, quality engineering and customer service.
        </p>
      </section>

      <section id="products" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold tracking-widest text-sm">OUR SOLUTIONS</p>
            <h2 className="text-3xl md:text-4xl font-black mt-3">Our Products</h2>
            <p className="text-slate-500 mt-3">Cooling solutions for every requirement</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-xl transition">
                <div className="text-5xl mb-6">{product.icon}</div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-slate-500 text-sm mt-3 leading-6">{product.desc}</p>
                <a href="#contact" className="inline-block text-blue-800 font-bold text-sm mt-6">
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#142D4E] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-300 font-bold tracking-widest text-sm">LET'S WORK TOGETHER</p>
          <h2 className="text-3xl md:text-4xl font-black mt-4">
            Looking for the Right Cooling Solution?
          </h2>
          <p className="text-slate-300 mt-5">
            Contact our team for product information and business enquiries.
          </p>
          <p className="mt-7 text-lg font-bold">Nazmi Climate Cool Pvt. Ltd.</p>
        </div>
      </section>

      <footer className="bg-[#0B1B2E] text-slate-300 text-center py-6 text-sm">
        © 2026 Nazmi Climate Cool Pvt. Ltd. All rights reserved.
      </footer>
    </main>
  );
}

