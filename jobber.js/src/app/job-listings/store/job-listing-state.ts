import { JobListing } from "../job-listing";

export interface JobListingState {
  jobListings: JobListing[];
  selectedJobListing: JobListing;
  error: string;
  isLoading: boolean;
}

export const initialJobListingState: JobListingState = {
  jobListings: [
    {
      id: 1,
      title: "Plumber",
      description: "",
      company: "Apple",
      jobType: "Full Time",
      createdOn: "11/2/2020",
      postedBy: 234234,
      location: "Palo Alto, CA",
    },
    {
      id: 2,
      title: "Electrician",
      description: "",
      company: "Panda Express",
      jobType: "Part Time",
      createdOn: "11/5/2020",
      postedBy: 234234,
      location: "Lehi, UT",
    },
    {
      id: 3,
      title: "Contruction Worker",
      description: "",
      company: "Walmart",
      jobType: "Full Time",
      createdOn: "11/20/2020",
      postedBy: 234234,
      location: "Redding, PA",
    },
    {
      id: 4,
      title: "Scientist",
      description: "",
      company: "NASA",
      jobType: "Full Time",
      createdOn: "11/2/2020",
      postedBy: 234234,
      location: "Dallas, TX",
    },
    {
      id: 5,
      title: "Engineer",
      description: "",
      company: "Microsft",
      jobType: "Full Time",
      createdOn: "11/2/2020",
      postedBy: 234234,
      location: "Denver, CO",
    },
    {
      id: 6,
      title: "Lawyer",
      description: "",
      company: "Cullimore, Atkinson, George",
      jobType: "Full Time",
      createdOn: "11/2/2020",
      postedBy: 234234,
      location: "Baltimore, MD",
    },
  ],
  selectedJobListing: null,
  error: null,
  isLoading: false,
};
