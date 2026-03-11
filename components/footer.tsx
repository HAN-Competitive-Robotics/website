"use client";

import Link from "next/link";
import { Zap, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  team: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/robot", label: "The Robot" },
    { href: "/join", label: "Join Us" },
  ],
  sponsors: [
    { href: "/sponsors", label: "Our Sponsors" },
    { href: "/sponsors", label: "Become a Sponsor" },
    { href: "/sponsors", label: "Sponsorship Tiers" },
  ],
  contact: [
    { href: "/contact", label: "Contact Us" },
    { href: "mailto:hcr@han.nl", label: "hcr@han.nl" },
  ],
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/han-competitive-robotics",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://github.com/HAN-Competitive-Robotics", label: "GitHub", icon: Github },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-lg">
                <img src="/images/logo.png" alt="HCR Logo" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">HCR</span>
                <span className="text-xs tracking-wider text-white/50 uppercase">
                  HAN Competitive Robotics
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
              HAN Competitive Robotics is a student engineering team building featherweight combat
              robots at HAN, Netherlands.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-all duration-200 hover:bg-[#E5005B]/20 hover:text-[#E5005B]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Team Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Team</h4>
            <ul className="space-y-3">
              {footerLinks.team.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-[#E5005B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sponsors Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Sponsors</h4>
            <ul className="space-y-3">
              {footerLinks.sponsors.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-[#E5005B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E5005B]" />
                <span>
                  HAN
                  <br />
                  Arnhem, Netherlands
                </span>
              </li>
              <li>
                <a
                  href="mailto:hcr@han.nl"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-[#E5005B]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#E5005B]" />
                  <span>hcr@han.nl</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-white/40 sm:text-left">
            © {new Date().getFullYear()} HAN Competitive Robotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
