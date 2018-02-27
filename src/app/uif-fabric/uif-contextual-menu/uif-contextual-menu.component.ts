import {
	Component, Input, Output, EventEmitter,
	OnChanges, ElementRef, AfterContentInit, ContentChildren, QueryList,
	OnInit, ViewChild, ContentChild
} from '@angular/core';
import { UifContextualMenuDirectionHint } from './uif-contextual-menu.models';
import {
	UifContextualMenuTriggerDirective,
	UifContextualMenuItemComponent,
	UifContextMenuService
} from './uif-contextual-menu-subcomponents.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
import { SimpleChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class UifContextualMenuComponent implements OnChanges, AfterContentInit, OnInit, OnDestroy {
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
	@Input() isMultiSelect: boolean | Boolean = false;
	@Input() directionHint: UifContextualMenuDirectionHint = UifContextualMenuDirectionHint.Bottom;
	UifContextualMenuDirectionHints = UifContextualMenuDirectionHint;
	@ContentChildren(UifContextualMenuItemComponent) menuItems: QueryList<UifContextualMenuItemComponent>;
	isSubMenu = false;
	nativeMenuTrigger;
	nativeMenu;
	private onDocumnetKeyUpListener: Subscription = null;
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
	ngOnDestroy() {
		if (this.onDocumnetKeyUpListener) {
			this.onDocumnetKeyUpListener.unsubscribe();
			this.onDocumnetKeyUpListener = null;
		}
	}
	ngOnChanges(changes: SimpleChanges) {
		setTimeout(() => {
			if (this.nativeMenuTrigger) {
				const props = (this.nativeMenuTrigger as HTMLElement).getBoundingClientRect();
				if (this.nativeMenu && this.directionHint === UifContextualMenuDirectionHint.Top) {
					(this.nativeMenu as HTMLElement).style.bottom = props.height + 'px';
				}
			}
		});
		for (const prop in changes) {
			if (changes[prop]) {
				const change = changes[prop];
				if (prop === 'isOpen') {
					if (change.currentValue) {
						this.addDocumentListener();
					} else {
						if (this.onDocumnetKeyUpListener) {
							this.onDocumnetKeyUpListener.unsubscribe();
							this.onDocumnetKeyUpListener = null;
						}
					}
				}
			}
		}
	}
	addDocumentListener() {
		if (this.onDocumnetKeyUpListener) {
			this.onDocumnetKeyUpListener.unsubscribe();
			this.onDocumnetKeyUpListener = null;
		}
		this.onDocumnetKeyUpListener = Observable.fromEvent(document, 'keyup')
			.subscribe(($event: KeyboardEvent) => {
				if ($event.key === 'Escape') {
					this.isOpen = false;
					this.isOpenChange.emit(this.isOpen);
				}
			});
	}
}

