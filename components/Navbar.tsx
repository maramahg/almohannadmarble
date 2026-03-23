"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverDark, setIsOverDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        // Intersection Observer for dark sections
        const observerOptions = {
            threshold: 0,
            rootMargin: "-80px 0px -90% 0px" // Adjust based on navbar height
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsOverDark(true);
                } else {
                    setIsOverDark(false);
                }
            });
        }, observerOptions);

        const darkSection = document.getElementById("services");
        if (darkSection) observer.observe(darkSection);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (darkSection) observer.unobserve(darkSection);
        };
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? "bg-stone-900 shadow-lg py-3" : isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-0 shadow-md group-hover:scale-110 transition-transform border-2 border-stone-800 overflow-hidden">
                        <Image
                            src="/logo-final.png"
                            alt="شعار المهند للرخام"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className={`font-al-qassam text-xl md:text-2xl tracking-tight transition-all ${(isScrolled && !isOverDark) || isMenuOpen ? "text-stone-900" : "text-white"
                        } ${!isScrolled && !isMenuOpen ? "drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]" : ""}`}>
                        المهند <span className="text-gold-dark">للرخام</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-lg font-medium hover:text-gold transition-all ${isScrolled && !isOverDark ? "text-stone-700" : "text-white"
                                } ${!isScrolled ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="btn-gold shadow-gold/20 shadow-lg">
                        اطلب استشارة
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className={`md:hidden p-2 z-50 pointer-events-auto transition-colors ${isScrolled && !isOverDark && !isMenuOpen ? "text-stone-900" : "text-gold"}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-stone-900/95 z-40 transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white hover:text-gold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="btn-gold px-12 py-4 mt-4" onClick={() => setIsMenuOpen(false)}>
                        اطلب استشارة
                    </button>
                </div>
            </div>
        </nav>
    );
}
