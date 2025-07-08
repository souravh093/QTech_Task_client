import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/constant/products";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category,
        quantity: 1,
      })
    );
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 left-2 bg-blue-600 hover:bg-blue-700">
          {product.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="flex items-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
