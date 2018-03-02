import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UifCheckboxComponent } from './uif-checkbox/uif-checkbox.component';
import { UifChoicefieldComponent } from './uif-choicefield/uif-choicefield.component';
import { UifChoicefieldItemComponent } from './uif-choicefield/uif-choicefield-item.component';
import { UifTableComponent } from './uif-table/uif-table.component';
import { UifTableTrComponent } from './uif-table/uif-table-tr.component';
import { UifTreeTableComponent } from './uif-tree-table/uif-tree-table.component';
import { UifTreeTableColumnComponent, UifTreeTableContentComponent } from './uif-tree-table/uif-tree-table-content.component';
import { UifRatingComponent } from './uif-rating/uif-rating.component';
import { UifColorPickerComponent } from './uif-color-picker/uif-color-picker.component';
import { UifModalComponent } from './uif-modal/uif-modal.component';
import { UifModalHeaderComponent, UifModalContentComponent, UifModalFooterComponent } from './uif-modal/uif-modal-subcomponents.component';
import { UifAccordionComponent } from './uif-accordion/uif-accordion.component';
import { UifAccordionItemTitleComponent } from './uif-accordion/uif-accordion-subcomponents.component';
import { UifAccordionItemComponent } from './uif-accordion/uif-accordion-item.component';
import { UifWizardComponent } from './uif-wizard/uif-wizard.component';
import { UifWizardPageComponent } from './uif-wizard/uif-wizard-page.component';
import { UifWizardPageNavTitleComponent } from './uif-wizard/uif-wizard-page-nav-title.component';
import { UifWizardPageTitleComponent } from './uif-wizard/uif-wizard-page-title.component';
import { UifCarouselComponent } from './uif-carousel/uif-carousel.component';
import { UifCarouselItemComponent } from './uif-carousel/uif-carousel-item.component';
import { UifSliderComponent } from './uif-slider/uif-slider.component';
import { UifChipsComponent } from './uif-chips/uif-chips.component';
import { UifTooltipComponent } from './uif-tooltip/uif-tooltip.component';
import { UifContextualMenuTriggerDirective } from './uif-contextual-menu/uif-contextual-menu-subcomponents.component';

const DIRECTIVES = [
	UifContextualMenuTriggerDirective
];

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
	UifIconComponent,

	UifCheckboxComponent,

	UifChoicefieldComponent,
	UifChoicefieldItemComponent,

	UifTableComponent,
	UifTableTrComponent,

	UifTreeTableComponent,
	UifTreeTableColumnComponent,
	UifTreeTableContentComponent,

	UifRatingComponent,
	UifColorPickerComponent,

	UifModalComponent,
	UifModalHeaderComponent,
	UifModalContentComponent,
	UifModalFooterComponent,

	UifAccordionComponent,
	UifAccordionItemComponent,
	UifAccordionItemTitleComponent,

	UifTooltipComponent,

	UifWizardComponent,
	UifWizardPageComponent,
	UifWizardPageNavTitleComponent,
	UifWizardPageTitleComponent,

	UifCarouselComponent,
	UifCarouselItemComponent,

	UifSliderComponent,
	UifChipsComponent
];

@NgModule({
	declarations: [...COMPONENTS, ...DIRECTIVES],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [...COMPONENTS, ...DIRECTIVES],
	providers: []
})
export class UiFabricModule { }
