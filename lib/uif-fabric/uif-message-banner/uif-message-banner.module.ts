import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifMessageBannerComponent } from './uif-message-banner.component';
import { UifOverlayModule } from '../uif-overlay/uif-overlay.module';


const COMPONENTS = [
	UifMessageBannerComponent
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
export class UifMessageBannerModule {
}
