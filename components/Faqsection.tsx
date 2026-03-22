"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How long before I see hair growth?",
        a: "Most users report visible thickening and new baby hairs within 4–6 weeks of consistent use (3 times per week). For lashes, you might see results even sooner.",
    },
    {
        q: "Is it safe for sensitive skin?",
        a: "Yes. Our oil is 100% pure, organic, and cold-pressed without any harsh chemical extraction (Hexane-free). However, we always recommend a patch test behind the ear.",
    },
    {
        q: "Can I pay with Cash on Delivery?",
        a: "Absolutely. We offer Cash on Delivery across most regions. Simply select the COD option at checkout.",
    },
    {
        q: "How often should I apply the oil?",
        a: "For hair and scalp, 3–4 times per week is ideal. For lashes and brows, nightly application before bed yields the best results.",
    },
];

function AccordionItem({ q, a, delay }: { q: string; a: string; delay: number }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f4f3f0] rounded-2xl overflow-hidden"
        >
            <button
                className="w-full flex justify-between items-center p-6 text-left font-bold text-[#18230d] group"
                onClick={() => setOpen((v) => !v)}
            >
                <span className="text-sm md:text-base pr-4">{q}</span>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                >
                    <ChevronDown size={20} className="text-[#18230d]" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p className="px-6 pb-6 text-sm text-[#454840] leading-relaxed">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQSection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    className="text-4xl font-headline mb-16 text-center italic text-[#18230d]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    Curious Alchemists Ask
                </motion.h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={faq.q} q={faq.q} a={faq.a} delay={i * 0.08} />
                    ))}
                </div>
            </div>
        </section>
    );
}