import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

const Media = () => {
  // Easy to add more videos - just add to this array
  const videos = [
    { src: '/video2.mp4', title: 'Project Overview' },
    { src: '/video3.mp4', title: 'Amenities Tour' },
    { src: '/video4.mp4', title: 'Location Highlights' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setSlideDirection(index > currentIndex ? 'left' : 'right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-play video when it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay may be blocked by browser - mute and retry
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [currentIndex]);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="media" className="py-20 md:py-28 bg-gradient-to-b from-[#FAF8F5] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A962]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A5F5E]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A962]" />
            <Sparkles className="w-5 h-5 text-[#C9A962]" />
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="font-sans text-[#C9A962] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Visual Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-wide">
            Media Gallery
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A962] to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C9A962] to-[#C9A962]" />
          </div>
          <p className="font-elegant text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our project through immersive video tours showcasing the beauty 
            and grandeur of Shri Vrinda Aakruti Village.
          </p>
        </div>

        {/* Main Content - Thumbnails, iPhone, Thumbnails */}
        <div className="flex flex-col items-center">
          {/* 3-Column Layout: Left Thumbnails | iPhone | Right Thumbnails */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-16 xl:gap-24 items-center w-full max-w-7xl">
            
            {/* Left Side - Previous Video Thumbnail */}
            <div className="hidden lg:flex flex-col items-end justify-center">
              <button
                onClick={goToPrevious}
                disabled={isAnimating}
                className="group relative w-56 xl:w-64 h-96 xl:h-[420px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <video
                  src={videos[(currentIndex - 1 + videos.length) % videos.length].src}
                  muted
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#C9A962] group-hover:scale-110 transition-all duration-300">
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </div>
                  <p className="mt-4 text-white font-sans text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Previous
                  </p>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/70 text-xs font-sans uppercase tracking-wider mb-1">Up Next</p>
                  <p className="text-white font-serif font-semibold text-sm">
                    {videos[(currentIndex - 1 + videos.length) % videos.length].title}
                  </p>
                </div>
              </button>
            </div>

            {/* Center - iPhone Mockup */}
            <div className="flex flex-col items-center">
              {/* Mobile Navigation Buttons */}
              <div className="flex lg:hidden items-center justify-center gap-4 mb-6">
                <button
                  onClick={goToPrevious}
                  disabled={isAnimating}
                  className="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#C9A962] transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </button>
                <button
                  onClick={goToNext}
                  disabled={isAnimating}
                  className="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#C9A962] transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </button>
              </div>

              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A962]/30 via-[#1A5F5E]/20 to-transparent blur-3xl scale-125" />

                <div className="relative w-[280px] h-[580px] md:w-[300px] md:h-[620px]">
                  {/* iPhone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-[12px] border-gray-800">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

                    {/* Screen */}
                    <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black relative">
                      {/* Video with animation */}
                      <div
                        className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                          isAnimating
                            ? slideDirection === 'left'
                              ? '-translate-x-full opacity-0'
                              : 'translate-x-full opacity-0'
                            : 'translate-x-0 opacity-100'
                        }`}
                      >
                        <video
                          ref={videoRef}
                          key={videos[currentIndex].src}
                          src={videos[currentIndex].src}
                          autoPlay
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                        />
                      </div>
                    </div>

                    {/* Video Controls */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                      <button
                        onClick={togglePlayPause}
                        className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#C9A962] transition-all duration-300"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white fill-white" />
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#C9A962] transition-all duration-300"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/60 rounded-full z-20" />

                    {/* Side buttons */}
                    <div className="absolute -right-[14px] top-28 w-[3px] h-12 bg-gray-700 rounded-r-sm" />
                    <div className="absolute -left-[14px] top-24 w-[3px] h-8 bg-gray-700 rounded-l-sm" />
                    <div className="absolute -left-[14px] top-36 w-[3px] h-16 bg-gray-700 rounded-l-sm" />
                  </div>
                </div>

                {/* Shadow under phone */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-10 bg-gray-900/20 blur-2xl rounded-full" />
              </div>

              {/* Video Title & Indicators */}
              <div className="mt-10 text-center">
                <p className="font-sans text-sm text-[#C9A962] font-semibold tracking-wider uppercase mb-2">
                  Now Playing
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900">
                  {videos[currentIndex].title}
                </h3>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-3 mt-6">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isAnimating}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 h-3 bg-[#C9A962]'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Next Video Thumbnail */}
            <div className="hidden lg:flex flex-col items-start justify-center">
              <button
                onClick={goToNext}
                disabled={isAnimating}
                className="group relative w-56 xl:w-64 h-96 xl:h-[420px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <video
                  src={videos[(currentIndex + 1) % videos.length].src}
                  muted
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#C9A962] group-hover:scale-110 transition-all duration-300">
                    <ChevronRight className="w-8 h-8 text-white" />
                  </div>
                  <p className="mt-4 text-white font-sans text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Next
                  </p>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/70 text-xs font-sans uppercase tracking-wider mb-1">Up Next</p>
                  <p className="text-white font-serif font-semibold text-sm">
                    {videos[(currentIndex + 1) % videos.length].title}
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Thumbnails - Show below on small screens */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`relative w-20 h-28 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-[#C9A962] ring-offset-2 scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <video
                  src={video.src}
                  muted
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className={`w-5 h-5 ${index === currentIndex ? 'text-[#C9A962]' : 'text-white'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
