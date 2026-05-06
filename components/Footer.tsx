import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Larger Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0d3354] rounded-xl blur-sm opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AB</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">An Bình</span>
                <span className="text-xs text-gray-400">Vật Liệu Xây Dựng</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
              Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình - Đối tác tin cậy cho mọi công trình xây dựng tại Thanh Hóa.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-[#0d3354] hover:bg-[#0d3354] rounded-lg flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <span className="text-lg">📘</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-[#0d3354] hover:bg-[#0d3354] rounded-lg flex items-center justify-center transition-all group"
                aria-label="Youtube"
              >
                <span className="text-lg">📺</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 border border-gray-700 hover:border-[#0d3354] hover:bg-[#0d3354] rounded-lg flex items-center justify-center transition-all group"
                aria-label="Zalo"
              >
                <span className="text-lg">💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-base mb-4">Liên kết</h3>
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
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-base mb-4">Sản phẩm</h3>
            <ul className="space-y-3">
              {['Xi măng', 'Sắt thép', 'Gạch xây', 'Cát đá', 'Sơn', 'Vật liệu khác'].map((product) => (
                <li key={product}>
                  <Link 
                    href="/san-pham" 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group font-medium"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-base mb-4">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0d3354] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 leading-relaxed font-medium">
                  Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, Tỉnh Thanh Hóa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#0d3354] flex-shrink-0" />
                <a href="tel:0967565606" className="text-sm text-gray-300 hover:text-white transition-colors font-semibold">
                  0967565606
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#0d3354] flex-shrink-0" />
                <span className="text-sm text-gray-300 font-medium">
                  (Đang cập nhật)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#0d3354] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300 font-medium">
                  <div>T2 - T7: 7:00 - 18:00</div>
                  <div>CN: 8:00 - 17:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p className="font-medium">© {currentYear} Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình</p>
              <p className="text-xs text-gray-500 mt-1">
                MST: 2803125183 • Đăng ký ngày 24/07/2024
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/gioi-thieu" className="text-gray-400 hover:text-white transition-colors font-medium">
                Về chúng tôi
              </Link>
              <Link href="/lien-he" className="text-gray-400 hover:text-white transition-colors font-medium">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
