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
import { CarouselDemoComponent } from './demo/app-carousel-demo/app-carousel-demo.component';
import { SliderDemoComponent } from './demo/app-slider-demo/app-slider-demo.component';
import { ChipsDemoComponent } from './demo/app-chips-demo/app-chips-demo.component';

// tslint:disable max-line-length
export const COMPONENTS = [
	{ componentId: BreadcrumbDemoComponent, active: false, id: 'app-breadcrumb-demo', title: 'Breadcrumb', dir: 'uif-breadcrumb' },
	{ componentId: ButtonDemoComponent, active: false, id: 'app-button-demo', title: 'Button', dir: 'uif-button' },
	{ componentId: CalloutDemoComponent, active: false, id: 'app-callout-demo', title: 'Callout', dir: 'uif-callout' },
	{ componentId: ContextualMenuDemoComponent, active: false, id: 'app-contextualmenu-demo', title: 'Contextual Menu', dir: 'uif-contextual-menu' },
	{ componentId: DatepickerComponent, active: false, id: 'app-datepicker-demo', title: 'Datepicker', dir: 'uif-datepicker' },
	{ componentId: DialogDemoComponent, active: false, id: 'app-dialog-demo', title: 'Dialog', dir: 'uif-dialog' },
	{ componentId: DropdownDemoComponent, active: false, id: 'app-dropdown-demo', title: 'Dropdown', dir: 'uif-dropdown' },
	{ componentId: FacepileDemoComponent, active: false, id: 'app-facepile-demo', title: 'Facepile', dir: 'uif-facepile', isFlexed: true },
	{ componentId: PersonaDemoComponent, active: false, id: 'app-persona-demo', title: 'Persona', dir: 'uif-persona' },
	{ componentId: PersonaCardDemoComponent, active: false, id: 'app-personacard-demo', title: 'Persona Card', dir: 'uif-persona-card' },
	{ componentId: OrgChartDemoComponent, active: false, id: 'app-orgchart-demo', title: 'Org Chart', dir: 'uif-orgchart' },
	{ componentId: OverlayDemoComponent, active: false, id: 'app-overlay-demo', title: 'Overlay', dir: 'uif-overlay' },
	{ componentId: PanelDemoComponent, active: false, id: 'app-panel-demo', title: 'Panel', dir: 'uif-panel' },
	{ componentId: MessageBarDemoComponent, active: false, id: 'app-messagebar-demo', title: 'Message Bar', dir: 'uif-message-bar', hideDocWarning: true },
	{ componentId: MessageBannerDemoComponent, active: false, id: 'app-messagebanner-demo', title: 'Message Banner', dir: 'uif-message-banner' },
	{ componentId: PeoplePickerDemoComponent, active: false, id: 'app-peoplepicker-demo', title: 'Peoplepicker', dir: 'uif-people-picker' },
	{ componentId: PivotDemoComponent, active: false, id: 'app-pivot-demo', title: 'Pivot', dir: 'uif-pivot' },
	{ componentId: ProgressIndicatorDemoComponent, active: false, id: 'app-progressindicator-demo', title: 'Progress Indicator', dir: 'uif-progress-indicator', hideDocWarning: true },
	{ componentId: ToggleDemoComponent, active: false, id: 'app-toggle-demo', title: 'Toggle', dir: 'uif-toggle' },
	{ componentId: CheckboxDemoComponent, active: false, id: 'app-checkbox-demo', title: 'Checkbox', dir: 'uif-checkbox' },
	{ componentId: ChoicefieldDemoComponent, active: false, id: 'app-choicefield-demo', title: 'Choicefield', dir: 'uif-choicefield' },
	{ componentId: TableDemoComponent, active: false, id: 'app-table-demo', title: 'Table', dir: 'uif-table', hideDocWarning: true },
	{ componentId: TreeTableDemoComponent, active: false, id: 'app-treetable-demo', title: 'Tree Table', dir: 'uif-tree-table', isCustom: true, isNew: true, hideDocWarning: true },
	{ componentId: IconDemoComponent, active: false, id: 'app-icon-demo', title: 'Icons', dir: 'uif-icon', hideDocWarning: true, isNew: true },
	{ componentId: RatingDemoComponent, active: false, id: 'app-rating-demo', title: 'Rating', dir: 'uif-rating', isNew: false },
	{ componentId: ColorPickerDemoComponent, active: false, id: 'app-colorpicker-demo', title: 'Color Picker', dir: 'uif-color-picker', isNew: true, hideDocWarning: true },
	{ componentId: ModalDemoComponent, active: false, id: 'app-modal-demo', title: 'Modal', dir: 'uif-modal', isNew: false, isCustom: true },
	{ componentId: AccordionDemoComponent, active: false, id: 'app-accordion-demo', title: 'Accordion', dir: 'uif-accordion', isNew: true, isCustom: true, hideDocWarning: true },
	{ componentId: TooltipDemoComponent, active: false, id: 'app-tooltip-demo', title: 'Tooltip', dir: 'uif-tooltip', isNew: false },
	{ componentId: WizardDemoComponent, active: false, id: 'app-wizard-demo', title: 'Wizard', dir: 'uif-wizard', isNew: true, isCustom: true, hideDocWarning: true },
	{ componentId: CarouselDemoComponent, active: false, id: 'app-carousel-demo', title: 'Carousel', dir: 'uif-carousel', isNew: true, isCustom: true, hideDocWarning: true },
	{ componentId: SliderDemoComponent, active: false, id: 'app-slider-demo', title: 'Slider', dir: 'uif-slider', isNew: true, isCustom: false, hideDocWarning: true },
	{ componentId: ChipsDemoComponent, active: false, id: 'app-chips-demo', title: 'Chips', dir: 'uif-chips', isNew: true, isCustom: false, hideDocWarning: true }
];

// tslint:enable max-line-length
