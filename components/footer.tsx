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
  { href: "https://www.linkedin.com/company/han-competitive-robotics", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/HAN-Competitive-Robotics", label: "GitHub", icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="HCR Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">HCR</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">
                  HAN Competitive Robotics
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              HAN Competitive Robotics is a student engineering team building
              featherweight combat robots at HAN University of Applied Sciences,
              Netherlands.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-[#E5005B]/20 hover:text-[#E5005B] transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Team Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Team</h4>
            <ul className="space-y-3">
              {footerLinks.team.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#E5005B] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sponsors Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sponsors</h4>
            <ul className="space-y-3">
              {footerLinks.sponsors.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#E5005B] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#E5005B]" />
                <span>
                  HAN University of Applied Sciences
                  <br />
                  Arnhem, Netherlands
                </span>
              </li>
              <li>
                <a
                  href="mailto:hcr@han.nl"
                  className="flex items-center gap-3 text-white/60 hover:text-[#E5005B] text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#E5005B]" />
                  <span>hcr@han.nl</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} HAN Competitive Robotics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
