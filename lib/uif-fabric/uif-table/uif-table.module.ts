import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifTableComponent } from './uif-table.component';
import { UifTableTrComponent } from './uif-table-tr.component';


const COMPONENTS = [
	UifTableComponent,
	UifTableTrComponent,
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifTableModule {
}
