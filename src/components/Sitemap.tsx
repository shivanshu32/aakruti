import { useState, useRef } from 'react';
import { Map, ZoomIn, X, Download, Ruler, Trees, Route, LayoutGrid, Eye } from 'lucide-react';

const Sitemap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const siteHighlights = [
    {
      icon: Ruler,
      title: 'Expansive Layout',
      description: 'Generous land parcel optimally planned for spacious living.',
    },
    {
      icon: LayoutGrid,
      title: 'Numbered Plots',
      description: 'Clearly demarcated plots for easy identification and selection.',
    },
    {
      icon: Trees,
      title: 'Green Zone',
      description: 'Dedicated open green spaces for a serene environment.',
    },
    {
      icon: Route,
      title: 'Wide Roads',
      description: 'Internal road network with 18M & 12M wide roads.',
    },
  ];

  const plotInfo = [
    { label: 'Residential Plots', value: 'Multiple Sizes' },
    { label: 'Commercial Area', value: 'Included' },
  ];

  const openLightbox = () => {
    setIsOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.5, 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale === 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale === 1) return;
    setPosition({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section id="sitemap" className="py-16 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Master Plan
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            Site Map
          </h2>
          <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
          <p className="font-elegant text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore the meticulously designed layout of Shri Vrinda Aakruti Village — where every plot, road and green space is planned to perfection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Map */}
          <div className="relative">
            <div
              className="group relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#C9A962]/20 h-[420px] md:h-[520px] lg:h-[560px] flex items-center justify-center cursor-zoom-in"
              onClick={openLightbox}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A962]/5 via-transparent to-[#C9A962]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              <img
                src="/sitemap-landscape.jpg"
                alt="Shri Vrinda Aakruti Village Site Map"
                className="max-w-full max-h-full w-auto h-auto p-2 transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-[#C9A962] hover:text-white transition-colors duration-200">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h4 className="font-serif text-white text-lg font-semibold flex items-center gap-2">
                      <Map className="w-5 h-5 text-[#C9A962]" />
                      Proposed Layout Plan
                    </h4>
                    <p className="font-sans text-white/80 text-xs mt-1">
                      Satoha - Naugaon Road, Goverdhan Road, Mathura
                    </p>
                  </div>
                  <span className="font-sans text-xs text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    Click to expand
                  </span>
                </div>
              </div>
            </div>

            {/* Address / Info Card */}
            <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9A962] rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-gray-900">Interactive Site Map</h4>
                  <p className="font-sans text-gray-600 text-sm mt-1">
                    Click the map to open a fullscreen view with zoom and pan controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
            <div className="mb-10">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6 tracking-wide">Site Plan Highlights</h3>
              <div className="space-y-4">
                {siteHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#C9A962]/30 hover:shadow-md transition-all duration-300"
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

            <div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6 tracking-wide">Plot Information</h3>
              <div className="grid grid-cols-2 gap-4">
                {plotInfo.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white border border-gray-100 rounded-xl hover:border-[#C9A962]/30 hover:shadow-md transition-all duration-300"
                  >
                    <p className="font-sans text-gray-500 text-xs mb-1">{item.label}</p>
                    <p className="font-sans font-semibold text-gray-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#1A5F5E] to-[#0D3D3C] rounded-2xl p-6 text-white">
              <h4 className="font-serif font-semibold text-lg mb-2">Download Master Plan</h4>
              <p className="font-sans text-white/80 text-sm leading-relaxed mb-5">
                Get the complete site map in high-resolution PDF format for detailed reference and site visits.
              </p>
              <a
                href="/sitemap.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#C9A962] text-white px-6 py-3 rounded-full font-sans font-medium text-sm tracking-wide hover:bg-[#A68B4B] transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download Site Map PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-sm">
            <div>
              <h3 className="font-serif text-white text-lg font-semibold">Site Map</h3>
              <p className="font-sans text-white/60 text-xs">Drag to pan • Use controls to zoom</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleZoomOut}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
                disabled={scale === 1}
              >
                <span className="font-sans font-bold text-lg">−</span>
              </button>
              <span className="font-sans text-white text-sm w-16 text-center">{Math.round(scale * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <span className="font-sans font-bold text-lg">+</span>
              </button>
              <button
                onClick={resetZoom}
                className="font-sans text-white text-sm hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={closeLightbox}
                className="ml-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex items-center justify-center p-4" ref={imageRef}>
            <div
              className={`relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={handleMouseDown}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              }}
            >
              <img
                src="/sitemap-landscape.jpg"
                alt="Shri Vrinda Aakruti Village Site Map"
                className="max-w-[95vw] max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sitemap;
