"use client";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "DSA Partner",
      rating: 5,
      review:
        "Upay Bharat has transformed my business completely. The platform is easy to use and the support team is always there to help. I've doubled my income in just 6 months!",
      avatar: "👨‍💼",
    },
    {
      name: "Priya Patel",
      role: "Customer",
      rating: 5,
      review:
        "Got my home loan approved within 24 hours through Upay Bharat. The process was so smooth and transparent. Highly recommend their services!",
      avatar: "👩‍💼",
    },
    {
      name: "Amit Kumar",
      role: "Business Owner",
      rating: 5,
      review:
        "The payout structure is excellent and payments are always on time. Upay Bharat has become a reliable partner for my financial business growth.",
      avatar: "👨‍💻",
    },
    {
      name: "Sneha Reddy",
      role: "Customer",
      rating: 5,
      review:
        "Applied for personal loan and got it approved instantly. The interest rates were competitive and the entire process was digital. Amazing experience!",
      avatar: "👩‍🎓",
    },
    {
      name: "Vikram Singh",
      role: "DSA Partner",
      rating: 5,
      review:
        "Best platform for financial services! The training provided by Upay Bharat team helped me understand products better and serve customers effectively.",
      avatar: "👨‍💼",
    },
    {
      name: "Anjali Gupta",
      role: "Customer",
      rating: 5,
      review:
        "Upay Bharat made loan application so simple. I compared multiple banks and chose the best offer through their platform. Saved a lot of time and money!",
      avatar: "👩‍💼",
    },
  ];

  // Create multiple copies for seamless scrolling
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories & Reviews
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Hear from our satisfied customers and partners who have transformed
            their financial journey with Upay Bharat.
          </p>
        </div>

        {/* Continuous Reviews Slideshow */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-scroll-reviews">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 sm:px-4"
              >
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-2 group">
                  {/* Avatar and Rating */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        {review.role}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300">
                    "{review.review}"
                  </blockquote>

                  {/* Author Info */}
                  <cite className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {review.name}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">
              4.9/5
            </div>
            <p className="text-sm sm:text-base text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              10,000+
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Happy Customers
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              98%
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Satisfaction Rate
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between shadow-lg">
          <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Register as an <span className="text-green-400">Upay Bharat</span>{" "}
              Partner
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Grow your business. Grow your career. Start earning with India's
              fast-growing fintech network.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg w-full sm:w-auto">
              Contact Us
            </button>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <img
              src="/handshake.webp"
              alt="Handshake"
              className="max-w-full h-auto max-h-32 object-contain"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-reviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-reviews {
          animation: scroll-reviews 12s linear infinite;
        }

        .animate-scroll-reviews:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll-reviews {
            animation: scroll-reviews 4s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
