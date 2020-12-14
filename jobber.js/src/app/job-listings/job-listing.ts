export interface JobListing {
  id: number;
  title: string;
  description: string;
  company: string;
  jobType: string; // Create an enum for this
  createdOn: string;
  postedBy: number;
  location: string;
}
