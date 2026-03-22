"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Warm",
        desc: "Place 3–5 drops between palms and rub to activate the oil's natural heat.",
    },
    {
        num: "02",
        title: "Apply",
        desc: "Massage into scalp or use the precision brush for lashes and brows.",
    },
    {
        num: "03",
        title: "Wait",
        desc: "Leave for at least 30 minutes. Use overnight for maximum results.",
    },
    {
        num: "04",
        title: "Cleanse",
        desc: "Rinse with a mild organic shampoo to reveal effortless shine.",
    },
];

export function RitualSection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="ritual" ref={ref} className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-headline italic mb-3 text-[#18230d]">
                        The Ritual
                    </h2>
                    <p className="text-[#454840] font-label text-[10px] uppercase tracking-[0.25em]">
                        Step-by-step to radiance
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                    {steps.map(({ num, title, desc }, i) => (
                        <motion.div
                            key={num}
                            className="relative text-center p-8 group"
                            initial={{ opacity: 0, y: 36 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.65,
                                delay: i * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {/* Connector line */}
                            {i < steps.length - 1 && (
                                <motion.div
                                    className="hidden md:block absolute top-16 left-[62%] w-[76%] h-px bg-[#c5c8bd]/40"
                                    initial={{ scaleX: 0 }}
                                    animate={inView ? { scaleX: 1 } : {}}
                                    transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                                    style={{ transformOrigin: "left" }}
                                />
                            )}

                            <div className="text-7xl font-headline italic text-[#e3e2e0] mb-6 leading-none select-none group-hover:text-[#c5c8bd] transition-colors duration-300">
                                {num}
                            </div>
                            <h4 className="font-bold text-[#18230d] text-lg mb-3">{title}</h4>
                            <p className="text-sm text-[#454840] leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}