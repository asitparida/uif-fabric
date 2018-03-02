import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifOverlayComponent } from './uif-overlay.component';


const COMPONENTS = [
	UifOverlayComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifOverlayModule {
}
