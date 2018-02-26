import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { UiFabricModule } from './uif-fabric/uif-fabric.module';

import { AppComponent } from './app.component';
import { DemoerComponent, DemoerService } from './demoer/demoer.component';
import { AppSummaryComponent } from './app-summary.component';

import { BreadcrumbDemoComponent } from './demo/app-breadcrumb-demo/app-breadcrumb-demo.component';
import { ButtonDemoComponent } from './demo/app-button-demo/app-button-demo.component';
import { CalloutDemoComponent } from './demo/app-callout-demo/app-callout-demo.component';
import { ContextualMenuDemoComponent } from './demo/app-contextualmenu-demo/app-contextualmenu-demo.component';
import { DatepickerComponent } from './demo/app-datepicker-demo/app-datepicker-demo.component';
import { DialogDemoComponent } from './demo/app-dialog-demo/app-dialog-demo.component';
import { DropdownDemoComponent } from './demo/app-dropdown-demo/app-dropdown-demo.component';
import { FacepileDemoComponent } from './demo/app-facepile-demo/app-facepile-demo.component';
import { PersonaDemoComponent } from './demo/app-persona-demo/app-persona-demo.component';
import { PersonaCardDemoComponent } from './demo/app-personacard-demo/app-personacard-demo.component';
import { OrgChartDemoComponent } from './demo/app-orgchart-demo/app-orgchart-demo.component';
import { OverlayDemoComponent } from './demo/app-overlay-demo/app-overlay-demo.component';
import { PanelDemoComponent } from './demo/app-panel-demo/app-panel-demo.component';
import { MessageBarDemoComponent } from './demo/app-messagebar-demo/app-messagebar-demo.component';
import { MessageBannerDemoComponent } from './demo/app-messagebanner-demo/app-messagebanner-demo.component';
import { PeoplePickerDemoComponent } from './demo/app-peoplepicker-demo/app-peoplepicker-demo.component';
import { PivotDemoComponent } from './demo/app-pivot-demo/app-pivot-demo.component';
import { ProgressIndicatorDemoComponent } from './demo/app-progressindicator-demo/app-progressindicator-demo.component';
import { ToggleDemoComponent } from './demo/app-toggle-demo/app-toggle-demo.component';
import { IconDemoComponent, SearchPipe } from './demo/app-icon-demo/app-icon-demo.component';
import { CheckboxDemoComponent } from './demo/app-checkbox-demo/app-checkbox-demo.component';
import { ChoicefieldDemoComponent } from './demo/app-choicefield-demo/app-choicefield-demo.component';
import { TableDemoComponent } from './demo/app-table-demo/app-table-demo.component';
import { TreeTableDemoComponent } from './demo/app-treetable-demo/app-treetable-demo.component';
import { RatingDemoComponent } from './demo/app-rating-demo/app-rating-demo.component';
import { ColorPickerDemoComponent } from './demo/app-colorpicker-demo/app-colorpicker-demo.component';
import { ModalDemoComponent } from './demo/app-modal-demo/app-modal-demo.component';
import { AccordionDemoComponent } from './demo/app-accordion-demo/app-accordion-demo.component';
import { TooltipDemoComponent } from './demo/app-tooltip-demo/app-tooltip-demo.component';
import { WizardDemoComponent } from './demo/app-wizard-demo/app-wizard-demo.component';

const COMPONENTS = [
	AppComponent,
	AppSummaryComponent,
	DemoerComponent,
	BreadcrumbDemoComponent,
	ButtonDemoComponent,
	CalloutDemoComponent,
	ContextualMenuDemoComponent,
	DatepickerComponent,
	DialogDemoComponent,
	DropdownDemoComponent,
	FacepileDemoComponent,
	PersonaDemoComponent,
	PersonaCardDemoComponent,
	OrgChartDemoComponent,
	OverlayDemoComponent,
	PanelDemoComponent,
	MessageBarDemoComponent,
	MessageBannerDemoComponent,
	PeoplePickerDemoComponent,
	PivotDemoComponent,
	ProgressIndicatorDemoComponent,
	ToggleDemoComponent,
	IconDemoComponent,
	CheckboxDemoComponent,
	ChoicefieldDemoComponent,
	TableDemoComponent,
	TreeTableDemoComponent,
	RatingDemoComponent,
	ColorPickerDemoComponent,
	ModalDemoComponent,
	AccordionDemoComponent,
	TooltipDemoComponent,
	WizardDemoComponent
];
// import { DemoModule } from './demo/demo.module';


@NgModule({
	declarations: [ ...COMPONENTS, SearchPipe],
	entryComponents: COMPONENTS,
	imports: [
		BrowserModule,
		HttpClientModule,
		CommonModule,
		FormsModule,
		UiFabricModule,
	],
	providers: [
		DemoerService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
