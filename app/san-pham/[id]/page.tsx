import Link from 'next/link';
import { ArrowLeft, Phone, CheckCircle2, Package, Truck, Shield, Award } from 'lucide-react';
import productsData from '@/data/products.json';

const getProductData = (id: string) => {
  const product = productsData.products.find(p => p.id === id);
  
  if (!product) {
    return {
      id,
      name: 'Sản phẩm không tồn tại',
      brand: 'N/A',
      description: 'Sản phẩm này không tồn tại hoặc đã bị xóa.',
      unit: 'N/A',
      image: '📦',
      specs: [],
      features: [],
      applications: [],
      packaging: 'N/A',
      storage: 'N/A'
    };
  }

  return {
    ...product,
    specs: product.specs || [],
    features: product.features || [],
    applications: product.applications || [],
    packaging: product.packaging || 'Đang cập nhật',
    storage: product.storage || 'Đang cập nhật',
    description: product.description || product.shortDesc || 'Thông tin chi tiết đang được cập nhật. Vui lòng liên hệ 0967565606 để được tư vấn.'
  };
};

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductData(params.id);

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#0d3354] font-medium">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/san-pham" className="text-gray-600 hover:text-[#0d3354] font-medium">
              Sản phẩm
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Link 
            href="/san-pham"
            className="inline-flex items-center gap-2 text-[#0d3354] font-bold hover:text-[#1a4d7a] mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Quay lại danh sách
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center text-9xl shadow-xl border border-gray-300">
                {product.image}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold text-[#0d3354] bg-blue-100 px-3 py-1.5 rounded-lg">
                  {product.brand}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                {product.description}
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 mb-6 border border-blue-200">
                <div className="text-sm font-bold text-gray-700 mb-2">ĐƠN VỊ TÍNH:</div>
                <div className="text-2xl font-bold text-[#0d3354]">{product.unit}</div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:0967565606"
                  className="flex-1 bg-[#0d3354] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1a4d7a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  Gọi ngay: 0967565606
                </a>
                <Link
                  href="/lien-he"
                  className="flex-1 bg-white text-[#0d3354] px-8 py-4 rounded-xl font-bold border-2 border-[#0d3354] hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                >
                  Yêu cầu báo giá
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <Shield className="text-green-600" size={24} />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Chính hãng</div>
                    <div className="text-xs text-gray-600">100% hàng chính hãng</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <Truck className="text-blue-600" size={24} />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Giao nhanh</div>
                    <div className="text-xs text-gray-600">Giao hàng tận nơi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Specifications */}
            {product.specs && product.specs.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Package className="text-[#0d3354]" />
                  Thông số kỹ thuật
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.specs.map((spec: any, index: number) => (
                    <div key={index} className="flex justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="font-semibold text-gray-700">{spec.label}:</span>
                      <span className="font-bold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="text-[#0d3354]" />
                  Ưu điểm nổi bật
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ứng dụng</h2>
                <ul className="space-y-3">
                  {product.applications.map((app: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-2 h-2 bg-[#0d3354] rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Packaging & Storage */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Đóng gói</h3>
                <p className="text-gray-700 font-medium">{product.packaging}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Bảo quản</h3>
                <p className="text-gray-700 font-medium">{product.storage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0d3354] via-[#1a4d7a] to-[#0d3354] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Quan tâm đến sản phẩm này?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto font-medium">
            Liên hệ ngay để được tư vấn chi tiết và nhận báo giá tốt nhất
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0967565606"
              className="bg-white text-[#0d3354] px-8 py-4 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <Phone size={20} />
              0967565606
            </a>
            <Link
              href="/lien-he"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all border-2 border-white/30"
            >
              Gửi yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
