
import { AppLayout } from "@/components/AppLayout";
import { spells, Spell } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { TagFilter } from "@/components/TagFilter";
import { Search, Scroll, Clock, Target, Sparkles } from "lucide-react";
import { useState, useMemo } from "react";

const SpellBlock = ({ spell }: { spell: Spell }) => (
  <div className="space-y-6 font-sans text-sm">
    <div className="border-b border-white/10 pb-4">
      <h3 className="text-2xl font-bold text-primary">{spell.name}</h3>
      <p className="text-muted-foreground italic">
        {spell.level === 0 ? "Cantrip" : `Level ${spell.level}`} {spell.school}
      </p>
      <div className="flex flex-wrap gap-1 mt-2">
        {spell.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
            {tag}
          </Badge>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="space-y-1">
        <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Casting Time</div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-violet-400" />
          {spell.castingTime}
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Range</div>
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-violet-400" />
          {spell.range}
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Components</div>
        <div>{spell.components}</div>
      </div>
      <div className="space-y-1">
        <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Duration</div>
        <div>{spell.duration}</div>
      </div>
    </div>

    <div className="pt-4 border-t border-white/10">
      <p className="leading-relaxed text-muted-foreground/90">{spell.description}</p>
    </div>
    
    <div className="bg-violet-500/10 border border-violet-500/20 rounded p-3 text-xs text-violet-300">
        <div className="flex items-center gap-2 mb-1 font-semibold">
            <Sparkles className="w-3 h-3" />
            At Higher Levels
        </div>
        <p>When you cast this spell using a spell slot of {spell.level + 1} or higher, the damage increases by 1d8 for each slot level above {spell.level}.</p>
    </div>
  </div>
);

const Grimoire = () => {
  const [search, setSearch] = useState("");
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    spells.forEach(s => s.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredSpells = useMemo(() => {
    let filtered = spells;

    if (selectedTags.length > 0) {
      filtered = filtered.filter(s => 
        selectedTags.some(tag => s.tags.includes(tag))
      );
    }

    return filtered.filter(s => 
      s.name.toLowerCase().includes(search.toLowerCase()) || 
      s.school.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, selectedTags]);

  return (
    <AppLayout>
      <div className="space-y-6 h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Scroll className="w-8 h-8 text-violet-500" />
              Grimoire
            </h1>
            <p className="text-muted-foreground">Archive of {spells.length} known spells and protocols.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search spells..." 
              className="pl-9 bg-secondary/50 border-white/10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <TagFilter
          allTags={allTags}
          selectedTags={selectedTags}
          onToggleTag={(tag) => setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
          )}
          onClearTags={() => setSelectedTags([])}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSpells.map((spell) => (
            <Sheet key={spell.id}>
              <SheetTrigger asChild>
                <Card 
                  className="cursor-pointer hover:border-primary/50 hover:bg-secondary/40 transition-all group border-white/10 bg-card/30"
                  onClick={() => setSelectedSpell(spell)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{spell.name}</CardTitle>
                      <Badge variant="outline" className="bg-secondary/50 border-white/10">
                        {spell.level === 0 ? "Cantrip" : `Lvl ${spell.level}`}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-1">{spell.school}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {spell.castingTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {spell.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50 border-white/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg overflow-y-auto border-l border-white/10 bg-background/95 backdrop-blur-xl">
                <SheetHeader className="mb-6">
                  <SheetTitle>Spell Details</SheetTitle>
                  <SheetDescription>Magical protocols and effects.</SheetDescription>
                </SheetHeader>
                {selectedSpell && <SpellBlock spell={selectedSpell} />}
              </SheetContent>
            </Sheet>
          ))}
        </div>

        {filteredSpells.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No spells found matching your criteria.
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Grimoire;
