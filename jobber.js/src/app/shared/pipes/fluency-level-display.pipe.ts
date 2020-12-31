import { Pipe, PipeTransform } from "@angular/core";
import { FluencyLevel } from 'src/app/resume/enums/fluency-level.enum';

@Pipe({
  name: "fluencyLevelDisplay",
})
export class FluencyLevelDisplayPipe implements PipeTransform {
  transform(fluencyLevel: FluencyLevel, ...args: any[]): string {
    switch (fluencyLevel) {
      case FluencyLevel.ADVANCED: return "Advanced"
      case FluencyLevel.INTERMEDIATE: return "Intermediate"
      case FluencyLevel.NOVICE: return "Novice"
      case FluencyLevel.SUPERIOR: return "Superior"
      default: throw(`No display value for '${fluencyLevel}'`)
    }
    
  }
}
