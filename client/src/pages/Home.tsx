import { Link } from "wouter";
import { ArrowRight, BookHeart, Sparkles, PenLine, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/images/hero.png";
import learnImg from "@/assets/images/learn.png";
import toolsImg from "@/assets/images/tools.png";
import journalImg from "@/assets/images/journal.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex-1 space-y-8 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>It's okay to take it slow.</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Your gentle space for <span className="text-primary relative whitespace-nowrap">
                  <span className="relative z-10">mental wellness</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A warm, non-judgmental corner of the internet where you can learn about mental health, find simple coping tools, and track your daily journey.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all" asChild>
                  <Link href="/tools">
                    Try a Coping Tool <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-primary/20 hover:bg-primary/5 transition-all" asChild>
                  <Link href="/learn">
                    Learn the Basics
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white animate-float">
                <img 
                  src={heroImg} 
                  alt="Peaceful illustration of a person sitting in nature" 
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[16/9]"
                />
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float-delayed"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How can we support you today?</h2>
            <p className="text-muted-foreground text-lg">
              Whether you want to understand your feelings, need a moment of calm, or just want to write things down, there's a space for you here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/learn">
              <a className="group flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <img src={learnImg} alt="Learn about mental health" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <BookHeart className="w-5 h-5 text-primary" />
                  Learn & Understand
                </h3>
                <p className="text-muted-foreground">
                  Gentle, easy-to-read guides about anxiety, depression, boundaries, and understanding your emotions without the clinical jargon.
                </p>
              </a>
            </Link>

            {/* Card 2 */}
            <Link href="/tools">
              <a className="group flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <img src={toolsImg} alt="Self-help tools" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Self-Help Tools
                </h3>
                <p className="text-muted-foreground">
                  Interactive breathing exercises, grounding techniques, and small actionable steps for when things feel a bit too overwhelming.
                </p>
              </a>
            </Link>

            {/* Card 3 */}
            <Link href="/journal">
              <a className="group flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <img src={journalImg} alt="Mood journal" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <PenLine className="w-5 h-5 text-secondary" />
                  Mood Journal
                </h3>
                <p className="text-muted-foreground">
                  A safe, private space to check in with yourself. Track your mood, write out your thoughts, and reflect on your day.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Gentle Reminder Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20 -z-10" />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Heart className="w-12 h-12 text-secondary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
            "Healing is not a straight line. It’s okay if some days are harder than others. You are doing the best you can."
          </h2>
          <Button variant="secondary" size="lg" className="rounded-full px-8 bg-white hover:bg-white/90 text-secondary-foreground" asChild>
            <Link href="/journal">Take a moment to check in</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}