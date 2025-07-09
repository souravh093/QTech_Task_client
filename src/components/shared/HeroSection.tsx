import {
  ArrowRight,
  ShoppingBag,
  Star,
  Users,
  Sparkles,
  Zap,
  TrendingUp,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop&crop=center",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

        <div className="absolute top-32 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-64 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce animation-delay-2000"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">New Collection 2025</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Shop the
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                  Future
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Today
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Experience next-level shopping with AI-powered recommendations,
                instant delivery, and products that adapt to your lifestyle.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 bg-accent-foreground border-purple-500/50 text-white hover:bg-purple-500/10 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-purple-400"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 mr-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      50K+
                    </span>
                  </div>
                  <p className="text-purple-200 text-sm font-medium">
                    Active Users
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 mr-3">
                      <ShoppingBag className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      1M+
                    </span>
                  </div>
                  <p className="text-blue-200 text-sm font-medium">
                    Products Sold
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 mr-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                      99%
                    </span>
                  </div>
                  <p className="text-yellow-200 text-sm font-medium">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                <img
                  src={heroImages[currentImage]}
                  alt="Modern Shopping Experience"
                  className="relative rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 w-full h-[500px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImage === index
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-emerald-400/50 transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <div className="w-3 h-3 bg-emerald-300 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-bold text-sm">Free Shipping</div>
                  <div className="text-xs opacity-90">On orders $50+</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-yellow-400/50 transform rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="font-bold text-sm">24/7 Support</div>
                  <div className="text-xs opacity-90">Always here</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-400/50 transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-300" />
                <div>
                  <div className="font-bold text-sm">4.9★</div>
                  <div className="text-xs opacity-90">Rating</div>
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-32 left-8 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute top-40 left-12 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 mix-blend-multiply"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
