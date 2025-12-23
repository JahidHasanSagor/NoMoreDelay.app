import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { waitlist } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

// POST - Add email to waitlist
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate name (required for new entries)
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // Validate 300email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const normalizedEmail = email.toLowerCase().trim();
    const existing = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, normalizedEmail))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    // Save to waitlist
    await db.insert(waitlist).values({
      name: name.trim(),
      email: normalizedEmail,
    });

    return NextResponse.json(
      { message: "Successfully added to waitlist", email: normalizedEmail },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle unique constraint violation (fallback)
    if (error.message?.includes("UNIQUE constraint") || error.message?.includes("already exists")) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Failed to add email to waitlist" },
      { status: 500 }
    );
  }
}

// GET - Retrieve waitlist entries (optional, for admin use)
export async function GET() {
  try {
    const entries = await db.select().from(waitlist).orderBy(desc(waitlist.createdAt));
    return NextResponse.json({ 
      entries: entries.map(entry => ({
        name: entry.name,
        email: entry.email,
        createdAt: entry.createdAt?.toISOString(),
      })), 
      count: entries.length 
    });
  } catch (error) {
    console.error("Waitlist GET error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve waitlist" },
      { status: 500 }
    );
  }
}

