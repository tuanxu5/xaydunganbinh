'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function LienHe() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: 'Nhà ông Hà Văn Cường, Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, Tỉnh Thanh Hóa, Việt Nam',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      content: '0123 456 789',
      link: 'tel:0123456789'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@anbinhxaydung.vn',
      link: 'mailto:info@anbinhxaydung.vn'
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Thứ 7: 7:00 - 18:00\nChủ nhật: 8:00 - 17:00',
      link: null
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] text-white py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-orange-100">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Thông tin liên hệ
                </h2>
                <p className="text-gray-600 text-lg">
                  Hãy liên hệ với chúng tôi qua các kênh dưới đây hoặc điền vào form bên cạnh
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 hover:text-[#0d3354] transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Info */}
              <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Thông tin doanh nghiệp</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Tên công ty:</strong> Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình</p>
                  <p><strong className="text-white">Mã số doanh nghiệp:</strong> 2803125183</p>
                  <p><strong className="text-white">Ngày đăng ký:</strong> 27/07/2024</p>
                  <p><strong className="text-white">Nơi đăng ký:</strong> Sở Kế hoạch và Đầu tư Tỉnh Thanh Hóa</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Gửi tin nhắn cho chúng tôi
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-600" size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Gửi thành công!
                    </h3>
                    <p className="text-gray-600">
                      Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="0123 456 789"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Chủ đề <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="baogia">Yêu cầu báo giá</option>
                        <option value="tuvan">Tư vấn sản phẩm</option>
                        <option value="hoptac">Hợp tác kinh doanh</option>
                        <option value="khac">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nội dung <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder="Nhập nội dung tin nhắn của bạn..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0d3354] to-[#1a4d7a] text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Gửi tin nhắn
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vị trí của chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              Nhà ông Hà Văn Cường, Thôn Trung Đô, Xã Cẩm Châu, Huyện Cẩm Thủy, Tỉnh Thanh Hóa
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100">
            <div className="bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin size={64} className="mx-auto mb-4" />
                <p className="text-xl font-semibold">Bản đồ Google Maps</p>
                <p className="text-orange-100 mt-2">Tích hợp bản đồ tại đây</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-to-r from-[#0d3354] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Cần hỗ trợ ngay?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Gọi điện trực tiếp hoặc gửi email cho chúng tôi
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="tel:0123456789"
                className="bg-white text-[#0d3354] px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <Phone size={20} />
                0123 456 789
              </a>
              <a 
                href="mailto:info@anbinhxaydung.vn"
                className="bg-[#0d3354] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a2640] transition-all border-2 border-white/20 flex items-center gap-2"
              >
                <Mail size={20} />
                info@anbinhxaydung.vn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
