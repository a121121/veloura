"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
            <div className="max-w-screen-2xl mx-auto">
                <motion.div
                    className="relative overflow-hidden rounded-[3rem] bg-[#2d3921] p-12 md:p-24 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Background image overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTCR6ZBfuE2FfftFARC2_xrc824Q8_3t8TMiy9UW6N8vtpzoq2SpcSoBrcWU5RvsUdfb0_hVrLunikVuIZfGWvfbkqNyMB_KzheSABEZQNnRYBxiasnJLL8KkP6cdNIsx7DRMlKMTdElg9rgkUlr7abjdTaQwBU5RNa35VTWDb7siJ933YJ-w45WINu9pRYJWwyEkS2cPfnkmhSCyLDliC8tExu3SVzkLHY0SYMYEWq2snvKTr7kOHKAaUCSKGzdrYZDFDtU-zUw"
                            alt="Botanical background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#556347]/20 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#d9e8c5]/10 blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <motion.h2
                            className="text-4xl sm:text-6xl md:text-7xl font-headline text-white mb-8 italic leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15, duration: 0.75 }}
                        >
                            Start Your Natural
                            <br />
                            Glow Journey Today
                        </motion.h2>

                        <motion.p
                            className="text-lg md:text-xl text-[#d9e8c5]/80 max-w-2xl mx-auto mb-12 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.25, duration: 0.7 }}
                        >
                            Join 50,000+ others who have ditched the synthetics for the pure
                            power of nature.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button
                                className="bg-[#faf9f6] text-[#18230d] hover:bg-[#d9e8c5] px-14 md:px-20 py-6 rounded-2xl font-label text-base md:text-lg font-extrabold uppercase tracking-widest shadow-2xl shadow-black/20 transition-all duration-300"
                                asChild
                            >
                                <a href="#shop">Get My 20% Discount</a>
                            </Button>
                        </motion.div>

                        <motion.p
                            className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/40"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Free Shipping &amp; Returns Included
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}