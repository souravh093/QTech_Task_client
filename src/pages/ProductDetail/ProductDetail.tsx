import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useLazyGetProductByIdQuery } from "@/redux/services/baseApi";
import { ProductDetailSkeleton } from "@/components/shared/ProductDetailsSkeleton";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const [getProduct, { data: product, isLoading }] =
    useLazyGetProductByIdQuery();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id, getProduct]);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (!product?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const productImages = [
    product?.data.image,
    product?.data.image,
    product?.data.image,
    product?.data.image,
  ];

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product?.data.id,
        name: product?.data.name,
        price: product?.data.price,
        image: product?.data.image,
        description: product?.data.description,
        category: product?.data.category,
        quantity: quantity,
      })
    );
    toast.success(`${quantity} ${product.name}(s) added to cart!`);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt={product?.data.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-blue-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product?.data.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Category:{" "}
                  <span className="font-bold">{product?.data.category}</span>
                </Badge>

                <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">
                  Brand:{" "}
                  <span className="font-bold">{product?.data.brand}</span>
                </Badge>

                <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Stock:
                  <span className="font-bold">
                    {product?.data.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product?.data.name}
              </h1>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product?.data.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product?.data.rating} ({product?.data.reviews} reviews)
                </span>
              </div>

              <div className="text-4xl font-bold text-blue-600 mb-6">
                ${product?.data.price}
              </div>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                {product?.data?.description?.slice(0, 260) || ""}...
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="h-10 w-10 p-0"
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Free Shipping</h4>
                  <p className="text-xs text-gray-600">On orders over $50</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <RotateCcw className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Easy Returns</h4>
                  <p className="text-xs text-gray-600">30-day return policy</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Secure Payment</h4>
                  <p className="text-xs text-gray-600">SSL encrypted</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-lg font-bold">Description:</h1>
          <p className="text-gray-600 mt-2">{product?.data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
