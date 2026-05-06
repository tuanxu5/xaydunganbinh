import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">An Bình</span>
                <span className="text-xs text-gray-400">Vật Liệu Xây Dựng</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình - Đối tác tin cậy cho mọi công trình
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0d3354] rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0d3354] rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">📺</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0d3354] rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#0d3354] transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="text-gray-400 hover:text-[#0d3354] transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-gray-400 hover:text-[#0d3354] transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-[#0d3354] transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-[#0d3354] transition-colors cursor-pointer">Xi măng</li>
              <li className="text-gray-400 hover:text-[#0d3354] transition-colors cursor-pointer">Sắt thép</li>
              <li className="text-gray-400 hover:text-[#0d3354] transition-colors cursor-pointer">Gạch xây</li>
              <li className="text-gray-400 hover:text-[#0d3354] transition-colors cursor-pointer">Cát đá</li>
              <li className="text-gray-400 hover:text-[#0d3354] transition-colors cursor-pointer">Sơn</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#0d3354] flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">
                  Nhà ông Hà Văn Cường, Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, Tỉnh Thanh Hóa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#0d3354] flex-shrink-0" />
                <a href="tel:0123456789" className="text-sm text-gray-400 hover:text-[#0d3354] transition-colors">
                  0123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#0d3354] flex-shrink-0" />
                <a href="mailto:info@anbinhxaydung.vn" className="text-sm text-gray-400 hover:text-[#0d3354] transition-colors">
                  info@anbinhxaydung.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[#0d3354] flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">
                  Thứ 2 - Thứ 7: 7:00 - 18:00<br />
                  Chủ nhật: 8:00 - 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình. Mã số doanh nghiệp: 2803125183
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Đăng ký lần đầu ngày 27 tháng 07 năm 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
