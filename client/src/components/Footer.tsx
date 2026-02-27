import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/50 pt-16 pb-8 border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Mindful Space</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A gentle, safe space for mental health education, simple self-help tools, and daily reflection. You're not alone on this journey.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/learn"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Learn About Mental Health</a></Link></li>
              <li><Link href="/tools"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Self-Help Tools</a></Link></li>
              <li><Link href="/journal"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Mood Journal</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-destructive">Emergency</h3>
            <p className="text-muted-foreground text-sm mb-2">
              If you are in immediate danger or experiencing a crisis, please reach out for professional help.
            </p>
            <p className="text-sm font-bold text-destructive">
              National Crisis Line: 988
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto mb-4">
            Disclaimer: The content on Mindful Space is for educational and informational purposes only. It is not a replacement for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical or mental health condition.
          </p>
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Mindful Space. Take it one day at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}