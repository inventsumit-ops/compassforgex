"use client"
import Layout from "@/components/Layout";
import { BookOpen, Play, FileText, Users, Award, Clock, Shield } from "lucide-react";
import { useEffect, useState } from "react";

import academymainImage from "../../assest/images/mainpageimage.png"
import academymainImagedark from "../../assest/images/mainpageimagedark.png"

const courses = [
  {
    title: "Forex Basics",
    description: "Learn the fundamentals of forex trading",
    level: "Beginner",
    duration: "2 hours",
    lessons: 12,
    icon: BookOpen,
    topics: ["What is Forex", "Currency Pairs", "Pips and Spreads", "Leverage and Margin"]
  },
  {
    title: "Technical Analysis",
    description: "Master chart patterns and technical indicators",
    level: "Intermediate",
    duration: "4 hours",
    lessons: 20,
    icon: Play,
    topics: ["Chart Patterns", "Support & Resistance", "Moving Averages", "RSI & MACD"]
  },
  {
    title: "Fundamental Analysis",
    description: "Understand economic factors affecting markets",
    level: "Intermediate",
    duration: "3 hours",
    lessons: 15,
    icon: FileText,
    topics: ["Economic Indicators", "Central Banks", "News Trading", "Market Sentiment"]
  },
  {
    title: "Risk Management",
    description: "Protect your capital with proper risk management",
    level: "Advanced",
    duration: "2.5 hours",
    lessons: 10,
    icon: Shield,
    topics: ["Position Sizing", "Stop Loss", "Risk/Reward Ratio", "Portfolio Management"]
  },
  {
    title: "Trading Psychology",
    description: "Develop the mindset of successful traders",
    level: "Advanced",
    duration: "3 hours",
    lessons: 12,
    icon: Users,
    topics: ["Emotional Control", "Trading Discipline", "Patience", "Confidence Building"]
  },
  {
    title: "Advanced Strategies",
    description: "Sophisticated trading techniques for pros",
    level: "Expert",
    duration: "5 hours",
    lessons: 25,
    icon: Award,
    topics: ["Scalping", "Swing Trading", "Algorithmic Trading", "Multi-timeframe Analysis"]
  }
];

const resources = [
  {
    title: "Trading Glossary",
    description: "Comprehensive dictionary of trading terms",
    type: "Reference"
  },
  {
    title: "Economic Calendar",
    description: "Stay updated with market-moving events",
    type: "Tool"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step visual guides",
    type: "Video"
  },
  {
    title: "Trading Guides",
    description: "In-depth articles and tutorials",
    type: "Article"
  }
];

export default function AcademyPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
      const updateTheme = () => {
        if (typeof document !== "undefined") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      };
  
      updateTheme();
  
      const observer = new MutationObserver(updateTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
  
      return () => observer.disconnect();
    }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient"
         style={{
          backgroundImage: `url(${
            isDark ? academymainImagedark.src : academymainImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className={`font-display text-4xl md:text-6xl font-bold mb-6 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Trading Academy
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Master forex trading with our comprehensive educational resources designed for traders at every level.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Our Courses
              </h2>
              <p className={`text-center max-w-2xl mx-auto mb-12 ${
                isDark ? "text-white/90" : "text-gray-900"
              }`}>
                Structured learning paths from beginner to expert level.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <div key={index} className={`rounded-xl p-6 transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <course.icon className={`h-10 w-10 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Beginner' 
                          ? (isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800')
                          : course.level === 'Intermediate' 
                            ? (isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800')
                            : course.level === 'Advanced' 
                              ? (isDark ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800')
                              : (isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800')
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {course.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {course.description}
                    </p>
                    
                    <div className={`flex items-center gap-4 text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.lessons} lessons
                      </div>
                    </div>
                    
                    <div className="space-y-1 mb-4">
                      {course.topics.slice(0, 3).map((topic, topicIndex) => (
                        <div key={topicIndex} className={`flex items-center text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          <div className={`w-1 h-1 rounded-full mr-2 ${isDark ? "bg-[#f5c542]" : "bg-emerald-600"}`}></div>
                          {topic}
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      isDark 
                        ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                        : "bg-emerald-600 hover:bg-emerald-700 text-white"
                    }`}>
                      Start Course
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Learning Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className={`rounded-lg p-6 transition-shadow ${
                    isDark ? "bg-gray-800/50 border border-gray-700 hover:shadow-lg" : "bg-card border border-emerald-200 hover:shadow-md"
                  }`}>
                    <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {resource.title}
                    </h3>
                    <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded ${isDark ? "bg-[#f5c542]/20 text-[#f5c542]" : "bg-emerald-100 text-emerald-600"}`}>
                        {resource.type}
                      </span>
                      <button className={`text-sm font-medium transition-colors ${isDark ? "text-[#f5c542] hover:text-[#d4a938]" : "text-emerald-600 hover:text-emerald-700"}`}>
                        Access Resource →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`font-display text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Why Choose Our Academy?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Award className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Expert Instructors
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Learn from professional traders with years of real-world experience.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Play className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Interactive Learning
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Engage with video lessons, quizzes, and hands-on exercises.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? "bg-[#f5c542]/20" : "bg-emerald-100"
                  }`}>
                    <Users className={`h-8 w-8 ${isDark ? "text-[#f5c542]" : "text-emerald-600"}`} />
                  </div>
                  <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Community Support
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Join a community of traders and get support from peers and mentors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Start Your Learning Journey
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Join thousands of traders who have improved their skills with our academy.
              </p>
              <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDark 
                  ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}>
                Get Started Free
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
