'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { useState } from "react";
import { navItems } from "@/app/constants/navigation";
import { MobileMenu } from "./mobile-menu";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header className="z-20 flex items-center md:justify-between justify-start md:px-8 px-4 py-4">
            <div className="flex items-center gap-4">
            <Link href="/" className="md:flex items-center gap-2 hidden">
                <Image src="/icons/pizza.svg" alt="logo" width={50} height={50} />
                <span className="text-2xl font-bold">Lorenzio's Pizza</span>
            </Link>
            </div>
            <nav className={`md:flex items-center gap-14 ${montserrat.className} hidden` }>
                {navItems.map((item) => (
                    <Link href={item.href} key={item.href} className={`${pathname === item.href ? "font-bold" : ""} ${item.icon ? "flex flex-row items-center gap-2" : ""}`}>{item.icon && <Image src={item.icon} alt={item.label} width={20} height={20} />}{item.label}</Link>
                ))}
            </nav>
            <button className="flex items-center gap-2 md:hidden" onClick={toggleMenu}>
            <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
            <span className="text-lg font-bold">Lorenzio's Pizza</span>
            </button>
        </header>   
        <MobileMenu navItems={navItems} toggleMenu={toggleMenu} isOpen={isOpen} />
        </>
    );
}