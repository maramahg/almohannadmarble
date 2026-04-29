"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverDark, setIsOverDark] = useState(false);
    const pathname = usePathname();

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
                } else if (!entries.some(e => e.isIntersecting && e.target !== entry.target)) {
                    // Check if there are other dark sections currently intersecting
                    const otherIntersecting = Array.from(document.querySelectorAll('.dark-section'))
                        .some(s => {
                            const rect = s.getBoundingClientRect();
                            return rect.top <= 80 && rect.bottom >= 0;
                        });
                    if (!otherIntersecting) setIsOverDark(false);
                }
            });
        }, observerOptions);

        const darkSections = document.querySelectorAll('.dark-section');
        darkSections.forEach(section => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            darkSections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { name: "الرئيسية", href: "/" },
        { name: "مشاريعنا", href: "/projects" },
        { name: "مجموعتنا", href: "/collection" },
    ];

    const getLinkStyles = (href: string) => {
        const isActive = pathname === href;
        const isLightBg = (isScrolled && !isOverDark) || (!isScrolled && !isOverDark);
        const baseColor = isLightBg ? "text-stone-800" : "text-white";
        const shadow = !isScrolled && isOverDark ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" : "";
        
        return `text-lg font-medium transition-all relative py-1 hover:text-gold 
            ${isActive ? "text-gold" : baseColor} 
            ${shadow}`;
    };

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
                    <div className={`font-al-qassam text-xl md:text-2xl tracking-tight transition-all ${isOverDark || isMenuOpen ? "text-white" : "text-stone-900"
                        } ${!isScrolled && isOverDark ? "drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]" : ""}`}>
                        المهند <span className="text-gold-dark">للرخام</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={getLinkStyles(link.href)}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                            )}
                        </Link>
                    ))}
                    <Link 
                        href="/contact" 
                        className={`btn-gold shadow-gold/20 shadow-lg ${pathname === "/contact" ? "bg-gold text-stone-950 border-stone-800" : ""}`}
                    >
                        تواصل معنا
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className={`md:hidden p-2 z-50 pointer-events-auto transition-all ${
                        isMenuOpen 
                            ? "text-gold" 
                            : isOverDark 
                                ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" 
                                : "text-stone-900"
                    }`}
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
                            className={`transition-colors ${pathname === link.href ? "text-gold" : "text-white hover:text-gold"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link 
                        href="/contact" 
                        className={`btn-gold px-12 py-4 mt-4 ${pathname === "/contact" ? "bg-gold text-stone-950 border-stone-800" : ""}`} 
                        onClick={() => setIsMenuOpen(false)}
                    >
                        تواصل معنا
                    </Link>
                </div>
            </div>
        </nav>
    );
}
