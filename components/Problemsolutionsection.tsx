"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf } from "lucide-react";

function FadeIn({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ProblemSolutionSection() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-10 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left text */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-headline text-[#18230d] leading-tight">
                            Tired of thinning edges and brittle lashes?
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-[#454840] text-lg leading-relaxed">
                            Modern hair treatments are often packed with synthetic chemicals
                            that strip your natural oils. We went back to the roots.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="p-8 bg-[#f4f3f0] rounded-3xl border border-[#c5c8bd]/20">
                            <h4 className="font-headline italic text-2xl mb-4 text-[#18230d]">
                                The Veloura Difference
                            </h4>
                            <p className="text-sm leading-relaxed text-[#454840]">
                                Our castor oil is hexane-free and cold-pressed to preserve the
                                vital Ricinoleic acid that stimulates follicles and deeply
                                hydrates skin. No fillers. No synthetics. Just nature in its
                                most potent form.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Right bento grid */}
                <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[560px] md:h-[620px]">
                    <FadeIn delay={0.15} className="h-full">
                        <div className="bg-[#efeeeb] rounded-[3rem] overflow-hidden relative group h-full">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3gu3j2D26HhRi9PlIj3SX1F0-8jkfTWkA6yotukjmLkH0JdyZKbFu_fzawcsdTKldmjmPndu1OUY9EDHXJM1uBcNLs7tjtRgsBA9-o-oDCU8fJWKKrHnreqvxwsSE3Ky8FlNhTSZ40C-8KMMWS8WxinEWkhhuiQm8y_mDHI4gDA2AxysPcVJpbHQH4NuAVTkNOD0k7hTGtGspXvzFW8ujjBsxwOSqMR8umPl66hsdFyw6P8P9HQIJFjzpOsq1AErg0Pigm9-FJA"
                                alt="Long thick natural eyelashes"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#18230d]">
                                Lash Density +40%
                            </div>
                        </div>
                    </FadeIn>

                    <div className="flex flex-col gap-4 h-full">
                        <FadeIn delay={0.25} className="h-1/2">
                            <div className="bg-[#efeeeb] rounded-[3rem] overflow-hidden h-full">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKAm3Wn6Qu4ZyDw3oUFF9lSgTpX1oMnaA1VBy1OMp9O5RXf9v_MqGSG9B2FjeVv54-X7lu3JkUKkhkBtVf_v5sb1DiWkhdiaVwUswUpXIN1_Hnk4ASYopEaPOwT2MozuxuXCgYUbjbCDArXubNWaNYfgd5-NVhcJUs4YpPeMJgECvpu3iMb_Core26zrzsBrQ2nK5xBf34BBwYQajYc9WS5v7t_ywcA-nL-2ME-dsBh5csbRNg4wNcDt-poym0GMFi1KqCUvNgdw"
                                    alt="Thick healthy wavy hair"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.32} className="h-1/2">
                            <div className="bg-[#e3e2e0] rounded-[3rem] p-8 md:p-10 flex flex-col justify-center h-full">
                                <Leaf
                                    size={40}
                                    className="text-[#18230d] mb-4"
                                    strokeWidth={1.5}
                                    fill="#18230d"
                                />
                                <h3 className="font-headline text-xl md:text-2xl text-[#18230d]">
                                    Scalp Health Redefined
                                </h3>
                                <p className="text-xs md:text-sm mt-3 text-[#454840] leading-relaxed">
                                    Massage away dryness while fueling growth.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}