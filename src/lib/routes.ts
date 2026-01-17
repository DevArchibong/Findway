import routesData from "@/data/routes.json";
import type { BusRoute } from "@/types/route";

export function getAllRoutes(): BusRoute[] {
  return routesData.routes;
}

export function searchRoutes(query: string): BusRoute[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return [];
  
  return routesData.routes.filter((route) => {
    const searchableText = `${route.origin} ${route.destination}`.toLowerCase();
    return searchableText.includes(normalizedQuery);
  });
}

export function getRouteById(id: string): BusRoute | undefined {
  return routesData.routes.find((route) => route.id === id);
}

export function getPopularDestinations(): string[] {
  return ["Jabi", "Wuse", "Berger", "Utako", "Garki", "Maitama"];
}

export function formatRouteForWhatsApp(route: BusRoute): string {
  const stepsText = route.steps
    .map((step, index) => `${index + 1}. ${step}`)
    .join("\n");

  return `🚌 *Abuja Bus Route*

*From:* ${route.origin}
*To:* ${route.destination}
*Buses:* ${route.busCount}

${stepsText}

${route.notes ? `💡 _${route.notes}_\n\n` : ""}Shared via WhichBus Abuja`;
}

export function shareOnWhatsApp(route: BusRoute): void {
  const message = formatRouteForWhatsApp(route);
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
}
