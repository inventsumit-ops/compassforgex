"use client"
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

import privacymainImage from "../../assest/images/mainpageimage.png"
import privacymainImagedark from "../../assest/images/mainpageimagedark.png"

export default function PrivacyPage() {
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
            isDark ? privacymainImagedark.src : privacymainImage.src
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
                Privacy Policy
              </h1>
              <p className={`text-xl leading-relaxed ${
                isDark ? "text-white/90 drop-shadow-md" : "text-gray-900"
              }`}>
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className={`rounded-xl p-8 ${isDark ? "bg-gray-800/50 border border-gray-700" : "bg-card border border-emerald-200"}`}>
                <div className="prose prose-lg max-w-none">
                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>1. Information We Collect</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    We collect information to provide and improve our trading services:
                  </p>
                  
                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Personal Information</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Name and contact details</strong> - For account creation and communication</li>
                    <li><strong>Date of birth and address</strong> - For age verification and regulatory compliance</li>
                    <li><strong>Government-issued ID</strong> - For identity verification and anti-money laundering compliance</li>
                    <li><strong>Financial information</strong> - For account funding and trading suitability assessment</li>
                  </ul>

                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Trading Information</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Trading account details</strong> - Account type, balance, and trading history</li>
                    <li><strong>Transaction records</strong> - Deposits, withdrawals, and trading activities</li>
                    <li><strong>Platform usage data</strong> - Login times, features used, and session duration</li>
                    <li><strong>IP address and device info</strong> - For security and fraud prevention</li>
                  </ul>

                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Technical Information</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Browser and device type</strong> - To optimize platform performance</li>
                    <li><strong>Cookies and tracking data</strong> - For website functionality and analytics</li>
                    <li><strong>Log files and error reports</strong> - For technical support and improvement</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>2. How We Use Your Information</h2>
                  
                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Service Provision</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Account management</strong> - To create and maintain your trading account</li>
                    <li><strong>Trading execution</strong> - To process your trades and manage positions</li>
                    <li><strong>Customer support</strong> - To provide assistance and resolve issues</li>
                    <li><strong>Platform security</strong> - To protect against unauthorized access</li>
                  </ul>

                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Communication</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Account notifications</strong> - Trading alerts, balance updates, and platform changes</li>
                    <li><strong>Marketing communications</strong> - With your consent for promotional offers</li>
                    <li><strong>Customer support</strong> - To respond to your inquiries and requests</li>
                  </ul>

                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Analytics and Improvement</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Website analytics</strong> - To understand user behavior and improve our services</li>
                    <li><strong>Performance monitoring</strong> - To ensure platform reliability and speed</li>
                    <li><strong>Research and development</strong> - To create new features and trading tools</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>3. Information Sharing and Disclosure</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    We may share your information in these circumstances:
                  </p>
                  
                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>With Your Consent</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Regulatory authorities</strong> - As required by law and regulation</li>
                    <li><strong>Payment processors</strong> - To process deposits and withdrawals</li>
                    <li><strong>Liquidity providers</strong> - To execute trades and provide pricing</li>
                    <li><strong>Business partners</strong> - For joint services and marketing</li>
                  </ul>

                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Legal Requirements</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Court orders</strong> - When required by legal proceedings</li>
                    <li><strong>Government agencies</strong> - For regulatory compliance and investigations</li>
                    <li><strong>Law enforcement</strong> - To prevent fraud and illegal activities</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>4. Data Security</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    We implement multiple security measures to protect your information:
                  </p>
                  <ul className={`list-disc list-inside space-y-2 ml-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Encryption</strong> - All data is encrypted using industry-standard protocols</li>
                    <li><strong>Secure servers</strong> - Data stored in secure, access-controlled data centers</li>
                    <li><strong>Regular security audits</strong> - Third-party security assessments and penetration testing</li>
                    <li><strong>Access controls</strong> - Multi-factor authentication and role-based access</li>
                    <li><strong>Data backup</strong> - Regular backups and disaster recovery procedures</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>5. Cookies and Tracking Technologies</h2>
                  
                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>What We Use</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Essential cookies</strong> - Required for website functionality and security</li>
                    <li><strong>Performance cookies</strong> - To monitor website performance and optimize user experience</li>
                    <li><strong>Analytics cookies</strong> - To understand how visitors use our website</li>
                    <li><strong>Advertising cookies</strong> - To deliver relevant advertisements (with consent)</li>
                  </ul>

                  <h3 className={`font-display text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Your Choices</h3>
                  <ul className={`list-disc list-inside space-y-2 ml-4 mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Cookie settings</strong> - Configure which cookies to accept or reject</li>
                    <li><strong>Browser controls</strong> - Use browser settings to block or delete cookies</li>
                    <li><strong>Opt-out</strong> - Unsubscribe from marketing communications at any time</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>6. Your Rights</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className={`list-disc list-inside space-y-2 ml-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Access and correction</strong> - Request access to and correct your personal data</li>
                    <li><strong>Portability</strong> - Transfer your data to another service provider</li>
                    <li><strong>Objection</strong> - Object to processing of your personal information</li>
                    <li><strong>Restriction</strong> - Limit how we use and share your information</li>
                    <li><strong>Complaint</strong> - File complaints with data protection authorities</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>7. Data Retention</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    We retain your information only as long as necessary:
                  </p>
                  <ul className={`list-disc list-inside space-y-2 ml-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Account information</strong> - Retained while your account is active</li>
                    <li><strong>Trading records</strong> - Retained for 7 years as required by regulations</li>
                    <li><strong>Marketing data</strong> - Retained until you unsubscribe or request deletion</li>
                    <li><strong>Legal requirements</strong> - Longer retention if required by law or regulation</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>8. International Data Transfers</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    Your data may be transferred internationally and will be:
                  </p>
                  <ul className={`list-disc list-inside space-y-2 ml-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Adequately protected</strong> - Using appropriate security measures</li>
                    <li><strong>Legally compliant</strong> - Following applicable data transfer laws</li>
                    <li><strong>Your responsibility</strong> - Ensure compliance with your local laws</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>9. Children's Privacy</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    Our services are not intended for children under 18:
                  </p>
                  <ul className={`list-disc list-inside space-y-2 ml-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Age verification</strong> - We verify age during account creation</li>
                    <li><strong>No marketing to minors</strong> - We do not target children with advertising</li>
                    <li><strong>Parental consent</strong> - We require parental consent for data processing</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>10. Changes to This Policy</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    We may update this privacy policy:
                  </p>
                  <ul className={`list-disc list-inside space-y-2 ml-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    <li><strong>Material changes</strong> - We will notify you of significant modifications</li>
                    <li><strong>Website posting</strong> - Updated policy will be posted on our website</li>
                    <li><strong>Continued use</strong> - Continued use indicates acceptance of changes</li>
                  </ul>

                  <h2 className={`font-display text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>11. Contact Information</h2>
                  <p className={`leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    For privacy-related questions or concerns, please contact:
                  </p>
                  <div className={`rounded-lg p-4 ${isDark ? "bg-gray-700/50" : "bg-emerald-50"}`}>
                    <p className={`${isDark ? "text-white" : "text-gray-900"}`}><strong>Email:</strong> privacy@compassforex.com</p>
                    <p className={`${isDark ? "text-white" : "text-gray-900"}`}><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p className={`${isDark ? "text-white" : "text-gray-900"}`}><strong>Mail:</strong> Privacy Officer, CompassForex, 123 Trading Street, New York, NY 10001</p>
                  </div>

                  <div className={`mt-8 p-4 rounded-lg ${isDark ? "bg-gray-700/30" : "bg-emerald-100/50"}`}>
                    <p className={`text-sm text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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
              <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-[#f5c542] drop-shadow-lg" : "text-emerald-900"
              }`}>
                Privacy Questions?
              </h2>
              <p className={`mb-8 ${isDark ? "text-white/90" : "text-gray-900"}`}>
                Our privacy team is available to address any concerns about your data protection.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "bg-[#f5c542] hover:bg-[#d4a938] text-gray-900" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}>
                  Contact Privacy Team
                </button>
                <button className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDark 
                    ? "border border-gray-600 text-white hover:bg-gray-800" 
                    : "border border-emerald-200 text-gray-900 hover:bg-emerald-50"
                }`}>
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
