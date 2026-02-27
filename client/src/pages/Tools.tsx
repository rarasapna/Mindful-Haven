import { useState, useEffect } from "react";
import { Wind, Anchor, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Tools() {
  const [breathingState, setBreathingState] = useState<"idle" | "inhale" | "hold" | "exhale">("idle");
  
  useEffect(() => {
    if (breathingState === "idle") return;
    
    let timer: ReturnType<typeof setTimeout>;
    
    if (breathingState === "inhale") {
      timer = setTimeout(() => setBreathingState("hold"), 4000);
    } else if (breathingState === "hold") {
      timer = setTimeout(() => setBreathingState("exhale"), 4000);
    } else if (breathingState === "exhale") {
      timer = setTimeout(() => setBreathingState("inhale"), 4000);
    }
    
    return () => clearTimeout(timer);
  }, [breathingState]);

  const toggleBreathing = () => {
    if (breathingState === "idle") {
      setBreathingState("inhale");
    } else {
      setBreathingState("idle");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Self-Help Tools</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, actionable exercises you can do right now to help ground yourself, calm your nervous system, or process difficult feelings.
          </p>
        </header>

        <div className="space-y-12">
          {/* Tool 1: Box Breathing */}
          <section className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border/50 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
                  <Wind className="w-5 h-5" />
                  <span>Calming Exercise</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Box Breathing</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A simple but powerful relaxation technique to return breathing to its normal rhythm. It helps clear the mind, relax the body, and improve focus.
                </p>
                <Button 
                  onClick={toggleBreathing} 
                  size="lg" 
                  className={`rounded-full px-8 ${breathingState !== "idle" ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" : "bg-primary"}`}
                >
                  {breathingState === "idle" ? "Start Exercise" : "Stop Exercise"}
                </Button>
              </div>

              <div className="flex justify-center items-center h-64">
                {breathingState === "idle" ? (
                  <div className="w-48 h-48 rounded-full border-4 border-dashed border-border/50 flex items-center justify-center text-muted-foreground font-medium">
                    Ready when you are
                  </div>
                ) : (
                  <div className="relative flex items-center justify-center w-full h-full">
                    <div className={`absolute w-48 h-48 rounded-full bg-primary/20 transition-all duration-[4000ms] ease-in-out ${
                      breathingState === "inhale" ? "scale-150" : 
                      breathingState === "hold" ? "scale-150" : 
                      "scale-100"
                    }`}></div>
                    <div className="absolute w-48 h-48 rounded-full bg-primary/40 flex items-center justify-center z-10">
                      <span className="text-2xl font-bold text-primary-foreground capitalize tracking-widest">
                        {breathingState}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Tool 2: 5-4-3-2-1 Grounding */}
          <section className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border/50 shadow-sm relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-accent-foreground font-bold mb-4">
                <Anchor className="w-5 h-5 text-accent" />
                <span>Grounding Technique</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">5-4-3-2-1 Senses</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                When you feel overwhelmed or panicked, this technique helps bring you back to the present moment by connecting with your physical surroundings. Look around you and identify:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { num: "5", text: "Things you can SEE", desc: "A pen, a spot on the ceiling, anything." },
                  { num: "4", text: "Things you can FEEL", desc: "The texture of your shirt, the floor." },
                  { num: "3", text: "Things you can HEAR", desc: "Traffic, a clock ticking, wind." },
                  { num: "2", text: "Things you can SMELL", desc: "Coffee, laundry, fresh air." },
                  { num: "1", text: "Thing you can TASTE", desc: "Mint, gum, or just the air." }
                ].map((item, i) => (
                  <div key={i} className="bg-background border border-border/50 rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-accent/20 text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.num}
                    </div>
                    <h3 className="font-bold mb-2 text-sm">{item.text}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Gentle reminder */}
          <div className="text-center py-8">
            <Heart className="w-8 h-8 text-secondary mx-auto mb-4" />
            <p className="text-muted-foreground">Take these at your own pace. There is no right or wrong way to heal.</p>
          </div>
        </div>

      </div>
    </div>
  );
}