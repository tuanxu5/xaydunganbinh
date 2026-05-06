import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0a0f1a] via-[#0d1420] to-[#0a0f1a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Larger Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0d3354] rounded-xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-2xl">AB</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white group-hover:text-blue-200 transition-colors">An Bình</span>
                <span className="text-xs text-gray-400 font-semibold">Vật Liệu Xây Dựng</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
              Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình - Đối tác tin cậy cho mọi công trình xây dựng tại Thanh Hóa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-white/10">Liên kết</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Trang chủ' },
                { href: '/gioi-thieu', label: 'Giới thiệu' },
                { href: '/san-pham', label: 'Sản phẩm' },
                { href: '/lien-he', label: 'Liên hệ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all text-sm flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight size={16} className="text-white opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-white/10">Sản phẩm</h3>
            <ul className="space-y-3">
              {['Xi măng', 'Sắt thép', 'Gạch xây', 'Cát đá', 'Sơn', 'Vật liệu khác'].map((product) => (
                <li key={product}>
                  <Link 
                    href="/san-pham" 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all text-sm flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight size={16} className="text-white opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-white/10">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d3354] group-hover:border-[#0d3354] transition-all">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="text-sm text-gray-300 leading-relaxed font-medium pt-1.5">
                  Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, Tỉnh Thanh Hóa
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d3354] group-hover:border-[#0d3354] transition-all">
                  <Phone size={18} className="text-white" />
                </div>
                <a href="tel:0967565606" className="text-sm text-gray-300 hover:text-white transition-colors font-bold">
                  0967565606
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d3354] group-hover:border-[#0d3354] transition-all">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  (Đang cập nhật)
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d3354] group-hover:border-[#0d3354] transition-all">
                  <Clock size={18} className="text-white" />
                </div>
                <div className="text-sm text-gray-300 font-medium pt-1.5">
                  <div>T2 - T7: 7:00 - 18:00</div>
                  <div>CN: 8:00 - 17:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p className="font-semibold text-gray-300">© {currentYear} Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/gioi-thieu" className="text-gray-400 hover:text-white transition-colors font-semibold">
                Về chúng tôi
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/lien-he" className="text-gray-400 hover:text-white transition-colors font-semibold">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
