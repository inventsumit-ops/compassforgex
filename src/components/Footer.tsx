import Link from "next/link";
import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-bold text-foreground">Compass<span className="text-primary">Forex</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner in navigating the global forex markets. Professional tools, education, and analysis.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Trading</h4>
            <div className="flex flex-col gap-2">
              <Link href="/platform" className="text-sm text-muted-foreground hover:text-primary transition-colors">Forex Trading</Link>
              <Link href="/currency-pairs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Currency Pairs</Link>
              <Link href="/signals" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trading Signals</Link>
              <Link href="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trading Tools</Link>
              <Link href="/accounts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Account Types</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link href="/academy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Academy</Link>
              <Link href="/analysis" className="text-sm text-muted-foreground hover:text-primary transition-colors">Market Analysis</Link>
              <Link href="/calendar" className="text-sm text-muted-foreground hover:text-primary transition-colors">Economic Calendar</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/risk-disclosure" className="text-sm text-muted-foreground hover:text-primary transition-colors">Risk Disclosure</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 CompassForex. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Trading forex involves significant risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
