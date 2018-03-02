import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifCalloutComponent } from './uif-callout.component';
import {
	UifOpenCalloutComponent, UifCalloutContentComponent, UifCalloutHeaderComponent, UifCalloutActionComponent
} from './uif-callout-subcomponents.component';

const COMPONENTS = [
	UifCalloutComponent,
	UifOpenCalloutComponent,
	UifCalloutContentComponent,
	UifCalloutHeaderComponent,
	UifCalloutActionComponent,
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifCalloutModule {
}
