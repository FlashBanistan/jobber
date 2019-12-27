import { Location, JobPosting, JobSearchCriteria } from '../../models';

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
