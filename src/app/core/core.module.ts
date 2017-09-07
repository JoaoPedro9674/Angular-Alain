import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from "./module-import-guard";

import { SettingsService } from "./settings/settings.service";
import { MenuService } from "./menu/menu.service";
import { ThemesService } from "./themes/themes.service";
import { TranslatorService } from "./translator/translator.service";
import { ScrollService } from "./services/scroll.service";
import { ColorsService } from "./services/colors.service";

@NgModule({
  imports: [
  ],
  providers: [
    ThemesService,
    SettingsService,
    MenuService,
    TranslatorService,
    ScrollService,
    ColorsService
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
