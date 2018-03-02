import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifToggleComponent } from './uif-toggle.component';


const COMPONENTS = [
	UifToggleComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifToggleModule {
}
