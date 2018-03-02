import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifTooltipComponent } from './uif-tooltip.component';
import { UifCalloutModule } from '../uif-callout/uif-callout.module';


const COMPONENTS = [
	UifTooltipComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifCalloutModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifTooltipModule {
}
