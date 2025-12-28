import { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hexagon className="w-6 h-6 text-white fill-white/10" />
          <span className="text-xl font-serif font-semibold tracking-wide">FirstNode</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">For Employers</a>
          <a href="#resources" className="text-sm text-gray-300 hover:text-white transition-colors">Resources</a>
          <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
          <a href="#login" className="text-sm text-white hover:text-gray-300 transition-colors">Log In</a>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors uppercase tracking-wider">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6">
           <a href="#" className="text-lg font-serif">Products</a>
           <a href="#" className="text-lg font-serif">For Employers</a>
           <a href="#" className="text-lg font-serif">Log In</a>
           <button className="bg-white text-black w-full py-3 rounded-full text-sm font-bold uppercase">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
