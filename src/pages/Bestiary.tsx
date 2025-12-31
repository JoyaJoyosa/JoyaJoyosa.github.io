
import { AppLayout } from "@/components/AppLayout";
import { monsters, Monster } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { TagFilter } from "@/components/TagFilter";
import { Search, Skull, Shield, Heart, Activity, Users } from "lucide-react";
import { useState, useMemo } from "react";

const StatBlock = ({ monster }: { monster: Monster }) => (
  <div className="space-y-6 font-sans text-sm">
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <h3 className="text-2xl font-bold text-primary">{monster.name}</h3>
        <p className="text-muted-foreground italic">{monster.type}, {monster.alignment}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {monster.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">CR</div>
        <div className="text-xl font-bold text-white">{monster.cr}</div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-secondary/30 p-2 rounded border border-white/5">
        <Shield className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
        <div className="text-xs text-muted-foreground">Armor Class</div>
        <div className="font-bold">{monster.ac}</div>
      </div>
      <div className="bg-secondary/30 p-2 rounded border border-white/5">
        <Heart className="w-4 h-4 mx-auto mb-1 text-rose-400" />
        <div className="text-xs text-muted-foreground">Hit Points</div>
        <div className="font-bold">{monster.hp}</div>
      </div>
      <div className="bg-secondary/30 p-2 rounded border border-white/5">
        <Activity className="w-4 h-4 mx-auto mb-1 text-blue-400" />
        <div className="text-xs text-muted-foreground">Speed</div>
        <div className="font-bold">30 ft.</div>
      </div>
    </div>

    <div className="grid grid-cols-6 gap-2 text-center text-xs">
      {Object.entries(monster.stats).map(([stat, value]) => (
        <div key={stat} className="space-y-1">
          <div className="uppercase font-bold text-muted-foreground">{stat}</div>
          <div className="text-white font-medium">{value}</div>
          <div className="text-[10px] text-muted-foreground">
            {Math.floor((value - 10) / 2) >= 0 ? "+" : ""}{Math.floor((value - 10) / 2)}
          </div>
        </div>
      ))}
    </div>

    <div className="space-y-4">
      <h4 className="font-bold text-lg border-b border-white/10 pb-1 text-primary/80">Actions</h4>
      {monster.actions.map((action, idx) => (
        <div key={idx} className="group">
          <span className="font-bold text-white group-hover:text-primary transition-colors cursor-pointer">{action.name}.</span>{" "}
          <span className="text-muted-foreground">{action.desc}</span>
        </div>
      ))}
    </div>

    <div className="pt-4 border-t border-white/10">
      <p className="text-muted-foreground italic text-xs">{monster.description}</p>
    </div>
  </div>
);

const Bestiary = () => {
  const [search, setSearch] = useState("");
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [filterMode, setFilterMode] = useState<"all" | "playable" | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    monsters.forEach(m => {
      if (filterMode === "playable" && !m.playableRace) return;
      m.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [filterMode]);

  const getFilteredMonsters = () => {
    let filtered = monsters;

    if (filterMode === "playable") {
      filtered = monsters.filter(m => m.playableRace);
    } else if (filterMode === "all") {
      filtered = monsters;
    } else {
      return null;
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(m => 
        selectedTags.some(tag => m.tags.includes(tag))
      );
    }

    // Filter by search
    return filtered.filter(m => 
      m.name.toLowerCase().includes(search.toLowerCase()) || 
      m.type.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredMonsters = getFilteredMonsters();

  const handleToggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  if (filterMode === null) {
    return (
      <AppLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="max-w-md w-full space-y-6 text-center">
            <div className="space-y-2">
              <Skull className="w-16 h-16 mx-auto text-rose-500 opacity-50" />
              <h1 className="text-3xl font-bold tracking-tight">Bestiary</h1>
              <p className="text-muted-foreground">¿Qué deseas explorar?</p>
            </div>
            
            <div className="space-y-3 pt-4">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-12 border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                onClick={() => setFilterMode("playable")}
              >
                <Users className="mr-2 h-5 w-5" />
                Razas Jugables
              </Button>
              <Button
                size="lg"
                className="w-full h-12 bg-primary hover:bg-primary/90"
                onClick={() => setFilterMode("all")}
              >
                <Skull className="mr-2 h-5 w-5" />
                Todo
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-6">
              {monsters.filter(m => m.playableRace).length} razas jugables • {monsters.filter(m => !m.playableRace).length} amenazas
            </p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-6 h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Skull className="w-8 h-8 text-rose-500" />
                Bestiary
              </h1>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                {filterMode === "playable" ? "Razas Jugables" : "Todo"}
              </Badge>
            </div>
            <p className="text-muted-foreground">
              {filterMode === "playable" 
                ? `${monsters.filter(m => m.playableRace).length} razas disponibles para jugar.` 
                : `Catálogo de ${monsters.length} entidades conocidas.`}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1 md:flex-initial w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar..." 
                className="pl-9 bg-secondary/50 border-white/10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilterMode(null)}
              className="text-xs"
            >
              Cambiar
            </Button>
          </div>
        </div>

        <TagFilter
          allTags={allTags}
          selectedTags={selectedTags}
          onToggleTag={handleToggleTag}
          onClearTags={() => setSelectedTags([])}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMonsters && filteredMonsters.map((monster) => (
            <Sheet key={monster.id}>
              <SheetTrigger asChild>
                <Card 
                  className="cursor-pointer hover:border-primary/50 hover:bg-secondary/40 transition-all group border-white/10 bg-card/30"
                  onClick={() => setSelectedMonster(monster)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{monster.name}</CardTitle>
                      <Badge variant="outline" className="bg-secondary/50 border-white/10">CR {monster.cr}</Badge>
                    </div>
                    <CardDescription className="line-clamp-1">{monster.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" /> AC {monster.ac}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" /> HP {monster.hp}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {monster.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 border-white/5">
                          {tag}
                        </Badge>
                      ))}
                      {monster.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-secondary/50 border-white/5">
                          +{monster.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg overflow-y-auto border-l border-white/10 bg-background/95 backdrop-blur-xl">
                <SheetHeader className="mb-6">
                  <SheetTitle>Detalles</SheetTitle>
                  <SheetDescription>Estadísticas y habilidades completas.</SheetDescription>
                </SheetHeader>
                {selectedMonster && <StatBlock monster={selectedMonster} />}
              </SheetContent>
            </Sheet>
          ))}
        </div>

        {filteredMonsters && filteredMonsters.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No se encontraron resultados.
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Bestiary;
