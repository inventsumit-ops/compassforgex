import Layout from "@/components/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Please read these terms carefully before using our trading platform.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    By accessing and using CompassForex trading services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">2. Trading Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CompassForex provides online forex trading services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Currency pair trading with competitive spreads</li>
                    <li>Real-time market data and charting tools</li>
                    <li>Technical and fundamental analysis</li>
                    <li>Educational resources and trading signals</li>
                    <li>Multiple account types to suit different trading styles</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">3. Account Requirements</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To use our services, you must:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Be at least 18 years of age</li>
                    <li>Provide accurate and complete information</li>
                    <li>Have valid identification documents</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Have sufficient financial resources for trading</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">4. Risk Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Forex trading involves significant risk:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>You may lose more than your initial investment</li>
                    <li>Market volatility can result in rapid losses</li>
                    <li>Leverage amplifies both profits and losses</li>
                    <li>Past performance is not indicative of future results</li>
                    <li>Only trade with money you can afford to lose</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">5. Deposits and Withdrawals</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Deposits:</strong>
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li>Minimum deposit amounts vary by account type</li>
                    <li>Multiple deposit methods available</li>
                    <li>Deposits are typically instant</li>
                    <li>We reserve the right to verify deposit sources</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Withdrawals:</strong>
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Processing times vary by withdrawal method</li>
                    <li>Withdrawal fees may apply</li>
                    <li>Anti-money laundering checks may be required</li>
                    <li>Withdrawal to original deposit source preferred</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">6. Privacy and Data Protection</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are committed to protecting your privacy:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>We collect only necessary information for service provision</li>
                    <li>Your data is encrypted and securely stored</li>
                    <li>We never share your information with third parties without consent</li>
                    <li>You have the right to access and delete your data</li>
                    <li>We comply with GDPR and other privacy regulations</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">7. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All content on our platform including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Trading platforms and tools</li>
                    <li>Market analysis and research</li>
                    <li>Educational materials</li>
                    <li>Website design and functionality</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Are the exclusive property of CompassForex and protected by international copyright laws.
                  </p>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CompassForex shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Market volatility or trading losses</li>
                    <li>System downtime or technical issues</li>
                    <li>Third-party service interruptions</li>
                    <li>Force majeure events</li>
                    <li>Consequential or indirect damages</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">9. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Either party may terminate this agreement:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>With 30 days written notice</li>
                    <li>For material breach of terms</li>
                    <li>For regulatory or legal requirements</li>
                    <li>Immediately for fraudulent activities</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">10. Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Disputes will be resolved through:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Direct negotiation between parties</li>
                    <li>Mediation services if direct negotiation fails</li>
                    <li>Arbitration as final resort</li>
                    <li>Governing law: [Your Jurisdiction]</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">11. Amendments</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We reserve the right to modify these terms at any time. Changes will be communicated through:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Website notifications</li>
                    <li>Email communications</li>
                    <li>Platform announcements</li>
                    <li>Continued use constitutes acceptance of changes</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">12. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these Terms of Service, please contact:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-foreground"><strong>Email:</strong> legal@compassforex.com</p>
                    <p className="text-foreground"><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p className="text-foreground"><strong>Address:</strong> 123 Trading Street, New York, NY 10001</p>
                  </div>

                  <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Last Updated:</strong> March 1, 2026<br />
                      <strong>Version:</strong> 2.1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our legal team is available to clarify any aspects of our Terms of Service.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Contact Legal Team
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
