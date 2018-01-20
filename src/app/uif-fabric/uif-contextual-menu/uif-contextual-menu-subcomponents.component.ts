import { Component, Directive, ElementRef, AfterViewInit, Input, Injectable, QueryList } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class UifContextMenuService {
	private multiSelected = new Subject<string>();
	onMultiSelectionCheck = this.multiSelected.asObservable();
	checkForMultiSelection(currentId: string) {
		this.multiSelected.next(currentId);
	}
}

@Directive({
	selector: '[menuTrigger]'
})
export class UifContextualMenuTriggerDirective {
}

@Component({
	selector: '[menuItem], menu-item',
	template:
	`
	<li class="ms-ContextualMenu-item" (click)="onSelectionChange()">
		<a class="ms-ContextualMenu-link" [attr.tabIndex]="tabIndex" [class.is-selected]="selected" [class.is-disabled]="disabled">
			<ng-content></ng-content>
		</a>
	</li>
	`
})
export class UifContextualMenuItemComponent implements OnChanges {
	@Input() tabIndex = 0;
	@Input() selected: boolean | Boolean = false;
	@Input() disabled: boolean | Boolean = false;
	id = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
	constructor(private contextMenuService: UifContextMenuService) {}
	onSelectionChange() {
		if (!this.disabled) {
			this.selected = !this.selected;
			this.contextMenuService.checkForMultiSelection(this.id);
		}
	}
	ngOnChanges() {
		if (this.disabled) {
			this.tabIndex = -1;
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

