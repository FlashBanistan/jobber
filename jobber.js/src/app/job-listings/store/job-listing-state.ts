import { JobListing } from "../job-listing";

export interface JobListingState {
  jobListings: JobListing[];
  error: string;
  isLoading: boolean;
}

export const initialJobListingState: JobListingState = {
  jobListings: null,
  error: null,
  isLoading: false,
};
