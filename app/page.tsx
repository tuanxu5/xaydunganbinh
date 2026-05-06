import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, CheckCircle2, Building2, Package, Truck, Award } from 'lucide-react';
import productsData from '@/data/products.json';
import CountUp from '@/components/CountUp';

export default function HomePage() {
  const { categories, products } = productsData;

  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner.jpg"
            alt="Vật liệu xây dựng An Bình"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded text-sm font-bold mb-6 border border-white/20">
              Vật liệu xây dựng chất lượng cao
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Công ty TNHH Kinh Doanh<br />
              Vật Liệu Xây Dựng An Bình
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Chuyên cung cấp xi măng, sắt thép, gạch, cát đá, sơn và các vật liệu xây dựng 
              chính hãng tại Thanh Hóa
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/san-pham"
                className="bg-[#0d3354] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1a4d7a] transition-colors shadow-lg"
              >
                Xem sản phẩm
              </Link>
              <a 
                href="tel:0967565606"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold border border-white/30 hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Phone size={20} />
                0967565606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Card - Overlapping Hero */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: 500, suffix: '+', label: 'Khách hàng tin tưởng' },
                  { value: 1000, suffix: '+', label: 'Đơn hàng hoàn thành' },
                  { value: 50, suffix: '+', label: 'Sản phẩm đa dạng' },
                  { value: 2024, suffix: '', label: 'Năm thành lập' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl lg:text-5xl font-bold text-[#0d3354] mb-2 transition-transform group-hover:scale-110">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Về chúng tôi
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình được thành lập năm 2024, 
                    chuyên cung cấp các loại vật liệu xây dựng chất lượng cao tại Thanh Hóa.
                  </p>
                  <p>
                    Chúng tôi cam kết cung cấp sản phẩm chính hãng từ các thương hiệu uy tín như 
                    Hoàng Thạch, Nghi Sơn, Việt Nhật, Hòa Phát, Pomina, Viglacera, Dulux, Jotun...
                  </p>
                  <div className="pt-4">
                    <Link 
                      href="/gioi-thieu"
                      className="inline-flex items-center gap-2 text-[#0d3354] font-bold hover:gap-3 transition-all"
                    >
                      Tìm hiểu thêm
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-[320px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/banner-company.jpg"
                  alt="Công ty An Bình"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cam kết của chúng tôi
              </h2>
              <p className="text-gray-600">
                Những giá trị mà chúng tôi mang lại cho khách hàng
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Package,
                  title: 'Hàng chính hãng',
                  desc: '100% sản phẩm chính hãng, có tem nhãn đầy đủ'
                },
                {
                  icon: Truck,
                  title: 'Giao hàng nhanh',
                  desc: 'Vận chuyển tận nơi trong khu vực Thanh Hóa'
                },
                {
                  icon: Award,
                  title: 'Giá cạnh tranh',
                  desc: 'Cam kết giá tốt nhất thị trường'
                },
                {
                  icon: CheckCircle2,
                  title: 'Tư vấn tận tâm',
                  desc: 'Đội ngũ nhân viên giàu kinh nghiệm'
                }
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0d3354] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Sản phẩm nổi bật
                </h2>
                <p className="text-gray-600">
                  Các sản phẩm vật liệu xây dựng chất lượng cao
                </p>
              </div>
              <Link 
                href="/san-pham"
                className="hidden md:inline-flex items-center gap-2 text-[#0d3354] font-bold hover:gap-3 transition-all"
              >
                Xem tất cả
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/san-pham/${product.id}`}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#0d3354] transition-all hover:shadow-lg"
                >
                  <div className="bg-white h-48 flex items-center justify-center overflow-hidden">
                    {product.image.startsWith('/') ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <span className="text-7xl transform group-hover:scale-110 transition-transform">
                        {product.image}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold text-[#0d3354] bg-blue-50 px-2 py-1 rounded inline-block mb-3">
                      {product.brand}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#0d3354] transition-colors line-clamp-2 min-h-[48px]">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-sm font-bold text-[#0d3354]">Liên hệ</span>
                      <ArrowRight size={18} className="text-gray-400 group-hover:text-[#0d3354] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link 
                href="/san-pham"
                className="inline-flex items-center gap-2 text-[#0d3354] font-bold"
              >
                Xem tất cả sản phẩm
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Khách hàng nói gì về chúng tôi
              </h2>
              <p className="text-gray-600">
                Những đánh giá thực tế từ khách hàng đã sử dụng dịch vụ
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Anh Nguyễn Văn A',
                  role: 'Chủ công trình tại Cẩm Thủy',
                  content: 'Vật liệu chất lượng, giá cả hợp lý. Giao hàng đúng hẹn, nhân viên tư vấn nhiệt tình. Tôi rất hài lòng và sẽ tiếp tục sử dụng dịch vụ.',
                  rating: 5
                },
                {
                  name: 'Chị Trần Thị B',
                  role: 'Xây nhà tại Thanh Hóa',
                  content: 'Mua xi măng và sắt thép ở đây, hàng chính hãng, có đầy đủ giấy tờ. Giá tốt hơn nhiều nơi khác. Rất đáng tin cậy!',
                  rating: 5
                },
                {
                  name: 'Anh Lê Văn C',
                  role: 'Nhà thầu xây dựng',
                  content: 'Đã hợp tác nhiều công trình, An Bình luôn đảm bảo chất lượng và tiến độ giao hàng. Đội ngũ chuyên nghiệp, giá cạnh tranh.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0d3354] transition-all relative"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-6xl text-gray-200 font-serif leading-none">
                    "
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-12 h-12 bg-[#0d3354] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.name.charAt(4)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d3354] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Cần tư vấn về vật liệu xây dựng?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:0967565606"
              className="bg-white text-[#0d3354] px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <Phone size={20} />
              0967565606
            </a>
            <Link 
              href="/lien-he"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold border border-white/20 hover:bg-white/20 transition-colors"
            >
              Gửi yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
