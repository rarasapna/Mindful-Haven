import { useState } from "react";
import { Smile, Meh, Frown, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Journal() {
  const [mood, setMood] = useState<string | null>(null);
  const [entry, setEntry] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const moods = [
    { id: "great", icon: Smile, label: "Great", color: "text-primary hover:bg-primary/10", activeBg: "bg-primary/20 border-primary" },
    { id: "okay", icon: Meh, label: "Okay", color: "text-accent-foreground hover:bg-accent/20", activeBg: "bg-accent/30 border-accent" },
    { id: "rough", icon: Frown, label: "Rough", color: "text-destructive hover:bg-destructive/10", activeBg: "bg-destructive/20 border-destructive" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood && !entry) return;
    setIsSubmitted(true);
    // In a real app, this would save to a backend/localstorage
    setTimeout(() => {
      setMood(null);
      setEntry("");
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mood Journal</h1>
          <p className="text-lg text-muted-foreground">
            A safe, private space to check in with yourself. Your thoughts stay right here in your browser.
          </p>
        </header>

        <div className="bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Entry Saved</h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Thank you for checking in with yourself today. Taking a moment to reflect is a beautiful act of self-care.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-in fade-in duration-500">
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-6 text-center">How are you feeling right now?</h2>
                <div className="flex justify-center gap-4 md:gap-8">
                  {moods.map((m) => {
                    const Icon = m.icon;
                    const isActive = mood === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMood(m.id)}
                        className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 border-2 ${
                          isActive ? m.activeBg : "border-transparent " + m.color
                        }`}
                      >
                        <Icon className={`w-12 h-12 mb-3 ${isActive ? "" : "opacity-70"}`} />
                        <span className="font-bold text-sm">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Would you like to write about it? (Optional)</h2>
                <Textarea 
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="I'm feeling this way because..."
                  className="min-h-[200px] text-base resize-none rounded-2xl bg-background border-border/50 focus-visible:ring-primary/30 p-6"
                />
              </div>

              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 gap-2"
                  disabled={!mood && !entry}
                >
                  <Send className="w-4 h-4" />
                  Save Entry
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}