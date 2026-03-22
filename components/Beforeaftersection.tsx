"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
    {
        title: "Hairline Restoration",
        quote: '"The difference in my edges is night and day. Completely natural growth."',
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP_d-nlF2k0uETCv5Qf_s3qVApam26f88QdE4QlQ8y7_BjsiO3cmtyhrTVZj8NbC1MGHwUJEVzW6-bzI9-Zk7W8KUpXCoeECFyZWiCzH9lPOZEsoPvWHT72bd-VcJgs886J48By9CpbCMsQLuTZmG9yi1c-uWTmxb1zFotRFpsfPUwbbqZTwESvFcmUPqG31pst32vvSyP12BsnBWB-FZ6hQTK0rLH3DzAgdqQwRbcXBnQF2sv9QWMa2YCOB5l-guT1fH-IqomLQ",
        after: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Stz-drbyUliCmcf6JZ-NlKwWZu9ZxfhWVsQNnIJlourARrh8qS-s57iQiPASKtYtZeHH6eQXg5qOpN_o9Z88guy6MWA-2SP7GpMhetdnjr1MreUk_BSuzRwgxipA0gR_zhVGHMfcFZw4_BhkHKTJYUFYzstBF-p0YynYfoH0kIhWRLAR0GowB_Ocs8GlVhryXuyG3gz2M3jxpKwwZtj9xmSxbAgTp8WLyvKRCMSXL9imBnAv2rlIrneYabUY1jr6BVBO-Swq0Q",
    },
    {
        title: "Skin Radiance",
        quote: '"Finally found a solution for my stubborn dry patches. My skin literally glows."',
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfXi77nsPxYJM_SY9gvFSsDCX9J_G0cpEYZsu3fds9Vlsgq580C-vPUCgLEmmchaFVAc7R74Opgl1BwJwfUZ8iK9Jt5D-Ztqzae3f-pWONMgcQvNVa32J8lgGsYyDCQfe-ZWowZC9_q8Fm4BkoiMurbg8RUO2KwzmFSJc3saKsq9U3lSx1AZzrn_tnPVmmvM6jgXenCFZWUrrpiJhTNoUBVbti8B6jKwNZjK3MvXva35nyJxRp4b9_Ozb6KNiuaMseK_AYUMWclg",
        after: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwl4IOWkZTFhcucyXWLgZkAwVNp-NKHjxsz85JDfBB_gAgkGfF97FbSGK4sjIDEFPK2K6VNHnnHU5WzTu3XgBXakQpc7BAXf0ASjql_aOnfBCH04uCqR2sjarWYpIj8yYXpanTMIsjBug00tvzuTuvLCYMS6Vzq6_i9omyQqPLVynWAKRlNB-kXz9VI7e6SZEnRcMCWS7lWjHLaM3molUFviqK6eoCkB3yxDdfU9dQAQZkTM09t_FYRABrn-i-zW7v_8cW3SK3Yw",
    },
];

function BeforeAfterCard({
    item,
    delay,
}: {
    item: (typeof cases)[0];
    delay: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className="bg-white p-4 rounded-[2.5rem] shadow-xl shadow-[#18230d]/5"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="flex gap-2 mb-4">
                {/* Before */}
                <div className="w-1/2 rounded-3xl overflow-hidden aspect-4/5 relative">
                    <img
                        src={item.before}
                        alt={`${item.title} before`}
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute top-4 left-4 bg-black/50 text-white text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                        Week 0
                    </div>
                </div>
                {/* After */}
                <div className="w-1/2 rounded-3xl overflow-hidden aspect-4/5 relative">
                    <img
                        src={item.after}
                        alt={`${item.title} after`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#18230d] text-white text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                        Week 4
                    </div>
                </div>
            </div>
            <div className="px-4 pb-3">
                <h4 className="font-bold text-lg mb-1 text-[#18230d]">{item.title}</h4>
                <p className="text-sm text-[#454840] italic leading-relaxed">{item.quote}</p>
            </div>
        </motion.div>
    );
}

export function BeforeAfterSection() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="results" ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-[#f4f3f0]">
            <div className="max-w-screen-2xl mx-auto">
                <motion.h2
                    className="text-5xl font-headline text-center mb-20 italic text-[#18230d]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    Visible Proof
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {cases.map((item, i) => (
                        <BeforeAfterCard key={item.title} item={item} delay={i * 0.14} />
                    ))}
                </div>
            </div>
        </section>
    );
}