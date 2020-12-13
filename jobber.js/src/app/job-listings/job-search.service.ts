import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../shared/services/api.service";
import { JobListing } from "./job-listing";
import { Params } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class JobSearchService {
  constructor(private apiService: ApiService) {}

  public getJobs(queryParams: Params): Observable<JobListing[]> {
    return this.apiService.post("/job_postings/search/", queryParams);
  }
}
