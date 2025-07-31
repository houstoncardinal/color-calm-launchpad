"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header1() {
    const navigationItems = [
        { title: "Home", href: "#home" },
        { title: "Services", href: "#services" },
        { title: "Method", href: "#method" },
        { title: "Testimonials", href: "#testimonials" },
        { title: "Contact", href: "#contact" },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-white/95 backdrop-blur-md border-b border-ocean-trust/10 shadow-lg" style={{height: '76px'}}>
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-full" style={{minHeight: '76px'}}>
                {/* Logo */}
                <div className="flex items-center min-w-0">
                    <img src="/logo.jpg" alt="Exclusive Pro Cleaning Services Logo" className="h-14 w-14 rounded-full shadow-md border border-ocean-trust/20 bg-white object-cover" />
                </div>
                {/* Navigation Links */}
                <div className="flex-1 flex justify-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink href={item.href} className="px-5 py-2 text-base font-semibold text-ocean-trust hover:text-emerald-700 transition-colors rounded-md hover:bg-emerald-50 focus:bg-emerald-100 focus:outline-none">
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {/* Book Now Button */}
                <div className="flex items-center gap-4">
                    <a href="tel:832-994-3724">
                        <Button size="lg" className="bg-ocean-trust text-white hover:bg-emerald-700 shadow-md px-7 py-2 rounded-full font-semibold text-base tracking-wide transition-all duration-200">
                            Book Now: 832-994-3724
                        </Button>
                    </a>
                </div>
                {/* Mobile Menu */}
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-white shadow-lg py-4 gap-8 z-50">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="flex justify-between items-center px-6 py-3 text-lg font-semibold text-ocean-trust hover:text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.title}
                                </a>
                            ))}
                            <a
                                href="tel:832-994-3724"
                                className="flex justify-center items-center px-6 py-3 text-lg font-semibold text-white bg-ocean-trust rounded-full shadow-md hover:bg-emerald-700 transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                Book Now: 832-994-3724
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };