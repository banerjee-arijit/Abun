import React, { useState } from "react";
import {
  Brain,
  Shield,
  Target,
  FileText,
  Search,
  CheckCircle,
  Plus,
  Minus,
  Headphones,
  MessageCircle,
} from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Everything you need to know about Abun
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["General", "Features", "Pricing", "Technical"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              category: "General",
              question: "How does Abun's AI content generation work?",
              answer:
                "Abun uses advanced natural language processing and machine learning algorithms trained on millions of high-quality content pieces. Simply input your topic, target audience, and desired tone, and our AI generates human-like, SEO-optimized content tailored to your needs.",
              icon: Brain,
            },
            {
              category: "Features",
              question: "Is the generated content plagiarism-free?",
              answer:
                "Yes, absolutely! All content generated by Abun is 100% original and plagiarism-free. Our AI creates unique content based on your inputs rather than copying existing text. We also provide built-in plagiarism checking tools for your peace of mind.",
              icon: Shield,
            },
            {
              category: "Features",
              question: "Can I customize the AI to match my brand voice?",
              answer:
                "Definitely! Abun learns your brand voice through our training feature. You can provide sample content, set tone preferences, and define your brand guidelines. The AI will then generate content that matches your unique style and voice consistently.",
              icon: Target,
            },
            {
              category: "General",
              question: "What types of content can Abun create?",
              answer:
                "Abun can create a wide variety of content including blog posts, articles, social media posts, product descriptions, email campaigns, landing page copy, press releases, and much more. We have 50+ specialized templates for different content types and industries.",
              icon: FileText,
            },
            {
              category: "Technical",
              question: "How does the SEO optimization feature work?",
              answer:
                "Our SEO optimization includes keyword research suggestions, meta description generation, heading structure optimization, and content scoring based on SEO best practices. The AI ensures your content is naturally optimized for search engines while maintaining readability and engagement.",
              icon: Search,
            },
            {
              category: "Pricing",
              question: "Is there a free trial available?",
              answer:
                "Yes! We offer a 7-day free trial with full access to all features. No credit card required to start. You can generate up to 5,000 words during your trial period to experience the full power of Abun.",
              icon: CheckCircle,
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <faq.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-400 font-medium mb-1">
                      {faq.category}
                    </div>
                    <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div
                    className={`w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      openFaq === index
                        ? "bg-blue-500/20 rotate-180"
                        : "group-hover:bg-slate-600/50"
                    }`}
                  >
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-blue-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openFaq === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 border-t border-slate-700/50">
                  <div className="pt-4 flex items-start space-x-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Headphones className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">
                Still have questions?
              </h3>
            </div>
            <p className="text-slate-300 mb-4">
              Our support team is here to help you get the most out of Abun
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
