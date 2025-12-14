"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Mic,
  CheckCircle2,
  Calendar,
  Trophy,
  Heart,
  Bell,
  BarChart3,
  Smartphone,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI Boss Accountability",
    description:
      "Your personal AI accountability partner that learns your patterns and keeps you on track with personalized motivation.",
    category: "Core",
  },
  {
    icon: Mic,
    title: "Voice Conversations",
    description:
      "Talk to your AI Boss anytime through natural voice conversations for instant guidance and motivation.",
    category: "Communication",
  },
  {
    icon: CheckCircle2,
    title: "Smart Task Management",
    description:
      "Organize tasks by priority, deadline, and energy level with AI-powered optimal scheduling.",
    category: "Productivity",
  },
  {
    icon: Calendar,
    title: "Daily Check-ins",
    description:
      "Start each day with planning calls and end with reviews to stay accountable and reflect on progress.",
    category: "Accountability",
  },
  {
    icon: Trophy,
    title: "Gamification System",
    description:
      "Earn points, maintain streaks, and unlock badges as you build consistent habits.",
    category: "Engagement",
  },
  {
    icon: Heart,
    title: "Mental Wellness Tracking",
    description:
      "Track your emotional state and get recommendations for sustainable productivity without burnout.",
    category: "Wellness",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get reminders at optimal times based on when you're most responsive.",
    category: "Productivity",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Visualize your productivity journey with detailed analytics and trend analysis.",
    category: "Insights",
  },
  {
    icon: Clock,
    title: "Focus Timer",
    description:
      "Built-in Pomodoro timer with AI-recommended session lengths based on task type.",
    category: "Productivity",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Set long-term goals and break them down into actionable steps with milestone tracking.",
    category: "Planning",
  },
  {
    icon: Smartphone,
    title: "Calendar Integration",
    description:
      "Sync with Google Calendar, Apple Calendar, and more for seamless scheduling.",
    category: "Integration",
  },
  {
    icon: Sparkles,
    title: "Habit Builder",
    description:
      "Build lasting habits with proven systems including habit stacking and streak tracking.",
    category: "Habits",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Features
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Powerful features designed by productivity experts and powered by
              cutting-edge AI to help you build lasting habits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">NoMoreDelay</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just features—a complete productivity ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Powered",
                description:
                  "Advanced AI that learns your patterns and adapts to your unique productivity style.",
              },
              {
                icon: Heart,
                title: "Wellness Focused",
                description:
                  "Built with mental wellness in mind—sustainable productivity without burnout.",
              },
              {
                icon: Target,
                title: "Results Driven",
                description:
                  "Proven methods backed by behavioral science to help you achieve your goals.",
              },
            ].map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience{" "}
              <span className="gradient-text">All Features</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Download NoMoreDelay now and start your journey to better
              habits and higher productivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/waitlist">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
