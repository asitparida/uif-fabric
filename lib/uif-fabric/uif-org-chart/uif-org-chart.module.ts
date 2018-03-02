import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifOrgChartComponent } from './uif-org-chart.component';
import { UifPersonaModule } from '../uif-persona/uif-persona.module';


const COMPONENTS = [
	UifOrgChartComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifPersonaModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifOrgChartModule {
}
