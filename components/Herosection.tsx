"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Verified, Leaf, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
    { icon: Verified, label: "Cruelty Free" },
    { icon: Leaf, label: "100% Organic" },
    { icon: Truck, label: "COD Available" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

export function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
    const imgOpacity = useTransform(scrollYProgress, [0, 0.6], [0.9, 0.4]);

    return (
        <section
            ref={ref}
            className="relative min-h-svh flex items-center overflow-hidden px-6 md:px-16 lg:px-24"
        >
            {/* Parallax background */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gy77kwFwQkTCURPgsi7ITfT-vu9LfqULM2NmjBxYQ08anVZb7AAOQERNXt8xwfHC9z42JJPs83xb3io11qMBx6KlGlqqbGpkholHU5FTuHnUHiBfyaiRvHHIn8MyNK_LBtgqee9LRZnG201sVyD4_Sth_Z99YK1TqXy8bqPUsfm3SDUM-snHWSIt1_eB-16cJrHo0EXvPsngDTllk6aESSypc84o9uRlup4mE40jOWumqDwJ6Q_Oy230geGZcudFqy_HE6V1fQ"
                    alt="Organic botanical oil"
                    className="w-full h-full object-cover"
                    style={{ scale: imgScale, opacity: imgOpacity }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#faf9f6] via-[#faf9f6]/50 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-[#faf9f6]/30 to-transparent" />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-3xl pt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span
                    variants={itemVariants}
                    className="inline-block px-4 py-1.5 mb-8 rounded-full bg-[#d9e8c5] text-[#3e4b31] text-[10px] font-bold uppercase tracking-[0.22em]"
                >
                    100% Cold-Pressed Purity
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-7xl md:text-8xl font-headline text-[#18230d] leading-[1.05] mb-8"
                >
                    Stronger Hair,{" "}
                    <span className="italic">
                        Healthier
                        <br />
                        Skin
                    </span>{" "}
                    — Naturally.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-[#454840] max-w-xl mb-12 leading-relaxed"
                >
                    Unlock the ancient alchemy of organic castor oil. Designed for
                    transformative hair growth, luscious lashes, and a morning glow that
                    lasts all day.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button
                        size="lg"
                        className="bg-[#18230d] text-white hover:bg-[#2d3921] rounded-xl font-label text-sm font-semibold tracking-wide px-10 py-6 shadow-xl shadow-[#18230d]/10 transition-all duration-300 hover:shadow-[#18230d]/20 hover:scale-[1.02]"
                        asChild
                    >
                        <a href="#shop">Shop the Collection</a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-[#c5c8bd]/40 text-[#18230d] hover:bg-[#e9e8e5] rounded-xl font-label text-sm font-semibold tracking-wide px-10 py-6 transition-all duration-300"
                        asChild
                    >
                        <a href="#results">See Real Results</a>
                    </Button>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex items-center gap-8 opacity-50"
                >
                    {badges.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-2">
                            <Icon size={16} strokeWidth={1.5} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}