import Layout from "@/components/Layout";
import { BookOpen, Play, FileText, Users, Award, Clock, Shield } from "lucide-react";

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
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Trading Academy
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Master forex trading with our comprehensive educational resources designed for traders at every level.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                Our Courses
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Structured learning paths from beginner to expert level.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <div key={index} className="card-gradient border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <course.icon className="h-10 w-10 text-primary" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                        course.level === 'Advanced' ? 'bg-purple-100 text-purple-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
                        <div key={topicIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {topic}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Learning Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {resource.type}
                      </span>
                      <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Choose Our Academy?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Expert Instructors
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Learn from professional traders with years of real-world experience.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Interactive Learning
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Engage with video lessons, quizzes, and hands-on exercises.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Community Support
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Start Your Learning Journey
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join thousands of traders who have improved their skills with our academy.
              </p>
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Get Started Free
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
