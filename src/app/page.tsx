"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Mic,
  CheckCircle2,
  Calendar,
  Trophy,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Boss",
    description: "Your personalized accountability partner that keeps you on track",
  },
  {
    icon: Mic,
    title: "Voice Conversations",
    description: "Talk to your Boss anytime for instant motivation and guidance",
  },
  {
    icon: CheckCircle2,
    title: "Smart Tasks",
    description: "Organize, prioritize, and conquer your to-do list effortlessly",
  },
  {
    icon: Calendar,
    title: "Daily Check-ins",
    description: "Scheduled accountability calls to keep you consistent",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Earn streaks, points, and badges as you build habits",
  },
  {
    icon: Heart,
    title: "Mental Wellness",
    description: "Track your emotional state and maintain balance",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Entrepreneur",
    content:
      "NoMoreDelay changed my life. I went from constantly procrastinating to completing tasks before deadlines.",
  },
  {
    name: "James K.",
    role: "Software Developer",
    content:
      "The daily check-ins and voice conversations make all the difference. It's like having an accountability partner available 24/7.",
  },
  {
    name: "Emily R.",
    role: "Student",
    content:
      "I've tried every productivity app out there. This is the only one that actually works because it holds me accountable.",
  },
];

const stats = [
  { value: "2026", label: "Launch date" },
  { value: "Beta", label: "Current status" },
  { value: "Free", label: "Early access" },
  { value: "24/7", label: "AI availability" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

type ShowcasePhone = {
  src: string;
  alt: string;
  role: "left" | "center" | "right";
  delay: number;
  floatDuration: number;
};

const showcasePhones: ShowcasePhone[] = [
  {
    src: "/app_screen/boss_calling.png",
    alt: "Voice call with your AI Boss",
    role: "left",
    delay: 0.32,
    floatDuration: 7,
  },
  {
    src: "/app_screen/task_screen.png",
    alt: "Daily task list with your AI Boss",
    role: "center",
    delay: 0.12,
    floatDuration: 6,
  },
  {
    src: "/app_screen/boss_chat.png",
    alt: "Chat conversation with your AI Boss",
    role: "right",
    delay: 0.46,
    floatDuration: 8,
  },
];

function HeroShowcase() {
  return (
    <div className="flex items-end justify-center">
      {showcasePhones.map((phone) => {
        const isCenter = phone.role === "center";
        return (
          <motion.div
            key={phone.src}
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: phone.delay, ease: [0.16, 1, 0.3, 1] }}
            className={
              isCenter
                ? "relative z-20 w-[230px] sm:w-[270px]"
                : "hidden sm:block relative z-10 w-[170px] sm:w-[195px] mb-4 opacity-90" +
                  (phone.role === "left" ? " -mr-6 sm:-mr-10" : " -ml-6 sm:-ml-10")
            }
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: phone.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={
                isCenter
                  ? ""
                  : phone.role === "left"
                    ? "rotate-[-8deg]"
                    : "rotate-[8deg]"
              }
            >
              <div className="relative bg-[#1D1D1F] rounded-[2.75rem] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.28)]">
                <div
                  className="relative rounded-[2.25rem] overflow-hidden"
                  style={{ aspectRatio: "9/19.5" }}
                >
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    fill
                    className="object-cover"
                    priority={isCenter}
                    sizes="(max-width: 640px) 230px, 270px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Your AI Accountability Partner
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground mb-6 leading-[1.05] tracking-tight text-balance">
              Stop procrastinating.
              <br />
              Start winning.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
              Build habits, achieve your goals, and overcome procrastination with
              your personal AI Boss — the accountability you need to succeed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/waitlist">
                <Button size="lg" variant="accent" className="font-medium">
                  Join the waitlist
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="font-medium">
                  See how it works
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-20">
          <HeroShowcase />
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-14 border-y border-border/60 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-semibold text-foreground mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight text-balance">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Powerful features designed to transform your productivity and help
              you build lasting habits.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-background p-8"
              >
                <feature.icon className="w-6 h-6 text-foreground mb-5" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 text-foreground font-medium hover:gap-2.5 transition-all"
            >
              Explore all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-foreground leading-relaxed mb-4">
                  &ldquo;{t.content}&rdquo;
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{t.name}</span> — {t.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="surface-dark rounded-3xl px-8 py-16 md:py-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-balance">
              Ready to transform your productivity?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto text-balance">
              We&apos;re putting the finishing touches on NoMoreDelay. Join the
              waitlist to get notified the moment we launch.
            </p>
            <Link href="/waitlist">
              <Button size="lg" variant="accent" className="font-medium">
                Join the waitlist
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <p className="text-sm text-white/40 mt-6">
              Free to join. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
