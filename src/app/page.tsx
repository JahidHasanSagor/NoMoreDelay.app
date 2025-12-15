"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Zap,
  Mic,
  CheckCircle2,
  Calendar,
  Trophy,
  Heart,
  ArrowRight,
  Users,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Zap,
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
      "NoMoreDelay changed my life. I went from constantly procrastinating to completing tasks before deadlines. The AI Boss feels like having a supportive mentor.",
    avatar: "S",
  },
  {
    name: "James K.",
    role: "Software Developer",
    content:
      "The daily check-ins and voice conversations make all the difference. It's like having an accountability partner available 24/7.",
    avatar: "J",
  },
  {
    name: "Emily R.",
    role: "Student",
    content:
      "I've tried every productivity app out there. This is the only one that actually works because it holds me accountable, not just organizes my tasks.",
    avatar: "E",
  },
];

const stats = [
  { value: "Coming Soon", label: "Join the Waitlist" },
  { value: "2025", label: "Launch Date" },
  { value: "Beta", label: "Status" },
  { value: "Free", label: "Early Access" },
];

// Mobile Screen Mock Component with Image Fallback
function MobileScreenMock() {
  const [imageExists, setImageExists] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Check if image exists by trying to load it
    const img = new window.Image();
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageError(true);
    img.src = "/app_screen/boss_chat.png";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex justify-center lg:justify-end"
    >
      <div className="relative w-full max-w-[280px] lg:max-w-[320px] transform perspective-1000">
        {/* iPhone Frame */}
        <div className="relative bg-gray-200 dark:bg-gray-800 rounded-[3rem] p-1 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,0,0,0.05)] transform hover:scale-[1.02] transition-transform duration-300">
          {/* Screen Container */}
          <div className="relative bg-card rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
            {imageExists && !imageError ? (
              // Show image if it exists - properly fitted to iPhone screen
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/app_screen/boss_chat.png"
                  alt="NoMoreDelay App Screenshot"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            ) : (
              // Show mock if image doesn't exist
              <div className="h-full flex flex-col">
                {/* Status Bar */}
                <div className="bg-secondary/50 px-6 py-2 flex items-center justify-between border-b border-border/50">
                  <span className="text-xs text-foreground font-medium">22:08</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-foreground/30 rounded-sm">
                      <div className="w-full h-full bg-foreground/20 rounded-sm" />
                    </div>
                    <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                  </div>
                </div>

                <div className="flex-1 px-4 py-6 space-y-4 overflow-auto">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="glass-card rounded-2xl rounded-tl-none px-4 py-3 max-w-[75%]">
                      <p className="text-sm text-foreground">
                        Good morning! You have 3 tasks due today. Let&apos;s crush them
                        together. Which one do you want to tackle first?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-tr-none px-4 py-3 max-w-[75%]">
                      <p className="text-sm text-foreground">
                        Let&apos;s start with the project proposal. I&apos;ve been putting
                        it off for too long.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-foreground" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="glass-card rounded-2xl rounded-tl-none px-4 py-3 max-w-[75%]">
                      <p className="text-sm text-foreground">
                        Great choice! I&apos;ve started a 25-minute focus timer. No
                        distractions - you&apos;ve got this! 💪
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 px-4 py-3 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-background/50 rounded-full px-4 py-2">
                      <span className="text-xs text-muted-foreground">Type a message...</span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                      <Mic className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating glow effects */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl -z-10" />
        
        {/* Shadow underneath phone */}
        <div className="absolute inset-0 top-4 bg-black/20 rounded-[3rem] blur-xl -z-20" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                Your AI Accountability Partner
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Stop Procrastinating.
                <br />
                <span className="gradient-text">Start Winning.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10">
                Build habits, achieve your goals, and overcome procrastination with
                your personal AI Boss. Get the accountability you need to succeed.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg animate-pulse-glow"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Button>
              </Link>
                <Link href="/how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary font-semibold px-8 py-6 text-lg"
                  >
                    See How It Works
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <div className="flex -space-x-2">
                  {["bg-orange-500", "bg-blue-500", "bg-green-500", "bg-purple-500"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-background flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["S", "J", "E", "M"][i]}
                      </div>
                    )
                  )}
                </div>
                <span className="text-sm">
                  Be among the <span className="text-foreground font-semibold">first</span>{" "}
                  to experience NoMoreDelay
                </span>
              </div>
            </motion.div>

            {/* Mobile Mock - Right Side */}
            <MobileScreenMock />
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to transform your productivity and help
              you build lasting habits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/features">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join the <span className="gradient-text">Waitlist</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be among the first to experience NoMoreDelay. Get early access and help shape the future of productivity.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Early Access Coming Soon
              </h3>
              <p className="text-muted-foreground mb-8">
                We&apos;re putting the finishing touches on NoMoreDelay. Sign up to be notified when we launch and get exclusive early access.
              </p>
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="gradient-text">Transform</span> Your
              Productivity?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Be among the first to experience NoMoreDelay and transform your productivity journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              Free to download. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}