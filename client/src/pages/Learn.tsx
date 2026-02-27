import { useState } from "react";
import { Search, BookOpen, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Learn() {
  const [search, setSearch] = useState("");

  const articles = [
    {
      id: 1,
      title: "Understanding Anxiety: It's More Than Just Worry",
      excerpt: "Anxiety is a normal human emotion, but when it becomes overwhelming, it can be hard to manage. Learn what anxiety actually is and how it affects your body.",
      category: "Anxiety",
      readTime: "5 min read",
      color: "bg-secondary/20 text-secondary-foreground"
    },
    {
      id: 2,
      title: "The Gentle Guide to Setting Boundaries",
      excerpt: "Saying 'no' can feel scary, but it's essential for your mental well-being. Here is a simple guide to setting boundaries without feeling guilty.",
      category: "Relationships",
      readTime: "7 min read",
      color: "bg-primary/20 text-primary-foreground"
    },
    {
      id: 3,
      title: "Demystifying Depression: You're Not Just 'Lazy'",
      excerpt: "Depression often masks itself as extreme fatigue or a lack of motivation. Let's unpack what depression looks like in everyday life.",
      category: "Depression",
      readTime: "6 min read",
      color: "bg-accent/40 text-accent-foreground"
    },
    {
      id: 4,
      title: "What is Mindfulness, Actually?",
      excerpt: "You've heard the word a million times, but what does it mean to actually practice mindfulness? Hint: it doesn't require sitting in silence for hours.",
      category: "Self-Care",
      readTime: "4 min read",
      color: "bg-primary/20 text-primary-foreground"
    },
    {
      id: 5,
      title: "Navigating Social Burnout",
      excerpt: "Love your friends but feel completely exhausted after hanging out? Social burnout is real. Here's how to recharge your social battery.",
      category: "Relationships",
      readTime: "5 min read",
      color: "bg-secondary/20 text-secondary-foreground"
    },
    {
      id: 6,
      title: "How to Build a Realistic Self-Care Routine",
      excerpt: "Self-care isn't just bubble baths and face masks. Sometimes it's drinking water and paying a bill. How to build a routine that works for you.",
      category: "Self-Care",
      readTime: "8 min read",
      color: "bg-accent/40 text-accent-foreground"
    }
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(search.toLowerCase()) || 
    article.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <header className="mb-16 text-center">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4 px-4 py-1 rounded-full border-none">
            Knowledge is Power
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn & Understand</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gentle, easy-to-read articles about mental health. No clinical jargon, no judgment. Just plain English to help you understand what you're experiencing.
          </p>
        </header>

        <div className="relative max-w-md mx-auto mb-16">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input 
            placeholder="Search topics (e.g., anxiety, boundaries)..." 
            className="pl-12 h-14 rounded-full bg-card border-border/50 shadow-sm text-base focus-visible:ring-primary/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <article key={article.id} className="bg-card rounded-3xl p-8 border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${article.color}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-xs font-medium gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-primary font-bold text-sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Article
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your search. Try another topic.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}