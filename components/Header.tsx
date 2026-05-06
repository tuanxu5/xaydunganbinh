'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/san-pham', label: 'Sản phẩm' },
    { href: '/lien-he', label: 'Liên hệ' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:0123456789" className="flex items-center gap-2 hover:text-orange-100 transition">
                <Phone size={16} />
                <span>0123 456 789</span>
              </a>
              <a href="mailto:info@anbinhxaydung.vn" className="flex items-center gap-2 hover:text-orange-100 transition">
                <Mail size={16} />
                <span>info@anbinhxaydung.vn</span>
              </a>
            </div>
            <div className="text-xs">
              Mã số doanh nghiệp: 2803125183
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-tight">
                  An Bình
                </span>
                <span className="text-xs text-gray-600">
                  Vật Liệu Xây Dựng
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-orange-600 font-semibold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="/lien-he"
                className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Báo giá ngay
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-orange-600 font-semibold py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/lien-he"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
              >
                Báo giá ngay
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
