import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifChipsComponent } from './uif-chips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
	UifChipsComponent
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
export class UifChipsModule {
}
