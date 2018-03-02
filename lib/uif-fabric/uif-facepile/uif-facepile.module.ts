import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifFacepileComponent } from './uif-facepile.component';
import { UifCalloutModule } from '../uif-callout/uif-callout.module';
import { UifPersonaModule } from '../uif-persona/uif-persona.module';
import { UifPersonaCardModule } from '../uif-persona-card/uif-persona-card.module';


const COMPONENTS = [
	UifFacepileComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifCalloutModule,
		UifPersonaModule,
		UifPersonaCardModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifFacepileModule {
}
