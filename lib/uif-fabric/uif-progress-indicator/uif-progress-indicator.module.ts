import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifProgressIndicatorComponent } from './uif-progress-indicator.component';


const COMPONENTS = [
	UifProgressIndicatorComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifProgressIndicatorModule {
}
