export default function ProductsSection() {
  const products = [
    {
      title: "Credit Card",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      ),
      color: "bg-green-100",
    },
    {
      title: "Secured Card",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      color: "bg-purple-100",
    },
    {
      title: "Instant Loan",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      color: "bg-blue-100",
    },
    {
      title: "Personal Loan",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-1.88-1.64-1.85-.64-3.45-1.48-3.45-3.41 0-1.61 1.19-2.99 3.04-3.33V4h2.67v2.02c1.53.39 2.69 1.5 2.77 3.21h-1.96c-.05-.74-.49-1.39-1.36-1.39-1.05 0-1.42.67-1.42 1.37 0 .64.45 1.03 1.84 1.52 1.92.68 3.49 1.45 3.49 3.52 0 1.81-1.3 3.03-3.09 3.36z" />
        </svg>
      ),
      color: "bg-orange-100",
    },
    {
      title: "Business Loan",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v2h-2v-2h2v-2h2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
      color: "bg-red-100",
    },
    {
      title: "Saving Account",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-1.88-1.64-1.85-.64-3.45-1.48-3.45-3.41 0-1.61 1.19-2.99 3.04-3.33V4h2.67v2.02c1.53.39 2.69 1.5 2.77 3.21h-1.96c-.05-.74-.49-1.39-1.36-1.39-1.05 0-1.42.67-1.42 1.37 0 .64.45 1.03 1.84 1.52 1.92.68 3.49 1.45 3.49 3.52 0 1.81-1.3 3.03-3.09 3.36z" />
        </svg>
      ),
      color: "bg-indigo-100",
    },
    {
      title: "Demat Account",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12l-4-4v3H3v2h15v3z" />
        </svg>
      ),
      color: "bg-teal-100",
    },
    {
      title: "Insurance",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3L7-3.11v8.8z" />
        </svg>
      ),
      color: "bg-pink-100",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bringing You the Best Products from Top Banks
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out text-center cursor-pointer group"
            >
              <div
                className={`w-16 h-16 ${product.color} rounded-full flex items-center justify-center mx-auto mb-4 text-gray-700 group-hover:scale-110 transition-transform duration-300`}
              >
                {product.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
