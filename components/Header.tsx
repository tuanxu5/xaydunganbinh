'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

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
              <div className="relative w-15 h-15">
                <img 
                  src="/images/logo.png" 
                  alt="An Bình Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-lg text-[#0d3354] leading-tight tracking-tight">
                  An Bình
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Vật Liệu Xây Dựng
                </span>
              </div>
            </Link>

            {/* Desktop Navigation & CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-2.5 text-sm font-bold transition-all rounded-full ${
                      isActive(link.href)
                        ? 'text-[#0d3354]'
                        : 'text-gray-700 hover:text-[#0d3354] hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/lien-he"
                className="ml-2 bg-[#0d3354] text-white px-8 py-5 rounded-full text-sm font-bold hover:bg-[#1a4d7a] transition-all hover:shadow-lg hover:scale-105"
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
                className={`px-5 py-3 text-sm font-bold transition-all rounded-full ${
                  isActive(link.href)
                    ? 'text-[#0d3354]'
                    : 'text-gray-700 hover:text-[#0d3354] hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a href="tel:0967565606" className="flex items-center gap-3 text-gray-700 hover:text-[#0d3354] transition-colors">
              <Phone size={18} />
              <span className="font-bold">0967565606</span>
            </a>
            <Link
              href="/lien-he"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-[#0d3354] text-white px-6 py-3 rounded-full text-sm font-bold text-center hover:bg-[#1a4d7a] transition-all"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
