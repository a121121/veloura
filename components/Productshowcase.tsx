"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Package, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const sizes = [
    { label: "250ml — Regular", value: "250" },
    { label: "500ml — Value Pack", value: "500" },
];

export function ProductShowcase() {
    const [selectedSize, setSelectedSize] = useState("250");
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="shop" ref={ref} className="py-24 md:py-32 px-6 md:px-10 max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
                {/* Product image */}
                <motion.div
                    className="w-full lg:w-1/2 relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="bg-[#e3e2e0] rounded-[3.5rem] aspect-square flex items-center justify-center p-12 overflow-hidden relative">
                        <motion.img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhgQP9ed2iWLLkFjDuRuYpI5MRS3V_qo_BMDtoQJVPgPaThSDwIStvXgFscYP9cbgpYvXB9ionpJ04StsEn7062e1TSixe8PKOqf4wbc3w8Di-N6hzFMt9eSErNtlugv78ng_VdvpvktR_01p0PZ_cgmeKZK4thFrm706Mu54em_CXpZV0jEjeQYQbbHgY46-pRhygU31YCgfKP6J3C7Ux3qxHe8Nfm35xPzd6ERG_B6gOvTqiWjx2rzCY7Jdc-P7M9IOYIU1R7A"
                            alt="Veloura Naturals castor oil bottle"
                            className="w-4/5 h-4/5 object-contain drop-shadow-2xl"
                            whileHover={{ scale: 1.04, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        />
                    </div>
                    {/* Price badge */}
                    <motion.div
                        className="absolute -bottom-6 -right-4 md:-right-8 bg-[#bdccaa] p-6 md:p-8 rounded-3xl shadow-xl shadow-[#18230d]/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-[#18230d] font-headline text-3xl font-bold italic">$34.00</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#3e4b31] mt-1">
                            Special Launch Price
                        </p>
                    </motion.div>
                </motion.div>

                {/* Details */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Stars */}
                    <div>
                        <div className="flex items-center gap-1 text-[#18230d] mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="#18230d" strokeWidth={0} />
                            ))}
                            <span className="text-sm font-bold ml-2 text-[#18230d]">4.9/5 (1,280+ Reviews)</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-headline text-[#18230d] mb-4">
                            The Alchemist's Blend
                        </h2>
                        <p className="text-lg text-[#454840] leading-relaxed">
                            250ml of Organic, Hexane-Free, Cold-Pressed Castor Oil.
                            Sustainably sourced from family-owned botanical gardens.
                        </p>
                    </div>

                    {/* Size selector */}
                    <div className="space-y-3">
                        <label className="font-label text-[10px] uppercase tracking-widest block text-[#454840]">
                            Choose Size
                        </label>
                        <div className="flex gap-3">
                            {sizes.map(({ label, value }) => (
                                <button
                                    key={value}
                                    onClick={() => setSelectedSize(value)}
                                    className={`flex-1 py-4 rounded-xl font-bold text-sm transition-all duration-200 border-2 ${selectedSize === value
                                            ? "border-[#18230d] bg-[#d9e8c5] text-[#18230d]"
                                            : "border-[#c5c8bd]/40 text-[#454840] hover:bg-[#f4f3f0]"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Shipping + COD info */}
                    <div className="p-5 bg-[#f4f3f0] rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Package size={26} className="text-[#18230d]" strokeWidth={1.5} />
                            <div>
                                <p className="text-sm font-bold text-[#18230d]">Free Shipping</p>
                                <p className="text-xs text-[#454840]">On orders over $50</p>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-[#c5c8bd]/40" />
                        <div className="flex items-center gap-3">
                            <CreditCard size={26} className="text-[#18230d]" strokeWidth={1.5} />
                            <div>
                                <p className="text-sm font-bold text-[#18230d]">Cash on Delivery</p>
                                <p className="text-xs text-[#454840]">Pay when you receive</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full bg-[#18230d] text-white hover:bg-[#2d3921] py-7 rounded-2xl font-headline text-xl tracking-widest shadow-2xl shadow-[#18230d]/15 transition-all duration-300">
                            Add to Cart — Buy Now
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}