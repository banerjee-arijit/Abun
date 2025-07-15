import React, { useState } from "react";
import { BarChart3, CheckCircle } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your content needs
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-sm ${
                !isYearly ? "text-white" : "text-slate-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-slate-700 rounded-full transition-colors duration-300 focus:outline-none"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-300 ${
                  isYearly ? "translate-x-7" : ""
                }`}
              ></div>
            </button>
            <span
              className={`text-sm ${
                isYearly ? "text-white" : "text-slate-400"
              }`}
            >
              Yearly
              <span className="ml-1 text-green-400 text-xs">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: isYearly ? 16 : 20,
              description: "Perfect for individuals and small projects",
              features: [
                "10,000 words/month",
                "5 content templates",
                "Basic SEO optimization",
                "Email support",
                "1 user account",
              ],
              popular: false,
            },
            {
              name: "Professional",
              price: isYearly ? 40 : 50,
              description: "Ideal for growing businesses and teams",
              features: [
                "50,000 words/month",
                "50+ content templates",
                "Advanced SEO tools",
                "Priority support",
                "5 user accounts",
                "Team collaboration",
                "Analytics dashboard",
              ],
              popular: true,
            },
            {
              name: "Enterprise",
              price: isYearly ? 80 : 100,
              description: "For large teams and organizations",
              features: [
                "Unlimited words",
                "Custom templates",
                "White-label solution",
                "Dedicated support",
                "Unlimited users",
                "API access",
                "Custom integrations",
                "Advanced analytics",
              ],
              popular: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-500 shadow-blue-500/20 bg-slate-800/50"
                  : "border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-lg text-slate-400">/month</span>
                </div>
                <p className="text-slate-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
