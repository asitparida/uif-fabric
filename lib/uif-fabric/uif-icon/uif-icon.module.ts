import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifIconComponent } from './uif-icon.component';


const COMPONENTS = [
	UifIconComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifIconModule {
}
