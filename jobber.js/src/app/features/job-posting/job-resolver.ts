import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { JobSearchService } from 'src/app/core/services';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class JobResolver implements Resolve<any> {
  constructor(private route: ActivatedRoute, private jobService: JobSearchService) {}

  resolve() {
    return this.route.queryParams.pipe(
      take(1),
      switchMap(queryParams => this.jobService.getJobs(queryParams)),
    );
  }
}
