import { Download, MapPin, Shield, Home, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/A.jpg"
          alt="Shri Vrinda Aakruti Village Gate"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A962" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto pt-20">
        {/* Decorative top element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C9A962]" />
          <Sparkles className="w-5 h-5 text-[#C9A962]" />
          <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C9A962]" />
        </div>

        {/* Welcome text */}
        <p className="font-display text-[#C9A962] text-xs md:text-sm tracking-[0.4em] uppercase mb-4">
          Welcome to
        </p>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-semibold mb-4 leading-[1.1] tracking-wide">
          <span className="block text-white drop-shadow-2xl">Shri Vrinda</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9A962] via-[#E5D4A1] to-[#C9A962] mt-1">
            Aakruti Village
          </span>
        </h1>

        {/* Decorative line under heading */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A962] to-[#C9A962]" />
          <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C9A962] to-[#C9A962]" />
        </div>

        {/* Tagline */}
        <p className="font-elegant text-2xl md:text-4xl italic text-gray-100 tracking-wide">
          An Enclave of Luxury
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-12">
          <a
            href="#contact"
            className="group font-sans bg-gradient-to-r from-[#C9A962] to-[#A68B4B] text-white px-10 py-4 rounded-full font-semibold text-sm tracking-widest hover:from-[#A68B4B] hover:to-[#8B7340] transition-all duration-500 shadow-lg shadow-[#C9A962]/20 hover:shadow-xl hover:shadow-[#C9A962]/30 transform hover:-translate-y-1 uppercase flex items-center gap-2"
          >
            <span>Book Your Plot</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="/brochure.pdf"
            download="Aakruti-Village-Brochure.pdf"
            className="group font-sans flex items-center gap-2 border border-white/40 text-white px-10 py-4 rounded-full font-semibold text-sm tracking-widest hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-500 uppercase backdrop-blur-sm"
          >
            <Download size={16} className="group-hover:animate-bounce" />
            <span>Download Brochure</span>
          </a>
        </div>

        {/* Price & Features Card */}
        <div>
          <div className="inline-flex flex-col md:flex-row items-center bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            {/* Price Section */}
            <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-white/10 w-full md:w-auto">
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-sans text-sm text-gray-400">₹</span>
                <span className="font-display text-4xl md:text-5xl font-semibold text-[#C9A962]">35,000</span>
              </div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-1">Per Sq. Yard</p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="text-xs text-gray-500 line-through">₹37,500</span>
                <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-medium">SAVE 7%</span>
              </div>
            </div>

            {/* Quick Features */}
            <div className="px-6 py-5 grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#C9A962]/10 flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 text-[#C9A962]" />
                </div>
                <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider">Prime</p>
                <p className="font-sans text-xs text-white font-medium">Location</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#C9A962]/10 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-[#C9A962]" />
                </div>
                <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider">Gated</p>
                <p className="font-sans text-xs text-white font-medium">Community</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#C9A962]/10 flex items-center justify-center mb-2">
                  <Home className="w-5 h-5 text-[#C9A962]" />
                </div>
                <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider">Ready</p>
                <p className="font-sans text-xs text-white font-medium">Possession</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
      >
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-2 group-hover:border-[#C9A962] transition-colors">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-down group-hover:bg-[#C9A962]" />
        </div>
      </a>

      {/* Side Labels */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <p className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase">Mathura • Uttar Pradesh</p>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <p className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase">Goverdhan Road</p>
      </div>
    </section>
  );
};

export default Hero;
