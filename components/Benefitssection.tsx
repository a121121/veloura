"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Droplets, Eye } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Follicle Activation",
        desc: "Boosts circulation to the scalp, waking up dormant hair follicles for thicker, faster growth.",
    },
    {
        icon: Droplets,
        title: "Deep Moisture",
        desc: "Nature's humectant. It draws moisture deep into the dermis for a plump, youthful glow.",
    },
    {
        icon: Eye,
        title: "Lash Fortification",
        desc: "Strengthens brittle lashes from the root to prevent premature fallout and maximize length.",
    },
];

export function BenefitsSection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="benefits"
            ref={ref}
            className="bg-[#f4f3f0] py-24 md:py-32"
        >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl font-headline text-[#18230d] mb-4 italic">
                        Botanical Benefits
                    </h2>
                    <p className="text-[#454840] font-label tracking-[0.2em] uppercase text-xs">
                        Triple-Action Ritual for Hair, Lash, and Skin
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                    {benefits.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            className="text-center group"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.15 + i * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <motion.div
                                className="w-20 h-20 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl shadow-[#18230d]/5"
                                whileHover={{ y: -8, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            >
                                <Icon size={30} className="text-[#18230d]" strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="font-headline text-2xl mb-4 text-[#18230d]">{title}</h3>
                            <p className="text-[#454840] leading-relaxed text-sm">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}