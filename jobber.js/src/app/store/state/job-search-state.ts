import { JobSearchCriteria } from "../../shared/components/job-search/job-search-criteria";
import { JobPosting } from "../../job-posting/job-posting";
import { Location } from "../../shared/interfaces/location";

export interface JobSearch {
  jobSearchCriteria: JobSearchCriteria;
  jobTitleSuggestions: string[];
  locationSuggestions: Location[];
  jobPostings: JobPosting[];
  error: string;
  isLoading: boolean;
}

export const initialJobSearchState: JobSearch = {
  jobSearchCriteria: null,
  jobTitleSuggestions: null,
  locationSuggestions: null,
  jobPostings: null,
  error: null,
  isLoading: false,
};
