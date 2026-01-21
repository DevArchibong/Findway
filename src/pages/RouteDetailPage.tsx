import { useParams, Link } from "react-router-dom";
import { ArrowRight, Bus, Calendar, Info } from "lucide-react";
import { Header } from "@/components/Header";
import { StepsList } from "@/components/StepsList";
import { WhatsAppShare } from "@/components/WhatsAppShare";
import { ContributeLink } from "@/components/ContributeLink";
import { TrustIndicator } from "@/components/TrustIndicator";
import { getRouteById } from "@/lib/routes";
import { Footer } from "@/components/Footer";


export default function RouteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const route = id ? getRouteById(id) : undefined;

  if (!route) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center mb-4">
            <Bus className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="font-display text-xl font-bold text-foreground mb-2">
            Route Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            This route doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Search Routes
          </Link>
        </main>
      </div>
    );
  }

  const formattedDate = new Date(route.lastUpdated).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-6 space-y-6">
        {/* Route header */}
        <div className="p-4 bg-card border border-border rounded-xl shadow-soft animate-fade-in">
          <div className="flex items-center gap-2 text-foreground mb-3">
            <span className="font-display font-bold text-lg">{route.origin}</span>
            <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="font-display font-bold text-lg">{route.destination}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Bus className="h-4 w-4" />
              <span>{route.busCount} {route.busCount === 1 ? "bus" : "buses"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>Updated {formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <h2 className="font-display font-semibold text-lg text-foreground">
            Step-by-step directions
          </h2>
          <div className="p-4 bg-card border border-border rounded-xl shadow-soft space-y-4">
            <StepsList steps={route.steps} />

            {/* --- Trust Indicator under the steps --- */}
            <TrustIndicator />
          </div>
        </div>

        {/* Notes */}
        {route.notes && (
          <div className="p-4 bg-secondary border border-border rounded-xl animate-fade-in">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-secondary-foreground">{route.notes}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <WhatsAppShare route={route} />
          <ContributeLink />
          <Footer/>
        </div>
      </main>
    </div>
  );
}
