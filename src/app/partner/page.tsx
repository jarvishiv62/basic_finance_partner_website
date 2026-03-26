import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PartnerPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Partner Hero Section */}
      <section className="relative py-20 sm:py-30 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <img
                src="/partnerimg.webp"
                alt="Partner with Upay Bharat"
                className="w-full h-auto max-h-72 sm:max-h-96 object-contain transition-transform duration-300 hover:scale-105"
              />
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500 rounded-full flex items-center justify-center opacity-20 transition-all duration-300 hover:opacity-30 hover:scale-110">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="text-lg sm:text-2xl font-bold">📱</div>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 transition-all duration-300 hover:translate-x-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Best Platform to{" "}
                <span className="text-green-600">
                  Sell Financial & Banking Services
                </span>{" "}
                Online
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl">
                Learn and Earn by referring customers to Upay Bharat. Join our
                network of financial professionals and start earning attractive
                commissions on every successful referral.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto inline-flex items-center justify-center space-x-2">
                <span className="hidden sm:inline">Contact us</span>
                <span className="sm:hidden">Download Now</span>
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
          </div>
        </div>
      </section>

      {/* Phone Cards Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aapki Apni Finance Ki Dukaan
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Download our app and start your journey as a financial partner
              today.
            </p>
          </div>

          {/* Phone Cards Grid */}
          <div className="border-2 border-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Phone Card 1 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="mb-6 h-80 flex items-center justify-center">
                  <img
                    src="/phone/p1.webp"
                    alt="Upay Bharat App Screen 1"
                    className="w-full h-full object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-green-600">
                  Easy Registration
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  A personalized app built just for you
                </p>
              </div>

              {/* Phone Card 2 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="mb-4 sm:mb-6 h-60 sm:h-72 lg:h-80 flex items-center justify-center">
                  <img
                    src="/phone/p2.webp"
                    alt="Upay Bharat App Screen 2"
                    className="w-full h-full object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-green-600">
                  Track Earnings
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Quickly create, organize, and track your customer leads
                </p>
              </div>

              {/* Phone Card 3 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="mb-4 sm:mb-6 h-60 sm:h-72 lg:h-80 flex items-center justify-center">
                  <img
                    src="/phone/p3.webp"
                    alt="Upay Bharat App Screen 3"
                    className="w-full h-full object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-green-600">
                  24/7 Support
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Promote your business using your referral code
                </p>
              </div>

              {/* Phone Card 4 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="mb-4 sm:mb-6 h-60 sm:h-72 lg:h-80 flex items-center justify-center">
                  <img
                    src="/phone/p4.webp"
                    alt="Upay Bharat App Screen 4"
                    className="w-full h-full object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-green-600">
                  Multiple Products
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Access loans, cards, and more
                </p>
              </div>
            </div>
          </div>

          {/* Who Can Earn Section */}
          <div className="mt-16 py-12 bg-white rounded-2xl shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who can earn with{" "}
                <span className="text-green-600">Upay Bharat</span>?
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4">
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-blue-200 rounded-xl p-4 bg-blue-50 hover:bg-blue-100">
                <img
                  src="/dummy/loan-against.webp"
                  alt="Loan agents"
                  className="w-20 h-20 mb-3 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-700 font-medium transition-colors duration-300 hover:text-green-600">
                  Loan agents
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-green-200 rounded-xl p-4 bg-green-50 hover:bg-green-100">
                <img
                  src="/dummy/bank-employee.webp"
                  alt="Former bank employee"
                  className="w-20 h-20 mb-3 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-700 font-medium transition-colors duration-300 hover:text-green-600">
                  Former bank employee
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-purple-200 rounded-xl p-4 bg-purple-50 hover:bg-purple-100">
                <img
                  src="/dummy/ins-agent.webp"
                  alt="Insurance agents"
                  className="w-20 h-20 mb-3 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-700 font-medium transition-colors duration-300 hover:text-green-600">
                  Insurance agents
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-orange-200 rounded-xl p-4 bg-orange-50 hover:bg-orange-100">
                <img
                  src="/dummy/piggy.webp"
                  alt="Wealth advisors"
                  className="w-20 h-20 mb-3 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-700 font-medium transition-colors duration-300 hover:text-green-600">
                  Wealth advisors
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-red-200 rounded-xl p-4 bg-red-50 hover:bg-red-100">
                <img
                  src="/dummy/bfsi.webp"
                  alt="BFSI professionals"
                  className="w-20 h-20 mb-3 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-700 font-medium transition-colors duration-300 hover:text-green-600">
                  BFSI professionals
                </p>
              </div>
            </div>
          </div>

          {/* Partner Benefits Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partners Choose{" "}
                <span className="text-green-600">Upay Bharat</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple, transparent, and profitable partnership opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Benefit 1 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-blue-200 rounded-xl p-6 bg-blue-50 hover:bg-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-blue-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-blue-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-blue-600">
                  50+ Bank Partners
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  Access leading banks and financial institutions for your
                  customers.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-green-200 rounded-xl p-6 bg-green-50 hover:bg-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-green-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-green-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-600">
                  Up to 5% Commission
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  Earn competitive commissions with weekly transparent payouts.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-purple-200 rounded-xl p-6 bg-purple-50 hover:bg-purple-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-purple-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-purple-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-purple-600">
                  Full Support
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  Training, marketing materials, and dedicated relationship
                  managers.
                </p>
              </div>
            </div>

            {/* Simple Stats Row */}
            <div className="border-t border-gray-200 pt-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 text-center">
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-blue-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-blue-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-green-600">
                    1000+
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Active Partners
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-green-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-green-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-green-600">
                    ₹100Cr+
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Loans Disbursed
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-purple-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-purple-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-green-600">
                    50+
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Bank Partners
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-orange-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-orange-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-green-600">
                    4.8/5
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Partner Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grow Your Business Section */}
          <div className="mt-16 py-12 bg-gray-50 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Grow your <span className="text-green-600">business</span>
              </h2>
            </div>
            <div className="flex flex-col items-center gap-6 px-4">
              <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-sm border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-blue-600 mb-2 transition-colors duration-300 hover:text-blue-700">
                  GET CERTIFIED
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  Learn from video courses and webinars to become an expert.
                </p>
              </div>
              <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-sm border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-green-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-blue-600 mb-2 transition-colors duration-300 hover:text-blue-700">
                  ACQUIRE CUSTOMERS
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  Use your personalized website and marketing materials.
                </p>
              </div>
              <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-sm border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-purple-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-blue-600 mb-2 transition-colors duration-300 hover:text-blue-700">
                  SELL FINANCIAL PRODUCTS
                </h3>
                <p className="text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  Sell our products and earn leading commissions.
                </p>
              </div>
            </div>
          </div>

          {/* How We Ensure Your Success Section */}
          <div className="mt-16 py-12 bg-white rounded-2xl shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How we ensure your{" "}
                <span className="text-green-600">success</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {/* Card 1 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-blue-200 rounded-xl p-6 bg-blue-50 hover:bg-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-blue-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-blue-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2 4h4l2 4h-4l-2 4-2-4H8l-2-4h4l2-4zm0 8l2 4h-4l2-4z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">
                  Customized products
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-700">
                  Created for people traditional institutions do not serve.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-green-200 rounded-xl p-6 bg-green-50 hover:bg-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-green-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-green-600">
                  Huge unmet demand
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-700">
                  300Mn customers in small towns across India.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-purple-200 rounded-xl p-6 bg-purple-50 hover:bg-purple-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-purple-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-purple-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-1.88-1.64-1.85-.64-3.45-1.48-3.45-3.41 0-1.61 1.19-2.99 3.04-3.33V4h2.67v2.02c1.53.39 2.69 1.5 2.77 3.21h-1.96c-.05-.74-.49-1.39-1.36-1.39-1.05 0-1.42.67-1.42 1.37 0 .64.45 1.03 1.84 1.52 1.92.68 3.49 1.45 3.49 3.52 0 1.81-1.3 3.03-3.09 3.36z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-purple-600">
                  Great commissions
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-700">
                  Enjoy the industry's leading commissions.
                </p>
              </div>

              {/* Card 4 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-orange-200 rounded-xl p-6 bg-orange-50 hover:bg-orange-100">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-orange-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-orange-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-orange-600">
                  7-day payment cycle
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-700">
                  Earnings credited 4 times in a month!
                </p>
              </div>

              {/* Card 5 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-gray-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-gray-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-gray-600">
                  Own your customers
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-700">
                  Upto ₹50,000 Earnings
                </p>
              </div>

              {/* Card 6 */}
              <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-red-200 rounded-xl p-6 bg-red-50 hover:bg-red-100">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-red-200 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-red-600 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-red-600">
                  App in your language
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-700">
                  5 languages to choose from.
                </p>
              </div>
            </div>
          </div>

          {/* Partner Success Stories Section */}
          <div className="mt-16 py-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partner <span className="text-green-600">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from our successful partners who've grown their business
                with Upay Bharat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-12">
              {/* Partner Review 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-blue-200 hover:scale-110">
                    👨‍💼
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <span className="text-yellow-400 transition-transform duration-300 hover:scale-110">
                        ★★★★★
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-700">
                      DSA Partner
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  "Upay Bharat has transformed my business completely. The
                  platform is easy to use and support team is always there to
                  help. I've doubled my income in just 6 months!"
                </blockquote>
                <cite className="font-semibold text-gray-900">
                  Rahul Sharma
                </cite>
              </div>

              {/* Partner Review 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-green-200 hover:scale-110">
                    👨‍💻
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <span className="text-yellow-400 transition-transform duration-300 hover:scale-110">
                        ★★★★★
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-700">
                      Business Owner
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  "The payout structure is excellent and payments are always on
                  time. Upay Bharat has become a reliable partner for my
                  financial business growth."
                </blockquote>
                <cite className="font-semibold text-gray-900 transition-colors duration-300 hover:text-green-600">
                  Amit Kumar
                </cite>
              </div>

              {/* Partner Review 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-purple-200 hover:scale-110">
                    👨‍💼
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <span className="text-yellow-400 transition-transform duration-300 hover:scale-110">
                        ★★★★★
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-700">
                      DSA Partner
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  "Best platform for financial services! The training provided
                  by Upay Bharat team helped me understand products better and
                  serve customers effectively."
                </blockquote>
                <cite className="font-semibold text-gray-900 transition-colors duration-300 hover:text-green-600">
                  Vikram Singh
                </cite>
              </div>
            </div>

            {/* Partner Stats */}
            <div className="border-t border-gray-200 pt-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 text-center">
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-green-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-green-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-green-600 transition-colors duration-300 hover:text-green-700">
                    4.9/5
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Partner Rating
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-blue-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-blue-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-700">
                    1000+
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Active Partners
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-purple-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-purple-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-purple-600 transition-colors duration-300 hover:text-purple-700">
                    98%
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Success Rate
                  </div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-orange-200 rounded-xl p-4 sm:p-6 bg-white hover:bg-orange-50 min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]">
                  <div className="text-2xl font-bold text-orange-600 transition-colors duration-300 hover:text-orange-700">
                    ₹500Cr+
                  </div>
                  <div className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
                    Total Business
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
              <div className="md:w-2/3 text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-colors duration-300 hover:text-green-400">
                  Register as an{" "}
                  <span className="text-green-400 transition-colors duration-300 hover:text-green-300">
                    Upay Bharat
                  </span>{" "}
                  Partner
                </h2>
                <p className="text-lg text-gray-200 mb-6 transition-colors duration-300 hover:text-white">
                  Grow your business. Grow your career. Start earning with
                  India's fast-growing fintech network.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Get Started Now
                </button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/handshake.webp"
                  alt="Handshake"
                  className="max-w-full h-auto max-h-32 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-green-600 rounded-full opacity-10"></div>
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
        <div className="absolute bottom-0 right-1/3 w-20 h-20 bg-orange-500 rounded-full opacity-10"></div>
      </div>

      <Footer />
    </div>
  );
}
