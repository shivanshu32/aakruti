import { Shield, MapPin, Home, Leaf, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Gated Community',
      description: '24/7 security with modern surveillance systems',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Near famous temples and excellent connectivity',
    },
    {
      icon: Home,
      title: 'Premium Villas',
      description: 'Thoughtfully designed luxury residences',
    },
    {
      icon: Leaf,
      title: 'Green Living',
      description: 'Clean environment with landscaped gardens',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years of Trust' },
    { value: '500+', label: 'Happy Families' },
    { value: '40ft', label: 'Wide Roads' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C9A962" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Sparkles className="w-5 h-5 text-[#C9A962]" />
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            About The Project
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            An Everlasting Township
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A962] to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C9A962] to-[#C9A962]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[#C9A962]/20 rounded-3xl hidden md:block" />
            <div className="absolute -inset-8 border border-[#C9A962]/10 rounded-3xl hidden lg:block" />
            
            {/* Main image */}
            <div className="relative">
              <img
                src="/B.jpg"
                alt="Aakruti Village Entrance"
                className="w-full rounded-2xl shadow-2xl relative z-10"
              />
              {/* Gold accent corner */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#C9A962] rounded-tl-xl z-20" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#C9A962] rounded-br-xl z-20" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-4 right-4 md:left-8 md:right-8 z-20">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6">
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center px-2 md:px-4">
                      <p className="font-display text-2xl md:text-3xl font-semibold text-[#1A5F5E]">{stat.value}</p>
                      <p className="font-sans text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:pl-4 mt-12 lg:mt-0">
            {/* Subheading with accent */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#C9A962]" />
              <span className="font-sans text-[#C9A962] text-xs tracking-[0.2em] uppercase font-semibold">Our Vision</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
              Embrace Urban Luxury in the Heart of Mathura
            </h3>
            
            <div className="space-y-4 mb-10">
              <p className="font-elegant text-gray-600 text-lg leading-relaxed">
                Shri Vrinda Aakruti Village is a premium residential township located on 
                Satoha - Naugaon Road, Goverdhan Road, Mathura. This project offers an 
                exceptional blend of modern amenities and spiritual living near the sacred 
                temples of Vrindavan.
              </p>
              <p className="font-elegant text-gray-600 text-lg leading-relaxed">
                With meticulously planned plots and ready-to-move villas, we offer you the 
                opportunity to own your dream home in a serene, secure, and well-connected 
                community.
              </p>
            </div>

            {/* Features Grid - Enhanced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#C9A962]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C9A962]/20 to-[#1A5F5E]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-gray-900 group-hover:text-[#1A5F5E] transition-colors">{feature.title}</h4>
                    <p className="font-sans text-sm text-gray-500 mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
