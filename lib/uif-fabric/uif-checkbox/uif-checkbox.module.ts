import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifCheckboxComponent } from './uif-checkbox.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const COMPONENTS = [
	UifCheckboxComponent
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
export class UifCheckboxModule {
}
