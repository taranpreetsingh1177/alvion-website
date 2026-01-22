import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#F3F2ED] pt-32 pb-12 border-t border-[#E5E4DE]">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
                    <div className="col-span-2 lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center">
                            <span className="text-3xl font-bold tracking-tighter text-black">
                                Alvion<span className="text-gray-300">.</span>
                            </span>
                        </Link>
                        <p className="text-lg text-black/50 font-medium leading-relaxed max-w-xs">
                            Go to market with unique data—and the ability to act on it.
                        </p>
                        <div className="flex space-x-5">
                            <Link href="#" className="p-2 bg-white rounded-full border border-[#E5E4DE] text-black/40 hover:text-black hover:border-black/20 transition-all"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white rounded-full border border-[#E5E4DE] text-black/40 hover:text-black hover:border-black/20 transition-all"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white rounded-full border border-[#E5E4DE] text-black/40 hover:text-black hover:border-black/20 transition-all"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white rounded-full border border-[#E5E4DE] text-black/40 hover:text-black hover:border-black/20 transition-all"><Instagram className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-[0.2em] text-black/30 uppercase">Product</h4>
                        <ul className="space-y-4 text-black/60 font-semibold">
                            <li><Link href="#" className="hover:text-black transition-colors">Enrichment</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Automation</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Templates</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-[0.2em] text-black/30 uppercase">Company</h4>
                        <ul className="space-y-4 text-black/60 font-semibold">
                            <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
                            <li><Link href="/careers" className="hover:text-black transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Connect</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-[0.2em] text-black/30 uppercase">Support</h4>
                        <ul className="space-y-4 text-black/60 font-semibold">
                            <li><Link href="#" className="hover:text-black transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">API Docs</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Guides</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold tracking-[0.2em] text-black/30 uppercase">Legal</h4>
                        <ul className="space-y-4 text-black/60 font-semibold">
                            <li><Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-[#E5E4DE] text-black/30 text-sm font-bold tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} ALVION. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-black flex items-center gap-2"><Globe className="w-4 h-4" /> Global</Link>
                        <Link href="#" className="hover:text-black">English</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
