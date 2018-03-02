import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifPivotComponent } from './uif-pivot.component';
import {
	UifPivotItemComponent,
	UifPivotContentComponent,
	UifPivotTitleComponent
} from './uif-pivot-item.component';


const COMPONENTS = [
	UifPivotComponent,
	UifPivotItemComponent,
	UifPivotContentComponent,
	UifPivotTitleComponent,
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifPivotModule {
}
