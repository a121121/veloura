"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export function MobileBottomCTA() {
    return (
        <motion.nav
            className="fixed bottom-0 left-0 w-full px-4 pb-6 pt-2 z-50 md:hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <button className="w-full bg-[#18230d] text-white rounded-2xl shadow-2xl shadow-[#18230d]/30 py-5 flex items-center justify-center gap-3 active:scale-95 transition-transform duration-150">
                <ShoppingBag size={20} />
                <span className="font-headline text-lg tracking-widest">Buy Now</span>
            </button>
        </motion.nav>
    );
}