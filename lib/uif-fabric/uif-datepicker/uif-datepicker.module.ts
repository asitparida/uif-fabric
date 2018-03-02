import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifOpenDatepickerComponent } from './uif-datepicker-subcomponents.component';
import { UifDatepickerComponent} from './uif-datepicker.component';


const COMPONENTS = [
	UifDatepickerComponent,
	UifOpenDatepickerComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifDatepickerModule {
}
