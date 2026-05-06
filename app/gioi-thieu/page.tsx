import { Building2, Target, Eye, Award, Users, CheckCircle2, TrendingUp } from 'lucide-react';

export default function GioiThieu() {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Uy tín',
      description: 'Luôn đặt uy tín và chất lượng lên hàng đầu trong mọi giao dịch'
    },
    {
      icon: Users,
      title: 'Tận tâm',
      description: 'Phục vụ khách hàng với thái độ nhiệt tình, chu đáo nhất'
    },
    {
      icon: Award,
      title: 'Chất lượng',
      description: 'Cam kết cung cấp sản phẩm chính hãng, chất lượng cao'
    },
    {
      icon: TrendingUp,
      title: 'Phát triển',
      description: 'Không ngừng đổi mới, cải tiến để phục vụ khách hàng tốt hơn'
    }
  ];

  const milestones = [
    { year: '2024', event: 'Thành lập công ty', description: 'Đăng ký kinh doanh ngày 27/07/2024' },
    { year: '2024', event: 'Mở rộng kho hàng', description: 'Đầu tư kho bãi hiện đại tại Cẩm Thủy' },
    { year: '2025', event: 'Phát triển mạng lưới', description: 'Mở rộng phạm vi phục vụ toàn tỉnh' },
    { year: '2026', event: 'Đối tác chiến lược', description: 'Hợp tác với các nhà sản xuất hàng đầu' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] text-white py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Về chúng tôi</h1>
            <p className="text-xl text-orange-100">
              Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình - Đối tác tin cậy cho mọi công trình
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-[#0d3354] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🏢 Giới thiệu công ty
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Được thành lập vào ngày 27 tháng 07 năm 2024, Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình 
                  tự hào là đơn vị cung cấp vật liệu xây dựng uy tín tại tỉnh Thanh Hóa.
                </p>
                <p>
                  Với mã số doanh nghiệp <strong>2803125183</strong>, chúng tôi chuyên cung cấp các loại vật liệu 
                  xây dựng chất lượng cao như xi măng, sắt thép, gạch, cát đá, sơn và các vật liệu phụ trợ khác.
                </p>
                <p>
                  Trụ sở chính đặt tại Nhà ông Hà Văn Cường, Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, 
                  Tỉnh Thanh Hóa, Việt Nam - vị trí thuận lợi để phục vụ khách hàng trên toàn tỉnh.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-3xl p-12 shadow-2xl">
                <Building2 size={280} className="text-white/20 mx-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border-4 border-blue-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0d3354] mb-2">500+</div>
                  <div className="text-gray-600 font-semibold">Khách hàng tin tưởng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cung cấp vật liệu xây dựng chất lượng cao với giá cả hợp lý, góp phần xây dựng nên những 
                công trình vững chắc, bền đẹp. Chúng tôi cam kết mang đến sự hài lòng tuyệt đối cho khách hàng 
                thông qua dịch vụ chuyên nghiệp và tận tâm.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trở thành nhà cung cấp vật liệu xây dựng hàng đầu tại Thanh Hóa, được khách hàng tin tưởng 
                và lựa chọn. Chúng tôi hướng tới việc mở rộng mạng lưới phân phối, đa dạng hóa sản phẩm 
                và nâng cao chất lượng dịch vụ để đáp ứng mọi nhu cầu của khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những giá trị mà chúng tôi luôn hướng tới trong mọi hoạt động kinh doanh
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Những cột mốc quan trọng trong quá trình xây dựng và phát triển công ty
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#0d3354] rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-2xl p-6 border border-gray-700 group-hover:border-[#0d3354] transition-colors">
                    <h3 className="text-2xl font-bold mb-2">{milestone.event}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tại sao chọn An Bình?
              </h2>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#0d3354] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sản phẩm chính hãng</h3>
                    <p className="text-gray-600">
                      Cam kết 100% sản phẩm chính hãng, có nguồn gốc xuất xứ rõ ràng từ các nhà sản xuất uy tín
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#0d3354] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Giá cả cạnh tranh</h3>
                    <p className="text-gray-600">
                      Giá tốt nhất thị trường với nhiều chương trình khuyến mãi hấp dẫn cho khách hàng thân thiết
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#0d3354] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Giao hàng tận nơi</h3>
                    <p className="text-gray-600">
                      Dịch vụ vận chuyển nhanh chóng, đúng hẹn trong khu vực Thanh Hóa và các tỉnh lân cận
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#0d3354] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tư vấn chuyên nghiệp</h3>
                    <p className="text-gray-600">
                      Đội ngũ nhân viên giàu kinh nghiệm, nhiệt tình tư vấn giúp khách hàng chọn được sản phẩm phù hợp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
