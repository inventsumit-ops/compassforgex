import Layout from "@/components/Layout";
import { TrendingUp, TrendingDown, Info, DollarSign } from "lucide-react";

const majorPairs = [
  { symbol: "EUR/USD", name: "Euro / US Dollar", spread: "0.1", change: "+0.2%" },
  { symbol: "GBP/USD", name: "British Pound / US Dollar", spread: "0.2", change: "-0.1%" },
  { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", spread: "0.1", change: "+0.3%" },
  { symbol: "USD/CHF", name: "US Dollar / Swiss Franc", spread: "0.2", change: "+0.1%" },
];

const minorPairs = [
  { symbol: "EUR/GBP", name: "Euro / British Pound", spread: "0.3", change: "+0.1%" },
  { symbol: "EUR/JPY", name: "Euro / Japanese Yen", spread: "0.2", change: "-0.2%" },
  { symbol: "GBP/JPY", name: "British Pound / Japanese Yen", spread: "0.3", change: "+0.4%" },
  { symbol: "EUR/CHF", name: "Euro / Swiss Franc", spread: "0.3", change: "-0.1%" },
];

const exoticPairs = [
  { symbol: "USD/TRY", name: "US Dollar / Turkish Lira", spread: "0.5", change: "+0.8%" },
  { symbol: "USD/ZAR", name: "US Dollar / South African Rand", spread: "0.6", change: "-0.3%" },
  { symbol: "EUR/PLN", name: "Euro / Polish Zloty", spread: "0.4", change: "+0.2%" },
  { symbol: "GBP/NOK", name: "British Pound / Norwegian Krone", spread: "0.5", change: "+0.1%" },
];

export default function CurrencyPairsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Currency Pairs
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Trade 50+ currency pairs with competitive spreads and deep liquidity.
              </p>
            </div>
          </div>
        </section>

        {/* Major Pairs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Major Currency Pairs
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                The most traded currency pairs in the world with tightest spreads.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {majorPairs.map((pair, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-card transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="font-display text-lg font-bold text-foreground">
                          {pair.symbol}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        pair.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {pair.change}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{pair.name}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Spread</span>
                      <span className="text-sm font-semibold text-foreground">{pair.spread}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Minor Pairs */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Minor Currency Pairs
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Cross-currency pairs that offer diversification opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {minorPairs.map((pair, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-card transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="font-display text-lg font-bold text-foreground">
                          {pair.symbol}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        pair.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {pair.change}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{pair.name}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Spread</span>
                      <span className="text-sm font-semibold text-foreground">{pair.spread}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exotic Pairs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Exotic Currency Pairs
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                High-volatility pairs for experienced traders seeking bigger opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {exoticPairs.map((pair, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-card transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="font-display text-lg font-bold text-foreground">
                          {pair.symbol}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        pair.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {pair.change}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{pair.name}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Spread</span>
                      <span className="text-sm font-semibold text-foreground">{pair.spread}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Trade Currency Pairs With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Competitive Spreads
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Some of the tightest spreads in the industry across all currency pairs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Deep Liquidity
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Access to deep liquidity pools ensuring fast execution even during volatile periods.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    50+ Pairs
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Wide selection of major, minor, and exotic currency pairs to choose from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Start Trading Currency Pairs
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Open an account and access the global forex market with competitive conditions.
              </p>
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Open Trading Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
