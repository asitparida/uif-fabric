import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifAccordionComponent } from './uif-accordion.component';
import { UifAccordionItemComponent } from './uif-accordion-item.component';
import { UifAccordionItemTitleComponent } from './uif-accordion-subcomponents.component';

const COMPONENTS = [
	UifAccordionComponent,
	UifAccordionItemComponent,
	UifAccordionItemTitleComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifAccordionModule {
}
