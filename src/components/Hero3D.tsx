import { ArrowRight } from 'lucide-react';

const Hero3D: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-start pt-40 md:pt-48">
      {/* Status Badge - Moved up to 56px */}
      <div className="absolute top-[56px] left-0 right-0 z-20 flex justify-center fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">FirstNode AI v2.0 Live</span>
        </div>
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src='https://my.spline.design/nexbotrobotcharacterconcept-GAuBVwoY0PcFl1CVMeylNA0Y/'
          frameBorder='0'
          width='100%'
          height='100%'
          className="w-full h-full scale-125 md:scale-100"
          title="Spline 3D Model"
        ></iframe>
        {/* Overlays to blend iframe into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
      </div>

      {/* Content - Moved further down to 200px */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mt-[100px]">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white mb-10 drop-shadow-2xl">
          Create <span className="not-italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">everything</span>
        </h1>
        <br/>
        <button className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          Into ssallem
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero3D;
