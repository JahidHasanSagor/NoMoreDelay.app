"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, User, CheckCircle2, Sparkles, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Join the Waitlist
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Be Among the <span className="gradient-text">First</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get early access to NoMoreDelay and help shape the future of productivity. 
              We&apos;ll notify you as soon as we launch.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 whitespace-nowrap"
                    >
                      {loading ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
                </div>
                {message && (
                  <p className="text-sm font-medium text-red-500 text-center">
                    {message}
                  </p>
                )}
                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy. No spam, unsubscribe anytime.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                You&apos;re on the List! 🎉
              </h2>
              <p className="text-muted-foreground mb-8">
                Thanks for joining! We&apos;ll send you an email as soon as NoMoreDelay is ready. 
                In the meantime, check out our features and learn more about what we&apos;re building.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/features">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-secondary"
                  >
                    Explore Features
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-secondary"
                  >
                    See How It Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: "Early Access",
                description: "Be the first to try NoMoreDelay before public launch",
              },
              {
                icon: Sparkles,
                title: "Exclusive Updates",
                description: "Get behind-the-scenes updates and feature previews",
              },
              {
                icon: CheckCircle2,
                title: "Shape the Product",
                description: "Your feedback will help us build the best experience",
              },
            ].map((benefit, i) => (
              <div
                key={benefit.title}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

