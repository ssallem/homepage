import { Activity } from 'lucide-react';
import FinancialChart from './FinancialChart';

const FeatureCard: React.FC<{
  title: string;
  titleSuffix?: string;
  subtitle: string;
  children: React.ReactNode;
  colSpan?: string
}> = ({ title, titleSuffix, subtitle, children, colSpan = "col-span-1" }) => (
  <div className={`${colSpan} group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-500`}>
    <div className="p-8 relative z-10 h-full flex flex-col">
      <h3 className="text-3xl font-serif italic mb-2 text-white">
        {title} <span className="not-italic font-normal font-sans">{titleSuffix}</span>
      </h3>
      <p className="text-gray-500 text-sm mb-8 max-w-xs">{subtitle}</p>
      <div className="flex-grow flex flex-col justify-end">
        {children}
      </div>
    </div>
    {/* Subtle Glow */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  </div>
);

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-brand-black" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Track Everything */}
          <FeatureCard
            title="Track"
            titleSuffix="everything"
            subtitle="Sync all your finances. Connect all your accounts to see your finances in one place."
          >
             <div className="relative bg-[#111] rounded-xl p-4 border border-white/5 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Net Worth</span>
                    <span className="text-green-400 text-xs">+12.4%</span>
                </div>
                <div className="text-3xl font-light text-white mb-2">$325,472</div>
                <FinancialChart />
             </div>
          </FeatureCard>

          {/* Card 2: Monitor Performance */}
          <FeatureCard
            title="Monitor"
            titleSuffix="performance"
            subtitle="From 401(k)s to crypto, track the latest activity across your entire portfolio."
          >
            <div className="space-y-3">
                {[
                    { label: 'U.S. Stocks', val: '46.2%', color: 'bg-blue-500', width: 'w-[46%]' },
                    { label: 'Intl. Stocks', val: '24.1%', color: 'bg-purple-500', width: 'w-[24%]' },
                    { label: 'Crypto', val: '18.4%', color: 'bg-yellow-500', width: 'w-[18%]' },
                    { label: 'Cash', val: '11.3%', color: 'bg-gray-500', width: 'w-[11%]' }
                ].map((item, idx) => (
                    <div key={idx} className="group/item">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>{item.label}</span>
                            <span>{item.val}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} ${item.width} rounded-full`}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Activity className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-sm font-medium">Portfolio Health</div>
                        <div className="text-xs text-gray-400">Excellent</div>
                    </div>
                </div>
                <div className="text-xl font-serif italic">98<span className="text-sm not-italic opacity-50">/100</span></div>
            </div>
          </FeatureCard>

          {/* Card 3: Deep Dive */}
          <FeatureCard
            title="Dive"
            titleSuffix="into any position"
            subtitle="From individual stocks to ETFs, get real-time performance and key financials."
            colSpan="md:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { symbol: 'AAPL', name: 'Apple Inc.', price: '$178.32', change: '+1.4%' },
                    { symbol: 'TSLA', name: 'Tesla, Inc.', price: '$242.10', change: '-0.8%' },
                    { symbol: 'NVDA', name: 'Nvidia Corp.', price: '$460.18', change: '+2.1%' },
                ].map((stock, idx) => (
                    <div key={idx} className="bg-[#111] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold">{stock.symbol[0]}</div>
                            <span className={`text-xs px-2 py-1 rounded-full ${stock.change.startsWith('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>{stock.change}</span>
                        </div>
                        <div className="text-lg font-medium">{stock.symbol}</div>
                        <div className="text-xs text-gray-500">{stock.name}</div>
                        <div className="mt-2 text-sm text-gray-300">{stock.price}</div>
                    </div>
                ))}
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
