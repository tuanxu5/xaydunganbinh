'use client';

import { useState } from 'react';
import { Package, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SanPham() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả sản phẩm' },
    { id: 'cement', name: 'Xi măng' },
    { id: 'steel', name: 'Sắt thép' },
    { id: 'brick', name: 'Gạch xây' },
    { id: 'sand', name: 'Cát đá' },
    { id: 'paint', name: 'Sơn' },
    { id: 'other', name: 'Khác' }
  ];

  const products = [
    {
      id: 1,
      category: 'cement',
      name: 'Xi măng PCB30',
      brand: 'Hoàng Thạch',
      description: 'Xi măng Pooclăng hỗn hợp PCB30, phù hợp cho các công trình dân dụng',
      unit: 'Bao 50kg',
      features: ['Độ bền cao', 'Chống thấm tốt', 'Giá cạnh tranh'],
      image: '🏗️'
    },
    {
      id: 2,
      category: 'cement',
      name: 'Xi măng PCB40',
      brand: 'Nghi Sơn',
      description: 'Xi măng Pooclăng hỗn hợp PCB40, dùng cho công trình yêu cầu độ bền cao',
      unit: 'Bao 50kg',
      features: ['Độ bền vượt trội', 'Đông kết nhanh', 'Chất lượng cao'],
      image: '🏗️'
    },
    {
      id: 3,
      category: 'steel',
      name: 'Thép Việt Nhật',
      brand: 'Việt Nhật',
      description: 'Thép xây dựng Việt Nhật, đạt tiêu chuẩn quốc tế',
      unit: 'Kg',
      features: ['Độ bền cao', 'Chống gỉ tốt', 'Dễ gia công'],
      image: '⚙️'
    },
    {
      id: 4,
      category: 'steel',
      name: 'Thép Hòa Phát',
      brand: 'Hòa Phát',
      description: 'Thép xây dựng Hòa Phát, thương hiệu uy tín hàng đầu Việt Nam',
      unit: 'Kg',
      features: ['Chất lượng đảm bảo', 'Giá tốt', 'Giao hàng nhanh'],
      image: '⚙️'
    },
    {
      id: 5,
      category: 'steel',
      name: 'Thép Pomina',
      brand: 'Pomina',
      description: 'Thép xây dựng Pomina, độ bền cao, chống ăn mòn tốt',
      unit: 'Kg',
      features: ['Độ bền vượt trội', 'Chống ăn mòn', 'Tiêu chuẩn cao'],
      image: '⚙️'
    },
    {
      id: 6,
      category: 'brick',
      name: 'Gạch block',
      brand: 'Viglacera',
      description: 'Gạch block không nung, cách nhiệt, cách âm tốt',
      unit: 'Viên',
      features: ['Cách nhiệt tốt', 'Nhẹ', 'Thân thiện môi trường'],
      image: '🧱'
    },
    {
      id: 7,
      category: 'brick',
      name: 'Gạch đỏ',
      brand: 'Đồng Tâm',
      description: 'Gạch đỏ nung truyền thống, độ bền cao',
      unit: 'Viên',
      features: ['Độ bền cao', 'Chịu lực tốt', 'Giá rẻ'],
      image: '🧱'
    },
    {
      id: 8,
      category: 'brick',
      name: 'Gạch không nung',
      brand: 'Xuân Mai',
      description: 'Gạch không nung, thân thiện môi trường',
      unit: 'Viên',
      features: ['Thân thiện môi trường', 'Cách nhiệt', 'Nhẹ'],
      image: '🧱'
    },
    {
      id: 9,
      category: 'sand',
      name: 'Cát vàng',
      brand: 'Cát sông',
      description: 'Cát vàng sông, sạch, độ mịn phù hợp xây dựng',
      unit: 'M³',
      features: ['Sạch', 'Độ mịn vừa', 'Không lẫn tạp chất'],
      image: '⛰️'
    },
    {
      id: 10,
      category: 'sand',
      name: 'Đá 1x2',
      brand: 'Đá núi',
      description: 'Đá dăm 1x2, dùng cho bê tông, móng nhà',
      unit: 'M³',
      features: ['Độ cứng cao', 'Kích thước đều', 'Chất lượng tốt'],
      image: '⛰️'
    },
    {
      id: 11,
      category: 'sand',
      name: 'Đá 4x6',
      brand: 'Đá núi',
      description: 'Đá dăm 4x6, dùng cho móng, đường',
      unit: 'M³',
      features: ['Độ cứng cao', 'Chịu lực tốt', 'Giá hợp lý'],
      image: '⛰️'
    },
    {
      id: 12,
      category: 'paint',
      name: 'Sơn Dulux',
      brand: 'Dulux',
      description: 'Sơn nước nội thất Dulux, màu sắc đa dạng',
      unit: 'Thùng',
      features: ['Màu sắc đẹp', 'Bền màu', 'Không mùi'],
      image: '🎨'
    },
    {
      id: 13,
      category: 'paint',
      name: 'Sơn Jotun',
      brand: 'Jotun',
      description: 'Sơn nước ngoại thất Jotun, chống thấm tốt',
      unit: 'Thùng',
      features: ['Chống thấm', 'Bền màu', 'Chất lượng cao'],
      image: '🎨'
    },
    {
      id: 14,
      category: 'paint',
      name: 'Sơn Nippon',
      brand: 'Nippon',
      description: 'Sơn nước Nippon, thương hiệu Nhật Bản',
      unit: 'Thùng',
      features: ['Chất lượng Nhật', 'Bền đẹp', 'An toàn'],
      image: '🎨'
    },
    {
      id: 15,
      category: 'other',
      name: 'Ngói lợp',
      brand: 'Đồng Tâm',
      description: 'Ngói lợp mái, chống thấm, cách nhiệt',
      unit: 'Viên',
      features: ['Chống thấm', 'Cách nhiệt', 'Bền đẹp'],
      image: '🔧'
    },
    {
      id: 16,
      category: 'other',
      name: 'Ống nước',
      brand: 'Bình Minh',
      description: 'Ống nhựa PVC Bình Minh, độ bền cao',
      unit: 'Cây',
      features: ['Độ bền cao', 'Không độc hại', 'Giá tốt'],
      image: '🔧'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] text-white py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📦 Đa dạng sản phẩm chất lượng
            </div>
            <h1 className="text-5xl font-bold mb-6">Sản phẩm của chúng tôi</h1>
            <p className="text-xl text-orange-100">
              Cung cấp đầy đủ các loại vật liệu xây dựng chính hãng, chất lượng cao
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[88px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#0d3354] to-[#1a4d7a] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] h-40 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  {product.image}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#0d3354] font-semibold">
                        {product.brand}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                      <Star size={14} className="text-[#0d3354] fill-orange-500" />
                      <span className="text-sm font-semibold text-[#0d3354]">4.8</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mb-3">
                    <span className="text-xs text-gray-500">Đơn vị: </span>
                    <span className="text-sm font-semibold text-gray-700">{product.unit}</span>
                  </div>
                  <div className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/lien-he"
                    className="w-full bg-gradient-to-r from-[#0d3354] to-[#1a4d7a] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    Liên hệ báo giá
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cam kết của chúng tôi
              </h2>
              <p className="text-xl text-gray-600">
                Mọi sản phẩm đều được kiểm tra chất lượng nghiêm ngặt
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Package className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chính hãng 100%</h3>
                <p className="text-gray-600">
                  Sản phẩm chính hãng, có tem nhãn đầy đủ
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bảo hành đổi trả</h3>
                <p className="text-gray-600">
                  Đổi trả nếu sản phẩm có lỗi từ nhà sản xuất
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Giá tốt nhất</h3>
                <p className="text-gray-600">
                  Cam kết giá cạnh tranh nhất thị trường
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d3354] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Cần tư vấn về sản phẩm?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn chi tiết và nhận báo giá tốt nhất
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/lien-he"
              className="bg-white text-[#0d3354] px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Liên hệ ngay
            </Link>
            <a 
              href="tel:0123456789"
              className="bg-[#0d3354] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0a2640] transition-all border-2 border-white/20"
            >
              Gọi: 0123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
