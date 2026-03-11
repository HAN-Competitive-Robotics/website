"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  GraduationCap,
  Users,
  Zap,
  Award,
  Cpu,
  Wrench,
  Cog,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const learningOutcomes = [
  {
    icon: Cog,
    title: "Mechanical Design",
    description:
      "CAD modeling, stress analysis, and manufacturing including CNC machining and 3D printing.",
  },
  {
    icon: Cpu,
    title: "Electronics & Control",
    description:
      "PCB design, embedded programming, motor control, and wireless communication systems.",
  },
  {
    icon: Users,
    title: "Project Management",
    description:
      "Agile methods, team coordination, budgeting, and deadline management in engineering projects.",
  },
  {
    icon: Award,
    title: "Competition Experience",
    description:
      "Real world testing under pressure, troubleshooting in time critical situations, and sportsmanship.",
  },
];

const teamStructure = [
  {
    title: "Management",
    members: "4 to 5 students",
    responsibilities: [
      "Team leadership and strategy",
      "Sponsor relations",
      "Event coordination",
      "Budget management",
    ],
  },
  {
    title: "Mechanical Engineering",
    members: "8 to 10 students",
    responsibilities: [
      "Robot chassis design",
      "Active element development",
      "Manufacturing and assembly",
      "Materials selection",
    ],
  },
  {
    title: "Embedded Systems",
    members: "6 to 8 students",
    responsibilities: [
      "Control system firmware",
      "PCB design and prototyping",
      "Sensor integration",
      "Power electronics",
    ],
  },
  {
    title: "Operations",
    members: "3 to 4 students",
    responsibilities: [
      "Social media and marketing",
      "Documentation",
      "Logistics and transport",
      "Team welfare",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
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
                About HCR
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Engineering at <span className="text-gradient">HAN University</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl text-xl leading-relaxed text-white/70"
            >
              HAN Competitive Robotics (HCR) is a student team building featherweight robots 
              for competitions across Europe. We bring together passionate students from various 
              engineering programs to work on real robotics projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is HCR Section */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Our Story</Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                What is HAN Competitive <span className="text-gradient">Robotics?</span>
              </h2>
              <div className="space-y-4 leading-relaxed text-white/70">
                <p>
                  HCR is a student team at HAN dedicated to the design, manufacture, and 
                  competition of featherweight robots. Founded in 2025, our team represents 
                  the university at robotics events throughout Europe.
                </p>
                <p>
                  We compete in the featherweight class (up to 13.6 kg), where our robots face 
                  other student and hobbyist teams in a test of engineering skill, driving 
                  ability, and strategic thinking.
                </p>
                <p>
                  Our team includes students from programs like Embedded Systems Engineering 
                  and Mechanical Engineering. This multidisciplinary approach lets us tackle 
                  every aspect of robot development, from concept to competition.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/about/team-workshop.jpg"
                  alt="Team Workshop"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Our Mission</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Why We <span className="text-gradient">Exist</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              Our mission is to give HAN University students hands on engineering experience 
              through robotics competitions. We believe building robots that can survive the 
              arena teaches lessons no classroom can match.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  description:
                    "Striving for engineering excellence in every part we design and build.",
                },
                {
                  icon: GraduationCap,
                  title: "Learning",
                  description:
                    "Creating an environment where students learn by doing, failing, and improving.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "Building a community of engineers who support each other and share knowledge.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#E5005B]/10">
                    <item.icon className="h-8 w-8 text-[#E5005B]" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Students Learn */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">
              Skills Development
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              What Students <span className="text-gradient">Learn</span>
            </h2>
            <p className="text-lg text-white/60">
              Joining HCR gives practical experience that complements academic learning and 
              prepares students for engineering careers.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningOutcomes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-white/10 bg-[#141414] transition-all duration-300 hover:border-[#E5005B]/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E5005B]/10 transition-colors group-hover:bg-[#E5005B]/20">
                      <item.icon className="h-6 w-6 text-[#E5005B]" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Organization</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Team <span className="text-gradient">Structure</span>
            </h2>
            <p className="text-lg text-white/60">
              HCR is organized into divisions, each led by experienced students and focused 
              on specific parts of our robot development.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamStructure.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-white/10 bg-[#141414]">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">{division.title}</h3>
                    <Badge variant="outline" className="mb-4 border-[#E5005B]/30 text-[#E5005B]">
                      {division.members}
                    </Badge>
                    <Separator className="my-4 bg-white/10" />
                    <ul className="space-y-2">
                      {division.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E5005B]" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Robotics */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">The Sport</Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Why Competition <span className="text-gradient">Robotics?</span>
              </h2>
              <div className="space-y-6 leading-relaxed text-white/70">
                <p>
                  Competition robotics is more than just building machines. It is a test of 
                  engineering under demanding conditions. When robots enter the arena, every 
                  design decision is put to the test.
                </p>
                <p>
                  The sport demands excellence in mechanical design, electrical engineering, and 
                  control systems. A robot must survive impacts that would damage ordinary machines 
                  while delivering enough force to compete effectively. This requires innovative 
                  thinking, careful material selection, and precision manufacturing.
                </p>
                <p>
                  For students, competition robotics offers great learning opportunities. The tight 
                  integration of mechanical and electronic systems, combined with the pressure of 
                  competition, accelerates skill development beyond traditional coursework.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                {
                  stat: "13.6",
                  unit: "kg",
                  label: "Maximum weight for featherweight class robots",
                },
                {
                  stat: "250+",
                  unit: "g",
                  label: "Energy in a spinning kinetic system",
                },
                {
                  stat: "3",
                  unit: "minutes",
                  label: "Duration of a typical competition match",
                },
                {
                  stat: "∞",
                  unit: "",
                  label: "Learning opportunities in every build",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 rounded-xl border border-white/10 bg-[#141414] p-6"
                >
                  <div className="text-gradient text-4xl font-bold sm:text-5xl">
                    {item.stat}
                    <span className="text-2xl text-white/60">{item.unit}</span>
                  </div>
                  <p className="text-white/60">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#E5005B]/10 via-transparent to-[#E5005B]/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Want to Learn <span className="text-gradient">More?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
              Discover more about our team, our robot, and how HCR brings together students from 
              across HAN University to build competition robots.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-[#E5005B] px-8 font-semibold text-white hover:bg-[#E5005B]/90"
                >
                  Meet the Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/robot">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  See Our Robot
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
