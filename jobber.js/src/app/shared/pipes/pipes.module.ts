import { NgModule } from "@angular/core";
import { FluencyLevelDisplayPipe } from "./fluency-level-display.pipe";
import { LanguageDisplayPipe } from "./language-display.pipe";

@NgModule({
  declarations: [LanguageDisplayPipe, FluencyLevelDisplayPipe],
  exports: [LanguageDisplayPipe, FluencyLevelDisplayPipe],
})
export class PipesModule {}
