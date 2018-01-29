import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiFabricModule } from '../uif-fabric/uif-fabric.module';
import { BreadcrumbDemoComponent } from './app-breadcrumb-demo/app-breadcrumb-demo.component';
import { ButtonDemoComponent } from './app-button-demo/app-button-demo.component';
import { CalloutDemoComponent } from './app-callout-demo/app-callout-demo.component';
import { ContextualMenuDemoComponent } from './app-contextualmenu-demo/app-contextualmenu-demo.component';
import { DatepickerComponent } from './app-datepicker-demo/app-datepicker-demo.component';
import { DialogDemoComponent } from './app-dialog-demo/app-dialog-demo.component';
import { DropdownDemoComponent } from './app-dropdown-demo/app-dropdown-demo.component';
import { FacepileDemoComponent } from './app-facepile-demo/app-facepile-demo.component';
import { PersonaDemoComponent } from './app-persona-demo/app-persona-demo.component';
import { PersonaCardDemoComponent } from './app-personacard-demo/app-personacard-demo.component';

const COMPONENTS = [
	BreadcrumbDemoComponent,
	ButtonDemoComponent,
	CalloutDemoComponent,
	ContextualMenuDemoComponent,
	DatepickerComponent,
	DialogDemoComponent,
	DropdownDemoComponent,
	FacepileDemoComponent,
	PersonaDemoComponent,
	PersonaCardDemoComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		FormsModule,
		UiFabricModule
	],
	exports: COMPONENTS,
	providers: []
})
export class DemoModule { }
