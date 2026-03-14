"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, BookOpen, BarChart3, Users, Globe, Star, Download, Smartphone, Clock, DollarSign, Activity } from "lucide-react";

import mainpageimage from "../assest/images/mainpageimage.png";
import mainpageimagedark from "../assest/images/mainpageimagedark.png";
const marketData = [
  { pair: "EUR/USD", bid: "1.0824", ask: "1.0827", change: "+0.12%", trend: "up" },
  { pair: "GBP/USD", bid: "1.2742", ask: "1.2745", change: "-0.08%", trend: "down" },
  { pair: "USD/JPY", bid: "149.85", ask: "149.88", change: "+0.24%", trend: "up" },
  { pair: "USD/CHF", bid: "0.8924", ask: "0.8927", change: "-0.03%", trend: "down" },
  { pair: "AUD/USD", bid: "0.6524", ask: "0.6527", change: "+0.18%", trend: "up" },
  { pair: "USD/CAD", bid: "1.3642", ask: "1.3645", change: "-0.15%", trend: "down" },
];

const tradingFeatures = [
  {
    pair: "BUND/EUR",
    type: "Major pair",
    movePips: "+303.32",
    movePercent: "+79%",
    builtIn: "Trend lines, EMA, RSI",
    ecnProfit: "$513.39",
    direction: "up",
  },
  {
    pair: "BUND/USD",
    type: "Major pair",
    movePips: "+251.38",
    movePercent: "+65%",
    builtIn: "Support & resistance, Fibs",
    ecnProfit: "$413.79",
    direction: "up",
  },
  {
    pair: "ETC/BUSD",
    type: "Crypto CFD",
    movePips: "-83.23",
    movePercent: "-18%",
    builtIn: "Price zones, VWAP, MACD",
    ecnProfit: "$263.11",
    direction: "down",
  },
  {
    pair: "OIL",
    type: "Commodities",
    movePips: "+123.89",
    movePercent: "+31%",
    builtIn: "Volume profile, Trend lines",
    ecnProfit: "$189.59",
    direction: "up",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Senior Market Analyst",
    rating: 4.9,
    reviews: "120+ reviews",
    bio: "Specialist in London session breakouts and macro-driven trend strategies for major FX pairs.",
  },
  {
    name: "Michael Chen",
    role: "Trading Strategist",
    rating: 4.8,
    reviews: "95+ reviews",
    bio: "Builds institutional-grade strategies that blend price action with advanced order-flow analysis.",
  },
  {
    name: "Emma Williams",
    role: "Risk Management Expert",
    rating: 4.7,
    reviews: "80+ reviews",
    bio: "Helps traders protect capital with robust risk models, position sizing and portfolio hedging.",
  },
 
];

const appFeatures = [
  { icon: Activity, title: "Real-Time Oracles", desc: "Live market data at your fingertips" },
  { icon: Shield, title: "Secure Pocket", desc: "Your funds are always protected" },
];

export default function Home() {
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
      {/* Hero Section */}
      <section
        className={`relative py-20 md:py-32 overflow-hidden ${
          isDark
            ? "bg-gradient-to-br from-[#050509] via-[#0b0f16] to-[#1b1308]"
            : "bg-gradient-to-br from-green-50 to-emerald-100"
        }`}

        style={{
          backgroundImage: `url(${
            isDark ? mainpageimagedark.src : mainpageimage.src
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "contain",
        }}
      >
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_transparent_55%)]"
              : "bg-grid-black/5 [mask-image:linear-gradient(to_bottom_right,white,transparent)]"
          }`}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`font-display text-4xl md:text-6xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Trade Forex with Confidence
              </h1>
              <p
                className={`text-lg md:text-xl mb-8 max-w-lg ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Access the world's largest financial market with professional tools, real-time analysis, and secure trading platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/accounts"
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                    isDark
                      ? "bg-amber-400 text-gray-900 hover:bg-amber-300"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Start Trading <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/demo"
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border transition-colors ${
                    isDark
                      ? "border-gray-700 text-gray-200 hover:bg-gray-900/60"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Try Demo
                </Link>
              </div>
            </div>
            {/* <div className="relative">
              <div
                className={`rounded-2xl p-8 shadow-2xl ${
                  isDark
                    ? "bg-gradient-to-br from-[#111827] via-[#020617] to-[#1f2937]"
                    : "bg-gradient-to-br from-green-400 to-emerald-500"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Live Trading</p>
                      <p className="text-white font-semibold">Active Now</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white/80 text-xs">Active Traders</p>
                      <p className="text-white font-bold">12,847</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white/80 text-xs">Volume Today</p>
                      <p className="text-white font-bold">$2.4B</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section
        className={`py-16 ${
          isDark ? "bg-[#020617]" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-emerald-900/40" : "bg-green-100"
                }`}
              >
                <Clock
                  className={`h-8 w-8 ${
                    isDark ? "text-emerald-400" : "text-green-600"
                  }`}
                />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Real-Time Markets
              </h3>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Instant access to live forex prices and market movements
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-emerald-900/40" : "bg-green-100"
                }`}
              >
                <BarChart3
                  className={`h-8 w-8 ${
                    isDark ? "text-emerald-400" : "text-green-600"
                  }`}
                />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Advanced Trading Tools
              </h3>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Professional charts, indicators, and analysis tools
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? "bg-emerald-900/40" : "bg-green-100"
                }`}
              >
                <Shield
                  className={`h-8 w-8 ${
                    isDark ? "text-emerald-400" : "text-green-600"
                  }`}
                />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Fast & Secure Execution
              </h3>
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                Lightning-fast trades with bank-level security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Market Section */}
      <section
        className={`py-16 ${
          isDark
            ? "bg-gradient-to-b from-[#050505] via-[#050509] to-[#020308]"
            : "bg-gray-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h2
                className={`font-display text-3xl md:text-4xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Live Market
              </h2>
              <p
                className={`mt-2 text-sm md:text-base ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Track live forex prices, spreads, and intraday performance.
              </p>
            </div>
            <div
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs md:text-sm border ${
                isDark
                  ? "bg-amber-500/10 border-amber-500/40 text-amber-200"
                  : "bg-green-100 border-green-200 text-green-800"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Live data snapshot
            </div>
          </div>

          <div
            className={`rounded-2xl border shadow-[0_24px_60px_rgba(0,0,0,0.8)] p-6 lg:p-8 ${
              isDark
                ? "bg-gradient-to-br from-[#101010] via-[#050509] to-[#05020b] border-amber-600/40"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main chart area */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p
                      className={`text-xs uppercase tracking-wide ${
                        isDark ? "text-amber-400" : "text-green-600"
                      }`}
                    >
                      Featured pair
                    </p>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span
                        className={`text-2xl md:text-3xl font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        EUR/USD
                      </span>
                      <span
                        className={`text-sm font-medium px-2 py-1 rounded-full border ${
                          isDark
                            ? "bg-black/40 border-amber-500/60 text-amber-200"
                            : "bg-green-100 border-green-200 text-green-700"
                        }`}
                      >
                        1.0824 / 1.0827
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {["1D", "1W", "1M", "1Y"].map((t) => (
                      <button
                        key={t}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                          t === "1D"
                            ? isDark
                              ? "bg-emerald-500 text-gray-900"
                              : "bg-green-600 text-white"
                            : isDark
                              ? "bg-gray-900 text-gray-300 hover:bg-gray-800"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative h-64 rounded-xl overflow-hidden border ${
                    isDark
                      ? "bg-gradient-to-br from-[#1b1b1f] via-[#050509] to-[#05020b] border-amber-500/40"
                      : "bg-gradient-to-br from-emerald-500 via-emerald-400 to-green-600 border-emerald-400/40"
                  }`}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to top, rgba(255,255,255,0.18) 1px, transparent 1px)",
                      backgroundSize: "40px 24px",
                    }}
                  />
                  <div className="relative h-full flex items-end justify-between px-6 pb-6 pt-4 gap-1">
                    {[40, 65, 55, 80, 70, 95, 75, 88, 72, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 flex justify-center"
                      >
                        <div
                          className={`w-2 rounded-t-full shadow-[0_0_12px_rgba(252,211,77,0.8)] ${
                            isDark ? "bg-amber-300" : "bg-white"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-3 text-xs text-white/80">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      EUR/USD · M1 chart
                    </span>
                    <span>Updated 2s ago</span>
                  </div>
                </div>
              </div>

              {/* Side quotes list */}
              <div className="w-full lg:w-80 space-y-4">
                <div
                  className={`rounded-xl px-4 py-3 flex items-center justify-between border ${
                    isDark ? "bg-black/60 border-amber-500/30" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <span
                    className={`text-xs font-medium uppercase tracking-wide ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Top forex pairs
                  </span>
                  <span
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Bid · Ask · Change
                  </span>
                </div>
                <div className="space-y-3">
                  {marketData.map((item) => (
                    <div
                      key={item.pair}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 transition border ${
                        isDark
                          ? "bg-black/40 border-transparent hover:border-amber-500/50"
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold ${
                            isDark ? "bg-[#151515] text-amber-200" : "bg-white text-gray-900"
                          }`}
                        >
                          {item.pair.split("/")[0]}
                        </div>
                        <p
                          className={`text-sm font-semibold ${
                            isDark ? "text-gray-100" : "text-gray-900"
                          }`}
                        >
                          {item.pair}
                        </p>
                        <p
                          className={`text-xs mt-0.5 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.bid} · {item.ask}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            item.trend === "up"
                              ? isDark
                                ? "bg-emerald-900/60 text-emerald-300"
                                : "bg-green-100 text-green-700"
                              : isDark
                                ? "bg-red-900/50 text-red-300"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.change}
                        </span>
                        <span
                          className={`hidden sm:inline-flex h-6 w-1 rounded-full ${
                            item.trend === "up"
                              ? isDark
                                ? "bg-emerald-400"
                                : "bg-green-500"
                              : isDark
                                ? "bg-red-400"
                                : "bg-red-500"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className={`rounded-xl px-4 py-3 flex items-center gap-3 border ${
                isDark
                  ? "bg-black/60 border-amber-600/40"
                  : "bg-white shadow-sm border-gray-200"
              }`}
            >
              <DollarSign
                className={`h-6 w-6 ${
                  isDark ? "text-emerald-400" : "text-green-600"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Tight spreads
                </p>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  From 0.1 pips on majors
                </p>
              </div>
            </div>
            <div
              className={`rounded-xl px-4 py-3 flex items-center gap-3 border ${
                isDark
                  ? "bg-black/60 border-amber-600/40"
                  : "bg-white shadow-sm border-gray-200"
              }`}
            >
              <BarChart3
                className={`h-6 w-6 ${
                  isDark ? "text-emerald-400" : "text-green-600"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Deep liquidity
                </p>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Institutional grade execution
                </p>
              </div>
            </div>
            <div
              className={`rounded-xl px-4 py-3 flex items-center gap-3 border ${
                isDark
                  ? "bg-black/60 border-amber-600/40"
                  : "bg-white shadow-sm border-gray-200"
              }`}
            >
              <Shield
                className={`h-6 w-6 ${
                  isDark ? "text-emerald-400" : "text-green-600"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Risk protection
                </p>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Negative balance protection
                </p>
              </div>
            </div>
            <div
              className={`rounded-xl px-4 py-3 flex items-center gap-3 border ${
                isDark
                  ? "bg-black/60 border-amber-600/40"
                  : "bg-white shadow-sm border-gray-200"
              }`}
            >
              <Users
                className={`h-6 w-6 ${
                  isDark ? "text-emerald-400" : "text-green-600"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  24/5 support
                </p>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Dedicated forex specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features Section */}
      <section
        className={`py-16 ${
          isDark ? "bg-gradient-to-b from-black via-[#050509] to-[#020617]" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3 text-center lg:text-left">
              <h2
                className={`font-display text-3xl md:text-4xl font-bold ${
                  isDark ? "text-amber-300" : "text-gray-900"
                }`}
              >
                Trading Features
              </h2>
              <p
                className={`text-sm md:text-base max-w-xl mx-auto lg:mx-0 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Live ECN pricing, built‑in overlays, and deep liquidity across forex, crypto,
                indices and commodities — built for fast execution.
              </p>
            </div>

            <div
              className={`inline-flex self-center lg:self-auto rounded-full p-1 text-xs md:text-sm ${
                isDark ? "bg-black/60 border border-amber-500/40" : "bg-emerald-50"
              }`}
            >
              <button
                className={`px-4 py-1.5 rounded-full font-medium ${
                  isDark
                    ? "bg-amber-500 text-black shadow-[0_0_18px_rgba(245,158,11,0.6)]"
                    : "bg-emerald-500 text-white shadow-sm"
                }`}
              >
                Major pairs
              </button>
              <button
                className={`px-4 py-1.5 rounded-full font-medium ${
                  isDark
                    ? "text-gray-400 hover:text-amber-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Minors
              </button>
              <button
                className={`px-4 py-1.5 rounded-full font-medium hidden sm:inline-flex ${
                  isDark
                    ? "text-gray-400 hover:text-amber-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Crypto CFDs
              </button>
              <button
                className={`px-4 py-1.5 rounded-full font-medium hidden sm:inline-flex ${
                  isDark
                    ? "text-gray-400 hover:text-amber-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Indices &amp; more
              </button>
            </div>
          </div>

          <div
            className={`rounded-xl border overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-black via-[#050509] to-[#020617] border-amber-500/40 shadow-[0_26px_80px_rgba(0,0,0,0.9)]"
                : "bg-white border-emerald-100 shadow-[0_16px_55px_rgba(16,185,129,0.16)]"
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead
                  className={
                    isDark
                      ? "bg-black/60 text-amber-300 border-b border-amber-500/40"
                      : "bg-emerald-50/80 text-gray-700"
                  }
                >
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Asset</th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Move (pips)
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Built‑in overlays
                    </th>
                    <th className="px-6 py-4 text-right font-semibold">
                      ECN Profit
                    </th>
                  </tr>
                </thead>
                <tbody
                  className={
                    isDark
                      ? "divide-y divide-gray-800/70"
                      : "divide-y divide-emerald-50"
                  }
                >
                  {tradingFeatures.map((item, index) => (
                    <tr
                      key={index}
                      className={`transition-colors ${
                        isDark
                          ? "hover:bg-black/60"
                          : "hover:bg-emerald-50/60"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-10 w-10 rounded-xl flex items-center justify-center text-xs font-semibold ${
                              isDark
                                ? "bg-black/80 text-amber-300 ring-1 ring-amber-500/50"
                                : "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/60"
                            }`}
                          >
                            FX
                          </div>
                          <div>
                            <div
                              className={`font-semibold ${
                                isDark ? "text-gray-50" : "text-gray-900"
                              }`}
                            >
                              {item.pair}
                            </div>
                            <div
                              className={`text-xs ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {item.type}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div
                          className={`inline-flex items-baseline gap-2 rounded-full px-3 py-1 text-xs md:text-sm font-semibold ${
                            item.direction === "up"
                              ? isDark
                                ? "bg-emerald-500/10 text-emerald-300"
                                : "bg-emerald-50 text-emerald-600"
                              : isDark
                              ? "bg-red-500/10 text-red-300"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          <span>{item.movePips}</span>
                          <span className="opacity-80">{item.movePercent}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs md:text-sm ${
                            isDark
                              ? "border-amber-500/30 text-amber-200 bg-black/40"
                              : "border-emerald-100 text-gray-700 bg-emerald-50/60"
                          }`}
                        >
                          {item.builtIn}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`font-semibold ${
                            isDark ? "text-amber-300" : "text-emerald-600"
                          }`}
                        >
                          {item.ecnProfit}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section
        className={`py-20 ${
          isDark
            ? "bg-gradient-to-br from-[#020617] via-[#120c07] to-[#4b2605]"
            : "bg-gradient-to-br from-emerald-50 via-white to-emerald-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border bg-white/70 backdrop-blur-sm shadow-sm dark:bg-white/5 dark:border-amber-700/40">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isDark ? "bg-amber-400" : "bg-emerald-500"
                  }`}
                ></span>
                <span className={isDark ? "text-amber-100" : "text-emerald-700"}>
                  Live forex market snapshot
                </span>
              </div>

              <div className="space-y-4">
                <h2
                  className={`font-display text-3xl md:text-4xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Market Overview
                </h2>
                <p
                  className={`text-sm md:text-base max-w-xl ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Track the most traded forex pairs in one glance. Monitor live bid/ask,
                  intraday moves, and sentiment so you can time your entries with
                  confidence.
                </p>
              </div>

              {/* Category pills - static UI like in design */}
              <div
                className={`inline-flex rounded-full p-1 text-xs md:text-sm font-medium ${
                  isDark ? "bg-black/40 border border-amber-900/40" : "bg-white border border-emerald-100 shadow-sm"
                }`}
              >
                <button
                  className={`px-4 py-1.5 rounded-full transition ${
                    isDark
                      ? "bg-amber-400 text-gray-900 shadow-sm"
                      : "bg-emerald-600 text-white shadow-sm"
                  }`}
                  type="button"
                >
                  Major FX pairs
                </button>
                <button
                  className={`px-4 py-1.5 rounded-full text-gray-500 dark:text-gray-300/70`}
                  type="button"
                >
                  Commodities
                </button>
                <button
                  className={`px-4 py-1.5 rounded-full text-gray-500 dark:text-gray-300/70`}
                  type="button"
                >
                  Crypto CFDs
                </button>
              </div>

              {/* Data card */}
              <div
                className={`rounded-2xl border overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-br from-[#020617] via-[#1b1b1f] to-[#4b2605] border-amber-900/70 shadow-[0_28px_70px_rgba(0,0,0,0.9)]"
                    : "bg-white border-emerald-100 shadow-[0_24px_55px_rgba(16,185,129,0.25)]"
                }`}
              >
                <div
                  className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b ${
                    isDark ? "border-amber-900/60 bg-black/40" : "border-emerald-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isDark ? "bg-amber-400" : "bg-emerald-500"
                      }`}
                    ></span>
                    <span
                      className={`text-xs font-semibold tracking-wide uppercase ${
                        isDark ? "text-amber-100" : "text-emerald-700"
                      }`}
                    >
                      Top moving pairs
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-medium ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    Updated a few seconds ago
                  </span>
                </div>

                <div className="px-4 sm:px-6 py-3 grid grid-cols-[minmax(0,3fr),minmax(0,3fr),minmax(0,2.5fr)] text-[11px] md:text-xs font-medium uppercase tracking-wide">
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>Pair</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-500"}>
                    Bid / Ask
                  </span>
                  <span className={isDark ? "text-gray-400 text-right" : "text-gray-500 text-right"}>
                    24h Change
                  </span>
                </div>

                <div className="px-2 sm:px-4 pb-3 space-y-1.5">
                  {marketData.slice(0, 4).map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between rounded-xl px-3 sm:px-4 py-2 ${
                        isDark ? "bg-[#0b0b10]/70" : "bg-emerald-50/60"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span
                          className={`text-sm font-semibold ${
                            isDark ? "text-gray-100" : "text-gray-900"
                          }`}
                        >
                          {item.pair}
                        </span>
                        <span
                          className={`text-[11px] ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Tight spreads · ECN pricing
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span
                            className={`block text-sm font-semibold ${
                              isDark ? "text-gray-100" : "text-gray-800"
                            }`}
                          >
                            {item.bid} / {item.ask}
                          </span>
                          <span
                            className={`text-[11px] ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            Bid / Ask
                          </span>
                        </div>
                        <span
                          className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                            item.trend === "up"
                              ? isDark
                                ? "bg-emerald-900/60 text-emerald-300"
                                : "bg-emerald-100 text-emerald-700"
                              : isDark
                              ? "bg-red-900/70 text-red-300"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary stats */}
                <div
                  className={`grid grid-cols-2 sm:grid-cols-3 gap-2 px-4 sm:px-6 pt-2 pb-4 border-t ${
                    isDark ? "border-amber-900/60 bg-black/40" : "border-emerald-50"
                  }`}
                >
                  <div className="space-y-0.5">
                    <p
                      className={`text-[11px] uppercase tracking-wide ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Avg. spread
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-emerald-300" : "text-emerald-700"
                      }`}
                    >
                      0.3 pips
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p
                      className={`text-[11px] uppercase tracking-wide ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      24h volume
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      $1.2T+
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p
                      className={`text-[11px] uppercase tracking-wide ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Active signals
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-amber-300" : "text-amber-600"
                      }`}
                    >
                      12 setups
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual card */}
            <div className="relative">
              <div
                className={`absolute -inset-6 rounded-[36px] blur-3xl opacity-40 ${
                  isDark
                    ? "bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.55),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(248,250,252,0.15),_transparent_60%)]"
                    : "bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_60%)]"
                }`}
              ></div>

              <div
                className={`relative rounded-[28px] border overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-br from-[#020617] via-[#1a1209] to-[#713f12] border-amber-900/70 shadow-[0_30px_80px_rgba(0,0,0,0.95)]"
                    : "bg-gradient-to-br from-white via-emerald-50 to-emerald-100 border-emerald-100 shadow-[0_30px_80px_rgba(16,185,129,0.35)]"
                }`}
              >
                {/* Top window bar */}
                <div
                  className={`flex items-center justify-between px-4 py-3 border-b ${
                    isDark ? "border-amber-900/70 bg-black/40" : "border-emerald-100"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    CompassForgex Live Terminal
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                      isDark
                        ? "bg-amber-500/90 text-black"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    LIVE
                  </span>
                </div>

                {/* Chart area */}
                <div className="px-4 pt-4 pb-3 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p
                        className={`text-xs uppercase tracking-wide ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        EUR/USD micro
                      </p>
                      <p
                        className={`text-2xl font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        1.0824
                      </p>
                      <p
                        className={`text-xs ${
                          isDark ? "text-amber-300" : "text-emerald-700"
                        }`}
                      >
                        +0.12% today
                      </p>
                    </div>
                    <div
                      className={`rounded-2xl px-3 py-2 text-right text-xs ${
                        isDark ? "bg-black/40 border border-amber-900/60" : "bg-white/80 border border-emerald-100 shadow-sm"
                      }`}
                    >
                      <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                        Risk score
                      </p>
                      <p
                        className={`text-sm font-semibold ${
                          isDark ? "text-amber-300" : "text-amber-600"
                        }`}
                      >
                        Moderate · 3/5
                      </p>
                      <p className={isDark ? "text-[11px] text-gray-400" : "text-[11px] text-gray-500"}>
                        Spread 0.3 pips
                      </p>
                    </div>
                  </div>

                  {/* Stylised sparkline */}
                  <div
                    className={`relative h-32 rounded-2xl overflow-hidden ${
                      isDark ? "bg-gradient-to-tr from-[#4b2605] via-[#020617] to-[#f59e0b]" : "bg-gradient-to-tr from-emerald-100 via-white to-sky-100"
                    }`}
                  >
                    <div className="absolute inset-0 opacity-40">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.75),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(253,224,171,0.7),_transparent_55%)]" />
                    </div>
                    <div className="absolute inset-x-4 bottom-3 flex items-end gap-1.5">
                      <div className="w-2 rounded-full bg-amber-300/90 h-7"></div>
                      <div className="w-2 rounded-full bg-amber-400/90 h-11"></div>
                      <div className="w-2 rounded-full bg-amber-200/90 h-6"></div>
                      <div className="w-2 rounded-full bg-amber-500/90 h-14"></div>
                      <div className="w-2 rounded-full bg-amber-400/90 h-9"></div>
                      <div className="w-2 rounded-full bg-amber-200/90 h-5"></div>
                      <div className="w-2 rounded-full bg-amber-500/90 h-12"></div>
                      <div className="w-2 rounded-full bg-amber-300/90 h-8"></div>
                    </div>
                  </div>

                  {/* Bottom actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 pb-2">
                    <div className="flex items-center gap-3 text-[11px]">
                      <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border border-amber-400/60 bg-amber-500/10 text-amber-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        <span className="font-medium">London session open</span>
                      </div>
                      <span
                        className={`hidden sm:inline text-[11px] ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Volatility picking up across majors
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                          isDark
                            ? "border-gray-700 text-gray-200 hover:bg-gray-900/60"
                            : "border-gray-200 text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        Set price alert
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
                          isDark
                            ? "bg-amber-400 text-gray-900 hover:bg-amber-300"
                            : "bg-emerald-600 text-white hover:bg-emerald-700"
                        }`}
                      >
                        Open trade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Trading Tools */}
      <section
        className={`py-20 ${
          isDark
            ? "bg-gradient-to-br from-[#020617] via-[#050814] to-[#111827]"
            : "bg-gradient-to-br from-white via-slate-50 to-emerald-50"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border ${
                isDark
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Pro-grade tools for every strategy
            </span>
            <div className="space-y-3 max-w-3xl">
              <h2
                className={`font-display text-3xl md:text-4xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Advanced Trading Tools
              </h2>
              <p
                className={`text-sm md:text-base ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Combine institutional-grade analytics, precise risk controls, and
                always-on automation to execute your edge in any market condition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] gap-10">
            {/* Left: main tool cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical analysis card */}
              <div
                className={`relative rounded-2xl p-6 border overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-br from-[#064e3b] via-[#020617] to-[#0f172a] border-emerald-700/70 shadow-[0_18px_45px_rgba(0,0,0,0.8)]"
                    : "bg-gradient-to-br from-emerald-50 via-white to-emerald-100 border-emerald-200 shadow-[0_18px_45px_rgba(16,185,129,0.25)]"
                }`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.4),_transparent_60%)] opacity-70 pointer-events-none" />
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isDark ? "bg-emerald-500" : "bg-emerald-600"
                  }`}
                >
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Technical Workspace
                </h3>
                <p className={isDark ? "text-emerald-100" : "text-gray-600"}>
                  Multi-timeframe charts, custom layouts, and over 50+ indicators
                  tuned for forex volatility.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                      Indicators
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-emerald-300" : "text-emerald-700"
                      }`}
                    >
                      58 presets
                    </p>
                  </div>
                  <div>
                    <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                      Chart layouts
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      6 saved views
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk management card */}
              <div
                className={`relative rounded-2xl p-6 border overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-br from-[#111827] via-[#020617] to-[#1e293b] border-slate-700/80 shadow-[0_18px_45px_rgba(0,0,0,0.8)]"
                    : "bg-gradient-to-br from-slate-50 via-white to-blue-50 border-slate-200 shadow-[0_18px_45px_rgba(30,64,175,0.22)]"
                }`}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.5),_transparent_60%)] opacity-60 pointer-events-none" />
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isDark ? "bg-slate-800" : "bg-blue-600"
                  }`}
                >
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Smart Risk Engine
                </h3>
                <p className={isDark ? "text-gray-200" : "text-gray-600"}>
                  Let CompassForgex size positions, place stops, and trail profits
                  automatically based on your rules.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                      Max risk / trade
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-amber-300" : "text-amber-600"
                      }`}
                    >
                      1.0% capped
                    </p>
                  </div>
                  <div>
                    <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                      Protected trades
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        isDark ? "text-emerald-300" : "text-emerald-700"
                      }`}
                    >
                      97% with SL
                    </p>
                  </div>
                </div>
              </div>

              {/* Automation card */}
              <div
                className={`relative rounded-2xl p-6 border overflow-hidden md:col-span-2 ${
                  isDark
                    ? "bg-gradient-to-r from-[#4b1d0e] via-[#7c2d12] to-[#082f49] border-amber-700/80 shadow-[0_22px_55px_rgba(0,0,0,0.9)]"
                    : "bg-gradient-to-r from-amber-50 via-orange-50 to-sky-50 border-amber-200 shadow-[0_22px_55px_rgba(245,158,11,0.28)]"
                }`}
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_left,_rgba(248,250,252,0.35),_transparent_60%),radial-gradient(circle_at_right,_rgba(251,191,36,0.7),_transparent_55%)] pointer-events-none" />
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-md">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isDark ? "bg-black/40 border border-amber-500/40" : "bg-white/80 border border-amber-200"
                      }`}
                    >
                      <Smartphone className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        One-tap automation
                      </h3>
                      <p className={isDark ? "text-amber-100" : "text-gray-700"}>
                        Deploy proven playbooks in a single tap&mdash;copy trading,
                        news breakouts, and session open strategies.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-[11px]">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border ${
                          isDark
                            ? "border-amber-400/70 bg-black/40 text-amber-100"
                            : "border-amber-300 bg-amber-50 text-amber-700"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        24/5 cloud execution
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border ${
                          isDark
                            ? "border-emerald-400/60 bg-black/30 text-emerald-100"
                            : "border-emerald-300 bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        Latency &lt; 15 ms
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full md:w-auto text-xs">
                    <div
                      className={`rounded-2xl px-4 py-3 border ${
                        isDark
                          ? "border-white/10 bg-black/40"
                          : "border-emerald-100 bg-white/80"
                      }`}
                    >
                      <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                        Automated orders / month
                      </p>
                      <p
                        className={`mt-1 text-lg font-semibold ${
                          isDark ? "text-emerald-200" : "text-emerald-700"
                        }`}
                      >
                        18,420+
                      </p>
                      <p className={isDark ? "text-[11px] text-gray-400" : "text-[11px] text-gray-500"}>
                        Across live &amp; demo accounts
                      </p>
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 border ${
                        isDark
                          ? "border-amber-500/50 bg-black/40"
                          : "border-amber-200 bg-white/80"
                      }`}
                    >
                      <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                        Time saved / week
                      </p>
                      <p
                        className={`mt-1 text-lg font-semibold ${
                          isDark ? "text-amber-300" : "text-amber-600"
                        }`}
                      >
                        12+ hours
                      </p>
                      <p className={isDark ? "text-[11px] text-gray-400" : "text-[11px] text-gray-500"}>
                        Based on active users
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: quick stats column */}
            <div
              className={`rounded-2xl border p-6 lg:p-7 flex flex-col justify-between gap-6 ${
                isDark
                  ? "bg-gradient-to-b from-[#020617] via-[#020617] to-[#0b1120] border-slate-800 shadow-[0_22px_55px_rgba(0,0,0,0.85)]"
                  : "bg-gradient-to-b from-white via-slate-50 to-emerald-50 border-slate-200 shadow-[0_22px_55px_rgba(15,118,110,0.18)]"
              }`}
            >
              <div className="space-y-2">
                <p
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    isDark ? "text-emerald-300" : "text-emerald-700"
                  }`}
                >
                  CompassForgex performance
                </p>
                <p className={isDark ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
                  Real metrics from traders using CompassForgex tools every day.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className={isDark ? "text-gray-400 text-xs" : "text-gray-500 text-xs"}>
                    Avg. order execution
                  </p>
                  <p
                    className={`mt-1 text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    38 ms
                  </p>
                  <p className={isDark ? "text-[11px] text-gray-500" : "text-[11px] text-gray-500"}>
                    Global ECN routing
                  </p>
                </div>
                <div>
                  <p className={isDark ? "text-gray-400 text-xs" : "text-gray-500 text-xs"}>
                    Platform uptime
                  </p>
                  <p
                    className={`mt-1 text-xl font-semibold ${
                      isDark ? "text-emerald-300" : "text-emerald-700"
                    }`}
                  >
                    99.99%
                  </p>
                  <p className={isDark ? "text-[11px] text-gray-500" : "text-[11px] text-gray-500"}>
                    Last 12 months
                  </p>
                </div>
                <div>
                  <p className={isDark ? "text-gray-400 text-xs" : "text-gray-500 text-xs"}>
                    Automated strategies
                  </p>
                  <p
                    className={`mt-1 text-xl font-semibold ${
                      isDark ? "text-amber-300" : "text-amber-600"
                    }`}
                  >
                    250+
                  </p>
                  <p className={isDark ? "text-[11px] text-gray-500" : "text-[11px] text-gray-500"}>
                    Community &amp; in-house
                  </p>
                </div>
                <div>
                  <p className={isDark ? "text-gray-400 text-xs" : "text-gray-500 text-xs"}>
                    Mobile sessions
                  </p>
                  <p
                    className={`mt-1 text-xl font-semibold ${
                      isDark ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    72%
                  </p>
                  <p className={isDark ? "text-[11px] text-gray-500" : "text-[11px] text-gray-500"}>
                    Trades managed on the go
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-white/5 lg:pt-4">
                <div className="flex items-center gap-2 text-[11px]">
                  <Clock className={isDark ? "h-4 w-4 text-emerald-300" : "h-4 w-4 text-emerald-600"} />
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Session-aware alerts keep you synced with London, New York &amp; Asia.
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <DollarSign className={isDark ? "h-4 w-4 text-amber-300" : "h-4 w-4 text-amber-500"} />
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    Optimized for low spreads &amp; ECN pricing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className={`py-16 ${isDark ? "bg-[#020617]" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Expert Team
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Work directly with seasoned forex professionals who combine
            institutional experience with clear, actionable guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-lg ${
                  isDark ? "bg-[#020617] border border-gray-800" : "bg-white"
                } ${
                  index === 0
                    ? "lg:col-span-2 lg:flex lg:items-center lg:gap-6"
                    : ""
                }`}
              >
                <div
                  className={`${
                    index === 0
                      ? "lg:w-1/3 flex items-center justify-center lg:justify-start"
                      : ""
                  } p-6 pb-0 lg:pb-6`}
                >
                  <div
                    className={`${
                      index === 0 ? "w-24 h-24" : "w-20 h-20"
                    } rounded-2xl mx-auto lg:mx-0 mb-4 overflow-hidden ${
                      isDark
                        ? "bg-gradient-to-br from-emerald-500 to-amber-400"
                        : "bg-gradient-to-br from-green-400 to-emerald-500"
                    }`}
                  ></div>
                </div>

                <div
                  className={`p-6 pt-0 lg:pt-6 ${
                    index === 0 ? "lg:w-2/3 text-left" : "text-center"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`text-sm mb-3 ${
                      isDark ? "text-emerald-300" : "text-emerald-700"
                    }`}
                  >
                    {member.role}
                  </p>

                  <div
                    className={`flex items-center ${
                      index === 0 ? "justify-start" : "justify-center"
                    } gap-1 mb-3`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          isDark ? "text-amber-400" : "text-yellow-400"
                        } fill-current`}
                      />
                    ))}
                    <span
                      className={`ml-1 text-sm font-medium ${
                        isDark ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      {member.rating.toFixed ? member.rating.toFixed(1) : member.rating}
                    </span>
                    {member.reviews && (
                      <span
                        className={`text-xs ml-1 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        ({member.reviews})
                      </span>
                    )}
                  </div>

                  {member.bio && (
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section */}
      <section
        className={`py-16 ${
          isDark ? "bg-[#020617]" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`font-display text-3xl md:text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Foresh Forex App
              </h2>
              <p
                className={`text-lg mb-8 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Trade anywhere, anytime with our powerful mobile app designed
                for modern traders.
              </p>
              <div className="space-y-6 mb-8">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isDark ? "bg-emerald-900/40" : "bg-green-100"
                      }`}
                    >
                      <feature.icon
                        className={`h-6 w-6 ${
                          isDark ? "text-emerald-400" : "text-green-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    isDark
                      ? "bg-amber-400 text-gray-900 hover:bg-amber-300"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  <Download className="h-5 w-5" />
                  Download for iOS
                </Link>
                <Link
                  href="#"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    isDark
                      ? "bg-gray-900 text-gray-50 border border-amber-500/40 hover:bg-black"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  <Download className="h-5 w-5" />
                  Download for Android
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className={`rounded-3xl p-8 shadow-2xl ${
                  isDark
                    ? "bg-gradient-to-br from-[#020617] via-[#111827] to-[#1f2937]"
                    : "bg-gradient-to-br from-gray-900 to-gray-700"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="h-8 w-8 text-white" />
                    <div>
                      <p className="text-white/80 text-sm">Mobile Trading</p>
                      <p className="text-white font-semibold">Available Now</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white/80 text-xs">Downloads</p>
                      <p className="text-white font-bold">500K+</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white/80 text-xs">Rating</p>
                      <p className="text-white font-bold">4.8★</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section
        className={`py-16 ${
          isDark
            ? "bg-gradient-to-br from-[#020617] via-[#111827] to-[#1f2937]"
            : "bg-gradient-to-br from-green-600 to-emerald-600"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Download Our App & Start Trading Anywhere
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDark ? "text-gray-300" : "text-green-50"
            }`}
          >
            Join thousands of traders who trust CompassForex for professional forex trading on the go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDark
                  ? "bg-amber-400 text-gray-900 hover:bg-amber-300"
                  : "bg-white text-green-600 hover:bg-green-50"
              }`}
            >
              <Download className="h-5 w-5" />
              App Store
            </Link>
            <Link
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDark
                  ? "bg-gray-900 text-gray-50 border border-amber-500/40 hover:bg-black"
                  : "bg-white text-green-600 hover:bg-green-50"
              }`}
            >
              <Download className="h-5 w-5" />
              Google Play
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
