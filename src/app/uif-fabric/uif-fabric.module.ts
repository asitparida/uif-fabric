import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifBreadcrumbComponent } from './uif-breadcrumb/uif-breadcrumb.component';
import { UifButtonComponent } from './uif-button/uif-button.component';
import { UifHeroButtonComponent } from './uif-button/uif-hero-button.component';
import { UifCompoundButtonComponent } from './uif-button/uif-compound-button.component';
import { UifCalloutComponent } from './uif-callout/uif-callout.component';
import {
	UifOpenCalloutComponent, UifCalloutContentComponent, UifCalloutHeaderComponent, UifCalloutActionComponent
} from './uif-callout/uif-callout-subcomponents.component';
import { UifContextualMenuComponent } from './uif-contextual-menu/uif-contextual-menu.component';
import {
	UifContextualMenuItemComponent,
	UifContextualMenuTriggerDirective,
	UifContextualMenuItemDividerComponent,
	UifContextualMenuItemHeaderComponent,
	UifContextMenuService
} from './uif-contextual-menu/uif-contextual-menu-subcomponents.component';
import { UifDatepickerComponent } from './uif-datepicker/uif-datepicker.component';
import { UifOpenDatepickerComponent } from './uif-datepicker/uif-datepicker-subcomponents.component';
import { UifDialogComponent } from './uif-dialog/uif-dialog.component';
import {
	UifDialogContentComponent,
	UifDialogFooterComponent,
	UifDialogHeaderComponent
} from './uif-dialog/uif-dialog-subcomponents.component';
import { UifDropdownComponent } from './uif-dropdown/uif-dropdown.component';
import { UifDropdownOptionComponent } from './uif-dropdown/uif-dropdown-subcomponents.component';
import { UifFacepileComponent } from './uif-facepile/uif-facepile.component';
import { UifPersonaComponent } from './uif-persona/uif-persona.component';
import { UifPersonaCardComponent } from './uif-persona-card/uif-persona-card.component';

const COMPONENTS = [
	UifBreadcrumbComponent,
	UifButtonComponent,
	UifCompoundButtonComponent,
	UifHeroButtonComponent,

	UifCalloutComponent,
	UifOpenCalloutComponent,
	UifCalloutContentComponent,
	UifCalloutHeaderComponent,
	UifCalloutActionComponent,

	UifContextualMenuComponent,
	UifContextualMenuItemComponent,
	UifContextualMenuItemDividerComponent,
	UifContextualMenuItemHeaderComponent,
	UifContextualMenuTriggerDirective,

	UifDatepickerComponent,
	UifOpenDatepickerComponent,

	UifDialogComponent,
	UifDialogContentComponent,
	UifDialogFooterComponent,
	UifDialogHeaderComponent,

	UifDropdownComponent,
	UifDropdownOptionComponent,

	UifFacepileComponent,
	UifPersonaComponent,
	UifPersonaCardComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UiFabricModule { }
