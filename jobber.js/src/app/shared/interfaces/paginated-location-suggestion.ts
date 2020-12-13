import { Location } from "./location";

export interface PaginatedLocationSuggestion {
  count: number;
  pageNumber: number;
  next: string;
  previous: string;
  results: Location[];
}
