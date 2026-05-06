'use client';

import { useState } from 'react';
import { Phone, Send, CheckCircle2, Building2 } from 'lucide-react';

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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0d3354] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-blue-100">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          placeholder="Nhập họ và tên của bạn"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                            Số điện thoại <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            placeholder="0967565606"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                          Chủ đề <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        >
                          <option value="">Chọn chủ đề</option>
                          <option value="baogia">Yêu cầu báo giá</option>
                          <option value="tuvan">Tư vấn sản phẩm</option>
                          <option value="hoptac">Hợp tác kinh doanh</option>
                          <option value="khac">Khác</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                          Nội dung <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d3354] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                          placeholder="Nhập nội dung tin nhắn của bạn..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#0d3354] text-white py-4 rounded-lg font-bold hover:bg-[#1a4d7a] transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={20} />
                        Gửi tin nhắn
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Company Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                    Thông tin doanh nghiệp
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start gap-3">
                        <Building2 className="text-[#0d3354] flex-shrink-0 mt-1" size={20} />
                        <div>
                          <div className="text-xs text-gray-500 font-semibold mb-1">Tên công ty</div>
                          <div className="text-sm font-bold text-gray-900 leading-snug">
                            Công ty TNHH Kinh Doanh Vật Liệu Xây Dựng An Bình
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500 font-semibold mb-2">Mã số doanh nghiệp</div>
                      <div className="text-sm font-bold text-gray-900">2803125183</div>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500 font-semibold mb-2">Ngày thành lập</div>
                      <div className="text-sm font-bold text-gray-900">24/07/2024</div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-[#0d3354] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Liên hệ nhanh</h3>
                  <div className="space-y-4">
                    <a 
                      href="tel:0967565606"
                      className="block w-full bg-white text-[#0d3354] text-center px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                    >
                      Gọi ngay: 0967565606
                    </a>
                    <p className="text-sm text-blue-100 text-center">
                      Hoặc điền form bên cạnh để chúng tôi liên hệ lại
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
