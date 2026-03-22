"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
    {
        name: "Elena R.",
        role: "Verified Buyer",
        text: "I was skeptical about castor oil because of the thick texture, but Veloura is different. It's premium quality, doesn't smell weird, and my lashes are touching my brows!",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuARr6xPuOHqNie-MLveMukU6dI9vHaZiEXxxxwKAtwB0vxayfkGPHLVeLY7xcByBSi53hdYSzvKWB9yJQk9cPmSD1OSBMkZdP6hDiXXvkRqAxCNH76Z2GAlZxsoZYNGt1o-YXCz58M76U36WLDHP4Ipm4vlWa5_dbGB3BCopGdAjvFNi16ZRxRkky95nYxKvKYaCbx_ol1sBLoBa_jymo-eD2vPTANbCxQLUraj8vTNElFgZhjj4N_B-GSAJ7nwvQ_T2wBlvnxXQw",
        bg: "bg-[#efeeeb]",
    },
    {
        name: "Marcus K.",
        role: "Verified Buyer",
        text: "Started using this for my beard and scalp thinning. Noticed a massive difference in density after just 3 weeks. Essential part of my ritual now.",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBIhApyREM0Kya6xi38YO5je_p3VAdm7omHxpDhkDkOkIY-LnZJrP3YZGoPLC-QaKE7FQpwkbe8eaeqKwTZ_YEo99oJxBrNja9ahgwI7NWnPlG9xcGaw63hEKoddkcX_9ikGTw7eZAtrMZylScHgIi-nN7wVYvB2LZi_1ZulZmBrFfz-PMSOqbmWv2npkQxgkzZoCdxg5Su1cnbSjXXMGqrPpiLXrs2bs2FOfGYwpb-ttq-G0H_dr0ZXBbIz30Skc2_97Ebh0m6AA",
        bg: "bg-[#e3e2e0]",
    },
    {
        name: "Sarah J.",
        role: "Verified Buyer",
        text: 'The bottle is so beautiful, it looks like high-end decor. But the oil inside is the real star. No more chemical conditioners for me.',
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCLmyO80EYtAWXULTzGsU9KDhK3xMd3O144S2QAmMP-7KN1jZCIiizdgmSerGWEtdwX7UzoRpu95UXyYnGd7rZh0yj3gbHItqwpJ_2yLhs_0eVZe1ks_rxxOXUtEtowcA8U4dL8l8saY53gFz8fgMSXMHc5tALvOPaZE83xA0_x8HQp_2-funC-CcN-ali8lC-85uvkInP8Rh-NjASVw9G0esHHe5cF678fRRwvMShnBOeVVfVw9wwGiBB3HeLOCo197O4nmUAb_w",
        bg: "bg-[#efeeeb]",
    },
];

export function TestimonialsSection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="reviews" ref={ref} className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
            <motion.h2
                className="text-4xl md:text-5xl font-headline text-center italic text-[#18230d] mb-16"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                What People Are Saying
            </motion.h2>

            <div className="columns-1 md:columns-3 gap-6 space-y-6">
                {reviews.map((r, i) => (
                    <motion.div
                        key={r.name}
                        className={`${r.bg} p-8 rounded-3xl break-inside-avoid`}
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.7,
                            delay: 0.1 + i * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="flex items-center gap-4 mb-5">
                            <img
                                src={r.avatar}
                                alt={r.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold text-sm text-[#18230d]">{r.name}</p>
                                <p className="text-xs text-[#454840]">{r.role}</p>
                            </div>
                        </div>
                        <p className="text-sm italic leading-relaxed text-[#454840]">"{r.text}"</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}