"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Cpu,
  Wrench,
  Radio,
  Settings,
  Hammer,
  Gauge,
  Battery,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const specs = [
  { label: "Class", value: "Featherweight", detail: "Combat robot class" },
  { label: "Weight", value: "≤13.6 kg", detail: "Maximum competition limit" },
  { label: "Dimensions", value: "TBD", detail: "Length × Width × Height" },
  { label: "Drive System", value: "Brushless", detail: "2WD/4WD configuration" },
  { label: "Weapon", value: "TBD", detail: "High-impact kinetic weapon" },
  { label: "Battery", value: "LiPo", detail: "6S - 12S configuration" },
  { label: "Control", value: "2.4 GHz RC", detail: "With custom failsafe" },
  { label: "Frame", value: "CNC Aluminium", detail: "With composite armor" },
];

const subsystems = [
  {
    icon: Gauge,
    title: "Drive System",
    description:
      "High-torque brushless motors paired with precision gearboxes deliver rapid acceleration and precise maneuverability in the arena.",
    features: [
      "Brushless outrunner motors",
      "Planetary gearboxes",
      "Foam-filled combat wheels",
      "Integrated motor controllers",
    ],
  },
  {
    icon: Hammer,
    title: "Weapon System",
    description:
      "A high-kinetic-energy weapon designed for maximum impact. The weapon assembly is engineered for reliability under extreme loads.",
    features: [
      "High-RPM brushless weapon motor",
      "Hardened steel impactor",
      "Precision bearings",
      "Tool-free maintenance access",
    ],
  },
  {
    icon: Cpu,
    title: "Electronics",
    description:
      "Custom-designed PCBs handle power distribution, motor control, and sensor integration in a compact, robust package.",
    features: [
      "Custom ESC design",
      "Power distribution board",
      "Voltage monitoring",
      "LED status indicators",
    ],
  },
  {
    icon: Radio,
    title: "Control System",
    description:
      "Reliable 2.4 GHz radio control with custom failsafe logic ensures the robot responds instantly and safely in combat.",
    features: [
      "2.4 GHz RC receiver",
      "Custom failsafe logic",
      "Dual-channel redundancy",
      "Real-time telemetry",
    ],
  },
  {
    icon: Battery,
    title: "Power System",
    description:
      "High-discharge LiPo batteries provide the massive current required for both drive and weapon systems during combat.",
    features: [
      "High-C rating LiPo packs",
      "Balanced charging system",
      "Current monitoring",
      "Thermal protection",
    ],
  },
  {
    icon: Settings,
    title: "Manufacturing",
    description:
      "In-house manufacturing capabilities including CNC machining, 3D printing, and composite fabrication for rapid iteration.",
    features: [
      "CNC aluminium chassis",
      "3D printed prototypes",
      "Composite armor panels",
      "Waterjet cut components",
    ],
  },
];

export default function RobotPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#E5005B]/10 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#E5005B]/10 text-[#E5005B] border-[#E5005B]/20">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Meet HCR-1
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              The <span className="text-gradient">Robot</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/70 leading-relaxed max-w-3xl"
            >
              HCR-1 is our first featherweight combat robot, designed and built
              entirely by HAN University students. Every component has been
              engineered for maximum performance within competition limits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Robot Overview */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Robot Render/Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1563178406-4f8025767818?w=800&h=800&fit=crop"
                  alt="HCR-1 Combat Robot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent" />
                {/* Technical overlay elements */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 rounded-full border border-white/10">
                  <span className="text-xs text-white/60 font-mono">
                    v1.0.0
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 rounded-full border border-white/10">
                  <span className="text-xs text-[#E5005B] font-mono">
                    FEATHERWEIGHT
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Overview Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
                Overview
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Designed for <span className="text-gradient">Combat</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  HCR-1 represents our team&apos;s first entry into competitive
                  combat robotics. Built from the ground up using advanced
                  engineering principles and manufacturing techniques, this robot
                  embodies everything we&apos;ve learned as a team.
                </p>
                <p>
                  The design prioritizes durability and repairability—key factors
                  in combat robotics where damage is inevitable. Every component
                  is accessible for quick repairs between matches, and the modular
                  architecture allows for rapid iteration and improvement.
                </p>
                <p>
                  Under the hood, HCR-1 features custom electronics designed
                  specifically for the demands of robotic combat. From the power
                  distribution system to the motor controllers, every circuit has
                  been optimized for reliability under extreme conditions.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#specs">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Specifications
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#subsystems">
                  <Button
                    variant="ghost"
                    className="text-[#E5005B] hover:text-[#E5005B]/80 hover:bg-[#E5005B]/10"
                  >
                    Explore Subsystems
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section id="specs" className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              Technical Details
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Robot <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-white/60 text-lg">
              Detailed technical specifications for HCR-1, our featherweight
              combat robot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[#141414] border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {specs.map((spec, index) => (
                        <tr
                          key={spec.label}
                          className={`border-b border-white/5 last:border-0 ${
                            index % 2 === 0 ? "bg-white/[0.02]" : ""
                          }`}
                        >
                          <td className="py-5 px-6 sm:px-8">
                            <span className="text-white/50 font-medium">
                              {spec.label}
                            </span>
                          </td>
                          <td className="py-5 px-6 sm:px-8">
                            <span className="text-white font-semibold text-lg">
                              {spec.value}
                            </span>
                          </td>
                          <td className="py-5 px-6 sm:px-8 hidden sm:table-cell">
                            <span className="text-white/40 text-sm">
                              {spec.detail}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Subsystems */}
      <section id="subsystems" className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              Engineering
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Robot <span className="text-gradient">Subsystems</span>
            </h2>
            <p className="text-white/60 text-lg">
              A closer look at the engineering that powers HCR-1, from drive
              systems to weapon mechanics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsystems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#141414] border-white/10 h-full hover:border-[#E5005B]/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-[#E5005B]/10 flex items-center justify-center mb-4 group-hover:bg-[#E5005B]/20 transition-colors">
                      <system.icon className="w-6 h-6 text-[#E5005B]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {system.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {system.description}
                    </p>
                    <Separator className="bg-white/10 my-4" />
                    <ul className="space-y-2">
                      {system.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-white/50 text-sm flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#E5005B] mt-1.5 shrink-0" />
                          {feature}
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

      {/* CAD / Design Process */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
                Design Process
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                From CAD to <span className="text-gradient">Combat</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  The journey from concept to competition robot involves
                  countless hours of CAD modeling, simulation, and iterative
                  prototyping. Our design process follows engineering best
                  practices while maintaining the flexibility needed for rapid
                  innovation.
                </p>
                <p>
                  We use industry-standard CAD software to model every component,
                  allowing us to verify clearances, analyze stress distributions,
                  and generate manufacturing drawings. Finite element analysis
                  helps us optimize the chassis and weapon for strength-to-weight
                  ratio.
                </p>
                <p>
                  Prototypes are created using 3D printing for quick iteration,
                  followed by CNC machining for the final competition-grade
                  components. This approach allows us to test and refine designs
                  before committing to expensive manufacturing processes.
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/robot/cad-design.jpg"
                  alt="CAD Design Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Robots */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              Future Development
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Future <span className="text-gradient">Robots</span>
            </h2>
            <p className="text-white/60 text-lg">
              HCR-1 is just the beginning. We&apos;re already planning our next
              generation of combat robots.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "HCR-1",
                status: "Current",
                description:
                  "Our first featherweight robot, focusing on proven design principles and reliability.",
              },
              {
                name: "HCR-2",
                status: "Planned 2027",
                description:
                  "Next generation featuring lessons learned from HCR-1 and advanced manufacturing techniques.",
              },
            ].map((robot, index) => (
              <motion.div
                key={robot.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`border-white/10 h-full ${
                    robot.status === "Current"
                      ? "bg-[#E5005B]/10 border-[#E5005B]/30"
                      : "bg-[#141414]"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {robot.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className={
                          robot.status === "Current"
                            ? "border-[#E5005B] text-[#E5005B]"
                            : "border-white/30 text-white/60"
                        }
                      >
                        {robot.status}
                      </Badge>
                    </div>
                    <p className="text-white/60">{robot.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#E5005B]/10 via-transparent to-[#E5005B]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Support <span className="text-gradient">HCR</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to support student engineering and help us build
              the next generation of HCR combat robots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sponsors">
                <Button
                  size="lg"
                  className="bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold px-8"
                >
                  Become a Sponsor
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
