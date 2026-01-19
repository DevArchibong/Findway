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
import {Footer} from "@/components/Footer"

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

      {/* Hero section with minimal background image */}
      {!hasSearched && (
        <div
          className="relative overflow-hidden rounded-2xl animate-fade-in bg-cover bg-center py-12"
          style={{ backgroundImage: "url('/images/hero-bg-minimal.jpg')" }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

          {/* Soft motion accents */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/15 blur-3xl animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 text-center px-4">
            {/* Direction cue */}
            <div className="flex justify-center mb-5">
              <div className="relative w-20 h-[3px] bg-primary/80 rounded-full">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rotate-45" />
              </div>
            </div>

            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
              <span className =" text-green-700 "> Find</span> Your <span className = "text-amber-500">Way </span>Around Major Cities
            </h1>
             <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">Know Where To Enter and Where To Drop</p>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">
              No maps. No confusion.
              <br />
              Just clear, street-smart  directions from people who are familiar with the route.
            </p>
             <h1 className="font-display text-1xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
              <span className =" text-green-700 "> Follow</span> Who Know  <span className = "text-amber-500">Road</span>
            </h1>
          </div>
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
                <span>
                  {results.length} route{results.length !== 1 ? "s" : ""} found
                </span>
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

              <p className="font-medium text-foreground mb-1">
                No routes found
              </p>

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
        <div
          className="pt-8 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <ContributeLink />
        </div>
      )}

    </main>
      <Footer />
  </div>
)};
