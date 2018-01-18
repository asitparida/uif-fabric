import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifBreadcrumbComponent } from './uif-breadcrumb/uif-breadcrumb.component';


@NgModule({
  declarations: [
    UifBreadcrumbComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
    UifBreadcrumbComponent
  ],
  providers: []
})
export class UiFabricModule { }
