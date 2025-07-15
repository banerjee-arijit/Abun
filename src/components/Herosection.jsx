import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Zap,
  Rocket,
  ArrowRight,
  Play,
  FileText,
  Shield,
  Clock,
  Brain,
  Cpu,
  TrendingUp,
  Award,
} from "lucide-react";

const Herosection = () => {
  const [heroText, setHeroText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Write Smarter, Not Harder";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setHeroText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center mt-20  sm:px-6 lg:px-8"
    >
      <div className="max-w-9xl mx-auto z-10 p-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8 group hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <Sparkles className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm text-slate-300 font-medium">
                  AI-Powered Content Generation
                </span>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>

              <h1 className="text-5xl font-bold leading-tight mb-6">
                <div className="relative">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                    {heroText}
                  </span>
                  {isTyping && (
                    <span className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-blue-400 ml-2 animate-pulse"></span>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-white">with AI Power</span>
                </div>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Transform your content creation with AI that understands your
                brand,
                <span className="text-blue-400 font-semibold">
                  {" "}
                  optimizes for SEO
                </span>
                , and generates valuable content that
                <span className="text-purple-400 font-semibold"> converts</span>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-3">
                    <Rocket className="w-5 h-5" />
                    <span>Start Writing for Free</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>

                <button className="group flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <div className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center group-hover:bg-slate-700/50 group-hover:border-blue-500/30 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 ml-1 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Watch Demo</div>
                    <div className="text-sm text-slate-400">2 min overview</div>
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                {[
                  { number: "50K+", label: "Content Pieces", icon: FileText },
                  { number: "99.9%", label: "Uptime", icon: Shield },
                  { number: "10x", label: "Faster Writing", icon: Clock },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 text-sm">
                    AI Content Studio
                  </span>
                  <div className="ml-auto flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-2xl p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-slate-300">
                        AI Writing Assistant
                      </span>
                    </div>
                    <div className="bg-slate-800 rounded-xl px-4 py-3 text-blue-400 font-mono text-sm">
                      "Write a blog post about sustainable technology..."
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-slate-300">
                          Generated Content
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">
                          Processing
                        </span>
                      </div>
                    </div>
                    <div className="bg-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm leading-relaxed">
                      <div className="animate-typing overflow-hidden whitespace-nowrap">
                        Sustainable technology is revolutionizing how we
                        approach...
                      </div>
                      <div className="mt-2 w-2 h-4 bg-blue-400 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "SEO Optimized",
                      "Plagiarism Free",
                      "Human-like",
                      "Fast Generation",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-3 py-1 text-xs text-blue-300"
                      >
                        ✓ {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center animate-float">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float-delayed">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
