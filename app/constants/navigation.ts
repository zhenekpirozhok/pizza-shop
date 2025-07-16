export type NavItem = {
    href: string;
    label: string;
    icon?: string;
}

export const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/cart", label: "Cart", icon: "/icons/cart.svg" },
];