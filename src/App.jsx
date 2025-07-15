import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  CheckCircle,
  Star,
  ChevronDown,
  Play,
  Quote,
  Menu,
  X,
  Lightbulb,
  Search,
  FileText,
  BarChart3,
  Globe,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Code,
  Cpu,
  Brain,
  Rocket,
  Shield,
  Clock,
  TrendingUp,
  Award,
  Layers,
  MousePointer,
  Eye,
  Headphones,
  MessageCircle,
  Plus,
  Minus,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Herosection from "./Herosection";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import LiveDemo from "./LiveDemo";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [heroText, setHeroText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [dot, setDot] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const fullText = "Write Smarter, Not Harder";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "hero",
        "how-it-works",
        "features",
        "demo",
        "pricing",
        "testimonials",
        "faq",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animate the dot to follow the mouse with a trailing effect
  useEffect(() => {
    let frame;
    const animate = () => {
      setDot((prev) => {
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [mouse]);

  // Typing animation effect
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "How it Works", id: "how-it-works", icon: Target },
    { name: "Features", id: "features", icon: Sparkles },
    { name: "Demo", id: "demo", icon: Play },
    { name: "Pricing", id: "pricing", icon: BarChart3 },
    { name: "FAQ", id: "faq", icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Mouse-following animated dot */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: dot.x - 8,
          top: dot.y - 8,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "rgba(80,180,255,0.85)",
          boxShadow: "0 0 12px 2px rgba(80,180,255,0.4)",
          transition: "background 0.2s",
          position: "fixed",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      <Navbar
        scrollY={scrollY}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Herosection />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
