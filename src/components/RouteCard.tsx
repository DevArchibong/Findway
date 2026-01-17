import { ArrowRight, Bus } from "lucide-react";
import { Link } from "react-router-dom";
import type { BusRoute } from "@/types/route";

interface RouteCardProps {
  route: BusRoute;
}

export function RouteCard({ route }: RouteCardProps) {
  return (
    <Link
      to={`/route/${route.id}`}
      className="block p-4 bg-card border border-border rounded-xl shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-200 animate-fade-in"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-foreground">
            <span className="font-semibold truncate">{route.origin}</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary" />
            <span className="font-semibold truncate">{route.destination}</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bus className="h-4 w-4" />
            <span>
              {route.busCount} {route.busCount === 1 ? "bus" : "buses"}
            </span>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
}
