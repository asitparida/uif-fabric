import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifDropdownComponent } from './uif-dropdown.component';
import { UifDropdownOptionComponent } from './uif-dropdown-subcomponents.component';


const COMPONENTS = [
	UifDropdownComponent,
	UifDropdownOptionComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifDropdownModule {
}
