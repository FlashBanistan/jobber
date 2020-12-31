import { Pipe, PipeTransform } from "@angular/core";
import { Language } from 'src/app/resume/enums/language.enum';

@Pipe({
  name: "languageDisplay",
})
export class LanguageDisplayPipe implements PipeTransform {
  transform(language: Language, ...args: any[]): string {
    switch (language) {
      case Language.ENGLISH: return "English"
      case Language.MANDARIN: return "Mandarin"
      case Language.SPANISH: return "Spanish"
      case Language.WESTERN_PUNJABI: return "Western Punjabi"
      default: throw(`No display value for '${language}'`)
    }
    
  }
}
