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
