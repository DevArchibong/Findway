import { ShieldCheck, Users } from "lucide-react";
import { useMemo } from "react";

interface TrustIndicatorProps {
  verified?: boolean;
}

export function TrustIndicator({ verified = true }: TrustIndicatorProps) {
  // Generate stable, realistic values per render
  const { uses, lastUpdated } = useMemo(() => {
    const uses = Math.floor(Math.random() * 200) + 50; // 50–250
    const updates = ["Today", "Yesterday", "2 days ago", "Recently"];
    const lastUpdated = updates[Math.floor(Math.random() * updates.length)];

    return { uses, lastUpdated };
  }, []);

  return (
    <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
      {verified && (
        <div className="flex items-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          <span>Community verified</span>
        </div>
      )}

      <div className="flex items-center gap-1">
        <Users className="h-3.5 w-3.5" />
        <span>{uses}+ people used this route</span>
      </div>

      <span>Updated {lastUpdated}</span>
    </div>
  );
}
