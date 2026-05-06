'use client';

import { useState } from 'react';
import { Phone, Search } from 'lucide-react';
import Link from 'next/link';
import productsData from '@/data/products.json';

export default function SanPham() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { categories, products } = productsData;

  // Filter products
  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Count products per category
  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return products.length;
    return products.filter(p => p.category === catId).length;
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0d3354] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Sản phẩm</h1>
            <p className="text-xl text-blue-100">
              Cung cấp đầy đủ các loại vật liệu xây dựng chất lượng cao
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-[100px] space-y-6">
                {/* Search */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0d3354] focus:ring-2 focus:ring-blue-100 font-medium"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Danh mục</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const count = getCategoryCount(category.id);
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-between group ${
                            selectedCategory === category.id
                              ? 'bg-[#0d3354] text-white'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            selectedCategory === category.id
                              ? 'bg-white/20 text-white'
                              : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-xl p-6 shadow-lg text-white">
                  <h3 className="text-lg font-bold mb-2">Cần tư vấn?</h3>
                  <p className="text-sm text-blue-100 mb-4 font-medium">
                    Gọi ngay để được hỗ trợ tốt nhất
                  </p>
                  <a 
                    href="tel:0967565606"
                    className="flex items-center justify-center gap-2 bg-white text-[#0d3354] px-4 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all"
                  >
                    <Phone size={18} />
                    0967565606
                  </a>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results Info */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">
                    Hiển thị <strong className="text-gray-900">{filteredProducts.length}</strong> sản phẩm
                    {searchQuery && (
                      <span> cho "<strong className="text-[#0d3354]">{searchQuery}</strong>"</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/san-pham/${product.id}`}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#0d3354] transition-all hover:shadow-lg"
                    >
                      {/* Image */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-52 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                          {product.image}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {/* Brand */}
                        <div className="mb-3">
                          <span className="inline-block text-xs font-bold text-[#0d3354] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                            {product.brand}
                          </span>
                        </div>

                        {/* Name */}
                        <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#0d3354] transition-colors line-clamp-2 min-h-[48px]">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-gray-500 font-semibold mb-1">Giá bán</div>
                              <div className="text-lg font-bold text-[#0d3354]">Liên hệ</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#0d3354] flex items-center justify-center group-hover:bg-[#1a4d7a] transition-colors">
                              <svg className="w-5 h-5 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
                  <p className="text-gray-600 font-medium mb-6">
                    Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="bg-[#0d3354] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1a4d7a] transition-all"
                  >
                    Xem tất cả sản phẩm
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Không tìm thấy sản phẩm phù hợp?
          </h2>
          <p className="text-gray-600 font-medium mb-6 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về sản phẩm và nhận báo giá tốt nhất
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0967565606"
              className="bg-[#0d3354] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1a4d7a] transition-all flex items-center gap-2"
            >
              <Phone size={20} />
              Gọi ngay: 0967565606
            </a>
            <Link
              href="/lien-he"
              className="bg-white text-[#0d3354] px-8 py-3 rounded-lg font-bold border-2 border-[#0d3354] hover:bg-blue-50 transition-all"
            >
              Gửi yêu cầu báo giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
