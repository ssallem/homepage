import { Twitter, Linkedin, Github, Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <Hexagon className="w-6 h-6 text-white fill-white/10" />
               <span className="text-xl font-serif font-semibold">FirstNode</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The genesis of your financial autonomy. Powered by advanced AI and real-time analytics to help you grow your wealth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Personal Finance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wealth Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Early Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Subscribe</h4>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="bg-white text-black text-sm font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Join Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="text-xs text-gray-600">
            © 2024 FirstNode Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
