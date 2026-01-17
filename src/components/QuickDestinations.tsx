import { MapPin } from "lucide-react";

interface QuickDestinationsProps {
  destinations: string[];
  onSelect: (destination: string) => void;
}

export function QuickDestinations({ destinations, onSelect }: QuickDestinationsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-muted-foreground">Popular destinations</p>
      <div className="flex flex-wrap gap-2">
        {destinations.map((destination) => (
          <button
            key={destination}
            onClick={() => onSelect(destination)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-200 shadow-soft"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {destination}
          </button>
        ))}
      </div>
    </div>
  );
}
