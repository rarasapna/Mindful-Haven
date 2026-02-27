import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Learn from "@/pages/Learn";
import Tools from "@/pages/Tools";
import Journal from "@/pages/Journal";
import About from "@/pages/About";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/learn" component={Learn}/>
          <Route path="/tools" component={Tools}/>
          <Route path="/journal" component={Journal}/>
          <Route path="/about" component={About}/>
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;