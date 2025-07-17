import Link from "next/link";
import { NavItem } from "@/app/types/navigation.type";

type Props = {
  navItems: NavItem[];
  toggleMenu: () => void;
  isOpen: boolean;
};

export const MobileMenu = ({
  navItems,
  toggleMenu,
  isOpen,
}: Props) => (
  <div
    className={`
      fixed inset-0 z-40 flex flex-col bg-white px-8 py-16 shadow-lg
      transition-transform duration-300 ease-in-out
      transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
  >
    <button
      onClick={toggleMenu}
      aria-label="Close menu"
      className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-500"
    >
      &times;
    </button>

    <nav className="mt-12 flex flex-col gap-6">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={toggleMenu}
          className="text-xl text-gray-800 hover:text-red-600 transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  </div>
);

