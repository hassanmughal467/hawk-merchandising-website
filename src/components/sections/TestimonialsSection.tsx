"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { fadeUp, stagger } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "Turnaround is consistently fast and the files run clean—no surprise thread breaks on tricky fills.",
    name: "Angela Crosbie",
    title: "Production Manager, Regional Apparel",
  },
  {
    quote:
      "We send complex logos weekly. Hawk’s cap files hold registration better than any vendor we’ve used.",
    name: "Russell Wallace",
    title: "Owner, Embroidery Shop",
  },
  {
    quote:
      "Vector separations were spot on for screen print. Communication was clear from upload to delivery.",
    name: "Brendan Rose",
    title: "Print & Promo Director",
  },
  {
    quote:
      "DSTs come with sensible trims and a stitch map mindset—our operators actually enjoy running their jobs.",
    name: "Linda Kilbey",
    title: "Operations Lead",
  },
  {
    quote:
      "They behave like a partner, not a ticket queue. That matters when you’re under a client deadline.",
    name: "Gaz Lee",
    title: "Merchandising Lead",
  },
];

export function TestimonialsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-brand-light-gradient text-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            What clients say
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-zinc-600">
            Real feedback from teams that live in production—where details matter most.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="h-full">
              <TestimonialCard tone="light" quote={t.quote} name={t.name} title={t.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
