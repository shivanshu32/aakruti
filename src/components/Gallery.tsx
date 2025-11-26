import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/A.jpg',
      alt: 'Aakruti Village Main Gate - Front View',
      title: 'Grand Entrance Gate',
    },
    {
      src: '/B.jpg',
      alt: 'Aakruti Village Gate - Perspective View',
      title: 'Village Entrance',
    },
  ];

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Visual Tour
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            Project Gallery
          </h2>
          <div className="w-24 h-1 bg-[#C9A962] mx-auto mb-6" />
          <p className="font-elegant text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore the architectural excellence and premium design of Shri Vrinda Aakruti Village
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-white text-xl font-semibold">{image.title}</h3>
                <p className="font-sans text-white/80 text-sm mt-1">{image.alt}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image - Full Width */}
        <div className="mt-8">
          <div
            className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            onClick={() => setSelectedImage(0)}
          >
            <img
              src="/A.jpg"
              alt="Aakruti Village Panoramic View"
              className="w-full h-64 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="font-display text-3xl md:text-6xl font-semibold mb-4 tracking-wide">
                  Shri Vrinda Aakruti Village
                </h3>
                <p className="font-elegant text-xl md:text-2xl text-[#C9A962] italic">An Enclave of Luxury</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />

            <button
              onClick={handleNext}
              className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
              <h3 className="font-serif text-xl font-semibold">{images[selectedImage].title}</h3>
              <p className="font-sans text-white/70 mt-1">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
