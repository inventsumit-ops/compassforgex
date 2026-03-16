"use client";
import Layout from "@/components/Layout";
import { Shield, Users, Trophy, Globe, Briefcase, BarChart3, Clock } from "lucide-react";
import Image from "next/image";
import aboutImage from "../../assest/images/mainpageimage.png";
import aboutImageDark from "../../assest/images/mainpageimagedark.png";
import { useEffect, useState } from "react";
const stats = [
  { number: "15+", label: "Years in Markets" },
  { number: "50K+", label: "Active Traders" },
  { number: "$10B+", label: "Monthly Volume" },
  { number: "24/5", label: "Global Support" }
];

const advantages = [
  {
    icon: Shield,
    title: "Trusted Broker",
    description:
      "Tier‑1 liquidity, segregated client funds, and institutional‑grade security on every trade."
  },
  {
    icon: BarChart3,
    title: "Advanced Tools",
    description:
      "Professional charting, lightning‑fast execution, and smart risk‑management features built in."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Dedicated multilingual team on hand throughout the trading week via chat, email, and phone."
  },
  {
    icon: Briefcase,
    title: "For Every Trader",
    description:
      "From first trade to full‑time pro, our accounts, education, and insights grow with you."
  }
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparent pricing, clear communication, and decisions that always put traders first."
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build long‑term relationships, not one‑off trades, supporting you through every market cycle."
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "Relentless focus on quality in execution, education, and the technology behind our platform."
  },
  {
    icon: Globe,
    title: "Global Vision",
    description:
      "Access to major FX, indices, metals, and crypto markets, all from a single intuitive platform."
  }
];

const teamMembers = [
  {
    roleShort: "CEO",
    name: "Michael Chen",
    title: "Chief Executive Officer"
  },
  {
    roleShort: "CTO",
    name: "Sarah Johnson",
    title: "Chief Technology Officer"
  },
  {
    roleShort: "CFO",
    name: "David Williams",
    title: "Chief Financial Officer"
  },
  {
    roleShort: "COO",
    name: "Emily Davis",
    title: "Chief Operating Officer"
  }
];

const offices = [
  {
    city: "New York, USA",
    description: "Global headquarters and institutional dealing desk serving North American clients."
  },
  {
    city: "London, UK",
    description: "European hub located in the heart of the financial district."
  },
  {
    city: "Dubai, UAE",
    description: "MENA regional office supporting traders across the GCC and beyond."
  }
];

export default function AboutPage() {
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
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
        {/* Hero Section - full-width image with overlay text */}
        <section
        className="relative border-b border-border bg-gradient-to-b from-emerald-50/60 via-white/80 to-white/90 dark:from-[#050608] dark:via-[#050608] dark:to-[#050608]"
        style={{
          backgroundImage: `url(${
            isDark ? aboutImageDark.src : aboutImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >

          {/* Content overlay */}
          <div className="relative">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
              <div className="max-w-xl space-y-6 md:space-y-7">
                <p
                  className={`text-[11px] md:text-xs font-medium uppercase tracking-[0.25em] ${
                    isDark ? "text-[#f5c542]" : "text-emerald-700/80"
                  }`}
                >
                  Home / About Us
                </p>
                <div>
                  <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                    About Us
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground dark:text-zinc-300">
                    Learn more about our mission, values, and the team dedicated to empowering your
                    trading success.
                  </p>
                </div>

                <button
                  className={`inline-flex items-center rounded-full px-7 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                  }`}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section
          className={`py-16 md:py-20 relative ${
            isDark ? "text-white" : ""
          }`}
        
        style={{
          backgroundImage: `url(${
            isDark ? aboutImageDark.src : aboutImage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        >
          <div
            className={`pointer-events-none absolute inset-0 ${
              isDark
                ? "bg-gradient-to-r from-black/85 via-black/65 to-black/35"
                : "bg-gradient-to-r from-white/70 via-white/40 to-transparent"
            }`}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4">
            <div className="relative grid gap-10 lg:grid-cols-2 items-center">
              {/* Left content */}
              <div>
                <p
                  className={`text-xs font-medium uppercase tracking-[0.25em] mb-3 ${
                    isDark ? "text-[#f5c542]/90" : "text-emerald-700/80"
                  }`}
                >
                  Who We Are
                </p>
                <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  Leading Forex Trading Platform
                </h2>

                <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-7 max-w-xl">
                  Our mission is to give every trader—new or experienced—the tools, pricing, and
                  support they need to navigate global markets with confidence.
                </p>

                <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-xl">
                  From deep liquidity and lightning‑fast execution to human support that understands
                  your strategy, CompassForex is built to be the partner behind every trade.
                </p>

                <button
                  className={`inline-flex items-center rounded-full px-8 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isDark
                      ? "bg-[#f5c542] text-black shadow-[0_10px_25px_rgba(245,197,66,0.30)] hover:bg-[#f2b824] focus-visible:ring-[#f5c542]"
                      : "bg-emerald-600 text-white shadow-emerald-500/30 hover:bg-emerald-700 focus-visible:ring-emerald-500"
                  }`}
                >
                  Learn More
                </button>
              </div>

              {/* Right visual card */}
              <div className="relative">
                <div
                  className={`relative overflow-hidden rounded-3xl border shadow-xl ${
                    isDark
                      ? "border-[#f5c542]/25 bg-gradient-to-br from-[#0b0a05]/90 via-[#050608] to-[#151008]/90"
                      : "border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-100"
                  }`}
                >
                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${
                      isDark ? "bg-[#f5c542]/14" : "bg-emerald-500/10"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-32 w-32 rounded-full blur-3xl ${
                      isDark ? "bg-[#f5c542]/10" : "bg-emerald-600/10"
                    }`}
                  />

                  <div className="relative grid gap-6 md:grid-cols-[1.1fr,0.9fr] items-center p-6 md:p-8">
                    <div>
                      <p
                        className={`text-[11px] md:text-xs font-medium uppercase tracking-[0.25em] mb-2 ${
                          isDark ? "text-[#f5c542]/85" : "text-emerald-700/80"
                        }`}
                      >
                        Trusted Forex Partner
                      </p>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                        Professional tools, simplified for every trader.
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Tight spreads, institutional‑grade technology, and a platform designed to keep
                        you focused on what matters most—the market in front of you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
                Our Mission
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Our mission is to deliver a seamless forex experience that combines bank‑level
                security, deep liquidity, and intuitive trading tools—so you can focus on the
                opportunities in front of you.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div
                className={`relative overflow-hidden rounded-3xl border shadow-lg ${
                  isDark
                    ? "border-[#f5c542]/25 bg-gradient-to-b from-black/80 via-black/70 to-black/80"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="relative aspect-[16/6] w-full">
                  <Image
                    src={isDark ? aboutImageDark : aboutImage}
                    alt="Trading dashboard and market analysis"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* advantages section */}
        <section
          className="relative py-16 md:py-20"
          style={{
            backgroundImage: `url(${isDark ? aboutImageDark.src : aboutImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div
            className={`pointer-events-none absolute inset-0 ${
              isDark ? "bg-black/70" : "bg-white/75"
            }`}
            aria-hidden="true"
          />

          {/* subtle background accents */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div
              className={`absolute -left-24 top-10 h-80 w-80 rounded-full blur-3xl ${
                isDark ? "bg-[#f5c542]/10" : "bg-emerald-500/10"
              }`}
            />
            <div
              className={`absolute -right-28 bottom-0 h-96 w-96 rounded-full blur-3xl ${
                isDark ? "bg-[#f5c542]/8" : "bg-emerald-600/10"
              }`}
            />
          </div>

          <div className="container mx-auto px-4">
            <div className="relative max-w-6xl mx-auto">
              <div className="mb-10 md:mb-14">
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
                  Our Advantages
                </h2>
                <div
                  className={`mt-3 h-1 w-16 rounded-full ${
                    isDark ? "bg-[#f5c542]" : "bg-emerald-500"
                  }`}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {advantages.slice(0, 3).map((adv, index) => (
                  <div
                    key={index}
                    className={`group rounded-2xl border p-6 shadow-sm transition-shadow ${
                      isDark
                        ? "border-white/10 bg-[#050608]/70 hover:shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
                        : "border-gray-200 bg-white/90 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${
                        isDark
                          ? "border-[#f5c542]/25 bg-[#f5c542]/10 text-[#f5c542]"
                          : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      <adv.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Team Section */}
        <section
          className={`relative overflow-hidden py-16 md:py-20 ${
            isDark ? "bg-[#050608]" : "bg-secondary/5"
          }`}
        >
          {isDark && (
            <>
              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  backgroundImage: `url(${aboutImageDark.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
              >
                <div className="absolute left-1/2 top-10 h-40 w-[44rem] -translate-x-1/2 rounded-full bg-[#f5c542]/10 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f5c542]/8 blur-3xl" />
                <div className="absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-[#f5c542]/6 blur-3xl" />
              </div>
            </>
          )}
          <div className="container mx-auto px-4">
            <div className="relative max-w-4xl mx-auto text-center mb-10 md:mb-14">
              <h2
                className={`font-display text-2xl md:text-4xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-foreground"
                }`}
              >
                Our Team
              </h2>
              <p
                className={`text-sm md:text-base ${
                  isDark ? "text-zinc-300" : "text-muted-foreground"
                }`}
              >
                Our experienced team of professionals is dedicated to helping you succeed in the
                forex markets.
              </p>
              {isDark && (
                <div
                  className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#f5c542]"
                  aria-hidden="true"
                />
              )}
            </div>

            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`group flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow ${
                    isDark
                      ? "border-[#f5c542]/20 bg-[#0b0c10]/80 shadow-[0_18px_45px_rgba(0,0,0,0.55)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.70)]"
                      : "border-border bg-card shadow-sm"
                  }`}
                >
                  <div className="relative h-40 w-full">
                    {isDark ? (
                      <>
                        <Image
                          src={aboutImageDark}
                          alt=""
                          fill
                          className="object-cover opacity-75"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85"
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-50" />
                    )}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 justify-center">
                      <div
                        className={`h-20 w-20 rounded-full border shadow-md flex items-center justify-center text-sm font-semibold ${
                          isDark
                            ? "border-[#f5c542]/35 bg-[#101218] text-[#f5c542]"
                            : "border-white/70 bg-gradient-to-tr from-slate-300 via-slate-100 to-white text-muted-foreground"
                        }`}
                      >
                        {member.roleShort}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-5 pt-12 text-center">
                    <h3
                      className={`font-display text-base md:text-lg font-semibold mb-1 ${
                        isDark ? "text-white" : "text-foreground"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-xs md:text-sm mb-2 ${
                        isDark ? "text-zinc-300" : "text-muted-foreground"
                      }`}
                    >
                      {member.title}
                    </p>
                    <p
                      className={`text-[11px] ${
                        isDark ? "text-zinc-400" : "text-muted-foreground/80"
                      }`}
                    >
                      10+ years of experience in global markets, risk, and portfolio management.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-10 flex justify-center">
              <button
                className={`inline-flex items-center justify-center rounded-full px-8 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  isDark
                    ? "bg-[#f5c542] text-black shadow-[0_12px_30px_rgba(245,197,66,0.35)] hover:bg-[#f2b824] focus-visible:ring-[#f5c542] focus-visible:ring-offset-black"
                    : "bg-emerald-600 text-white shadow-emerald-500/30 hover:bg-emerald-700 focus-visible:ring-emerald-500 focus-visible:ring-offset-background"
                }`}
                type="button"
              >
                Join Our Team
              </button>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={`border-y py-16 md:py-20 ${isDark ? "border-[#f5c542]/20 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" : "border-border bg-secondary/5"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
              <h2 className={`font-display text-2xl md:text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-foreground"}`}>
                Our Values
              </h2>
              <p className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? "text-zinc-300" : "text-muted-foreground"}`}>
                These principles guide every decision we make—from the markets we offer to the
                features we build and the support we provide.
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className={`overflow-hidden rounded-2xl border shadow-sm ${isDark ? "border-[#f5c542]/30 bg-black/50" : "border-border bg-card/70"}`}>
                <div className={`grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4 ${isDark ? "bg-[#f5c542]/15" : "bg-border"}`}>
                  {values.map((value, index) => (
                    <div key={index} className={`p-5 md:p-6 ${isDark ? "bg-[#0d0d0d]/80 hover:bg-[#f5c542]/5 transition-colors" : "bg-card/80"}`}>
                      <div className="flex items-start gap-4 text-left">
                        <div className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${isDark ? "bg-[#f5c542]/20 border border-[#f5c542]/40 text-[#f5c542]" : "bg-primary/10 text-primary"}`}>
                          <value.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className={`font-display text-sm md:text-base font-semibold ${isDark ? "text-white" : "text-foreground"}`}>
                            {value.title}
                          </h3>
                          <p className={`mt-1 text-xs md:text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-muted-foreground"}`}>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="border-t border-border bg-secondary/10 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 md:mb-14">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3">
                Our Office Locations
              </h2>
            </div>

            <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border shadow-lg overflow-hidden ${
                    isDark
                      ? "border-[#f5c542]/20 bg-gradient-to-r from-black/80 via-black/70 to-black/80"
                      : "border-border bg-white"
                  }`}

                  style={{
                    backgroundImage: `url(${
                      isDark ? aboutImageDark.src : aboutImage.src
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="grid md:grid-cols-[1.2fr,0.8fr] items-center">
                    {/* Left content */}
                    <div className="p-6 md:p-8">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                        {office.city}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                        {office.description}
                      </p>
                      <button
                        className={`inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          isDark
                            ? "bg-[#f5c542] hover:bg-[#f2b824] text-black shadow-[0_10px_25px_rgba(245,197,66,0.45)] focus-visible:ring-[#f5c542]"
                            : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30 focus-visible:ring-emerald-500"
                        }`}
                      >
                        Careers More
                      </button>
                    </div>

                    {/* Right image */}
                    {/* <div className="relative h-48 md:h-64">
                      <div
                        className={`absolute inset-0 ${
                          isDark
                            ? "bg-gradient-to-br from-[#f5c542]/20 via-[#f5c542]/10 to-transparent"
                            : "bg-gradient-to-br from-emerald-100 via-emerald-50 to-transparent"
                        }`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-full h-full rounded-lg opacity-20 ${
                            isDark ? "bg-[#f5c542]/30" : "bg-emerald-200/50"
                          }`}
                          style={{
                            backgroundImage: `url(${
                              isDark ? aboutImageDark.src : aboutImage.src
                            })`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        />
                      </div>
                     
                      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 flex items-end justify-center gap-1 px-4">
                        {[40, 60, 45, 70, 55, 65, 50, 75, 45, 60].map((height, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-t-sm ${
                              isDark ? "bg-[#f5c542]/40" : "bg-emerald-600/30"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
