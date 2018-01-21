import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiFabricModule } from '../uif-fabric/uif-fabric.module';
import { BreadcrumbDemoComponent } from './app-breadcrumb-demo/app-breadcrumb-demo.component';
import { ButtonDemoComponent } from './app-button-demo/app-button-demo.component';
import { CalloutDemoComponent } from './app-callout-demo/app-callout-demo.component';
import { ContextualMenuDemoComponent } from './app-contextualmenu-demo/app-contextualmenu-demo.component';
import { DatepickerComponent } from './app-datepicker-demo/app-datepicker-demo.component';

@NgModule({
	declarations: [
		BreadcrumbDemoComponent,
		ButtonDemoComponent,
		CalloutDemoComponent,
		ContextualMenuDemoComponent,
		DatepickerComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		UiFabricModule
	],
	exports: [
		BreadcrumbDemoComponent,
		ButtonDemoComponent,
		CalloutDemoComponent,
		ContextualMenuDemoComponent,
		DatepickerComponent
	],
	providers: []
})
export class DemoModule { }
