import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Privacy Policy Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gray-900">Privacy </span>
              <span className="text-green-600">Policy</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upay Bharat respects your privacy and is committed to safeguarding
              your personal and financial information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Information We Collect */}
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">1. Information We </span>
                <span className="text-green-600">Collect</span>
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium">• Personal details:</span>
                  <span className="text-gray-600">
                    {" "}
                    (Name, DOB, Address, Phone, Email)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">• KYC documents:</span>
                  <span className="text-gray-600">
                    {" "}
                    (Aadhaar, PAN, Passport, Driving License)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">• Financial information:</span>
                  <span className="text-gray-600">
                    {" "}
                    (Bank details, Income proof, Credit score)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">• Device & usage data:</span>
                  <span className="text-gray-600">
                    {" "}
                    (IP address, browser type, location)
                  </span>
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">2. How We Use </span>
                <span className="text-green-600">Information</span>
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium">
                    • Processing loans, credit cards & financial services
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Identity verification & eligibility assessment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Customer support & notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Analytics & performance improvements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Legal & regulatory compliance
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">3. Data </span>
                <span className="text-green-600">Sharing</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Your data may be securely shared with:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium">• Partner Banks & NBFCs</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">• Credit Bureaus</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Technology & Cloud Providers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Government / Regulatory Authorities
                  </span>
                  <span className="text-gray-600"> (if required)</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4 font-medium">
                We never sell your personal data.
              </p>
            </div>

            {/* Data Security */}
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">4. Data </span>
                <span className="text-green-600">Security</span>
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium">
                    • SSL encrypted data transmission
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Secure cloud infrastructure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Role-based access control
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">• Regular security audits</span>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">5. Your </span>
                <span className="text-green-600">Rights</span>
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium">
                    • Access & update your personal information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">
                    • Opt out of marketing communications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">• Request deletion</span>
                  <span className="text-gray-600">
                    {" "}
                    (subject to legal conditions)
                  </span>
                </li>
              </ul>
            </div>

            {/* Cookies & Tracking */}
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">6. </span>
                <span className="text-green-600">Cookies & Tracking</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies to enhance website performance and user
                experience. You may disable cookies through your browser
                settings.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">7. Policy </span>
                <span className="text-green-600">Updates</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy periodically. Changes will be
                published on our official website.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-gray-900">Contact </span>
                <span className="text-green-600">Upay Bharat</span>
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-gray-600 mb-4">
                  If you have any questions regarding our Privacy Policy, data
                  protection practices, or financial services, feel free to
                  reach out to us.
                </p>
                <p className="text-gray-600 mb-4">
                  We typically respond within 24–48 business hours.
                </p>
                <div className="bg-white rounded-lg p-4 inline-block">
                  <p className="font-bold text-gray-900 mb-2">Upay Bharat</p>
                  <p className="text-gray-700">
                    Head Office: Metukha Road, Near Nanpara Bay Pass, District –
                    Bahraich (U.P.), Pin Code – 271801.
                  </p>
                  <p className="text-gray-700">Call & Whatsapp: 9651459870</p>
                  <p className="text-gray-700">
                    Email: support@upaybharat.online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
