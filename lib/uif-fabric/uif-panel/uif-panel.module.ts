import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifPanelComponent } from './uif-panel.component';
import { UifOverlayModule } from '../uif-overlay/uif-overlay.module';


const COMPONENTS = [
	UifPanelComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifOverlayModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifPanelModule {
}
