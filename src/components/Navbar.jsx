import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  Play,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { name: "How it Works", id: "how-it-works", icon: Target },
  { name: "Features", id: "features", icon: Sparkles },
  { name: "Demo", id: "demo", icon: Play },
  { name: "Pricing", id: "pricing", icon: BarChart3 },
  { name: "FAQ", id: "faq", icon: MessageCircle },
];

const Navbar = ({ scrollY, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 3
          ? "bg-slate-900/90 backdrop-blur-xl  shadow-2xl shadow-blue-500/10"
          : "bg-transparent top-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-12">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Abun
              </span>
              <div className="text-xs text-slate-400 -mt-1">
                AI Content Platform
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                )}
              </button>
            ))}

            <div className="ml-6 flex items-center space-x-9">
              <button className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </button>
              <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "top-3"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-3 w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-300"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800/50">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
