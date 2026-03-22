"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Benefits", href: "#benefits" },
    { label: "Ritual", href: "#ritual" },
    { label: "Reviews", href: "#reviews" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-500",
                    scrolled
                        ? "bg-[#faf9f6]/90 backdrop-blur-xl border-b border-[#c5c8bd]/20 shadow-sm"
                        : "bg-transparent"
                )}
            >
                <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-screen-2xl mx-auto">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-xl font-headline italic text-[#18230d] tracking-tight"
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.2 }}
                    >
                        Veloura Naturals
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-10">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                                className="text-[#18230d]/60 hover:text-[#18230d] font-label text-sm tracking-wide transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#18230d]/40 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="flex items-center gap-3"
                    >
                        <Button
                            className="hidden md:inline-flex bg-[#18230d] text-white hover:bg-[#2d3921] rounded-xl font-label text-xs uppercase tracking-widest px-6 py-2 transition-all duration-300"
                            asChild
                        >
                            <a href="#shop">Shop Now</a>
                        </Button>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden text-[#18230d]"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-16 left-0 w-full z-40 bg-[#faf9f6]/95 backdrop-blur-xl border-b border-[#c5c8bd]/20 px-6 pb-6 pt-4 md:hidden"
                    >
                        <div className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[#18230d] font-label text-sm tracking-widest uppercase py-2 border-b border-[#c5c8bd]/20"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button className="mt-2 w-full bg-[#18230d] text-white rounded-xl font-label text-xs uppercase tracking-widest">
                                Shop Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}