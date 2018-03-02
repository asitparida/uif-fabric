import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifContextualMenuComponent } from './uif-contextual-menu.component';
import {
	UifContextualMenuItemComponent,
	UifContextualMenuItemDividerComponent,
	UifContextualMenuItemHeaderComponent,
	UifContextMenuService
} from './uif-contextual-menu-subcomponents.component';
import { UifContextualMenuTriggerDirective } from './uif-contextual-menu-subcomponents.component';

const DIRECTIVES = [
	UifContextualMenuTriggerDirective
];

const COMPONENTS = [
	UifContextualMenuComponent,
	UifContextualMenuItemComponent,
	UifContextualMenuItemDividerComponent,
	UifContextualMenuItemHeaderComponent,
];

@NgModule({
	declarations: [...COMPONENTS, ...DIRECTIVES],
	imports: [
		CommonModule
	],
	exports: [...COMPONENTS, ...DIRECTIVES],
	providers: []
})
export class UifContextualMenuModule {
}
