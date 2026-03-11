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
    answer:
      "We are based at HAN University of Applied Sciences in Arnhem, Netherlands.",
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
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#E5005B]/10 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#E5005B]/10 text-[#E5005B] border-[#E5005B]/20">
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                Contact Us
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              Have questions about HCR? Want to collaborate or sponsor? We&apos;d
              love to hear from you. Reach out using any of the methods below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <Badge className="mb-4 bg-white/5 text-white/70 border-white/10 w-fit">
                Contact Information
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let&apos;s <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Whether you&apos;re a prospective student, potential sponsor, or just
                curious about combat robotics, we&apos;re happy to answer your
                questions.
              </p>

              {/* Email Contacts */}
              <div className="space-y-4 mb-6">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.title}
                    href={contact.href}
                    className="flex items-start gap-4 p-5 bg-[#141414] rounded-xl border border-white/10 hover:border-[#E5005B]/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#E5005B]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E5005B]/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-[#E5005B]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">{contact.title}</p>
                      <p className="text-white font-semibold group-hover:text-[#E5005B] transition-colors">
                        {contact.value}
                      </p>
                      <p className="text-white/40 text-sm">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="p-5 bg-[#141414] rounded-xl border border-white/10 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E5005B]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E5005B]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Location</p>
                    <p className="text-white font-semibold">
                      HAN University of Applied Sciences
                    </p>
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
                <p className="text-white/50 text-sm mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-white/60 hover:text-[#E5005B] hover:border-[#E5005B]/30 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
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
              className="flex flex-col h-full"
            >
              <Card className="bg-[#141414] border-white/10 flex flex-col h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  {!formSubmitted ? (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Send us a Message
                      </h3>
                      <p className="text-white/60 mb-6">
                        Fill out the form below and we&apos;ll get back to you as soon
                        as possible.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                        <div className="grid sm:grid-cols-2 gap-4">
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
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#E5005B]"
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
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#E5005B]"
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
                            className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-[#E5005B] focus:outline-none focus:ring-1 focus:ring-[#E5005B]"
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
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#E5005B] resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-[#E5005B] hover:bg-[#E5005B]/90 text-white font-semibold py-6"
                        >
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </Button>

                        <p className="text-white/40 text-sm text-center">
                          <Clock className="w-3 h-3 inline mr-1" />
                          We typically respond within 48 hours
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-white/60 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within
                        48 hours.
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
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-white/5 text-white/70 border-white/10">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/60 text-lg">
              Quick answers to common questions. Can&apos;t find what you&apos;re looking
              for? Contact us directly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#141414] border-white/10 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Support <span className="text-gradient">HCR</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Interested in supporting our team or learning more about our work?
              Get in touch with us.
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
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Learn More About Us
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
