"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Cpu, Wrench, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const divisions = [
  {
    icon: Wrench,
    title: "Mechanical Engineering",
    description:
      "CAD design, structural analysis, and precision manufacturing of robot chassis and weapon systems.",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description:
      "Power distribution, motor control, wiring harnesses, and electrical safety systems.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Custom PCB design, firmware development, and real-time control systems for combat robotics.",
  },
  {
    icon: Users,
    title: "Operations & Management",
    description: "Project management, sponsor relations, event coordination, and team logistics.",
  },
];

const updates = [
  {
    date: "March 2026",
    title: "HCR-1 Design Complete",
    excerpt:
      "Our first featherweight combat robot design has been finalized. Manufacturing begins next month.",
    category: "Development",
  },
  {
    date: "February 2026",
    title: "New Team Members Joined",
    excerpt:
      "Welcome to our new mechanical and embedded systems engineers joining for the 2026 season.",
    category: "Team",
  },
  {
    date: "January 2026",
    title: "Sponsorship Goals Met",
    excerpt:
      "Thanks to our amazing sponsors, we've secured funding for our first competition season.",
    category: "Sponsors",
  },
];

const sponsors = [
  { name: "HAN University", tier: "Platinum", logo: "/sponsors/han-platinum.svg" },
  // Placeholders for future sponsors:
  // { name: "Gold Sponsor 1", tier: "Gold", logo: "" },
  // { name: "Gold Sponsor 2", tier: "Gold", logo: "" },
  // { name: "Silver Sponsor 1", tier: "Silver", logo: "" },
  // { name: "Silver Sponsor 2", tier: "Silver", logo: "" },
  // { name: "Supporter 1", tier: "Supporter", logo: "" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        {/* Background Elements */}
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="blur-glow absolute top-1/4 right-0 h-1/2 w-1/2 rounded-full bg-[#E5005B]/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-1/3 w-1/3 rounded-full bg-[#E5005B]/5 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 border-[#E5005B]/20 bg-[#E5005B]/10 px-4 py-1.5 text-sm text-[#E5005B] hover:bg-[#E5005B]/20">
                <Zap className="mr-1.5 h-3.5 w-3.5" />
                HAN University of Applied Sciences
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-7xl"
            >
              HAN Competitive <span className="text-gradient">Robotics</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-2xl text-xl text-white/70 sm:text-2xl"
            >
              Engineering combat robots for European competitions. Built by students, powered by
              passion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <Link href="/team">
                <Button
                  size="lg"
                  className="group bg-[#E5005B] px-8 py-6 text-base font-semibold text-white hover:bg-[#E5005B]/90"
                >
                  Meet the Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/robot">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
                >
                  Our Robot
                </Button>
              </Link>
              <Link href="/sponsors">
                <Button
                  size="lg"
                  variant="ghost"
                  className="px-8 py-6 text-base font-semibold text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Become a Sponsor
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-white/10 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">13.6</div>
                <div className="mt-1 text-sm text-white/50">kg Weight Class</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">10</div>
                <div className="mt-1 text-sm text-white/50">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white sm:text-4xl">2025</div>
                <div className="mt-1 text-sm text-white/50">Founded</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#E5005B]"
            />
          </div>
        </motion.div>
      </section>

      {/* What is HCR Section */}
      <section className="relative bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            {/* Content */}
            <div>
              <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">About Us</Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                What is <span className="text-gradient">HCR?</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/70">
                HAN Competitive Robotics (HCR) is a student engineering team at HAN University of
                Applied Sciences in the Netherlands. We design, build, and compete with
                featherweight combat robots in European robotics competitions.
              </p>
              <p className="mb-8 leading-relaxed text-white/60">
                Our team brings together students from various engineering disciplines including
                Embedded Systems Engineering and Mechanical Engineering. Together, we push the
                boundaries of what&apos;s possible in combat robotics while developing real-world
                engineering skills.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="group border-white/20 text-white hover:bg-white/10"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/robot/workshop.jpg"
                  alt="Team working on robot"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-sm text-white/80">Team HCR at work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="relative overflow-hidden bg-[#0f0f0f] py-16">
        <div className="bg-grid-pattern-light absolute inset-0 opacity-50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Our Work</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="text-lg text-white/60">
              From concept to combat-ready machine, we engineer every aspect of our robots in-house
              at HAN University.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Combat Robots",
                description:
                  "Featherweight combat robots (≤13.6 kg) built for durability, power, and competitive advantage.",
              },
              {
                title: "Custom Electronics",
                description:
                  "Proprietary control systems, motor drivers, and power management designed for extreme conditions.",
              },
              {
                title: "Weapon Systems",
                description:
                  "High-kinetic-energy weapons including drums, spinners, and hammers engineered for maximum impact.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-white/10 bg-[#141414] transition-colors duration-300 hover:border-[#E5005B]/30">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E5005B]/10">
                      <span className="text-2xl font-bold text-[#E5005B]">0{index + 1}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                    <p className="leading-relaxed text-white/60">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Divisions */}
      <section className="relative bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Team Structure</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Engineering <span className="text-gradient">Divisions</span>
            </h2>
            <p className="text-lg text-white/60">
              Our team is organized into specialized divisions, each focusing on critical aspects of
              robot development.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-white/10 bg-[#141414] transition-all duration-300 hover:border-[#E5005B]/30">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#E5005B]/20 to-[#E5005B]/5 transition-all duration-300 group-hover:from-[#E5005B]/30 group-hover:to-[#E5005B]/10">
                      <division.icon className="h-7 w-7 text-[#E5005B]" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{division.title}</h3>
                    <p className="leading-relaxed text-white/60">{division.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="relative bg-[#0f0f0f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">
                News & Updates
              </Badge>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Latest <span className="text-gradient">Updates</span>
              </h2>
            </div>
            <Link href="#" className="mt-4 sm:mt-0">
              <Button
                variant="ghost"
                className="group text-[#E5005B] hover:bg-[#E5005B]/10 hover:text-[#E5005B]/80"
              >
                View All Updates
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {updates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full cursor-pointer border-white/10 bg-[#141414] transition-all duration-300 hover:border-white/20">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Badge variant="outline" className="border-[#E5005B]/30 text-[#E5005B]">
                        {update.category}
                      </Badge>
                      <span className="text-sm text-white/40">{update.date}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[#E5005B]">
                      {update.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60">{update.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-[#E5005B]">
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative bg-[#0a0a0a] py-16">
        <div className="bg-grid-pattern absolute inset-0 opacity-20" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Our Partners</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Proudly Supported <span className="text-gradient">By</span>
            </h2>
            <p className="text-lg text-white/60">
              Our sponsors make it possible to build competitive combat robots and represent HAN
              University at European competitions.
            </p>
          </motion.div>

          {/* Sponsor Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group flex aspect-[3/2] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] transition-all duration-300 hover:border-[#E5005B]/30"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link href="/sponsors">
              <Button
                size="lg"
                className="bg-[#E5005B] px-8 font-semibold text-white hover:bg-[#E5005B]/90"
              >
                Become a Sponsor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Learn More CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E5005B]/10 via-transparent to-[#E5005B]/5 py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Interested in <span className="text-gradient">Combat Robotics?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
              Learn more about HAN Competitive Robotics and how we&apos;re pushing the boundaries of
              student engineering at HAN University.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-[#E5005B] px-8 py-6 text-base font-semibold text-white hover:bg-[#E5005B]/90"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
