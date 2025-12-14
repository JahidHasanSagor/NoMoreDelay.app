"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Zap, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Focus on Results",
    description:
      "We measure success by your achievements, not just app engagement.",
  },
  {
    icon: Heart,
    title: "Mental Wellness First",
    description:
      "Productivity should enhance your life, not drain it. We prioritize balance.",
  },
  {
    icon: Shield,
    title: "Privacy & Trust",
    description:
      "Your data stays yours. We never sell your information or track you unnecessarily.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We constantly improve based on user feedback and the latest research.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Users className="w-4 h-4" />
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              We&apos;re on a Mission to{" "}
              <span className="gradient-text">End Procrastination</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              NoMoreDelay was born from a simple belief: everyone has the
              potential to achieve their goals—they just need the right support
              and accountability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Problem We&apos;re Solving
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Procrastination affects 95% of people at some point. It costs
                  billions in lost productivity annually and leads to increased
                  stress, anxiety, and unfulfilled potential.
                </p>
                <p>
                  Traditional productivity apps focus on organizing tasks—but
                  organization alone doesn&apos;t solve the underlying problem.
                  People need motivation, accountability, and support.
                </p>
                <p>
                  That&apos;s why we created NoMoreDelay: an AI-powered
                  accountability partner that doesn&apos;t just help you plan, but
                  actually helps you execute.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
                      <span className="text-3xl">😓</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">95%</div>
                      <div className="text-muted-foreground">
                        of people procrastinate
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-3xl">⏰</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        218 min
                      </div>
                      <div className="text-muted-foreground">
                        lost daily to procrastination
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                      <span className="text-3xl">✅</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">Coming Soon</div>
                      <div className="text-muted-foreground">
                        Join the waitlist for early access
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NoMoreDelay combines cutting-edge AI with proven behavioral
              science to create the ultimate accountability system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                AI-Powered Accountability
              </h3>
              <p className="text-muted-foreground">
                Your personal AI Boss understands your patterns, motivates you when
                you need it, and celebrates your wins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Mental Wellness Focus
              </h3>
              <p className="text-muted-foreground">
                We track your emotional state and adjust recommendations to ensure
                sustainable productivity without burnout.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Habit Building Science
              </h3>
              <p className="text-muted-foreground">
                Gamification, streaks, and rewards tap into your brain&apos;s reward
                system to make productivity feel natural.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
