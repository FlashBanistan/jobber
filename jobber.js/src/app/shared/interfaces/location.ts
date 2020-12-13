export interface Location {
  id: number;
  city: string;
  state: string;
  county?: string;
  latitude: string;
  longitude: string;
  population?: number;
  density?: number;
  incorporated?: boolean;
  timezone?: string;
  ranking?: number;
  zips?: string[];
}
