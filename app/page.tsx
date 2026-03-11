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
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Custom PCB design, firmware development, and real-time control systems for combat robotics.",
  },
  {
    icon: Users,
    title: "Operations & Management",
    description:
      "Project management, sponsor relations, event coordination, and team logistics.",
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
  { name: "HAN University", tier: "Platinum", logo: "/sponsors/han-platinum.png" },
  { name: "Gold Sponsor 1", tier: "Gold", logo: "/sponsors/gold-1.png" },
  { name: "Gold Sponsor 2", tier: "Gold", logo: "/sponsors/gold-2.png" },
  { name: "Silver 1", tier: "Silver", logo: "/sponsors/silver-1.png" },
  { name: "Silver 2", tier: "Silver", logo: "/sponsors/silver-2.png" },
  { name: "Supporter 1", tier: "Supporter", logo: "/sponsors/supporter-1.png" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#E5005B]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#E5005B]/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#E5005B]/10 text-[#E5005B] border-[#E5005B]/20 hover:bg-[#E5005B]/20 px-4 py-1.5 text-sm">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                HAN University of Applied Sciences
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              HAN Competitive{" "}
              <span className="text-gradient">Robotics</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-white/70 max-w-2xl mb-8"
            >
              Engineering combat robots for European competitions. Built by
              students, powered by passion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold px-8 py-6 text-base group"
                >
                  Meet the Team
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/robot">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
                >
                  Our Robot
                </Button>
              </Link>
              <Link href="/sponsors">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/5 font-semibold px-8 py-6 text-base"
                >
                  Become a Sponsor
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 max-w-xl"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">13.6</div>
                <div className="text-sm text-white/50 mt-1">kg Weight Class</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">20+</div>
                <div className="text-sm text-white/50 mt-1">Team Members</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">2025</div>
                <div className="text-sm text-white/50 mt-1">Founded</div>
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
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#E5005B] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* What is HCR Section */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Content */}
            <div>
              <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
                About Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                What is <span className="text-gradient">HCR?</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                HAN Competitive Robotics (HCR) is a student engineering team at
                HAN University of Applied Sciences in the Netherlands. We design,
                build, and compete with featherweight combat robots in European
                robotics competitions.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Our team brings together students from various engineering
                disciplines including Embedded Systems Engineering and Mechanical
                Engineering. Together, we push the boundaries of what&apos;s possible
                in combat robotics while developing real-world engineering skills.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="/robot/workshop.jpg" 
                  alt="Team working on robot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-sm">Team HCR at work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              Our Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="text-white/60 text-lg">
              From concept to combat-ready machine, we engineer every aspect of
              our robots in-house at HAN University.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <Card className="bg-[#141414] border-white/10 h-full hover:border-[#E5005B]/30 transition-colors duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-[#E5005B]/10 flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold text-[#E5005B]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Divisions */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              Team Structure
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Engineering <span className="text-gradient">Divisions</span>
            </h2>
            <p className="text-white/60 text-lg">
              Our team is organized into specialized divisions, each focusing on
              critical aspects of robot development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#141414] border-white/10 h-full group hover:border-[#E5005B]/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E5005B]/20 to-[#E5005B]/5 flex items-center justify-center mb-6 group-hover:from-[#E5005B]/30 group-hover:to-[#E5005B]/10 transition-all duration-300">
                      <division.icon className="w-7 h-7 text-[#E5005B]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {division.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {division.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 bg-[#0f0f0f] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
          >
            <div>
              <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
                News & Updates
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Latest <span className="text-gradient">Updates</span>
              </h2>
            </div>
            <Link href="#" className="mt-4 sm:mt-0">
              <Button
                variant="ghost"
                className="text-[#E5005B] hover:text-[#E5005B]/80 hover:bg-[#E5005B]/10 group"
              >
                View All Updates
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#141414] border-white/10 h-full hover:border-white/20 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge
                        variant="outline"
                        className="border-[#E5005B]/30 text-[#E5005B]"
                      >
                        {update.category}
                      </Badge>
                      <span className="text-white/40 text-sm">
                        {update.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#E5005B] transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {update.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-[#E5005B] text-sm font-medium">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              Our Partners
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Proudly Supported <span className="text-gradient">By</span>
            </h2>
            <p className="text-white/60 text-lg">
              Our sponsors make it possible to build competitive combat robots
              and represent HAN University at European competitions.
            </p>
          </motion.div>

          {/* Sponsor Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="aspect-[3/2] bg-[#1A1A1A] rounded-xl border border-white/10 flex items-center justify-center hover:border-[#E5005B]/30 transition-all duration-300 group overflow-hidden"
              >
                <img 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
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
                className="bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold px-8"
              >
                Become a Sponsor
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Learn More CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E5005B]/10 via-transparent to-[#E5005B]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Interested in{" "}
              <span className="text-gradient">Combat Robotics?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Learn more about HAN Competitive Robotics and how we&apos;re pushing
              the boundaries of student engineering at HAN University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold px-8 py-6 text-base"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
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
