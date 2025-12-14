"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Download,
  Target,
  Zap,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  Smartphone,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Sign Up",
    description:
      "Get NoMoreDelay from the App Store or Play Store. Create your account in seconds and complete a quick onboarding to help your AI Boss understand you.",
    details: [
      "Available on iOS and Android",
      "Quick 2-minute setup",
      "Personalization questionnaire",
    ],
  },
  {
    number: "02",
    icon: Target,
    title: "Set Your Goals",
    description:
      "Tell your AI Boss what you want to achieve. Whether it's finishing a project, building a habit, or just getting through your daily tasks—your Boss is ready to help.",
    details: [
      "Define short and long-term goals",
      "Break goals into actionable tasks",
      "Set deadlines and priorities",
    ],
  },
  {
    number: "03",
    icon: Zap,
    title: "Meet Your AI Boss",
    description:
      "Your personal AI accountability partner activates. Choose your Boss's personality—from supportive coach to drill sergeant—and start your first conversation.",
    details: [
      "Multiple personality options",
      "Voice or text communication",
      "Available 24/7",
    ],
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Complete Tasks Daily",
    description:
      "Work through your tasks with your Boss's guidance. Get reminders, motivation, and check-ins throughout the day to keep you on track.",
    details: [
      "Daily planning sessions",
      "Focus timers and breaks",
      "Progress celebrations",
    ],
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Build Lasting Habits",
    description:
      "Watch your productivity transform as you build streaks, earn badges, and develop consistent habits. Your Boss celebrates every win and helps you bounce back from setbacks.",
    details: [
      "Streak tracking",
      "Progress analytics",
      "Weekly reviews",
    ],
  },
];

const faq = [
  {
    question: "How is this different from other productivity apps?",
    answer:
      "Most productivity apps just organize your tasks. NoMoreDelay actively holds you accountable through AI-powered conversations, check-ins, and personalized motivation. It's like having a real accountability partner available 24/7.",
  },
  {
    question: "Can I talk to my AI Boss?",
    answer:
      "Yes! You can have voice conversations with your AI Boss just like talking to a real person. Share your progress, discuss obstacles, and get instant guidance and motivation.",
  },
  {
    question: "What if I miss a day or fall behind?",
    answer:
      "Your AI Boss understands that setbacks happen. Instead of making you feel guilty, it helps you understand what happened, adjust your plan, and get back on track. Progress over perfection.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. We take privacy seriously. Your conversations and data are encrypted, never sold to third parties, and you can delete your data at any time.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes! NoMoreDelay offers a generous free tier with core features. Premium unlocks advanced AI conversations, unlimited check-ins, and additional customization options.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              How It Works
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Journey to{" "}
              <span className="gradient-text">Better Productivity</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Getting started with NoMoreDelay is simple. Here&apos;s how
              you&apos;ll transform your habits in just five steps.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-8">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl z-10">
                        {step.number}
                      </div>
                      {i < steps.length - 1 && (
                        <ArrowDown className="w-6 h-6 text-primary/50 mt-4" />
                      )}
                    </div>

                    <div className="flex-1 glass-card rounded-2xl p-6 md:p-8">
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {step.number}
                        </div>
                      </div>

                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="ml-16 grid sm:grid-cols-3 gap-3 mt-6">
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-2 text-sm text-foreground bg-secondary/50 rounded-lg px-3 py-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We&apos;ve got answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Be among the first to experience NoMoreDelay and transform your productivity.
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
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary font-semibold px-8 py-6 text-lg"
                >
                  View Pricing
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

