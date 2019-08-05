import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShopEavSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ShopEavSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ShopEavSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopEavSharedModule {
  static forRoot() {
    return {
      ngModule: ShopEavSharedModule
    };
  }
}
