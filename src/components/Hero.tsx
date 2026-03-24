import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-gray-900">
                Best Platform to Sell Financial &amp;
              </span>
              <span className="text-green-600">Banking Services Online</span>
            </h1>
            {/* Description */}
            <p className="text-base text-gray-600 max-w-md leading-relaxed">
              Learn &amp; Earn from anywhere by referring customers and
              educating them about financial products offered on our platform.
            </p>
            {/* CTA Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2">
              <span>Contact Us</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:pl-8">
            <div className="relative z-10">
              <Image
                src="/homeherologo.webp"
                alt="Happy customers - Ornexa Finance"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                priority
              />
            </div>

            {/* India Map Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg viewBox="0 0 800 600" className="w-full h-full">
                <path
                  d="M400 100 L450 120 L480 150 L500 200 L520 250 L500 300 L480 350 L450 400 L400 450 L350 400 L320 350 L300 300 L280 250 L300 200 L320 150 L350 120 Z"
                  fill="currentColor"
                  className="text-green-600"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
