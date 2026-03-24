import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PartnerPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Partner Hero Section */}
      <section className="relative py-30 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Best Platform to{" "}
                <span className="text-green-600">
                  Sell Financial & Banking Services
                </span>{" "}
                Online
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Learn and Earn by referring customers to Ornexa. Join our
                network of financial professionals and start earning attractive
                commissions on every successful referral.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Contact Us
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/partnerimg.webp"
                alt="Partner with Ornexa"
                className="w-full h-auto max-h-96 object-contain"
              />
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center opacity-20">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="text-2xl font-bold">📱</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aapki Apni Finance Ki Dukaan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our app and start your journey as a financial partner
              today.
            </p>
          </div>

          {/* Phone Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Phone Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6 h-80 flex items-center justify-center">
                <img
                  src="/phone/p1.webp"
                  alt="Ornexa App Screen 1"
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Registration
              </h3>
              <p className="text-gray-600 text-sm">
                A personalized app built just for you
              </p>
            </div>

            {/* Phone Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6 h-80 flex items-center justify-center">
                <img
                  src="/phone/p2.webp"
                  alt="Ornexa App Screen 2"
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Track Earnings
              </h3>
              <p className="text-gray-600 text-sm">
                Quickly create, organize, and track your customer leads
              </p>
            </div>

            {/* Phone Card 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6 h-80 flex items-center justify-center">
                <img
                  src="/phone/p3.webp"
                  alt="Ornexa App Screen 3"
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm">
                Promote your business using your referral code
              </p>
            </div>

            {/* Phone Card 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="mb-6 h-80 flex items-center justify-center">
                <img
                  src="/phone/p4.webp"
                  alt="Ornexa App Screen 4"
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multiple Products
              </h3>
              <p className="text-gray-600 text-sm">
                Access loans, cards, and more
              </p>
            </div>
          </div>

          {/* Who Can Earn Section */}
          <div className="mt-16 py-12 bg-white rounded-2xl shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Who can earn with <span className="text-green-600">Ornexa</span>
                ?
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/dummy/loan-against.webp"
                  alt="Loan agents"
                  className="w-20 h-20 mb-3 rounded-lg object-cover"
                />
                <p className="text-gray-700 font-medium">Loan agents</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/dummy/bank-employee.webp"
                  alt="Former bank employee"
                  className="w-20 h-20 mb-3 rounded-lg object-cover"
                />
                <p className="text-gray-700 font-medium">
                  Former bank employee
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/dummy/ins-agent.webp"
                  alt="Insurance agents"
                  className="w-20 h-20 mb-3 rounded-lg object-cover"
                />
                <p className="text-gray-700 font-medium">Insurance agents</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/dummy/piggy.webp"
                  alt="Wealth advisors"
                  className="w-20 h-20 mb-3 rounded-lg object-cover"
                />
                <p className="text-gray-700 font-medium">Wealth advisors</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/dummy/bfsi.webp"
                  alt="BFSI professionals"
                  className="w-20 h-20 mb-3 rounded-lg object-cover"
                />
                <p className="text-gray-700 font-medium">BFSI professionals</p>
              </div>
            </div>
          </div>

          {/* Partner Benefits Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partners Choose{" "}
                <span className="text-green-600">Ornexa</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple, transparent, and profitable partnership opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  50+ Bank Partners
                </h3>
                <p className="text-gray-600">
                  Access leading banks and financial institutions for your
                  customers.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Up to 5% Commission
                </h3>
                <p className="text-gray-600">
                  Earn competitive commissions with weekly transparent payouts.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Full Support
                </h3>
                <p className="text-gray-600">
                  Training, marketing materials, and dedicated relationship
                  managers.
                </p>
              </div>
            </div>

            {/* Simple Stats Row */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-gray-600 text-sm">Active Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₹100Cr+
                  </div>
                  <div className="text-gray-600 text-sm">Loans Disbursed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600 text-sm">Bank Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                  <div className="text-gray-600 text-sm">Partner Rating</div>
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
              <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  GET CERTIFIED
                </h3>
                <p className="text-gray-600">
                  Learn from video courses and webinars to become an expert.
                </p>
              </div>
              <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  ACQUIRE CUSTOMERS
                </h3>
                <p className="text-gray-600">
                  Use your personalized website and marketing materials.
                </p>
              </div>
              <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  SELL FINANCIAL PRODUCTS
                </h3>
                <p className="text-gray-600">
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
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2 4h4l2 4h-4l-2 4-2-4H8l-2-4h4l2-4zm0 8l2 4h-4l2-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Customized products
                </h3>
                <p className="text-gray-600 text-sm">
                  Created for people traditional institutions do not serve.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Huge unmet demand
                </h3>
                <p className="text-gray-600 text-sm">
                  300Mn customers in small towns across India.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-1.88-1.64-1.85-.64-3.45-1.48-3.45-3.41 0-1.61 1.19-2.99 3.04-3.33V4h2.67v2.02c1.53.39 2.69 1.5 2.77 3.21h-1.96c-.05-.74-.49-1.39-1.36-1.39-1.05 0-1.42.67-1.42 1.37 0 .64.45 1.03 1.84 1.52 1.92.68 3.49 1.45 3.49 3.52 0 1.81-1.3 3.03-3.09 3.36z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Great commissions
                </h3>
                <p className="text-gray-600 text-sm">
                  Enjoy the industry's leading commissions.
                </p>
              </div>

              {/* Card 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  7-day payment cycle
                </h3>
                <p className="text-gray-600 text-sm">
                  Earnings credited 4 times in a month!
                </p>
              </div>

              {/* Card 5 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Own your customers
                </h3>
                <p className="text-gray-600 text-sm">Upto ₹50,000 Earnings</p>
              </div>

              {/* Card 6 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  App in your language
                </h3>
                <p className="text-gray-600 text-sm">
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
                with Ornexa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-12">
              {/* Partner Review 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    👨‍💼
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                    <div className="text-sm text-gray-500">DSA Partner</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "Ornexa has transformed my business completely. The platform
                  is easy to use and support team is always there to help. I've
                  doubled my income in just 6 months!"
                </blockquote>
                <cite className="font-semibold text-gray-900">
                  Rahul Sharma
                </cite>
              </div>

              {/* Partner Review 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">
                    👨‍💻
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                    <div className="text-sm text-gray-500">Business Owner</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "The payout structure is excellent and payments are always on
                  time. Ornexa has become a reliable partner for my financial
                  business growth."
                </blockquote>
                <cite className="font-semibold text-gray-900">Amit Kumar</cite>
              </div>

              {/* Partner Review 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-xl">
                    👨‍💼
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                    <div className="text-sm text-gray-500">DSA Partner</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "Best platform for financial services! The training provided
                  by Ornexa team helped me understand products better and serve
                  customers effectively."
                </blockquote>
                <cite className="font-semibold text-gray-900">
                  Vikram Singh
                </cite>
              </div>
            </div>

            {/* Partner Stats */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    4.9/5
                  </div>
                  <div className="text-gray-600">Partner Rating</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Active Partners</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
              <div className="md:w-2/3 text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Register as an <span className="text-green-400">Ornexa</span>{" "}
                  Partner
                </h2>
                <p className="text-lg text-gray-200 mb-6">
                  Grow your business. Grow your career. Start earning with
                  India's fast-growing fintech network.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
                  Get Started Now
                </button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/handshake.webp"
                  alt="Handshake"
                  className="max-w-full h-auto max-h-32 object-contain"
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
