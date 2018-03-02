import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifPeoplePickerComponent } from './uif-people-picker.component';
import { UifContextHostModule } from '../uif-context-host/uif-context-host.module';
import { UifPersonaModule } from '../uif-persona/uif-persona.module';


const COMPONENTS = [
	UifPeoplePickerComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifContextHostModule,
		UifPersonaModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifPeoplePickerModule {
}
