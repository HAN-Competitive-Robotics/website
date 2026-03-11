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
  { label: "Class", value: "Featherweight", detail: "Competition class" },
  { label: "Weight", value: "≤13.6 kg", detail: "Maximum competition limit" },
  { label: "Dimensions", value: "TBD", detail: "Length × Width × Height" },
  { label: "Drive System", value: "Brushless", detail: "2WD/4WD configuration" },
  { label: "Weapon", value: "TBD", detail: "High-performance kinetic mechanism" },
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
      "Foam-filled arena wheels",
      "Integrated motor controllers",
    ],
  },
  {
    icon: Hammer,
    title: "Kinetic System",
    description:
      "A high-performance kinetic system designed for competitive impact. The mechanism assembly is engineered for reliability under extreme loads.",
    features: [
      "High-RPM brushless kinetic motor",
      "Hardened steel contact element",
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
      "Reliable 2.4 GHz radio control with custom failsafe logic ensures the robot responds instantly and safely in the arena.",
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
      "High-discharge LiPo batteries provide the massive current required for both drive and kinetic systems during competition.",
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
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="blur-glow absolute top-0 left-0 h-1/2 w-1/2 rounded-full bg-[#E5005B]/10 blur-[200px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 border-[#E5005B]/20 bg-[#E5005B]/10 text-[#E5005B]">
                <Zap className="mr-1.5 h-3.5 w-3.5" />
                Meet HCR-1
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              The <span className="text-gradient">Robot</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl text-xl leading-relaxed text-white/70"
            >
              HCR-1 is our first featherweight battlebot, designed and built entirely by HAN
              University students. Every component has been engineered for maximum performance
              within competition limits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Robot Overview */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Robot Render/Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563178406-4f8025767818?w=800&h=800&fit=crop"
                  alt="HCR-1 Battlebot"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent" />
                {/* Technical overlay elements */}
                <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1">
                  <span className="font-mono text-xs text-white/60">v1.0.0</span>
                </div>
                <div className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-black/50 px-3 py-1">
                  <span className="font-mono text-xs text-[#E5005B]">FEATHERWEIGHT</span>
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
              <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Overview</Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Designed for <span className="text-gradient">Competition</span>
              </h2>
              <div className="space-y-4 leading-relaxed text-white/70">
                <p>
                  HCR-1 represents our team&apos;s first entry into competitive robotics.
                  Built from the ground up using advanced engineering principles and manufacturing
                  techniques, this robot embodies everything we&apos;ve learned as a team.
                </p>
                <p>
                  The design prioritizes durability and repairability—key factors in competitive robotics
                  where damage is inevitable. Every component is accessible for quick repairs
                  between matches, and the modular architecture allows for rapid iteration and
                  improvement.
                </p>
                <p>
                  Under the hood, HCR-1 features custom electronics designed specifically for the
                  demands of robotic competition. From the power distribution system to the motor
                  controllers, every circuit has been optimized for reliability under extreme
                  conditions.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#specs">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Specifications
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#subsystems">
                  <Button
                    variant="ghost"
                    className="text-[#E5005B] hover:bg-[#E5005B]/10 hover:text-[#E5005B]/80"
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
      <section id="specs" className="bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">
              Technical Details
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Robot <span className="text-gradient">Specifications</span>
            </h2>
            <p className="text-lg text-white/60">
              Detailed technical specifications for HCR-1, our featherweight battlebot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-white/10 bg-[#141414]">
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
                          <td className="px-6 py-5 sm:px-8">
                            <span className="font-medium text-white/50">{spec.label}</span>
                          </td>
                          <td className="px-6 py-5 sm:px-8">
                            <span className="text-lg font-semibold text-white">{spec.value}</span>
                          </td>
                          <td className="hidden px-6 py-5 sm:table-cell sm:px-8">
                            <span className="text-sm text-white/40">{spec.detail}</span>
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
      <section id="subsystems" className="bg-[#0f0f0f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Engineering</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Robot <span className="text-gradient">Subsystems</span>
            </h2>
            <p className="text-lg text-white/60">
              A closer look at the engineering that powers HCR-1, from drive systems to kinetic
              mechanics.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subsystems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-white/10 bg-[#141414] transition-all duration-300 hover:border-[#E5005B]/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E5005B]/10 transition-colors group-hover:bg-[#E5005B]/20">
                      <system.icon className="h-6 w-6 text-[#E5005B]" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{system.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-white/60">
                      {system.description}
                    </p>
                    <Separator className="my-4 bg-white/10" />
                    <ul className="space-y-2">
                      {system.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-white/50">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#E5005B]" />
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
      <section className="bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">
                Design Process
              </Badge>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                From CAD to <span className="text-gradient">Competition</span>
              </h2>
              <div className="space-y-4 leading-relaxed text-white/70">
                <p>
                  The journey from concept to battlebot involves countless hours of CAD
                  modeling, simulation, and iterative prototyping. Our design process follows
                  engineering best practices while maintaining the flexibility needed for rapid
                  innovation.
                </p>
                <p>
                  We use industry-standard CAD software to model every component, allowing us to
                  verify clearances, analyze stress distributions, and generate manufacturing
                  drawings. Finite element analysis helps us optimize the chassis and kinetic system for
                  strength-to-weight ratio.
                </p>
                <p>
                  Prototypes are created using 3D printing for quick iteration, followed by CNC
                  machining for the final competition-grade components. This approach allows us to
                  test and refine designs before committing to expensive manufacturing processes.
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
                  src="/robot/cad-design.jpg"
                  alt="CAD Design Process"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Robots */}
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
              Future Development
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Future <span className="text-gradient">Robots</span>
            </h2>
            <p className="text-lg text-white/60">
              HCR-1 is just the beginning. We&apos;re already planning our next generation of
              battlebots.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
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
                  className={`h-full border-white/10 ${
                    robot.status === "Current"
                      ? "border-[#E5005B]/30 bg-[#E5005B]/10"
                      : "bg-[#141414]"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{robot.name}</h3>
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
              Support <span className="text-gradient">HCR</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
              Partner with us to support student engineering and help us build the next generation
              of HCR battlebots.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/sponsors">
                <Button
                  size="lg"
                  className="bg-[#E5005B] px-8 font-semibold text-white hover:bg-[#E5005B]/90"
                >
                  Become a Sponsor
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
