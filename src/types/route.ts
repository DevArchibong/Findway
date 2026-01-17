export interface BusRoute {
  id: string;
  origin: string;
  destination: string;
  busCount: number;
  steps: string[];
  notes?: string;
  lastUpdated: string;
}

export interface RoutesData {
  routes: BusRoute[];
}
