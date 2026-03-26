import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-900 py-8 sm:py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  About Us
                </span>
              </Link>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Upay Bharat is a digital financial services platform focused on
              providing simple, transparent, and accessible solutions. We aim to
              help individuals and businesses connect with trusted financial
              services through modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  Become Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
              Contact
            </h3>

            {/* First Office */}
            <div className="space-y-1">
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Head Office
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Metukha Road, Near Nanpara Bay Pass, District – Bahraich (U.P.),
                Pin Code – 271801
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Customer Care: 7379912361
              </p>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-300 my-3"></div>

            {/* Second Office */}
            <div className="space-y-1">
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Corporate Office
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Yadav complex, Sri nagar Siwan, Near Canara Bank, Opposite
                Citycart mall, Srinagar Siwan, Bihar – Pincode 841226
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Customer Care: 9118070708
              </p>
            </div>

            {/* General Contact */}
            <div className="border-t border-gray-300 mt-3 pt-3">
              <p className="text-gray-600 text-xs sm:text-sm">
                Email: support@upaybharat.online
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            2026 | Upay Bharat — All Rights Reserved — Powered By Trade X India
          </p>
        </div>
      </div>
    </footer>
  );
}
