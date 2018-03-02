import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifMessageBarComponent } from './uif-message-bar.component';


const COMPONENTS = [
	UifMessageBarComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifMessageBarModule {
}
