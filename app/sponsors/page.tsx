"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Award,
  Users,
  Globe,
  ArrowRight,
  Check,
  Sparkles,
  Medal,
  Star,
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
  { name: "HAN University of Applied Sciences", tier: "Platinum", logo: "/sponsors/han-platinum.svg" },
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
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#E5005B]/10 rounded-full blur-[200px] blur-glow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#E5005B]/10 text-[#E5005B] border-[#E5005B]/20">
                <Award className="w-3.5 h-3.5 mr-1.5" />
                Partnerships
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Become a <span className="text-gradient">Sponsor</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              Partner with HAN Competitive Robotics and support the next
              generation of engineering talent. Your sponsorship helps us build
              competitive combat robots and provides valuable opportunities for
              HAN University students.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10"
            >
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold px-10 py-6 text-lg"
                >
                  Become a Sponsor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
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
              Why Partner With Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why <span className="text-gradient">Sponsor HCR?</span>
            </h2>
            <p className="text-white/60 text-lg">
              Partnering with HCR offers unique benefits for companies looking to
              connect with engineering talent and support student innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#141414] border-white/10 h-full hover:border-[#E5005B]/30 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-[#E5005B]/10 flex items-center justify-center mb-6 group-hover:bg-[#E5005B]/20 transition-colors">
                      <benefit.icon className="w-7 h-7 text-[#E5005B]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              Sponsorship Packages
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Sponsor <span className="text-gradient">Tiers</span>
            </h2>
            <p className="text-white/60 text-lg">
              Choose a sponsorship package that aligns with your goals and budget.
              All contributions directly support our team&apos;s engineering efforts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    className={`bg-[#141414] border-white/10 h-full flex flex-col ${
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
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">
                        {tier.name}
                      </CardTitle>
                      <p className="text-3xl font-bold text-gradient mt-2">
                        {tier.price}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <Separator className="bg-white/10 mb-6" />
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-white/70 text-sm"
                          >
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
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
            className="text-center mt-12"
          >
            <p className="text-white/50 text-sm">
              Custom packages available. Contact us to discuss tailored
              sponsorship opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors */}
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
              Our Partners
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Current <span className="text-gradient">Sponsors</span>
            </h2>
            <p className="text-white/60 text-lg">
              We&apos;re grateful to these organizations for supporting HCR and
              making our engineering journey possible.
            </p>
          </motion.div>

          {/* Platinum Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="text-center mb-6">
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Platinum Sponsor
              </Badge>
            </div>
            <div className="max-w-md mx-auto">
              <div className="aspect-[3/1] rounded-2xl overflow-hidden border border-purple-500/30 bg-[#1A1A1A]">
                <img 
                  src={currentSponsors[0].logo}
                  alt="HAN University"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Other Sponsors Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {currentSponsors.slice(1).map((sponsor) => (
              <div
                key={sponsor.name}
                className="aspect-[3/2] bg-[#1A1A1A] rounded-xl border border-white/10 flex flex-col items-center justify-center hover:border-white/20 transition-colors group overflow-hidden p-4"
              >
                <img 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-3/4 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity mb-2"
                />
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    sponsor.tier === "Gold"
                      ? "border-yellow-500/30 text-yellow-500"
                      : sponsor.tier === "Silver"
                      ? "border-gray-500/30 text-gray-400"
                      : "border-[#E5005B]/30 text-[#E5005B]"
                  }`}
                >
                  {sponsor.tier}
                </Badge>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#E5005B]/10 via-transparent to-[#E5005B]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-[#141414] border-white/10 overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge className="mb-4 bg-[#E5005B]/10 text-[#E5005B] border-[#E5005B]/20">
                      Get in Touch
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      Ready to <span className="text-gradient">Partner?</span>
                    </h2>
                    <p className="text-white/60 mb-6">
                      Contact our sponsorship team to discuss how we can work
                      together. We&apos;re happy to create custom packages that meet
                      your needs.
                    </p>
                    <div className="space-y-3">
                      <p className="text-white/70">
                        <span className="text-white font-medium">Email:</span>{" "}
                        <a
                          href="mailto:hcr@han.nl"
                          className="text-[#E5005B] hover:underline"
                        >
                          hcr@han.nl
                        </a>
                      </p>
                      <p className="text-white/70">
                        <span className="text-white font-medium">
                          Response time:
                        </span>{" "}
                        Within 48 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold py-6"
                      >
                        Contact Sponsorship Team
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <a
                      href="/sponsorship-prospectus.pdf"
                      download
                      className="w-full"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 py-6"
                      >
                        Download Prospectus
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
