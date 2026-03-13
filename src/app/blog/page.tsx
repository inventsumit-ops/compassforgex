import Layout from "@/components/Layout";
import { Calendar, User, Eye, ArrowRight, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "EUR/USD Technical Analysis: Key Resistance Levels to Watch",
    excerpt: "In-depth technical analysis of EUR/USD with key support and resistance levels, trading strategies, and market outlook for the coming week.",
    author: "Technical Analysis Team",
    date: "March 12, 2026",
    readTime: "8 min read",
    category: "Technical Analysis",
    image: "/api/placeholder/640x360",
    featured: true
  },
  {
    id: 2,
    title: "Federal Reserve Decision: Impact on USD Pairs",
    excerpt: "Comprehensive analysis of the upcoming FOMC decision and potential impact on major USD currency pairs including EUR/USD, GBP/USD, and USD/JPY.",
    author: "Fundamental Analysis Team",
    date: "March 11, 2026",
    readTime: "6 min read",
    category: "Fundamental Analysis",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 3,
    title: "Risk Management Strategies for Forex Traders",
    excerpt: "Essential risk management techniques every forex trader should know, including position sizing, stop-loss strategies, and portfolio diversification.",
    author: "Trading Education Team",
    date: "March 10, 2026",
    readTime: "10 min read",
    category: "Trading Education",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 4,
    title: "Understanding Market Sentiment in Forex Trading",
    excerpt: "How to read and interpret market sentiment indicators, including COT reports, retail positioning, and sentiment indices.",
    author: "Market Research Team",
    date: "March 9, 2026",
    readTime: "7 min read",
    category: "Market Analysis",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 5,
    title: "Top 5 Mistakes New Forex Traders Make",
    excerpt: "Common pitfalls and mistakes that new forex traders should avoid, from over-leveraging to poor risk management and emotional trading.",
    author: "Senior Trader",
    date: "March 8, 2026",
    readTime: "5 min read",
    category: "Trading Tips",
    image: "/api/placeholder/640x360",
    featured: false
  },
  {
    id: 6,
    title: "GBP/USD Forecast: Brexit Impact and Bank of England Policy",
    excerpt: "Analysis of how Brexit developments and Bank of England monetary policy are affecting the GBP/USD currency pair.",
    author: "Currency Analysts",
    date: "March 7, 2026",
    readTime: "8 min read",
    category: "Currency Analysis",
    image: "/api/placeholder/640x360",
    featured: false
  }
];

const categories = ["All", "Technical Analysis", "Fundamental Analysis", "Trading Education", "Market Analysis", "Trading Tips", "Currency Analysis"];

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Trading Blog
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Expert insights, market analysis, and trading strategies to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                Featured Article
              </h2>
              
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <TrendingUp className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                          Featured
                        </span>
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        Read Full Article
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                Recent Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <TrendingUp className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get the latest trading insights, market analysis, and educational content delivered to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Join 10,000+ traders. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Want to Contribute?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Share your trading expertise and insights with our community of traders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                  Become a Contributor
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                  View Guidelines
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
