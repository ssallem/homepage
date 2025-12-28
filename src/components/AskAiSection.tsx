import { useState } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

const AskAiSection: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <section className="py-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-4xl md:text-6xl font-serif italic mb-2">Ask <span className="not-italic font-light">anything</span></h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">FirstNode transforms your questions into financial answers you can trust—personalized, grounded in your data, and instant.</p>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 flex flex-col gap-4 shadow-2xl">
            <div className="p-4 flex items-center gap-3 border-b border-white/5 pb-4">
               <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-serif italic">FN</div>
               <span className="text-gray-500 text-sm">Where am I overspending this month?</span>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-6 text-left">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Looking at your spending for the first 21 days of October, your top overspending category is <span className="text-white font-semibold">Dining</span> compared to past few months.
                </p>
                <ul className="space-y-2 text-xs text-gray-400 mb-6">
                    <li className="flex justify-between">
                        <span>Dining (+21%)</span>
                        <span className="text-red-400">$436 up</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Shopping (+18%)</span>
                        <span className="text-red-400">$210 up</span>
                    </li>
                </ul>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
            </div>

            <div className="relative mt-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask a follow up..."
                    className="w-full bg-transparent text-white p-4 pr-12 outline-none placeholder:text-gray-600 font-light"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
                    <ArrowUp className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskAiSection;
