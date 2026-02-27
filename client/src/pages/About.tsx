import { Phone, AlertCircle, Heart, Globe, MessageSquare } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About & Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mission is to make mental health education accessible, gentle, and less intimidating.
          </p>
        </header>

        {/* Crisis Section - Prominent */}
        <section id="crisis" className="bg-destructive/10 border-2 border-destructive/20 rounded-[2.5rem] p-8 md:p-12 mb-16 text-center">
          <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-destructive">Need Help Right Now?</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            If you are in immediate danger, experiencing a mental health crisis, or thinking about harming yourself, please reach out immediately. You are not alone, and help is available.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl p-6 border border-destructive/10 shadow-sm flex flex-col items-center">
              <Phone className="w-8 h-8 text-destructive mb-4" />
              <h3 className="font-bold text-lg mb-2">National Crisis Line</h3>
              <p className="text-3xl font-black text-destructive mb-2">988</p>
              <p className="text-sm text-muted-foreground">Call or text. Available 24/7, free and confidential.</p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-destructive/10 shadow-sm flex flex-col items-center">
              <MessageSquare className="w-8 h-8 text-destructive mb-4" />
              <h3 className="font-bold text-lg mb-2">Crisis Text Line</h3>
              <p className="text-3xl font-black text-destructive mb-2">HOME</p>
              <p className="text-sm text-muted-foreground">Text HOME to 741741 to connect with a Crisis Counselor 24/7.</p>
            </div>
          </div>
        </section>

        {/* Global Resources */}
        <section className="bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">International Resources</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            If you are outside the US, please contact your local emergency services or find a crisis line in your country.
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
              <span><strong>UK:</strong> Call 111 for non-emergency medical advice, or 999 in an emergency. Text SHOUT to 85258 for crisis support.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
              <span><strong>Canada:</strong> Call 1-833-456-4566 or text 45645 for Talk Suicide Canada.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
              <span><strong>Australia:</strong> Call or text 988 for the Suicide Crisis Helpline.</span>
            </li>
          </ul>
        </section>

        {/* Our Approach */}
        <section className="text-center max-w-3xl mx-auto">
          <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mindful Space was created with a simple idea: mental health resources shouldn't feel sterile, intimidating, or overwhelming. We believe in soft colors, plain language, and gentle encouragement.
          </p>
          <div className="p-6 bg-muted/50 rounded-2xl border border-border/50">
            <p className="text-sm text-muted-foreground italic">
              Disclaimer: The tools and articles provided here are for educational purposes. They are not a substitute for therapy, professional diagnosis, or psychiatric treatment.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}