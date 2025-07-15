import React from "react";
import { Target, Zap, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Define Your Goals",
    description:
      "Tell us about your target audience, content type, and desired outcomes. Our AI learns your brand voice.",
    step: "01",
    colorFrom: "from-blue-500",
    colorTo: "to-purple-500",
    shadow: "shadow-blue-500/30",
  },
  {
    icon: Zap,
    title: "AI Generation",
    description:
      "Watch as our advanced AI creates SEO-optimized, engaging content tailored to your specifications in seconds.",
    step: "02",
    colorFrom: "from-purple-500",
    colorTo: "to-pink-500",
    shadow: "shadow-purple-500/30",
  },
  {
    icon: CheckCircle,
    title: "Refine & Publish",
    description:
      "Review, edit, and perfect your content with our built-in editor, then publish directly to your platforms.",
    step: "03",
    colorFrom: "from-green-400",
    colorTo: "to-blue-500",
    shadow: "shadow-green-400/30",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-30 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl z-0 animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-3xl z-0 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient">
              How It Works
            </span>
          </h2>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Three futuristic steps to transform your content creation process
            with AI
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-14 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex-1 flex flex-col items-center group"
            >
              {/* Glowing connector */}
              {index !== 0 && (
                <div className="hidden md:block absolute -left-20 top-1/2 transform -translate-y-1/2 w-28 h-1  animate-glow-pulse rounded-full blur-sm" />
              )}

              {/* Card */}
              <div
                className={`relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 pt-16 shadow-xl transition-all duration-500 group-hover:scale-[1.04] group-hover:-rotate-1 hover:shadow-[0_0_30px_5px_rgba(80,180,255,0.2)] ${item.shadow} animate-fade-in-up`}
                style={{ minWidth: 280, maxWidth: 340 }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 mb-6 mx-auto bg-gradient-to-br ${item.colorFrom} ${item.colorTo} rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed`}
                >
                  <item.icon className="w-8 h-8 text-white drop-shadow-md" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white text-center transition-colors duration-300 group-hover:text-blue-400">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-lg text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
