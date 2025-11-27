import {
  Waves,
  Bike,
  Flower2,
  Baby,
  Dumbbell,
  Users,
  Trophy,
  ShoppingBag,
  Sun,
  Zap,
  Shield,
  Car,
  Droplets,
  Lightbulb,
  TreePine,
  Gamepad2,
  Sparkles,
  Crown,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const Amenities = () => {
  // Featured amenities (highlighted)
  const featuredAmenities = [
    { icon: Waves, name: 'Swimming Pool', description: 'Temperature controlled luxury pool with dedicated lanes' },
    { icon: Dumbbell, name: 'Clubhouse & Gym', description: 'State-of-the-art fitness center with modern equipment' },
    { icon: Flower2, name: 'Yoga & Meditation', description: 'Serene wellness zone for mind and body rejuvenation' },
  ];

  const exclusiveAmenities = [
    { icon: Bike, name: 'Jogging & Cycling', description: 'Dedicated fitness paths' },
    { icon: Baby, name: "Children's Park", description: 'Safe play zones' },
    { icon: Users, name: "Senior Citizens' Area", description: 'Relaxation space' },
    { icon: Trophy, name: 'Sports Facilities', description: 'Multi-sport complex' },
    { icon: ShoppingBag, name: 'Shopping Complex', description: 'Daily essentials' },
    { icon: Sun, name: 'Solar Power', description: 'Sustainable energy' },
    { icon: Zap, name: 'EV Charging', description: 'Future-ready' },
  ];

  const essentialAmenities = [
    { icon: Shield, name: 'Gated Community' },
    { icon: Car, name: '40ft Wide Roads' },
    { icon: Droplets, name: '24/7 Water Supply' },
    { icon: TreePine, name: 'Near Famous Temples' },
    { icon: Lightbulb, name: 'Uninterrupted Power' },
    { icon: Lightbulb, name: 'LED Street Lights' },
    { icon: TreePine, name: 'Clean Environment' },
    { icon: Gamepad2, name: 'Recreation Zones' },
  ];

  const paymentSteps = [
    { percent: '25%', title: 'At Booking', description: 'Reserve your plot', step: 1 },
    { percent: '25%', title: 'Within 30 Days', description: 'Second installment', step: 2 },
    { percent: '50%', title: 'On Registry', description: 'Final payment', step: 3 },
  ];

  return (
    <section id="amenities" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A5F5E]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Sparkles className="w-5 h-5 text-[#C9A962]" />
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            World-Class Facilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            Premium Amenities
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A962] to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C9A962] to-[#C9A962]" />
          </div>
          <p className="font-elegant text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience luxury living with our comprehensive range of amenities designed 
            for your comfort, health, and entertainment.
          </p>
        </div>

        {/* Featured Amenities - Large Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="w-5 h-5 text-[#C9A962]" />
            <h3 className="font-serif text-xl font-semibold text-[#1A5F5E] tracking-wide">
              Signature Amenities
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredAmenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A962] via-[#E5D4A1] to-[#C9A962]" />
                
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C9A962]/20 via-[#C9A962]/10 to-[#1A5F5E]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <amenity.icon className="w-10 h-10 text-[#C9A962]" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                    {amenity.name}
                  </h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">{amenity.description}</p>
                </div>
                
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5F5E] to-[#C9A962] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Exclusive Amenities - Medium Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-[#1A5F5E]" />
            <h3 className="font-sans text-sm font-semibold text-[#1A5F5E] tracking-[0.2em] uppercase">
              Exclusive Amenities
            </h3>
            <div className="w-8 h-[1px] bg-[#1A5F5E]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {exclusiveAmenities.map((amenity, index) => (
              <div
                key={index}
                className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-[#C9A962]/40 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A962]/15 to-[#1A5F5E]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-7 h-7 text-[#C9A962]" />
                </div>
                <h4 className="font-sans font-semibold text-gray-900 text-sm mb-1">
                  {amenity.name}
                </h4>
                <p className="font-sans text-[11px] text-gray-400">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Amenities - 3 Column Layout with iPhone Center */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-[1px] bg-[#1A5F5E]" />
            <h3 className="font-sans text-sm font-semibold text-[#1A5F5E] tracking-[0.2em] uppercase">
              Essential Amenities
            </h3>
            <div className="w-8 h-[1px] bg-[#1A5F5E]" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center max-w-7xl mx-auto">
            {/* Left Column - First half of amenities */}
            <div className="flex flex-col gap-4 order-2 lg:order-1">
              {essentialAmenities.slice(0, Math.ceil(essentialAmenities.length / 2)).map((amenity, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-[#C9A962] hover:shadow-lg hover:-translate-x-1 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A962]/20 to-[#1A5F5E]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <span className="font-sans text-sm text-gray-700 font-medium">{amenity.name}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#C9A962]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column - iPhone Mockup */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A962]/20 via-[#1A5F5E]/10 to-transparent blur-3xl scale-150" />
                
                <div className="relative mx-auto w-[260px] h-[540px]">
                  {/* iPhone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-[12px] border-gray-800">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" />
                    {/* Screen */}
                    <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
                      <video
                        src="/video1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/60 rounded-full" />
                    {/* Side buttons */}
                    <div className="absolute -right-[14px] top-28 w-[3px] h-12 bg-gray-700 rounded-r-sm" />
                    <div className="absolute -left-[14px] top-24 w-[3px] h-8 bg-gray-700 rounded-l-sm" />
                    <div className="absolute -left-[14px] top-36 w-[3px] h-16 bg-gray-700 rounded-l-sm" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-900/20 blur-xl rounded-full" />
              </div>
            </div>

            {/* Right Column - Second half of amenities */}
            <div className="flex flex-col gap-4 order-3">
              {essentialAmenities.slice(Math.ceil(essentialAmenities.length / 2)).map((amenity, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-[#C9A962] hover:shadow-lg hover:translate-x-1 transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#C9A962]" />
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A962]/20 to-[#1A5F5E]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <span className="font-sans text-sm text-gray-700 font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Plan - Enhanced */}
        <div className="relative">
          {/* Decorative corners */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#C9A962] rounded-tl-lg" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#C9A962] rounded-tr-lg" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#C9A962] rounded-bl-lg" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#C9A962] rounded-br-lg" />
          
          <div className="bg-gradient-to-br from-[#1A5F5E] via-[#1A5F5E] to-[#0D3D3C] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            
            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
                  <span className="font-sans text-xs tracking-wider uppercase">Easy EMI Available</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-3 tracking-wide">Flexible Payment Plan</h3>
                <p className="font-elegant text-lg text-white/70 italic">Simple 3-step payment structure</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-[#C9A962]/50 via-[#C9A962] to-[#C9A962]/50 -translate-y-1/2 z-0" />
                
                {paymentSteps.map((step, index) => (
                  <div key={index} className="relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors group">
                      {/* Step number */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#C9A962] rounded-full flex items-center justify-center shadow-lg">
                        <span className="font-sans text-sm font-bold text-white">{step.step}</span>
                      </div>
                      
                      <div className="mt-4">
                        <p className="font-display text-5xl md:text-6xl font-semibold text-[#C9A962] mb-2">{step.percent}</p>
                        <p className="font-sans text-lg font-medium tracking-wide mb-1">{step.title}</p>
                        <p className="font-sans text-sm text-white/60">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Arrow between cards */}
                    {index < 2 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                        <ArrowRight className="w-6 h-6 text-[#C9A962]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
