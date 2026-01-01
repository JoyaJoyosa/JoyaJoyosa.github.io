
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Map, Skull, Scroll, Archive, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { monsters, spells, locations } from "@/data/mock";

const QuickLink = ({ title, icon: Icon, description, to, color }: any) => (
  <Link to={to} className="block group">
    <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm border-white/10">
      <CardHeader>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  </Link>
);

const Index = () => {
  // Get one of each for the "Recent" section
  const recentItems = [
    { ...monsters[0], category: "Bestiary", link: "/bestiary", icon: Skull },
    { ...spells[0], category: "Grimoire", link: "/grimoire", icon: Scroll },
    { ...locations[0], category: "Atlas", link: "/atlas", icon: Map },
  ];

  return (
    <AppLayout>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <section className="space-y-4 text-center py-12 md:py-20 relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-secondary/20 to-background">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-md">
                <Sparkles className="mr-1 h-3 w-3" />
                v1.0 Public Beta
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60 mb-4">
                Glorbverse
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
                Toda la informacion sobre el Glorbverse en una sola pagina!
            </p>
            
            <div className="max-w-md mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input 
                type="search" 
                placeholder="Buscas algo en especifico?" 
                className="pl-10 h-12 bg-background/50 border-white/10 focus:border-primary/50 transition-all backdrop-blur-xl"
                />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickLink 
            title="Atlas" 
            icon={Map} 
            description="Eventos, lugares y geografia del Glorbverse." 
            to="/atlas"
            color="text-emerald-400"
          />
          <QuickLink 
            title="Bestiario" 
            icon={Skull} 
            description="Toda la fauna importante del Glorbverse." 
            to="/bestiary"
            color="text-rose-400"
          />
          <QuickLink 
            title="Grimorio" 
            icon={Scroll} 
            description="Revisa habilidades, hechizos, etc." 
            to="/grimoire"
            color="text-violet-400"
          />
          <QuickLink 
            title="Archivos" 
            icon={Archive} 
            description="Historias, facciones y lore general.." 
            to="/archives"
            color="text-amber-400"
          />
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Recent Updates</h2>
            <Link to="/archives" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {recentItems.map((item, i) => (
               <Link key={i} to={item.link}>
                <Card className="bg-card/30 border-white/5 hover:bg-card/50 transition-colors cursor-pointer h-full hover:border-primary/20">
                    <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0 border border-white/5">
                        <item.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                        <div className="text-xs text-primary mb-1 font-medium">{item.category}</div>
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                        {item.description}
                        </p>
                    </div>
                    </CardContent>
                </Card>
               </Link>
             ))}
          </div>
        </section>
        
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 mt-12">
            <p>Built with <span className="text-rose-500">♥</span> by <a href="https://devlo.ai?utm_source=chill-cedar-1010" className="hover:text-primary transition-colors">devlo</a></p>
            <p className="mt-2 text-xs opacity-50">&copy; 2025 Omniverse Compendium. All rights reserved.</p>
        </footer>
      </div>
    </AppLayout>
  );
};

export default Index;
