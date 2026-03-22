const footerLinks = ["Privacy", "Terms", "Shipping", "Wholesale"];

export function Footer() {
    return (
        <footer className="w-full border-t border-[#c5c8bd]/20 bg-[#f4f3f0]">
            <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 max-w-screen-2xl mx-auto gap-8">
                <div className="text-lg font-headline text-[#18230d] italic">
                    Veloura Naturals
                </div>

                <div className="flex gap-8">
                    {footerLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[10px] font-label uppercase tracking-[0.2em] text-[#18230d]/40 hover:text-[#18230d] transition-colors duration-200"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="text-[10px] font-label uppercase tracking-[0.2em] text-[#18230d]/50">
                    © 2024 Veloura Naturals. The Tactile Alchemist.
                </div>
            </div>
        </footer>
    );
}