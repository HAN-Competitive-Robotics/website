"use client";

import Link from "next/link";
import { ArrowRight, Wrench, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function HomePage() {
  // Setup reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Band */}
      <section className="border-b border-line-strong relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl border-x border-border px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_19rem] gap-16 min-h-[calc(100vh-80px)] py-16">
            
            {/* Left Column (Content) */}
            <div className="flex flex-col justify-center animate-rise [animation-delay:0ms] relative z-10">
              <div className="flex items-center gap-4 text-[10px] tracking-widest font-mono uppercase mb-8">
                <span className="w-8 h-px bg-primary"></span>
                <span className="text-foreground">HAN University of Applied Sciences</span>
                <span className="text-primary font-bold">Featherweight</span>
              </div>
              
              <h1 className="font-display text-[clamp(4.6rem,13vw,10.5rem)] leading-[0.76] uppercase font-bold text-foreground mb-12">
                <span className="text-primary block mb-2">HAN</span>
                <span className="block mb-2">Competitive</span>
                <span className="block">Robotics</span>
              </h1>
              
              <div className="border-l-[3px] border-primary pl-6 py-1 max-w-xl mb-12">
                <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Building robots for European competitions. Made by students, powered by passion and precise engineering.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-rise [animation-delay:100ms]">
                <Link href="/team">
                  <Button size="lg" className="group">
                    Meet the Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/robot">
                  <Button variant="outline" size="lg" className="group">
                    Our Robot
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 opacity-100" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column (Spec, Desktop Only) */}
            <div className="hidden lg:flex flex-col justify-center border-l border-border pl-16 relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-screen bg-center bg-cover" style={{ backgroundImage: 'url(/robot/cad-design.jpg)' }}></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              
              <div className="relative z-10 animate-rise [animation-delay:200ms]">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-7xl font-bold text-foreground leading-none">13.6</span>
                  <span className="font-mono text-primary text-xl font-bold tracking-widest">KG</span>
                </div>
                <div className="w-16 h-px bg-line-strong mb-4"></div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground leading-loose">
                  Built by students.<br />Engineered for impact.
                </p>
                
                <div className="mt-12 text-primary">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 0L40 40H0" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M0 0L40 40" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Hazard stripes strip */}
              <div className="absolute right-[-2rem] top-0 bottom-0 w-16 industrial-stripes opacity-60 z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Divisions Band (surface-deep) */}
      <section className="border-b border-border bg-surface-deep">
        <div className="mx-auto max-w-7xl border-x border-border px-5 sm:px-8 py-24">
          <div className="reveal-section" data-reveal>
            {/* Section Heading */}
            <div className="grid md:grid-cols-[10rem_1fr] gap-12 items-end mb-16">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-primary uppercase">01 / Core disciplines</span>
              </div>
              <div className="flex flex-col">
                <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-foreground leading-[0.9]">
                  Divisions
                </h2>
              </div>
            </div>

            {/* 3-column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-border">
              {[
                {
                  num: "01",
                  title: "Mechanical",
                  desc: "CAD design, structural analysis, and manufacturing of robot chassis and kinetic systems.",
                  icon: Wrench
                },
                {
                  num: "02",
                  title: "Electrical",
                  desc: "Power distribution, motor control, wiring, and electrical safety systems.",
                  icon: Zap
                },
                {
                  num: "03",
                  title: "Embedded",
                  desc: "Custom PCB design, firmware development, and real time control systems for robotics.",
                  icon: Cpu
                }
              ].map((div, i) => (
                <div key={i} className="group border-r border-b border-border p-8 min-h-[20rem] flex flex-col bg-card hover:bg-accent transition-colors duration-300">
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-primary group-hover:text-primary-foreground transition-colors">
                      <div.icon strokeWidth={1.5} size={32} />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-foreground/70 transition-colors">
                      {div.num}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display text-3xl uppercase font-bold text-foreground mb-4 leading-none">
                      {div.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
                      {div.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Updates Band (base) */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl border-x border-border px-5 sm:px-8 py-24">
          <div className="reveal-section" data-reveal>
            {/* Section Heading */}
            <div className="grid md:grid-cols-[10rem_1fr] gap-12 items-end mb-16">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-primary uppercase">02 / Log</span>
              </div>
              <div className="flex flex-col">
                <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-foreground leading-[0.9]">
                  Updates
                </h2>
              </div>
            </div>

            <div className="border-t-[3px] border-line-strong">
              {[
                {
                  date: "2026.03.14",
                  title: "HCR-1 Design Complete",
                  desc: "Our first featherweight robot design is finalized. Manufacturing starts next month.",
                  category: "Development"
                },
                {
                  date: "2026.02.28",
                  title: "New Team Members Joined",
                  desc: "Welcome to our new mechanical and embedded systems engineers for the 2026 season.",
                  category: "Team"
                },
                {
                  date: "2026.01.15",
                  title: "Sponsorship Goals Met",
                  desc: "Thanks to our sponsors, we have funding for our first competition season.",
                  category: "Sponsors"
                }
              ].map((update, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center py-6 border-b border-border gap-6 md:gap-8 hover:bg-accent/30 transition-colors">
                  <div className="font-mono text-[10px] tracking-widest text-primary md:w-[10rem] shrink-0">
                    {update.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl uppercase font-bold text-foreground mb-1">
                      {update.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      {update.desc}
                    </p>
                  </div>
                  <div className="font-mono text-[10px] tracking-widest border border-border px-3 py-1 rounded text-foreground uppercase whitespace-nowrap shrink-0">
                    {update.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Band (surface-raised) */}
      <section className="bg-surface-raised border-b border-border">
        <div className="mx-auto max-w-7xl border-x border-border px-5 sm:px-8 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 reveal-section" data-reveal>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-widest text-primary uppercase mb-4">03 / The crew</span>
              <h2 className="font-display text-5xl md:text-7xl uppercase font-bold text-foreground leading-[0.9]">
                Meet the Team
              </h2>
            </div>
            
            <Link href="/team">
              <Button variant="outline" className="group">
                View our team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
