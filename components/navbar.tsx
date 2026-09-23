"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/robot", label: "The Robot" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto max-w-7xl border-x border-border">
        {/* Desktop Header */}
        <div className="flex h-[80px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-xl font-display font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
              HCR
            </div>
            <div className="h-4 w-px bg-border hidden sm:block"></div>
            <span className="hidden sm:block text-[10px] tracking-widest text-muted-foreground uppercase font-mono group-hover:text-foreground transition-colors">
              HAN Competitive Robotics
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Nav Strip (<lg) */}
      <div className="lg:hidden border-t border-border overflow-x-auto no-scrollbar bg-surface-deep">
        <nav className="flex mx-auto max-w-7xl border-x border-border">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex-shrink-0 px-5 py-4 font-mono text-[9px] uppercase tracking-widest border-r border-border last:border-r-0 transition-colors ${
                  isActive ? "text-primary bg-accent/20" : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
