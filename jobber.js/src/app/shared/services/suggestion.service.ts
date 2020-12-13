import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";
import { PaginatedLocationSuggestion } from "../../shared/interfaces/paginated-location-suggestion";

@Injectable({
  providedIn: "root",
})
export class SuggestionService {
  constructor(private apiService: ApiService) {}

  public getLocationSuggestions(
    searchTerm: string
  ): Observable<PaginatedLocationSuggestion> {
    return this.apiService.get(
      "/locations/?search=" + searchTerm + "&ordering=-population"
    );
  }

  public getJobTitleSuggestions(searchTerm: string): Observable<string[]> {
    return this.apiService.post("/job_postings/job_title_suggestions/", {
      title: searchTerm,
    });
  }
}
