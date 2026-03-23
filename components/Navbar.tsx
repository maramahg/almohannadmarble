"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "الرئيسية", href: "/" },
        { name: "منتجاتنا", href: "/products" },
        { name: "مشاريعنا", href: "/projects" },
        { name: "خدماتنا", href: "/services" },
        { name: "اتصل بنا", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 bg-white rounded-full p-1 shadow-md group-hover:scale-110 transition-transform">
                        <Image
                            src="/logo.png"
                            alt="شعار المهند للرخام"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className={`hidden md:block font-bold text-xl tracking-tight transition-all ${isScrolled ? "text-stone-900" : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                        }`}>
                        المهند <span className="text-gold">للرخام</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-lg font-medium hover:text-gold transition-all ${isScrolled ? "text-stone-700" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="btn-gold shadow-gold/20 shadow-lg">
                        اطلب استشارة
                    </button>
                </div>

                {/* Mobile Menu Icon (Simplified for now) */}
                <button className="md:hidden text-gold p-2">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
