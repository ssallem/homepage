import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import AskAiSection from './components/AskAiSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <Navbar />

      <main>
        {/* 1. Hero with 3D Robot */}
        <Hero3D />

        {/* 2. Philosophy Section */}
        <section className="py-32 px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Simplify <span className="not-italic font-normal">your money</span></h2>
            <div className="max-w-4xl mx-auto">
                <img
                    src="https://picsum.photos/1200/600"
                    alt="App Dashboard Preview"
                    className="rounded-2xl border border-white/10 shadow-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </section>

        {/* 3. Dashboard Features Bento Grid */}
        <FeaturesGrid />

        {/* 4. AI Interaction Section */}
        <AskAiSection />

        {/* 5. Forecast/Future Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-brand-black to-[#0a0f1c]">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-serif italic mb-6 text-white">Forecast <span className="not-italic font-normal">your future</span></h2>
                <p className="text-gray-400 mb-12">Model scenarios—from market shifts to life goals—and see how your money could grow over time.</p>

                <div className="bg-[#0e1221] border border-blue-500/10 rounded-3xl p-8 relative overflow-hidden">
                    {/* Fake Chart Line Decoration */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>

                    <div className="flex justify-between items-end h-[300px] gap-2 md:gap-4 relative z-10">
                         {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                             <div key={i} className="w-full bg-blue-500/10 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-1000 ease-out group-hover:bg-blue-400"
                                    style={{ height: `${h}%` }}
                                ></div>
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 6. Quote Section */}
        <section className="py-24 flex items-center justify-center bg-black">
             <div className="text-center max-w-2xl px-6">
                <p className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-200">
                    "As a solo founder, my time is money. FirstNode automated my entire financial dashboard, letting me focus on shipping code instead of managing spreadsheets."
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-white">JD</div>
                    <div className="text-left">
                        <div className="text-sm font-bold">James D.</div>
                        <div className="text-xs text-gray-500">Indie Hacker</div>
                    </div>
                </div>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
