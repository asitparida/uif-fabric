import {
	Component, Input, Output, EventEmitter,
	OnChanges, ElementRef, AfterContentInit, ContentChildren, QueryList, OnInit
} from '@angular/core';
import { UifContextualMenuDirectionHint } from './uif-contextual-menu.models';
import {
	UifContextualMenuTriggerDirective,
	UifContextualMenuItemComponent,
	UifContextMenuService
} from './uif-contextual-menu-subcomponents.component';

@Component({
	selector: 'uif-contextualmenu',
	templateUrl: './uif-contextual-menu.component.html',
	styleUrls: [
		'./uif-contextual-menu.component.scss'
	],
	providers: [
		UifContextMenuService
	]
})
export class UifContextualMenuComponent implements OnChanges, AfterContentInit, OnInit {
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
	@Input() isMultiSelect: boolean | Boolean = false;
	@Input() directionHint: UifContextualMenuDirectionHint = UifContextualMenuDirectionHint.Bottom;
	@ContentChildren(UifContextualMenuItemComponent) menuItems: QueryList<UifContextualMenuItemComponent>;
	nativeMenuTrigger;
	nativeMenu;
	constructor(
		private elementRef: ElementRef,
		private contextMenuService: UifContextMenuService
	) { }
	ngOnInit() {
		this.contextMenuService.onMultiSelectionCheck.subscribe((currentId: string) => {
			if (!this.isMultiSelect) {
				this.menuItems.toArray().forEach((component: UifContextualMenuItemComponent) => {
					if (component.id !== currentId) {
						component.selected = false;
					}
				});
				this.isOpen = false;
				this.isOpenChange.emit(this.isOpen);
			}
		});
	}
	ngAfterContentInit() {
		const elRef = this.elementRef.nativeElement;
		if (elRef) {
			this.nativeMenuTrigger = (elRef as HTMLLIElement).querySelector('[menuTrigger]');
			this.nativeMenu = (elRef as HTMLLIElement).querySelector('ul.ms-ContextualMenu');
		}
	}
	ngOnChanges() {
		setTimeout(() => {
			if (this.nativeMenuTrigger) {
				const props = (this.nativeMenuTrigger as HTMLElement).getBoundingClientRect();
				if (this.nativeMenu && this.directionHint === UifContextualMenuDirectionHint.Top) {
					(this.nativeMenu as HTMLElement).style.bottom = props.height + 'px';
				}
			}
		});
	}
}

