import { MapPin, Clock, Car, Train, Plane } from 'lucide-react';

const Location = () => {
  const nearbyPlaces = [
    { name: 'Prem Mandir', distance: '5 km', time: '10 min' },
    { name: 'Kusum Sarovar', distance: '3 km', time: '7 min' },
    { name: 'Dwarikadish Temple', distance: '6 km', time: '12 min' },
    { name: 'Danghati Temple', distance: '4 km', time: '8 min' },
    { name: 'Shri Krishna Janamsthan', distance: '8 km', time: '15 min' },
    { name: 'Hospital', distance: '2 km', time: '5 min' },
    { name: 'Schools', distance: '1.5 km', time: '4 min' },
    { name: 'National Highway', distance: '1 km', time: '2 min' },
  ];

  const connectivity = [
    {
      icon: Car,
      title: 'By Road',
      description: 'Well connected via Goverdhan Road, easy access to NH-2',
    },
    {
      icon: Train,
      title: 'Railway Station',
      description: 'Mathura Junction - 10 km (20 min drive)',
    },
    {
      icon: Plane,
      title: 'Airport',
      description: 'Agra Airport - 55 km, IGI Delhi - 160 km',
    },
  ];

  return (
    <section id="location" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Divine Proximity
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            Prime Location
          </h2>
          <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
          <p className="font-elegant text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Strategically located on Satoha - Naugaon Road, Goverdhan Road, Mathura — 
            near famous temples and with excellent connectivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56636.07842!2d77.6!3d27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc5e0e0b9d5!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aakruti Village Location"
              />
            </div>
            {/* Address Card */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9A962] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-gray-900">Project Address</h4>
                  <p className="font-sans text-gray-600 text-sm mt-1">
                    Satoha - Naugaon Road, Goverdhan Road, Mathura, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:pl-8">
            {/* Connectivity */}
            <div className="mb-10">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6 tracking-wide">Connectivity</h3>
              <div className="space-y-4">
                {connectivity.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-[#FAF8F5] rounded-xl"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1A5F5E]/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#1A5F5E]" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-gray-900">{item.title}</h4>
                      <p className="font-sans text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Locations */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6 tracking-wide">Nearby Locations</h3>
              <div className="grid grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C9A962]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#C9A962] rounded-full" />
                      <span className="font-sans font-medium text-gray-900 text-sm">{place.name}</span>
                    </div>
                    <div className="font-sans flex items-center space-x-1 text-gray-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{place.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Yamuna Expressway Highlight */}
            <div className="mt-8 bg-gradient-to-r from-[#1A5F5E] to-[#0D3D3C] rounded-2xl p-6 text-white">
              <h4 className="font-serif font-semibold text-lg mb-2">Yamuna Expressway Access</h4>
              <p className="font-sans text-white/80 text-sm leading-relaxed">
                Quick connectivity to Delhi-NCR via Yamuna Expressway. 
                Perfect for professionals working in metro cities while living in spiritual Mathura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
