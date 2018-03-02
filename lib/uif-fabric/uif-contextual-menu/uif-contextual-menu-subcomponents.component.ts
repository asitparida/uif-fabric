import {
	Component, Directive, ElementRef, forwardRef, OnChanges,
	AfterViewInit, Input, Injectable, QueryList, ViewChild, AfterContentInit, ContentChild } from '@angular/core';
import { UifContextualMenuComponent } from './uif-contextual-menu.component';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UifContextMenuService {
	private multiSelected = new Subject<string>();
	onMultiSelectionCheck = this.multiSelected.asObservable();
	checkForMultiSelection(currentId: string) {
		this.multiSelected.next(currentId);
	}
}

@Directive({
	selector: '[menuTrigger]',
})
export class UifContextualMenuTriggerDirective {
	constructor(public elRef: ElementRef) {}
}

@Component({
	selector: '[menuItem], menu-item',
	template:
	`
	<li class="ms-ContextualMenu-item" (click)="onSelectionChange()" [class.ms-ContextualMenu-item--hasMenu]="hasSubMenu">
		<a class="ms-ContextualMenu-link" [attr.tabIndex]="tabIndex" [class.is-selected]="selected" [class.is-disabled]="disabled">
			<ng-content></ng-content>
		</a>
		<i class="ms-ContextualMenu-subMenuIcon ms-Icon ms-Icon--ChevronRight" [hidden]="!hasSubMenu"></i>
		<ng-content select="uif-contextualmenu"></ng-content>
	</li>
	`
})
export class UifContextualMenuItemComponent implements OnChanges, AfterContentInit {
	@Input() tabIndex = 0;
	@Input() selected: boolean | Boolean = false;
	@Input() disabled: boolean | Boolean = false;
	hasSubMenu: boolean |  Boolean = false;
	@ContentChild(forwardRef(() => UifContextualMenuComponent)) subMenu: UifContextualMenuComponent;
	subMenuOpen: boolean | Boolean = false;
	id = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
	constructor(private contextMenuService: UifContextMenuService) {}
	onSelectionChange() {
		if (!this.disabled) {
			if (!this.hasSubMenu) {
				this.selected = !this.selected;
				this.contextMenuService.checkForMultiSelection(this.id);
			} else {
				this.subMenuOpen = !this.subMenuOpen;
				this.subMenu.isOpen = !this.subMenu.isOpen;
			}
		}
	}
	ngOnChanges() {
		if (this.disabled) {
			this.tabIndex = -1;
		}
	}
	ngAfterContentInit() {
		if (this.subMenu) {
			this.hasSubMenu = true;
			this.subMenu.isOpen = false;
			this.subMenu.isSubMenu = true;
		}
	}
	closeSubMenu() {
		if (this.hasSubMenu) {
			this.subMenu.isOpen = false;
		}
	}
}
@Component({
	selector: '[menuItemDivider], menu-item-divider',
	template:
	`
	<li class="ms-ContextualMenu-item ms-ContextualMenu-item--divider"></li>
	`
})
export class UifContextualMenuItemDividerComponent {
}
@Component({
	selector: '[menuItemHeader], menu-item-header',
	template:
	`
	<li class="ms-ContextualMenu-item ms-ContextualMenu-item--header"><ng-content></ng-content></li>
	`
})
export class UifContextualMenuItemHeaderComponent {
}

