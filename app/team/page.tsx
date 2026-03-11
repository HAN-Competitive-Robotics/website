"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Zap, Wrench, Cpu, Settings, ArrowRight } from "lucide-react";
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
        program: "S6 Mechanical Engineering",
        image: "/team/vishaal.png",
        initials: "VG",
      },
      {
        name: "Neiv Malaviya",
        role: "Technical Manager",
        program: "S4 Embedded Systems Engineering",
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
        role: "Drive Train Lead",
        program: "S6 Mechanical Engineering",
        image: "/team/vishaal.png",
        initials: "VG",
      },
      {
        name: "Rafiul Islam",
        role: "Drive Train Head",
        program: "S4 Mechanical Engineering",
        image: "/team/rafiul.png",
        initials: "RI",
      },
      {
        name: "Germ van Popta",
        role: "Chassis Head",
        program: "S6 Mechanical Engineering",
        image: "/team/germ.png",
        initials: "GP",
      },
      {
        name: "Yashovardhan Mangalwedhe",
        role: "Chassis Team",
        program: "S4 Mechanical Engineering",
        image: "/team/yashovardhan.png",
        initials: "YM",
      },
      {
        name: "Mihails Bazilovs",
        role: "Weapon Lead",
        program: "S4 Mechanical Engineering",
        image: "/team/mihails.png",
        initials: "MB",
      },
      {
        name: "Michael Beukhof",
        role: "Weapon Team",
        program: "S4 Mechanical Engineering",
        image: "/team/michael.png",
        initials: "MB",
      },
    ],
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    icon: Zap,
    description: "Wiring looms and electrical systems",
    members: [
      {
        name: "Jits Kamps",
        role: "Electrical Engineer",
        program: "S4 Electrical Engineering",
        image: "/team/jits.png",
        initials: "JK",
      },
      {
        name: "Mohammed Dude",
        role: "Electrical Engineer",
        program: "S4 Electrical Engineering",
        image: "/team/mohammed.png",
        initials: "MD",
      },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    icon: Cpu,
    description: "Developing control systems, firmware, and RF systems",
    members: [
      {
        name: "Neiv Malaviya",
        role: "Data Logging & Visualization",
        program: "S4 Embedded Systems Engineering",
        image: "/team/neiv.png",
        initials: "NM",
      },
      {
        name: "Luka Ponomarenko",
        role: "Core & Weapon Firmware",
        program: "S4 Embedded Systems Engineering",
        image: "/team/luka.png",
        initials: "LP",
      },
      {
        name: "Henri Krinke",
        role: "RF & Drivetrain",
        program: "S4 Embedded Systems Engineering",
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
      <Card className="bg-[#141414] border-white/10 hover:border-[#E5005B]/30 transition-all duration-300 group overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full border-2 border-white/10 group-hover:border-[#E5005B]/50 transition-colors bg-[#1E1E1E] overflow-hidden shrink-0">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#E5005B]/10 text-[#E5005B] font-semibold text-lg">
                  {member.initials}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-semibold text-lg group-hover:text-[#E5005B] transition-colors truncate">
                {member.name}
              </h4>
              <p className="text-[#E5005B] text-sm font-medium">{member.role}</p>
              <p className="text-white/50 text-sm mt-1">{member.program}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function TeamSection({
  section,
  index,
}: {
  section: (typeof teamSections)[0];
  index: number;
}) {
  const Icon = section.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 first:pt-0"
      id={section.id}
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#E5005B]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#E5005B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {section.title}
          </h2>
        </div>
        <p className="text-white/60 ml-13 pl-13">{section.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {section.members.map((member, memberIndex) => (
          <TeamMemberCard
            key={member.name}
            member={member}
            index={memberIndex}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#E5005B]/10 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#E5005B]/10 text-[#E5005B] border-[#E5005B]/20">
                <Users className="w-3.5 h-3.5 mr-1.5" />
                Our Team
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Meet the <span className="text-gradient">Team</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/70 leading-relaxed max-w-3xl"
            >
              HCR is powered by dedicated students from HAN University. From
              mechanical engineers to embedded systems specialists, our diverse
              team brings together the skills needed to build competitive combat
              robots.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Structure Overview */}
      <section className="py-16 bg-[#1A1A1A] border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {teamSections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-white/10 rounded-full text-white/70 hover:text-white hover:border-[#E5005B]/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-[#E5005B]" />
                  <span className="text-sm font-medium">{section.title}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-8 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {teamSections.map((section, index) => (
            <TeamSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </section>

      {/* Learn More CTA */}
      <section className="py-24 bg-gradient-to-br from-[#E5005B]/10 via-transparent to-[#E5005B]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Explore <span className="text-gradient">HCR</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Discover what our team is working on and see how we&apos;re building
              competitive combat robots here at HAN University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/robot">
                <Button
                  size="lg"
                  className="bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold px-8"
                >
                  See Our Robot
                  <ArrowRight className="ml-2 w-4 h-4" />
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
