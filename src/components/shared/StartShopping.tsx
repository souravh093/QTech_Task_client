const StartShopping = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of satisfied customers and experience the best online
          shopping
        </p>
        <button
          onClick={() =>
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Browse All Products
        </button>
      </div>
    </section>
  );
};

export default StartShopping;
