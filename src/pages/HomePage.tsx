import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { QuickDestinations } from "@/components/QuickDestinations";
import { RouteCard } from "@/components/RouteCard";
import { ContributeLink } from "@/components/ContributeLink";
import { Header } from "@/components/Header";
import { searchRoutes, getPopularDestinations } from "@/lib/routes";
import type { BusRoute } from "@/types/route";
import { Bus, MapPin } from "lucide-react";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<BusRoute[]>([]);
  const [hasSearched, setHasSearched] = useState(!!initialQuery);

  const popularDestinations = getPopularDestinations();

  useEffect(() => {
    if (query.trim()) {
      const found = searchRoutes(query);
      setResults(found);
      setHasSearched(true);
      setSearchParams({ q: query }, { replace: true });
    } else {
      setResults([]);
      setHasSearched(false);
      setSearchParams({}, { replace: true });
    }
  }, [query, setSearchParams]);

  const handleDestinationSelect = (destination: string) => {
    setQuery(destination);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6 space-y-8">
        {/* Hero section */}
        {!hasSearched && (
          <div className="text-center py-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Bus className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Find Your Bus Route
            </h1>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Simple directions for Abuja buses. No maps, just human-friendly steps.
            </p>
          </div>
        )}

        {/* Search */}
        <div className="space-y-4">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search destination (e.g. Jabi, Wuse)"
            autoFocus={!hasSearched}
          />
          
          {!hasSearched && (
            <QuickDestinations
              destinations={popularDestinations}
              onSelect={handleDestinationSelect}
            />
          )}
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="space-y-4 animate-fade-in">
            {results.length > 0 ? (
              <>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{results.length} route{results.length !== 1 ? "s" : ""} found</span>
                </div>
                <div className="space-y-3">
                  {results.map((route) => (
                    <RouteCard key={route.id} route={route} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-muted mx-auto flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="font-medium text-foreground mb-1">No routes found</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Try searching for a different destination
                </p>
                <ContributeLink />
              </div>
            )}
          </div>
        )}

        {/* Contribute section */}
        {!hasSearched && (
          <div className="pt-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <ContributeLink />
          </div>
        )}
      </main>
    </div>
  );
}
