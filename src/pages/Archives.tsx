
import { AppLayout } from "@/components/AppLayout";
import { articles, Article } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { TagFilter } from "@/components/TagFilter";
import { Search, Archive, Calendar } from "lucide-react";
import { useState, useMemo } from "react";

const ArticleBlock = ({ article }: { article: Article }) => (
  <div className="space-y-6 font-sans text-sm">
    <div className="border-b border-white/10 pb-4">
      <h3 className="text-2xl font-bold text-primary">{article.title}</h3>
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20">
            {article.category}
        </Badge>
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
            {tag}
          </Badge>
        ))}
        <span className="text-muted-foreground text-xs flex items-center gap-1 ml-auto">
            <Calendar className="w-3 h-3" /> {article.date}
        </span>
      </div>
    </div>

    <div className="prose prose-invert prose-sm max-w-none">
      <p className="leading-relaxed text-muted-foreground/90 whitespace-pre-wrap">{article.content}</p>
      <p className="mt-4 text-muted-foreground">
        [Full article content would go here. This is a preview of the lore entry.]
      </p>
    </div>
  </div>
);

const Archives = () => {
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach(a => a.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (selectedTags.length > 0) {
      filtered = filtered.filter(a => 
        selectedTags.some(tag => a.tags.includes(tag))
      );
    }

    return filtered.filter(a => 
      a.title.toLowerCase().includes(search.toLowerCase()) || 
      a.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, selectedTags]);

  return (
    <AppLayout>
      <div className="space-y-6 h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Archive className="w-8 h-8 text-amber-500" />
              Archives
            </h1>
            <p className="text-muted-foreground">Historical records and faction dossiers.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search archives..." 
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredArticles.map((article) => (
            <Sheet key={article.id}>
              <SheetTrigger asChild>
                <Card 
                  className="cursor-pointer hover:border-primary/50 hover:bg-secondary/40 transition-all group border-white/10 bg-card/30"
                  onClick={() => setSelectedArticle(article)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{article.title}</CardTitle>
                      <Badge variant="outline" className="bg-secondary/50 border-white/10">
                        {article.category}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2 mt-2">{article.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 text-xs">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {article.tags.map((tag) => (
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
                  <SheetTitle>Archive Entry</SheetTitle>
                  <SheetDescription>Classified information.</SheetDescription>
                </SheetHeader>
                {selectedArticle && <ArticleBlock article={selectedArticle} />}
              </SheetContent>
            </Sheet>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No records found matching your criteria.
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Archives;
