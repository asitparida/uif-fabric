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
import { OrgChartDemoComponent } from './app-orgchart-demo/app-orgchart-demo.component';
import { OverlayDemoComponent } from './app-overlay-demo/app-overlay-demo.component';
import { PanelDemoComponent } from './app-panel-demo/app-panel-demo.component';
import { MessageBarDemoComponent } from './app-messagebar-demo/app-messagebar-demo.component';
import { MessageBannerDemoComponent } from './app-messagebanner-demo/app-messagebanner-demo.component';
import { PeoplePickerDemoComponent } from './app-peoplepicker-demo/app-peoplepicker-demo.component';
import { PivotDemoComponent } from './app-pivot-demo/app-pivot-demo.component';
import { ProgressIndicatorDemoComponent } from './app-progressindicator-demo/app-progressindicator-demo.component';
import { ToggleDemoComponent } from './app-toggle-demo/app-toggle-demo.component';
import { IconDemoComponent, SearchPipe } from './app-icon-demo/app-icon-demo.component';
import { CheckboxDemoComponent } from './app-checkbox-demo/app-checkbox-demo.component';
import { ChoicefieldDemoComponent } from './app-choicefield-demo/app-choicefield-demo.component';


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
	SearchPipe
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
