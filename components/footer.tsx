import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-deep">
      <div className="mx-auto max-w-7xl border-x border-border px-5 sm:px-8 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-4xl uppercase font-bold text-foreground leading-[0.9]">
              HAN Competitive Robotics
            </h3>
            <p className="font-sans text-muted-foreground">
              HAN University of Applied Sciences<br />
              Arnhem, Netherlands
            </p>
          </div>
          
          <a
            href="mailto:hcr@han.nl"
            className="group flex items-center gap-3 font-mono text-sm tracking-widest text-foreground hover:text-primary transition-colors"
          >
            hcr@han.nl
            <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </a>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} HAN Competitive Robotics</span>
          <span>Built in Arnhem / Made to compete</span>
        </div>
      </div>
    </footer>
  );
}
