export interface BusRoute {
  id: string;
  origin: string;
  destination: string;
  busCount: number;
  steps: string[];
  popularity?: number;
  notes?: string;
  verified?: boolean;
  lastUpdated?: string;

}

export interface RoutesData {
  routes: BusRoute[];
}
