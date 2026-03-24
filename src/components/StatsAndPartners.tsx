"use client";

import { useState, useEffect } from "react";

export default function StatsAndPartners() {
  const stats = [
    { number: "1,000Cr+", label: "Loan Disbursement" },
    { number: "1000+", label: "DSA partners" },
    { number: "100+", label: "Bank Partnerships" },
  ];

  const banks = [
    { name: "IDFC FIRST Bank", logo: "/bank/idfc.webp" },
    { name: "Kotak", logo: "/bank/kotak.webp" },
    { name: "L&T Finance", logo: "/bank/ltfinance.webp" },
    { name: "Axis Bank", logo: "/bank/axis.webp" },
    { name: "Bajaj Finserv", logo: "/bank/bajaj.webp" },
    { name: "Bandhan Bank", logo: "/bank/bandhan.webp" },
  ];

  // Create multiple copies for continuous scrolling
  const continuousBanks = [...banks, ...banks, ...banks, ...banks];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Millions of Wishes, Enabled!
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Bank Partners Slideshow */}
        <div className="bg-white rounded-2xl p-8 shadow-lg overflow-hidden">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-8">
            Our Trusted Banking Partners
          </h3>

          <div className="relative">
            <div className="flex animate-scroll">
              {continuousBanks.map((bank, index) => (
                <div
                  key={`${bank.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center mx-8"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={bank.logo}
                      alt={bank.name}
                      className="h-8 md:h-10 w-auto object-contain"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const textElement =
                          target.nextElementSibling as HTMLElement;
                        if (textElement) textElement.style.display = "block";
                      }}
                    />
                    <span
                      className="text-sm md:text-base font-medium text-gray-600 hidden"
                      style={{ display: "none" }}
                    >
                      {bank.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
