import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifContextHostComponent, UifContextHostContentComponent, UifContextHostHeaderComponent } from './uif-context-host.component';

const COMPONENTS = [
	UifContextHostComponent, UifContextHostContentComponent, UifContextHostHeaderComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifContextHostModule {
}
