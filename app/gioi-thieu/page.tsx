import { Phone, Mail, MapPin, Building2, FileText, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function GioiThieu() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0d3354] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Giới thiệu</h1>
            <p className="text-xl text-blue-100">
              Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* About */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0d3354]">
                    Về chúng tôi
                  </h2>
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình được thành lập ngày 24 tháng 07 năm 2024, 
                      với mã số doanh nghiệp <strong>2803125183</strong> do Sở Kế hoạch và Đầu tư Tỉnh Thanh Hóa cấp.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Chúng tôi chuyên cung cấp các loại vật liệu xây dựng chất lượng cao bao gồm xi măng, sắt thép, 
                      gạch xây, cát đá, sơn và các vật liệu phụ trợ khác từ các thương hiệu uy tín như Hoàng Thạch, 
                      Nghi Sơn, Việt Nhật, Hòa Phát, Pomina, Viglacera, Dulux, Jotun...
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Với vị trí thuận lợi tại Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, chúng tôi sẵn sàng phục vụ 
                      khách hàng trên toàn tỉnh Thanh Hóa và các tỉnh lân cận.
                    </p>
                  </div>
                </div>

                {/* Business Sectors */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0d3354]">
                    Ngành nghề kinh doanh
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        code: '4752',
                        name: 'Bán lẻ đồ ngũ kim, sơn, kính và thiết bị lắp đặt khác trong xây dựng trong các cửa hàng chuyên doanh'
                      },
                      {
                        code: '4759',
                        name: 'Bán lẻ đồ điện gia dụng, giường, tủ, bàn, ghế và đồ nội thất tương tự, đèn và bộ đèn điện, đồ dùng gia đình khác chưa được phân vào đâu trong các cửa hàng chuyên doanh'
                      },
                      {
                        code: '4711',
                        name: 'Bán lẻ trong các cửa hàng không chuyên doanh (cửa hàng tổng hợp); đồ uống, thuốc lá, thuốc lào; chiếm tỷ trọng lớn trong các cửa hàng kinh doanh tổng hợp'
                      },
                      {
                        code: '4663',
                        name: 'Bán buôn vật liệu, thiết bị lắp đặt khác trong xây dựng'
                      },
                      {
                        code: '4690',
                        name: 'Bán buôn tổng hợp'
                      }
                    ].map((sector, index) => (
                      <div key={index} className="border-l-4 border-[#0d3354] pl-4 py-2">
                        <div className="text-sm font-bold text-[#0d3354] mb-1">
                          Mã ngành: {sector.code}
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {sector.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission & Vision */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0d3354]">
                    Sứ mệnh & Tầm nhìn
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Sứ mệnh</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Cung cấp vật liệu xây dựng chất lượng cao với giá cả hợp lý, góp phần xây dựng nên những 
                        công trình vững chắc, bền đẹp. Chúng tôi cam kết mang đến sự hài lòng tuyệt đối cho khách hàng 
                        thông qua dịch vụ chuyên nghiệp và tận tâm.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Tầm nhìn</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Trở thành nhà cung cấp vật liệu xây dựng hàng đầu tại Thanh Hóa, được khách hàng tin tưởng 
                        và lựa chọn. Chúng tôi hướng tới việc mở rộng mạng lưới phân phối, đa dạng hóa sản phẩm 
                        và nâng cao chất lượng dịch vụ.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#0d3354]">
                    Cam kết của chúng tôi
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'Sản phẩm chính hãng',
                        desc: '100% hàng chính hãng, có tem nhãn và CO/CQ đầy đủ từ nhà sản xuất'
                      },
                      {
                        title: 'Giá cả cạnh tranh',
                        desc: 'Giá tốt nhất thị trường, nhiều chương trình ưu đãi cho khách hàng thân thiết'
                      },
                      {
                        title: 'Giao hàng tận nơi',
                        desc: 'Vận chuyển nhanh chóng, đúng hẹn trong khu vực Thanh Hóa và lân cận'
                      },
                      {
                        title: 'Tư vấn chuyên nghiệp',
                        desc: 'Đội ngũ nhân viên giàu kinh nghiệm, tư vấn tận tâm'
                      }
                    ].map((item, index) => (
                      <div key={index} className="border-l-4 border-gray-300 pl-4 py-2 hover:border-[#0d3354] transition-colors">
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-[100px] space-y-6">
                  {/* Company Info Card */}
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-300">
                      Thông tin doanh nghiệp
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-start gap-3">
                          <Building2 className="text-[#0d3354] flex-shrink-0 mt-1" size={20} />
                          <div>
                            <div className="text-xs text-gray-500 font-semibold mb-1">Tên công ty</div>
                            <div className="text-sm font-bold text-gray-900">
                              Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start gap-3">
                          <FileText className="text-[#0d3354] flex-shrink-0 mt-1" size={20} />
                          <div>
                            <div className="text-xs text-gray-500 font-semibold mb-1">Mã số doanh nghiệp</div>
                            <div className="text-sm font-bold text-gray-900">2803125183</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start gap-3">
                          <Calendar className="text-[#0d3354] flex-shrink-0 mt-1" size={20} />
                          <div>
                            <div className="text-xs text-gray-500 font-semibold mb-1">Ngày thành lập</div>
                            <div className="text-sm font-bold text-gray-900">24/07/2024</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start gap-3">
                          <DollarSign className="text-[#0d3354] flex-shrink-0 mt-1" size={20} />
                          <div>
                            <div className="text-xs text-gray-500 font-semibold mb-1">Vốn điều lệ</div>
                            <div className="text-sm font-bold text-gray-900">2.000.000.000 VNĐ</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-[#0d3354] rounded-lg p-6 text-white">
                    <h3 className="text-lg font-bold mb-4">Liên hệ với chúng tôi</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="flex-shrink-0 mt-1" size={18} />
                        <div>
                          <div className="text-xs text-blue-200 mb-1">Điện thoại</div>
                          <a href="tel:0967565606" className="font-bold hover:text-blue-200 transition-colors">
                            0967565606
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="flex-shrink-0 mt-1" size={18} />
                        <div>
                          <div className="text-xs text-blue-200 mb-1">Email</div>
                          <div className="text-sm">(Đang cập nhật)</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="flex-shrink-0 mt-1" size={18} />
                        <div>
                          <div className="text-xs text-blue-200 mb-1">Địa chỉ</div>
                          <div className="text-sm leading-relaxed">
                            Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, Tỉnh Thanh Hóa
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/20">
                      <Link
                        href="/lien-he"
                        className="block w-full bg-white text-[#0d3354] text-center px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                      >
                        Gửi yêu cầu
                      </Link>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Xem thêm</h3>
                    <div className="space-y-2">
                      <Link
                        href="/san-pham"
                        className="block text-gray-700 hover:text-[#0d3354] font-semibold py-2 border-b border-gray-200 last:border-0 transition-colors"
                      >
                        Sản phẩm →
                      </Link>
                      <Link
                        href="/lien-he"
                        className="block text-gray-700 hover:text-[#0d3354] font-semibold py-2 border-b border-gray-200 last:border-0 transition-colors"
                      >
                        Liên hệ →
                      </Link>
                    </div>
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
