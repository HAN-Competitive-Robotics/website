"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Award, Users, Globe, ArrowRight, Check, Sparkles, Medal, Star } from "lucide-react";
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

const benefits = [
  {
    icon: Award,
    title: "Engineering Exposure",
    description:
      "Connect with highly motivated engineering students and showcase your brand to the next generation of technical talent.",
  },
  {
    icon: Users,
    title: "Student Innovation",
    description:
      "Support cutting-edge student engineering projects and be part of innovative robotics development.",
  },
  {
    icon: Globe,
    title: "Brand Visibility",
    description:
      "Gain visibility at robotics competitions, university events, and across our digital platforms reaching thousands.",
  },
];

const sponsorTiers = [
  {
    name: "Platinum",
    price: "€5,000+",
    color: "from-purple-500 to-purple-700",
    icon: Sparkles,
    features: [
      "Large logo on robot and team apparel",
      "Prominent website placement",
      "Social media features (monthly)",
      "Access to team recruitment events",
      "VIP access to competitions",
      "Custom collaboration opportunities",
      "Quarterly progress reports",
    ],
  },
  {
    name: "Gold",
    price: "€2,500",
    color: "from-yellow-500 to-yellow-700",
    icon: Medal,
    features: [
      "Medium logo on robot and team apparel",
      "Website sponsor section placement",
      "Social media mentions (bi-monthly)",
      "Invitations to team events",
      "Competition updates and photos",
    ],
  },
  {
    name: "Silver",
    price: "€1,000",
    color: "from-gray-400 to-gray-600",
    icon: Star,
    features: [
      "Small logo on robot and website",
      "Social media mentions (quarterly)",
      "Team updates and newsletters",
      "Recognition at competitions",
    ],
  },
  {
    name: "Supporter",
    price: "€250+",
    color: "from-[#E5005B] to-[#FF6B9A]",
    icon: Zap,
    features: [
      "Name on website sponsors page",
      "Social media thank you post",
      "Team newsletter subscription",
    ],
  },
];

const currentSponsors = [
  {
    name: "HAN University of Applied Sciences",
    tier: "Platinum",
    logo: "/sponsors/han-platinum.svg",
  },
  { name: "Gold Sponsor 1", tier: "Gold", logo: "/sponsors/gold-1.svg" },
  { name: "Gold Sponsor 2", tier: "Gold", logo: "/sponsors/gold-2.svg" },
  { name: "Silver Sponsor 1", tier: "Silver", logo: "/sponsors/silver-1.svg" },
  { name: "Silver Sponsor 2", tier: "Silver", logo: "/sponsors/silver-2.svg" },
  { name: "Silver Sponsor 3", tier: "Silver", logo: "/sponsors/silver-3.svg" },
  { name: "Supporter 1", tier: "Supporter", logo: "/sponsors/supporter-1.svg" },
  { name: "Supporter 2", tier: "Supporter", logo: "/sponsors/supporter-2.svg" },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Current Sponsors */}
      <section className="relative overflow-hidden bg-[#0f0f0f] py-16 lg:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="blur-glow absolute top-0 left-1/2 h-1/2 w-full -translate-x-1/2 rounded-full bg-[#E5005B]/10 blur-[200px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">Our Partners</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Current <span className="text-gradient">Sponsors</span>
            </h2>
            <p className="text-white/60">
              We&apos;re grateful to these organizations for supporting HCR and making our
              engineering journey possible.
            </p>
          </motion.div>

          {/* Platinum Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <Card className="mx-auto max-w-xl border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-[#141414] to-[#141414]">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-purple-500/20">
                  <Sparkles className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <Badge className="mb-2 border-purple-500/30 bg-purple-500/10 text-purple-400">
                    Platinum Sponsor
                  </Badge>
                  <h3 className="text-xl font-bold text-white">
                    HAN University of Applied Sciences
                  </h3>
                  <p className="mt-1 text-sm text-white/50">Official educational partner</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sponsor Tiers Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3"
          >
            <Card className="border-yellow-500/20 bg-[#141414]">
              <CardContent className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Medal className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-white">Gold</span>
                </div>
                <p className="text-sm text-white/50">2 sponsors</p>
              </CardContent>
            </Card>
            <Card className="border-gray-500/20 bg-[#141414]">
              <CardContent className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Star className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold text-white">Silver</span>
                </div>
                <p className="text-sm text-white/50">3 sponsors</p>
              </CardContent>
            </Card>
            <Card className="border-[#E5005B]/20 bg-[#141414]">
              <CardContent className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Zap className="h-5 w-5 text-[#E5005B]" />
                  <span className="font-semibold text-white">Supporters</span>
                </div>
                <p className="text-sm text-white/50">2 supporters</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="bg-[#0a0a0a] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 border-[#E5005B]/20 bg-[#E5005B]/10 text-[#E5005B]">
                <Award className="mr-1.5 h-3.5 w-3.5" />
                Partnerships
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Become a <span className="text-gradient">Sponsor</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70"
            >
              Partner with HAN Competitive Robotics and support the next generation of engineering
              talent. Your sponsorship helps us build competitive combat robots and provides
              valuable opportunities for HAN University students.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-[#E5005B] px-10 py-6 text-lg font-semibold text-white hover:bg-[#E5005B]/90"
                >
                  Become a Sponsor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
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
              Why Partner With Us
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Why <span className="text-gradient">Sponsor HCR?</span>
            </h2>
            <p className="text-lg text-white/60">
              Partnering with HCR offers unique benefits for companies looking to connect with
              engineering talent and support student innovation.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-white/10 bg-[#141414] transition-all duration-300 hover:border-[#E5005B]/30">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E5005B]/10 transition-colors group-hover:bg-[#E5005B]/20">
                      <benefit.icon className="h-7 w-7 text-[#E5005B]" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{benefit.title}</h3>
                    <p className="leading-relaxed text-white/60">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">
              Sponsorship Packages
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Sponsor <span className="text-gradient">Tiers</span>
            </h2>
            <p className="text-lg text-white/60">
              Choose a sponsorship package that aligns with your goals and budget. All contributions
              directly support our team&apos;s engineering efforts.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sponsorTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`flex h-full flex-col border-white/10 bg-[#141414] ${
                      tier.name === "Platinum"
                        ? "border-purple-500/30 ring-1 ring-purple-500/20"
                        : tier.name === "Gold"
                          ? "border-yellow-500/30"
                          : tier.name === "Silver"
                            ? "border-gray-500/30"
                            : "border-[#E5005B]/30"
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`h-12 w-12 rounded-lg bg-gradient-to-br ${tier.color} mb-4 flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                      <p className="text-gradient mt-2 text-3xl font-bold">{tier.price}</p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <Separator className="mb-6 bg-white/10" />
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-white/70"
                          >
                            <Check
                              className={`mt-0.5 h-4 w-4 shrink-0 ${
                                tier.name === "Platinum"
                                  ? "text-purple-400"
                                  : tier.name === "Gold"
                                    ? "text-yellow-400"
                                    : tier.name === "Silver"
                                      ? "text-gray-400"
                                      : "text-[#E5005B]"
                              }`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-white/50">
              Custom packages available. Contact us to discuss tailored sponsorship opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
