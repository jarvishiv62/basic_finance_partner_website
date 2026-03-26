import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Terms Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gray-900">Terms & </span>
              <span className="text-green-600">Conditions</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our financial
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-blue-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                1. <span className="text-gray-900">Acceptance of </span>
                <span className="text-green-600">Terms</span>
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing our website, mobile app, or applying for any
                financial services, you agree to these Terms and our Privacy
                Policy.
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-green-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                2. <span className="text-gray-900">Eligibility</span>
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Indian citizen above 18 years
                </li>
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Valid KYC and income documents required
                </li>
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Verifiable contact and address details
                </li>
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Approval subject to internal verification
                </li>
              </ul>
            </div>

            {/* Services Offered */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                3. <span className="text-gray-900">Services </span>
                <span className="text-green-600">Offered</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Credit Cards, Personal Loans, Business Loans, Home Loans, Auto
                Loans, Education Loans, Demat Accounts, Savings Accounts, Micro
                Loans, Group Loans, Private Funding and more.
              </p>
            </div>

            {/* User Obligations */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                4. User <span className="text-gray-900">Obligations</span>
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Provide accurate information
                </li>
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Use services legally
                </li>
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Repay loans on time
                </li>
                <li className="flex items-start">
                  <span className="font-medium">•</span>
                  Avoid misuse of content or technology
                </li>
              </ul>
            </div>

            {/* Charges & Fees */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                5. <span className="text-gray-900">Charges & </span>
                <span className="text-green-600">Fees</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Processing fees, interest rates, penalties, and other charges
                will be clearly mentioned in your agreement.
              </p>
            </div>

            {/* Loan Approval & Disbursement */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                6. Loan <span className="text-gray-900">Approval & </span>
                <span className="text-green-600">Disbursement</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Loan approval depends on verification and creditworthiness.
                Disbursement usually takes 1–7 business days after approval.
              </p>
            </div>

            {/* Data Usage & Consent */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                7. Data <span className="text-gray-900">Usage & </span>
                <span className="text-green-600">Consent</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Your data may be used for credit assessment, shared with
                financial partners, and used for communication related to
                services.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                8. <span className="text-gray-900">Limitation of </span>
                <span className="text-green-600">Liability</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We are not responsible for system outages, delays, third-party
                misuse, or rejected applications.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                9. <span className="text-gray-900">Intellectual </span>
                <span className="text-green-600">Property</span>
              </h2>
              <p className="text-gray-700 mb-4">
                All branding, content, and technology belong to the company.
                Unauthorized use is prohibited.
              </p>
            </div>

            {/* Termination of Services */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                10. <span className="text-gray-900">Termination of </span>
                <span className="text-green-600">Services</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Services may be terminated for violations, fraud, or payment
                defaults.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="border-2 border-purple-200 bg-purple-50 hover:bg-purple-100 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                11. <span className="text-gray-900">Changes to </span>
                <span className="text-green-600">Terms</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Terms may change anytime. Continued use implies acceptance.
              </p>
            </div>

            {/* Final Agreement */}
            <div className="bg-blue-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                By using <span className="text-green-600">upay bharat</span>,
                you agree to these Terms & Conditions. Your trust and
                cooperation help us build a stronger, more financially inclusive
                India.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
