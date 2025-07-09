export const ProductDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>

            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-200 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
              </div>

              <div className="h-10 w-3/4 bg-gray-200 rounded-lg animate-pulse mb-4"></div>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 bg-gray-200 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Price Skeleton */}
              <div className="h-12 w-32 bg-gray-200 rounded-lg animate-pulse mb-6"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Separator Skeleton */}
            <div className="h-px w-full bg-gray-200 animate-pulse"></div>

            {/* Quantity and Add to Cart Skeleton */}
            <div className="space-y-4">
              <div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="h-12 flex-1 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>

            {/* Separator Skeleton */}
            <div className="h-px w-full bg-gray-200 animate-pulse"></div>

            {/* Features Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mx-auto mb-1"></div>
                  <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Long description Skeleton */}
        <div className="mt-12">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};