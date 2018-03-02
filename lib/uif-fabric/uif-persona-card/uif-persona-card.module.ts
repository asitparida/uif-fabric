import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifPersonaCardComponent } from './uif-persona-card.component';
import { UifPersonaModule } from '../uif-persona/uif-persona.module';
import { UifOrgChartModule } from '../uif-org-chart/uif-org-chart.module';


const COMPONENTS = [
	UifPersonaCardComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifPersonaModule,
		UifOrgChartModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifPersonaCardModule {
}
