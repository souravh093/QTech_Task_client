import { ArrowRight, ShoppingBag, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-white bg-opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover Amazing
                <span className="block text-yellow-400">Products</span>
                Just for You
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Shop the latest trends with unbeatable prices. Free shipping on
                orders over $50 and hassle-free returns.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-blue-100 text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ShoppingBag className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-blue-100 text-sm">Products</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-blue-100 text-sm">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&crop=center"
                alt="Shopping Experience"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-sm">Free Shipping</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-800 p-4 rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="font-semibold text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
