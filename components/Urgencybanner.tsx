"use client";

import { motion } from "framer-motion";

const text = "Special Offer: 20% OFF TODAY ONLY — USE CODE: GLOW20 — LIMITED STOCK REMAINING —";

export function UrgencyBanner() {
    return (
        <div className="bg-[#18230d] text-white py-4 overflow-hidden relative">
            <div className="flex whitespace-nowrap">
                {/* Two copies for seamless loop */}
                <motion.div
                    className="flex shrink-0 gap-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                >
                    {[...Array(4)].map((_, i) => (
                        <span
                            key={i}
                            className="font-label text-[11px] uppercase tracking-[0.3em] opacity-90 pr-12"
                        >
                            {text}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}