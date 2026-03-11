"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  Send,
  Check,
  ArrowRight,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hcr@han.nl",
    href: "mailto:hcr@han.nl",
    description: "For general inquiries",
  },
  {
    icon: Mail,
    title: "Sponsorship",
    value: "hcr@han.nl",
    href: "mailto:hcr@han.nl",
    description: "For sponsorship inquiries",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://instagram.com/hcr_han",
    handle: "@hcr_han",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/company/hcr-han",
    handle: "HAN Competitive Robotics",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/hcr-han",
    handle: "@hcr-han",
  },
];

const faqItems = [
  {
    question: "What is HCR?",
    answer:
      "HAN Competitive Robotics (HCR) is a student engineering team building featherweight combat robots for competitions across Europe.",
  },
  {
    question: "Where is HCR based?",
    answer: "We are based at HAN University of Applied Sciences in Arnhem, Netherlands.",
  },
  {
    question: "How can I support HCR?",
    answer:
      "You can support us through sponsorships, partnerships, or by spreading the word about our team and competitions.",
  },
  {
    question: "Do team members need prior robotics experience?",
    answer:
      "No! We welcome students of all skill levels. Enthusiasm and willingness to learn are more important than prior experience.",
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="blur-glow absolute top-0 left-1/2 h-1/2 w-full -translate-x-1/2 rounded-full bg-[#E5005B]/10 blur-[200px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 border-[#E5005B]/20 bg-[#E5005B]/10 text-[#E5005B]">
                <Mail className="mr-1.5 h-3.5 w-3.5" />
                Contact Us
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70"
            >
              Have questions about HCR? Want to collaborate or sponsor? We&apos;d love to hear from
              you. Reach out using any of the methods below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <Badge className="mb-4 w-fit border-white/10 bg-white/5 text-white/70">
                Contact Information
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s <span className="text-gradient">Connect</span>
              </h2>
              <p className="mb-6 leading-relaxed text-white/60">
                Whether you&apos;re a prospective student, potential sponsor, or just curious about
                combat robotics, we&apos;re happy to answer your questions.
              </p>

              {/* Email Contacts */}
              <div className="mb-6 space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.title}
                    href={contact.href}
                    className="group flex items-start gap-4 rounded-xl border border-white/10 bg-[#141414] p-5 transition-all duration-300 hover:border-[#E5005B]/30"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E5005B]/10 transition-colors group-hover:bg-[#E5005B]/20">
                      <contact.icon className="h-5 w-5 text-[#E5005B]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{contact.title}</p>
                      <p className="font-semibold text-white transition-colors group-hover:text-[#E5005B]">
                        {contact.value}
                      </p>
                      <p className="text-sm text-white/40">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="mb-6 rounded-xl border border-white/10 bg-[#141414] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E5005B]/10">
                    <MapPin className="h-5 w-5 text-[#E5005B]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Location</p>
                    <p className="font-semibold text-white">HAN University of Applied Sciences</p>
                    <p className="text-white/60">
                      Ruitenberglaan 31
                      <br />
                      6826 CC Arnhem
                      <br />
                      Netherlands
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links - pushed to bottom */}
              <div className="mt-auto pt-4">
                <p className="mb-4 text-sm text-white/50">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-[#141414] text-white/60 transition-all duration-300 hover:border-[#E5005B]/30 hover:text-[#E5005B]"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex h-full flex-col"
            >
              <Card className="flex h-full flex-col border-white/10 bg-[#141414]">
                <CardContent className="flex h-full flex-col p-8">
                  {!formSubmitted ? (
                    <>
                      <h3 className="mb-2 text-2xl font-bold text-white">Send us a Message</h3>
                      <p className="mb-6 text-white/60">
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                      </p>

                      <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">
                              Name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              required
                              className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-[#E5005B]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              required
                              className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-[#E5005B]"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-white">
                            Subject
                          </Label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-white focus:border-[#E5005B] focus:ring-1 focus:ring-[#E5005B] focus:outline-none"
                          >
                            <option value="" className="bg-[#141414]">
                              Select a topic...
                            </option>
                            <option value="general" className="bg-[#141414]">
                              General Inquiry
                            </option>
                            <option value="sponsorship" className="bg-[#141414]">
                              Sponsorship
                            </option>
                            <option value="media" className="bg-[#141414]">
                              Media Inquiry
                            </option>
                            <option value="other" className="bg-[#141414]">
                              Other
                            </option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-white">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={5}
                            required
                            className="resize-none border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-[#E5005B]"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-[#E5005B] py-6 font-semibold text-white hover:bg-[#E5005B]/90"
                        >
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>

                        <p className="text-center text-sm text-white/40">
                          <Clock className="mr-1 inline h-3 w-3" />
                          We typically respond within 48 hours
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                        <Check className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                      <p className="mb-6 text-white/60">
                        Thank you for reaching out. We&apos;ll get back to you within 48 hours.
                      </p>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <Badge className="mb-4 border-white/10 bg-white/5 text-white/70">FAQ</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-white/60">
              Quick answers to common questions. Can&apos;t find what you&apos;re looking for?
              Contact us directly.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-white/10 bg-[#141414]">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{faq.answer}</p>
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
              Interested in supporting our team or learning more about our work? Get in touch with
              us.
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
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Learn More About Us
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
