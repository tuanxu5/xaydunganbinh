'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0d3354] rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#0d3354] to-[#1a4d7a] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AB</span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-tight tracking-tight">
                  An Bình
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Vật Liệu Xây Dựng
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-[#0d3354] font-medium transition-colors rounded-lg hover:bg-blue-50/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-col items-end">
                <a href="tel:0123456789" className="text-sm font-semibold text-[#0d3354] hover:text-[#1a4d7a] transition-colors">
                  0123 456 789
                </a>
                <span className="text-xs text-gray-500">Hotline hỗ trợ</span>
              </div>
              <Link
                href="/lien-he"
                className="bg-[#0d3354] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#1a4d7a] transition-all hover:shadow-lg"
              >
                Liên hệ ngay
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0d3354] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-b border-gray-100 transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-700 hover:text-[#0d3354] font-medium transition-colors rounded-lg hover:bg-blue-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a href="tel:0123456789" className="flex items-center gap-3 text-gray-700 hover:text-[#0d3354] transition-colors">
              <Phone size={18} />
              <span className="font-medium">0123 456 789</span>
            </a>
            <Link
              href="/lien-he"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-[#0d3354] text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-[#1a4d7a] transition-all"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
