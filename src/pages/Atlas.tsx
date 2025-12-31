
import { AppLayout } from "@/components/AppLayout";
import { locations, Location } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { TagFilter } from "@/components/TagFilter";
import { Search, Map, Globe, Users, Building2 } from "lucide-react";
import { useState, useMemo } from "react";

const LocationBlock = ({ location }: { location: Location }) => (
  <div className="space-y-6 font-sans text-sm">
    <div className="border-b border-white/10 pb-4">
      <h3 className="text-2xl font-bold text-primary">{location.name}</h3>
      <p className="text-muted-foreground italic">
        {location.type} • {location.region}
      </p>
      <div className="flex flex-wrap gap-1 mt-2">
        {location.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
            {tag}
          </Badge>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="space-y-1">
        <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Population</div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-emerald-400" />
          {location.population}
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Government</div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-emerald-400" />
          {location.government}
        </div>
      </div>
    </div>

    <div className="pt-4 border-t border-white/10">
      <h4 className="font-bold text-lg mb-2 text-primary/80">Description</h4>
      <p className="leading-relaxed text-muted-foreground/90">{location.description}</p>
    </div>
    
    <div className="h-40 w-full bg-secondary/30 rounded-lg border border-white/5 flex items-center justify-center text-muted-foreground">
        <Map className="w-8 h-8 opacity-50" />
        <span className="ml-2">Map View Unavailable</span>
    </div>
  </div>
);

const Atlas = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    locations.forEach(l => l.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredLocations = useMemo(() => {
    let filtered = locations;

    if (selectedTags.length > 0) {
      filtered = filtered.filter(l => 
        selectedTags.some(tag => l.tags.includes(tag))
      );
    }

    return filtered.filter(l => 
      l.name.toLowerCase().includes(search.toLowerCase()) || 
      l.region.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, selectedTags]);

  return (
    <AppLayout>
      <div className="space-y-6 h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Globe className="w-8 h-8 text-emerald-500" />
              Atlas
            </h1>
            <p className="text-muted-foreground">Cartography of {locations.length} known sectors.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search locations..." 
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
          {filteredLocations.map((location) => (
            <Sheet key={location.id}>
              <SheetTrigger asChild>
                <Card 
                  className="cursor-pointer hover:border-primary/50 hover:bg-secondary/40 transition-all group border-white/10 bg-card/30"
                  onClick={() => setSelectedLocation(location)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{location.name}</CardTitle>
                      <Badge variant="outline" className="bg-secondary/50 border-white/10">
                        {location.type}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-1">{location.region}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {location.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {location.tags.map((tag) => (
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
                  <SheetTitle>Location Details</SheetTitle>
                  <SheetDescription>Geographic and political data.</SheetDescription>
                </SheetHeader>
                {selectedLocation && <LocationBlock location={selectedLocation} />}
              </SheetContent>
            </Sheet>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No locations found matching your criteria.
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Atlas;
