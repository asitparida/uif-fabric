import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifBreadcrumbComponent } from './uif-breadcrumb.component';

const COMPONENTS = [
	UifBreadcrumbComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifBreadcrumbModule {
}
