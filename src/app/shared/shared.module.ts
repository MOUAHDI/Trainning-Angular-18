import { NgModule } from "@angular/core";
import { AutoCompletePipe } from "./pipes/autocomplete.pipe";
import { ExtensionPipe } from "./pipes/extension.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { PluralPipe } from "./pipes/plural.pipe";

const imports = [AutoCompletePipe, ExtensionPipe, LangPipe, PluralPipe]

@NgModule({
    // declarations: [] // mettre ici les pipes, composants non standalone
    imports, // imports: imports
    exports: imports
})
export class SharedModule {}