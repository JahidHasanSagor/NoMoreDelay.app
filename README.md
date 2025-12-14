# NoMoreDelay.app

**NoMoreDelay - Your AI Accountability Partner** - Stop procrastinating. Build habits. Achieve your goals.

## 🎯 What is NoMoreDelay?

NoMoreDelay is an AI-powered accountability app designed to help you overcome procrastination and build consistent habits. Think of it as your personal accountability partner that's available 24/7, combining the power of AI with proven behavioral science to keep you on track.

### The Problem We're Solving

Procrastination affects 95% of people at some point. Traditional productivity apps help you organize tasks, but they don't hold you accountable. NoMoreDelay bridges that gap by providing:

- **AI Boss**: Your personalized accountability partner that keeps you on track
- **Voice Conversations**: Talk to your Boss anytime for instant motivation and guidance
- **Daily Check-ins**: Scheduled accountability calls to keep you consistent
- **Smart Task Management**: Organize, prioritize, and conquer your to-do list effortlessly
- **Gamification**: Earn streaks, points, and badges as you build habits
- **Mental Wellness Tracking**: Monitor your emotional state and maintain balance

## ✨ Key Features

### 🤖 AI Accountability Partner
Your AI Boss understands your goals, tracks your progress, and provides personalized motivation when you need it most.

### 🎤 Voice Conversations
Have natural conversations with your AI Boss anytime. Get instant feedback, motivation, and guidance through voice interactions.

### ✅ Smart Task Management
Beyond simple to-do lists. Your Boss helps you prioritize, break down complex tasks, and celebrate wins along the way.

### 📅 Daily Check-ins
Scheduled accountability sessions ensure you stay consistent. Your Boss checks in with you, reviews your progress, and helps plan your day.

### 🏆 Gamification & Rewards
Build streaks, earn points, and unlock badges as you complete tasks and maintain consistency. Make productivity fun and rewarding.

### 💚 Mental Wellness Focus
Productivity shouldn't come at the cost of your well-being. Track your emotional state and maintain a healthy work-life balance.

## 🚀 Current Status

**Status:** Beta - Coming Soon in 2025

We're currently in development and accepting early access signups. Join the waitlist to be among the first to experience NoMoreDelay when we launch.

## 🎨 Website Features

This repository contains the marketing website for NoMoreDelay, featuring:

- **Landing Page**: Compelling hero section showcasing the product
- **About Page**: Our mission, values, and the problem we're solving
- **Features Page**: Detailed breakdown of all NoMoreDelay capabilities
- **How It Works**: Step-by-step guide to using the app
- **Pricing**: Transparent pricing plans (coming soon)
- **Waitlist**: Sign up for early access

## 🛠️ Tech Stack

- **Framework:** Next.js 15.3.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui, Radix UI
- **Database:** Turso (LibSQL)
- **ORM:** Drizzle ORM
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Turso account (for database)

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd NoMoreDelay.app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Turso credentials to `.env`:
   ```
   TURSO_DATABASE_URL=libsql://your-database.turso.io
   TURSO_AUTH_TOKEN=your-auth-token
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── waitlist/      # Waitlist API endpoint
│   ├── about/             # About page
│   ├── features/          # Features page
│   ├── how-it-works/      # How it works page
│   ├── pricing/           # Pricing page
│   ├── waitlist/          # Waitlist signup page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer component
└── lib/                   # Utility libraries
    └── db/               # Database configuration
        ├── index.ts      # Database connection
        └── schema.ts     # Database schema
```

## 🗄️ Database

The project uses **Turso** (LibSQL) for database storage. The waitlist emails are stored in the `waitlist` table.

### Database Schema

```sql
CREATE TABLE waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  created_at INTEGER NOT NULL
);
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
4. Deploy!

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TURSO_DATABASE_URL` | Your Turso database URL | Yes |
| `TURSO_AUTH_TOKEN` | Your Turso auth token | Yes |

## 🎯 Our Values

- **Focus on Results**: We measure success by your achievements, not just app engagement
- **Mental Wellness First**: Productivity should enhance your life, not drain it
- **Privacy & Trust**: Your data stays yours. We never sell your information
- **Continuous Innovation**: We constantly improve based on user feedback

## 📄 License

Private - All rights reserved

## 🤝 Contributing

This is a private project. For questions or issues, please contact the maintainers.

---

**Built with ❤️ to help people overcome procrastination and achieve their goals**
