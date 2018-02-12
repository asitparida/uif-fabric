import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { UifOrgChartComponent } from './uif-org-chart/uif-org-chart.component';
import { UifOverlayComponent } from './uif-overlay/uif-overlay.component';
import { UifPanelComponent } from './uif-panel/uif-panel.component';
import { UifMessageBarComponent } from './uif-message-bar/uif-message-bar.component';
import { UifMessageBannerComponent } from './uif-message-banner/uif-message-banner.component';
import { UifPeoplePickerComponent } from './uif-people-picker/uif-people-picker.component';
import {
	UifContextHostComponent,
	UifContextHostContentComponent,
	UifContextHostHeaderComponent
} from './uif-context-host/uif-context-host.component';
import { UifPivotComponent } from './uif-pivot/uif-pivot.component';
import {
	UifPivotItemComponent,
	UifPivotContentComponent,
	UifPivotTitleComponent
} from './uif-pivot/uif-pivot-item.component';
import { UifProgressIndicatorComponent } from './uif-progress-indicator/uif-progress-indicator.component';
import { UifToggleComponent } from './uif-toggle/uif-toggle.component';
import { UifIconComponent } from './uif-icon/uif-icon.component';

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
	UifPersonaCardComponent,

	UifOrgChartComponent,
	UifOverlayComponent,
	UifPanelComponent,

	UifMessageBarComponent,
	UifMessageBannerComponent,

	UifPeoplePickerComponent,

	UifContextHostComponent,
	UifContextHostContentComponent,
	UifContextHostHeaderComponent,

	UifPivotComponent,
	UifPivotItemComponent,
	UifPivotContentComponent,
	UifPivotTitleComponent,

	UifProgressIndicatorComponent,
	UifToggleComponent,
	UifIconComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		FormsModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UiFabricModule { }
