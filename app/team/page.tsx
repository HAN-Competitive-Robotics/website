"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Wrench, Cpu, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Random avatar placeholder URLs
// Team data structure - easy to edit
// Add or modify team members here
const teamSections = [
  {
    id: "management",
    title: "Management",
    icon: Settings,
    description: "Leading the team and managing operations",
    members: [
      {
        name: "Vishaal Girish Gopala Krishnan",
        role: "Team Manager",
        program: "Keeping the chaos organized since 2025",
        image: "/team/vishaal.png",
        initials: "VG",
      },
      {
        name: "Neiv Malaviya",
        role: "Technical Manager",
        program: "If it works, don't touch it",
        image: "/team/neiv.png",
        initials: "NM",
      },
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    icon: Wrench,
    description: "Designing and manufacturing the robot chassis, drive train, and weapons",
    members: [
      {
        name: "Vishaal Girish Gopala Krishnan",
        role: "Drive Train",
        program: "Making things spin since day one",
        image: "/team/vishaal.png",
        initials: "VG",
      },
      {
        name: "Rafiul Islam",
        role: "Drive Train Head",
        program: "Torque is cheap, grip is everything",
        image: "/team/rafiul.png",
        initials: "RI",
      },
      {
        name: "Germ van Popta",
        role: "Chassis Head",
        program: "If it bends, make it stronger",
        image: "/team/germ.png",
        initials: "GP",
      },
      {
        name: "Yashovardhan Mangalwedhe",
        role: "Chassis Team",
        program: "Measure twice, cut once, panic never",
        image: "/team/yashovardhan.png",
        initials: "YM",
      },
      {
        name: "Mihails Bazilovs",
        role: "Weapon Lead",
        program: "Spin to win",
        image: "/team/mihails.png",
        initials: "MB",
      },
      {
        name: "Michael Beukhof",
        role: "Weapon Team",
        program: "More sparks, more fun",
        image: "/team/michael.png",
        initials: "MB",
      },
    ],
  },
  {
    id: "electrical-embedded",
    title: "Electrical & Embedded Systems",
    icon: Cpu,
    description: "Power distribution, control systems, firmware, and RF",
    members: [
      {
        name: "Jits Kamps",
        role: "Electrical Engineer",
        program: "Magic smoke is expensive",
        image: "/team/jits.png",
        initials: "JK",
      },
      {
        name: "Neiv Malaviya",
        role: "Data Logging & Visualization",
        program: "printf debugging enthusiast",
        image: "/team/neiv.png",
        initials: "NM",
      },
      {
        name: "Luka Ponomarenko",
        role: "Core & Kinetic Firmware",
        program: "Segmentation fault? I hardly know her",
        image: "/team/luka.png",
        initials: "LP",
      },
      {
        name: "Henri Krinke",
        role: "RF & Drivetrain",
        program: "Over the air and under the radar",
        image: "/team/henri.png",
        initials: "HK",
      },
    ],
  },
];

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof teamSections)[0]["members"][0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="group h-full overflow-hidden border-white/10 bg-[#141414] transition-all duration-300 hover:border-[#E5005B]/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/10 bg-[#1E1E1E] transition-colors group-hover:border-[#E5005B]/50">
              {member.image ? (
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#E5005B]/10 text-lg font-semibold text-[#E5005B]">
                  {member.initials}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-[#E5005B]">
                {member.name}
              </h4>
              <p className="text-sm font-medium text-[#E5005B]">{member.role}</p>
              <p className="mt-1 text-sm text-white/50">{member.program}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TeamSection({ section, index }: { section: (typeof teamSections)[0]; index: number }) {
  const Icon = section.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-full py-10 first:pt-0"
      id={section.id}
    >
      <div className="mb-8 min-h-[120px]">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E5005B]/10">
            <Icon className="h-5 w-5 text-[#E5005B]" />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{section.title}</h2>
        </div>
        <p className="text-white/60">{section.description}</p>
      </div>

      <div className="grid items-stretch gap-4 grid-cols-1 sm:grid-cols-2">
        {section.members.map((member, memberIndex) => (
          <TeamMemberCard key={member.name} member={member} index={memberIndex} />
        ))}
      </div>
    </motion.section>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="blur-glow absolute top-0 right-0 h-1/2 w-1/2 rounded-full bg-[#E5005B]/10 blur-[200px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 border-[#E5005B]/20 bg-[#E5005B]/10 text-[#E5005B]">
                <Users className="mr-1.5 h-3.5 w-3.5" />
                Our Team
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Meet the <span className="text-gradient">Team</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl text-xl leading-relaxed text-white/70"
            >
              HCR is powered by dedicated students from HAN University. From mechanical engineers to
              embedded systems specialists, our diverse team brings together the skills needed to
              build competitive combat robots.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Structure Overview */}
      <section className="border-b border-white/10 bg-[#1A1A1A] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {teamSections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-[#141414] px-4 py-2 text-white/70 transition-all duration-200 hover:border-[#E5005B]/50 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-[#E5005B]" />
                  <span className="text-sm font-medium">{section.title}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Sections - Custom Layout */}
      <section className="bg-[#121212] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Management - Centered at top */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-4xl">
              <TeamSection section={teamSections[0]} index={0} />
            </div>
          </div>

          {/* Mechanical & Electrical/Embedded - Side by side */}
          <div className="grid gap-8 lg:grid-cols-2">
            <TeamSection section={teamSections[1]} index={1} />
            <TeamSection section={teamSections[2]} index={2} />
          </div>
        </div>
      </section>

      {/* Learn More CTA */}
      <section className="bg-gradient-to-br from-[#E5005B]/10 via-transparent to-[#E5005B]/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Explore <span className="text-gradient">HCR</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
              Discover what our team is working on and see how we&apos;re building competitive
              combat robots here at HAN University.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/robot">
                <Button
                  size="lg"
                  className="bg-[#E5005B] px-8 font-semibold text-white hover:bg-[#E5005B]/90"
                >
                  See Our Robot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
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
