import { Pipe, PipeTransform } from "@angular/core";
import { FluencyLevel } from "src/app/resume/sections/contact-information/fluency-level.enum";

@Pipe({
  name: "fluencyLevelDisplay",
})
export class FluencyLevelDisplayPipe implements PipeTransform {
  transform(fluencyLevel: FluencyLevel, ...args: any[]): string {
    switch (fluencyLevel) {
      case FluencyLevel.ELEMENTARY:
        return "Elementary";
      case FluencyLevel.LIMITED_WORKING:
        return "Limited Working";
      case FluencyLevel.PROFESSIONAL_WORKING:
        return "Professional Working";
      case FluencyLevel.FULL_PROFESSIONAL_WORKING:
        return "Full Professional Working";
      case FluencyLevel.NATIVE:
        return "Native";
      default:
        throw Error(`No display value for '${fluencyLevel}'`);
    }
  }
}
