import { JobPosting } from "../../job-posting/job-posting";

export interface JobPostingState {
  jobPostings: JobPosting[];
  error: string;
  isLoading: boolean;
}

export const initialJobPostingState: JobPostingState = {
  jobPostings: null,
  error: null,
  isLoading: false,
};
