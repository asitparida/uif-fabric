import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifBreadcrumbComponent } from './uif-breadcrumb/uif-breadcrumb.component';
import { UifButtonComponent } from './uif-button/uif-button.component';
import { UifHeroButtonComponent } from './uif-button/uif-hero-button.component';
import { UifCompoundButtonComponent } from './uif-button/uif-compound-button.component';
import { UifCalloutComponent } from './uif-callout/uif-callout.component';
import {
	UifOpenCalloutComponent, UifCalloutContentComponent, UifCalloutHeaderComponent, UifCalloutActionComponent
} from './uif-callout/uif-callout-subcomponents.component';

@NgModule({
	declarations: [
		UifBreadcrumbComponent,
		UifButtonComponent,
		UifCompoundButtonComponent,
		UifHeroButtonComponent,
		UifCalloutComponent,
		UifOpenCalloutComponent,
		UifCalloutContentComponent,
		UifCalloutHeaderComponent,
		UifCalloutActionComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		UifBreadcrumbComponent,
		UifButtonComponent,
		UifCompoundButtonComponent,
		UifHeroButtonComponent,
		UifCalloutComponent,
		UifOpenCalloutComponent,
		UifCalloutContentComponent,
		UifCalloutHeaderComponent,
		UifCalloutActionComponent
	],
	providers: []
})
export class UiFabricModule { }
