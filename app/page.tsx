import Link from 'next/link';
import { 
  Building2, 
  Shield, 
  Truck, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  Star,
  Users,
  Package,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Chất lượng đảm bảo',
      description: 'Sản phẩm chính hãng, có nguồn gốc xuất xứ rõ ràng'
    },
    {
      icon: Truck,
      title: 'Giao hàng nhanh',
      description: 'Vận chuyển tận nơi, đúng hẹn trong khu vực Thanh Hóa'
    },
    {
      icon: Award,
      title: 'Giá cạnh tranh',
      description: 'Cam kết giá tốt nhất thị trường, nhiều ưu đãi'
    },
    {
      icon: Users,
      title: 'Tư vấn chuyên nghiệp',
      description: 'Đội ngũ nhân viên giàu kinh nghiệm, tận tâm'
    }
  ];

  const products = [
    {
      name: 'Xi măng',
      description: 'Xi măng PCB30, PCB40 các loại',
      image: '🏗️'
    },
    {
      name: 'Sắt thép',
      description: 'Thép Việt Nhật, Hòa Phát, Pomina',
      image: '⚙️'
    },
    {
      name: 'Gạch xây',
      description: 'Gạch block, gạch đỏ, gạch không nung',
      image: '🧱'
    },
    {
      name: 'Cát đá',
      description: 'Cát vàng, đá 1x2, đá 4x6',
      image: '⛰️'
    },
    {
      name: 'Sơn',
      description: 'Sơn Dulux, Jotun, Nippon',
      image: '🎨'
    },
    {
      name: 'Vật liệu khác',
      description: 'Ngói, ống nước, điện, phụ kiện',
      image: '🔧'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Khách hàng tin tưởng' },
    { icon: Package, value: '1000+', label: 'Đơn hàng hoàn thành' },
    { icon: TrendingUp, value: '5+', label: 'Năm kinh nghiệm' },
    { icon: Star, value: '4.9/5', label: 'Đánh giá trung bình' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ Đối tác tin cậy cho mọi công trình
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Vật Liệu Xây Dựng
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                  Chất Lượng Cao
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình - Chuyên cung cấp xi măng, sắt thép, gạch, cát đá và các vật liệu xây dựng chính hãng tại Thanh Hóa
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/san-pham"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  Xem sản phẩm
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/lien-he"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-all"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 shadow-2xl">
                <Building2 size={300} className="text-white/20 mx-auto" />
                <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={24} />
                    <div>
                      <div className="font-bold text-gray-900">Chính hãng 100%</div>
                      <div className="text-sm text-gray-600">Đảm bảo chất lượng</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn An Bình?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ và sản phẩm tốt nhất cho khách hàng
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 border border-orange-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-orange-500" size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đa dạng các loại vật liệu xây dựng chất lượng cao
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-48 flex items-center justify-center text-8xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link 
                    href="/san-pham"
                    className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2 group"
                  >
                    Xem chi tiết
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/san-pham"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Xem tất cả sản phẩm
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bạn cần tư vấn về vật liệu xây dựng?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/lien-he"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Liên hệ ngay
            </Link>
            <a 
              href="tel:0123456789"
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-all border-2 border-white/20"
            >
              Gọi: 0123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
