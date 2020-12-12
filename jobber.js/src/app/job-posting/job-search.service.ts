import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../shared/services/api.service";
import { JobPosting } from "src/app/core/models";
import { Params } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class JobSearchService {
  constructor(private apiService: ApiService) {}

  public getJobs(queryParams: Params): Observable<JobPosting[]> {
    return this.apiService.post("/job_postings/search/", queryParams);
  }
}
