"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#E5005B]/20">
              <img src="/images/logo.png" alt="HCR Logo" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white">HCR</span>
              <span className="-mt-1 text-[10px] tracking-widest text-white/50 uppercase">
                HAN Robotics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/sponsors">
              <Button className="bg-[#E5005B] px-6 font-semibold text-white hover:bg-[#E5005B]/90">
                Become a Sponsor
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-[#0a0a0a]">
              <div className="flex h-full flex-col pt-8">
                {/* Mobile Logo */}
                <Link
                  href="/"
                  className="mb-8 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#E5005B] to-[#FF6B9A]">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">HCR</span>
                </Link>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-[#E5005B]/20 text-[#E5005B]"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto pb-8">
                  <Link href="/sponsors" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[#E5005B] py-6 font-semibold text-white hover:bg-[#E5005B]/90">
                      Become a Sponsor
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
