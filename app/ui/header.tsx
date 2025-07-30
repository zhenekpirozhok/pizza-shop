'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { useState } from "react";
import { navItems } from "@/app/constants/navigation";
import { MobileMenu } from "./mobile-menu";
import { useCartStore } from "@/app/store/cart";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const itemsCount = useCartStore((state) => state.itemsCount);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-neutral-200">
        
        <div className="flex items-center gap-2">
          <button className="md:hidden" onClick={toggleMenu}>
            <Image src="/icons/menu.svg" alt="menu" width={28} height={28} />
          </button>
          <Link href="/" className="hidden md:flex items-center gap-2">
            <Image src="/icons/pizza.svg" alt="logo" width={40} height={40} />
            <span className="text-xl font-bold">Lorenzio's Pizza</span>
          </Link>
        </div>

        <nav className={`hidden md:flex items-center gap-10 ${montserrat.className}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg font-bold ${
                item.href === pathname ? "text-red-700" : "text-neutral-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/cart" className="relative flex items-center">
          <Image src="/icons/cart.svg" alt="cart" width={28} height={28} />
          {itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {itemsCount}
            </span>
          )}
        </Link>
      </header>

      <MobileMenu navItems={navItems} toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  );
}
