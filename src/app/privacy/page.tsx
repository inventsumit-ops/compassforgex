import Layout from "@/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 md:py-32 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information to provide and improve our trading services:
                  </p>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Name and contact details</strong> - For account creation and communication</li>
                    <li><strong>Date of birth and address</strong> - For age verification and regulatory compliance</li>
                    <li><strong>Government-issued ID</strong> - For identity verification and anti-money laundering compliance</li>
                    <li><strong>Financial information</strong> - For account funding and trading suitability assessment</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Trading Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Trading account details</strong> - Account type, balance, and trading history</li>
                    <li><strong>Transaction records</strong> - Deposits, withdrawals, and trading activities</li>
                    <li><strong>Platform usage data</strong> - Login times, features used, and session duration</li>
                    <li><strong>IP address and device info</strong> - For security and fraud prevention</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Technical Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Browser and device type</strong> - To optimize platform performance</li>
                    <li><strong>Cookies and tracking data</strong> - For website functionality and analytics</li>
                    <li><strong>Log files and error reports</strong> - For technical support and improvement</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">2. How We Use Your Information</h2>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Service Provision</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Account management</strong> - To create and maintain your trading account</li>
                    <li><strong>Trading execution</strong> - To process your trades and manage positions</li>
                    <li><strong>Customer support</strong> - To provide assistance and resolve issues</li>
                    <li><strong>Platform security</strong> - To protect against unauthorized access</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Communication</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Account notifications</strong> - Trading alerts, balance updates, and platform changes</li>
                    <li><strong>Marketing communications</strong> - With your consent for promotional offers</li>
                    <li><strong>Customer support</strong> - To respond to your inquiries and requests</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Analytics and Improvement</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Website analytics</strong> - To understand user behavior and improve our services</li>
                    <li><strong>Performance monitoring</strong> - To ensure platform reliability and speed</li>
                    <li><strong>Research and development</strong> - To create new features and trading tools</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">3. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share your information in these circumstances:
                  </p>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">With Your Consent</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Regulatory authorities</strong> - As required by law and regulation</li>
                    <li><strong>Payment processors</strong> - To process deposits and withdrawals</li>
                    <li><strong>Liquidity providers</strong> - To execute trades and provide pricing</li>
                    <li><strong>Business partners</strong> - For joint services and marketing</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Legal Requirements</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Court orders</strong> - When required by legal proceedings</li>
                    <li><strong>Government agencies</strong> - For regulatory compliance and investigations</li>
                    <li><strong>Law enforcement</strong> - To prevent fraud and illegal activities</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We implement multiple security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Encryption</strong> - All data is encrypted using industry-standard protocols</li>
                    <li><strong>Secure servers</strong> - Data stored in secure, access-controlled data centers</li>
                    <li><strong>Regular security audits</strong> - Third-party security assessments and penetration testing</li>
                    <li><strong>Access controls</strong> - Multi-factor authentication and role-based access</li>
                    <li><strong>Data backup</strong> - Regular backups and disaster recovery procedures</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">5. Cookies and Tracking Technologies</h2>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">What We Use</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Essential cookies</strong> - Required for website functionality and security</li>
                    <li><strong>Performance cookies</strong> - To monitor website performance and optimize user experience</li>
                    <li><strong>Analytics cookies</strong> - To understand how visitors use our website</li>
                    <li><strong>Advertising cookies</strong> - To deliver relevant advertisements (with consent)</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">Your Choices</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                    <li><strong>Cookie settings</strong> - Configure which cookies to accept or reject</li>
                    <li><strong>Browser controls</strong> - Use browser settings to block or delete cookies</li>
                    <li><strong>Opt-out</strong> - Unsubscribe from marketing communications at any time</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Access and correction</strong> - Request access to and correct your personal data</li>
                    <li><strong>Portability</strong> - Transfer your data to another service provider</li>
                    <li><strong>Objection</strong> - Object to processing of your personal information</li>
                    <li><strong>Restriction</strong> - Limit how we use and share your information</li>
                    <li><strong>Complaint</strong> - File complaints with data protection authorities</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">7. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We retain your information only as long as necessary:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Account information</strong> - Retained while your account is active</li>
                    <li><strong>Trading records</strong> - Retained for 7 years as required by regulations</li>
                    <li><strong>Marketing data</strong> - Retained until you unsubscribe or request deletion</li>
                    <li><strong>Legal requirements</strong> - Longer retention if required by law or regulation</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">8. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your data may be transferred internationally and will be:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Adequately protected</strong> - Using appropriate security measures</li>
                    <li><strong>Legally compliant</strong> - Following applicable data transfer laws</li>
                    <li><strong>Your responsibility</strong> - Ensure compliance with your local laws</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">9. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our services are not intended for children under 18:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Age verification</strong> - We verify age during account creation</li>
                    <li><strong>No marketing to minors</strong> - We do not target children with advertising</li>
                    <li><strong>Parental consent</strong> - We require parental consent for data processing</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">10. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may update this privacy policy:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Material changes</strong> - We will notify you of significant modifications</li>
                    <li><strong>Website posting</strong> - Updated policy will be posted on our website</li>
                    <li><strong>Continued use</strong> - Continued use indicates acceptance of changes</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">11. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For privacy-related questions or concerns, please contact:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-foreground"><strong>Email:</strong> privacy@compassforex.com</p>
                    <p className="text-foreground"><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p className="text-foreground"><strong>Mail:</strong> Privacy Officer, CompassForex, 123 Trading Street, New York, NY 10001</p>
                  </div>

                  <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Last Updated:</strong> March 1, 2026<br />
                      <strong>Version:</strong> 1.0
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
                Privacy Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our privacy team is available to address any concerns about your data protection.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Contact Privacy Team
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Data Request Form
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
