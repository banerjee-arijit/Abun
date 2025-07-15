import React from "react";
import {
  Lightbulb,
  Search,
  FileText,
  BarChart3,
  Users,
  Globe,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale your content
            strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "AI Content Writer",
              description:
                "Generate blog posts, articles, and copy that resonates with your audience and drives engagement.",
            },
            {
              icon: Search,
              title: "SEO Optimization",
              description:
                "Built-in keyword research and optimization ensures your content ranks higher in search results.",
            },
            {
              icon: FileText,
              title: "Content Templates",
              description:
                "Choose from 50+ proven templates for different content types, industries, and use cases.",
            },
            {
              icon: BarChart3,
              title: "Performance Analytics",
              description:
                "Track content performance, engagement metrics, and ROI with detailed analytics dashboards.",
            },
            {
              icon: Users,
              title: "Team Collaboration",
              description:
                "Work together with your team, assign tasks, and maintain consistent brand voice across all content.",
            },
            {
              icon: Globe,
              title: "Multi-Language Support",
              description:
                "Create content in 30+ languages with native-level fluency and cultural understanding.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
