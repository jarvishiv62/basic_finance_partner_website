export default function TrustSection() {
  const trustPoints = [
    {
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Trusted Banking Partnerships",
      description:
        "Collaborate with leading banks to build credibility and expand your business reach.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
      title: "High Payouts for Our Partners",
      description:
        "Enjoy higher returns with clear, transparent payout structures and reliable support.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Dedicated Guidance & Support",
      description:
        "We understand your unique goals and guide you toward sustainable success.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Millions Across India Trust Upay Bharat
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We are committed to providing you with the best financial services
            with complete transparency and security.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 ${
                  index === 0
                    ? "bg-blue-100"
                    : index === 1
                      ? "bg-orange-100"
                      : "bg-purple-100"
                }`}
              >
                <div
                  className={`${index === 0 ? "text-blue-600" : index === 1 ? "text-orange-600" : "text-purple-600"}`}
                >
                  {point.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Badge */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center space-x-3 sm:space-x-4 bg-white rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <span className="text-base sm:text-lg font-semibold text-gray-900">
              Trusted by 10,000+ customers across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
