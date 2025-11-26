import { useState } from 'react';
import { BedDouble, Bath, Car, Maximize, X } from 'lucide-react';

interface FloorPlan {
  id: string;
  name: string;
  size: string;
  plotArea: string;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  pdfUrl: string;
  groundFloor: {
    living: string;
    bedrooms: string[];
    kitchen: string;
    garden: string;
    porch: string;
  };
  firstFloor: {
    bedroom: string;
    balcony: string;
    terrace: string;
  };
}

const Villas = () => {
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan | null>(null);

  const floorPlans: FloorPlan[] = [
    {
      id: '60',
      name: 'Premium Villa',
      size: "21'-5\" × 60'-0\"",
      plotArea: '143 Sq. Yards',
      bedrooms: 3,
      bathrooms: 3,
      features: ['Spacious Living Area', 'Garden', 'Porch', 'Open Terrace', 'Backyard'],
      pdfUrl: '/floorplan-60.pdf',
      groundFloor: {
        living: "13'-3\" × 12'-2\"",
        bedrooms: ["12'-3\" × 11'-10\"", "12'-3\" × 11'-10\""],
        kitchen: "12'-3\" × 8'-7\"",
        garden: "7'-9\" × 10'-10\"",
        porch: "15'-7\" × 9'-11\"",
      },
      firstFloor: {
        bedroom: "12'-3\" × 11'-10\"",
        balcony: "8'-5\" × 9'-11\"",
        terrace: 'Open Terrace with Pantry',
      },
    },
    {
      id: '53',
      name: 'Classic Villa',
      size: "20'-9\" × 53'-0\"",
      plotArea: '122 Sq. Yards',
      bedrooms: 3,
      bathrooms: 2,
      features: ['Living Area with TV Cabinet', 'Garden', 'Porch', 'Open Terrace', 'Backyard'],
      pdfUrl: '/floorplan-53.pdf',
      groundFloor: {
        living: "15'-8\" × 13'-9\"",
        bedrooms: ["11'-10\" × 10'-0\"", "11'-10\" × 10'-0\""],
        kitchen: "8'-0\" × 10'-6\"",
        garden: "7'-5\" × 9'-11\"",
        porch: "13'-10\" × 10'-6\"",
      },
      firstFloor: {
        bedroom: "12'-0\" × 10'-6\"",
        balcony: "6'-0\" × 10'-6\"",
        terrace: 'Open Terrace',
      },
    },
    {
      id: '43',
      name: 'Compact Villa',
      size: "21'-5\" × 43'-8\"",
      plotArea: '104 Sq. Yards',
      bedrooms: 3,
      bathrooms: 2,
      features: ['Living Area', 'Garden', 'Porch', 'Open Hall', 'Dual Balcony'],
      pdfUrl: '/floorplan-43.pdf',
      groundFloor: {
        living: "14'-2\" × 10'-5\"",
        bedrooms: ["12'-10\" × 10'-0\"", "12'-0\" × 9'-6\""],
        kitchen: "8'-0\" × 6'-3\"",
        garden: "5'-4\" × 10'-0\"",
        porch: "13'-10\" × 10'-5\"",
      },
      firstFloor: {
        bedroom: "12'-10\" × 10'-0\"",
        balcony: "4'-0\" × 10'-5\"",
        terrace: 'Open Terrace with Open Hall',
      },
    },
  ];

  return (
    <section id="villas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Thoughtfully Designed
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            Villas & Floor Plans
          </h2>
          <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
          <p className="font-elegant text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from our range of meticulously designed villa plans, each crafted to 
            maximize space, light, and comfort for your family.
          </p>
        </div>

        {/* Floor Plan Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {floorPlans.map((plan, index) => (
            <div
              key={plan.id}
              className="group bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#1A5F5E] to-[#0D3D3C] p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-sans text-[#C9A962] text-xs tracking-widest uppercase">Plan {index + 1}</p>
                    <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>
                  </div>
                  <div className="font-sans bg-white/20 px-3 py-1 rounded-full text-xs tracking-wide">
                    {plan.plotArea}
                  </div>
                </div>
                <p className="font-display text-xl font-semibold text-[#C9A962]">{plan.size}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Quick Stats */}
                <div className="flex justify-between mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <BedDouble className="w-5 h-5 text-[#1A5F5E]" />
                    <span className="font-sans text-gray-700 text-sm">{plan.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-[#1A5F5E]" />
                    <span className="font-sans text-gray-700 text-sm">{plan.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-[#1A5F5E]" />
                    <span className="font-sans text-gray-700 text-sm">Porch</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-sans font-semibold text-gray-900 mb-3 text-sm tracking-wide">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="font-sans bg-[#C9A962]/10 text-[#A68B4B] px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floor Details */}
                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded-xl">
                    <h5 className="font-sans font-medium text-[#1A5F5E] mb-2 text-sm tracking-wide">Ground Floor</h5>
                    <div className="font-sans grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <p>Living: {plan.groundFloor.living}</p>
                      <p>Kitchen: {plan.groundFloor.kitchen}</p>
                      <p>Garden: {plan.groundFloor.garden}</p>
                      <p>Porch: {plan.groundFloor.porch}</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <h5 className="font-sans font-medium text-[#1A5F5E] mb-2 text-sm tracking-wide">First Floor</h5>
                    <div className="font-sans grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <p>Bedroom: {plan.firstFloor.bedroom}</p>
                      <p>Balcony: {plan.firstFloor.balcony}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className="font-sans flex-1 flex items-center justify-center space-x-2 bg-[#1A5F5E] text-white py-3 rounded-xl font-medium text-sm tracking-wide hover:bg-[#0D3D3C] transition-colors"
                  >
                    <Maximize className="w-4 h-4" />
                    <span>View Plan</span>
                  </button>
                  <a
                    href={plan.pdfUrl}
                    download
                    className="font-sans flex-1 flex items-center justify-center space-x-2 border-2 border-[#C9A962] text-[#C9A962] py-3 rounded-xl font-medium text-sm tracking-wide hover:bg-[#C9A962] hover:text-white transition-colors"
                  >
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Viewer Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">{selectedPlan.name}</h3>
                  <p className="font-sans text-gray-500 text-sm">{selectedPlan.size}</p>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="h-[70vh]">
                <iframe
                  src={selectedPlan.pdfUrl}
                  className="w-full h-full"
                  title={`${selectedPlan.name} Floor Plan`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Villas;
