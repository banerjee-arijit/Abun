import React from "react";
import { FileText, Cpu } from "lucide-react";

const LiveDemo = () => {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              See It In Action
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Watch our AI generate high-quality content in real-time
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-400 text-sm">AI Content Generator</span>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <label className="block text-sm text-slate-400 mb-2">
                Content Topic
              </label>
              <div className="bg-slate-800 rounded-lg px-4 py-3 text-blue-400">
                "Benefits of Remote Work for Modern Businesses"
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4">
              <label className="block text-sm text-slate-400 mb-2">
                Generated Content
              </label>
              <div className="bg-slate-800 rounded-lg px-4 py-3 text-slate-200 leading-relaxed">
                <div className="animate-typing">
                  Remote work has revolutionized the modern business landscape,
                  offering unprecedented flexibility and opportunities for both
                  employers and employees. Companies embracing remote work
                  policies report increased productivity, reduced overhead
                  costs, and access to a global talent pool...
                </div>
                <div className="mt-2 w-2 h-5 bg-blue-400 animate-pulse"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>✅ SEO Optimized</span>
                <span>✅ Plagiarism Free</span>
                <span>✅ Human-like Tone</span>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Try It Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
