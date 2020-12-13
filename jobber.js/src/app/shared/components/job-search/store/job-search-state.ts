import { JobSearchCriteria } from "../job-search-criteria";
import { Location } from "../../../interfaces/location";

export interface JobSearchState {
  jobSearchCriteria: JobSearchCriteria;
  jobTitleSuggestions: string[];
  locationSuggestions: Location[];
  error: string;
  isLoading: boolean;
}

export const initialJobSearchState: JobSearchState = {
  jobSearchCriteria: null,
  jobTitleSuggestions: null,
  locationSuggestions: null,
  error: null,
  isLoading: false,
};
