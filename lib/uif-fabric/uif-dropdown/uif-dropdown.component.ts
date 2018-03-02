import {
	Component, Input, AfterContentInit, ContentChildren,
	OnInit, OnDestroy, OnChanges,
	SimpleChanges, Output, EventEmitter } from '@angular/core';
import { UifDropdownOptionComponent, UifDropdownItemService } from './uif-dropdown-subcomponents.component';
import { IUifDropdownItem } from './uif-dropdown.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'uif-dropdown',
	templateUrl: './uif-dropdown.component.html',
	styleUrls: [
		'./uif-dropdown.component.scss',
		'../uif-fabric.shared.scss'
	],
	providers: [ UifDropdownItemService ]
})
export class UifDropdownComponent implements AfterContentInit, OnInit, OnDestroy {
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
	@Input() title: string | String = 'Choose sounds';
	@Input() isMultiSelectable: boolean | Boolean = false;
	@Input() options: IUifDropdownItem[] = [];
	@Input() showSelectedText: boolean | Boolean = false;
	@Input() isDisabled: boolean | Boolean = false;
	@ContentChildren(UifDropdownOptionComponent) customOptions: UifDropdownOptionComponent[];
	showNative = false;
	showCustomOptions = false;
	private onDocumnetKeyUpListener: Subscription = null;
	constructor(private dropdownItemService: UifDropdownItemService) {}
	ngOnInit() {
		this.dropdownItemService.onDropdownItemToggled$.subscribe((id: any) => {
			this.customOptions.forEach((option: UifDropdownOptionComponent) => {
				if (option.id === id) {
					option.toggleItemSelection();
				} else {
					if (!this.isMultiSelectable) {
						option.selected = false;
						option.selectedChange.emit(false);
					}
				}
			});
			if (!this.isMultiSelectable) {
				this.isOpen = false;
			}
		});
	}
	ngOnDestroy() {
		if (this.onDocumnetKeyUpListener) {
			this.onDocumnetKeyUpListener.unsubscribe();
			this.onDocumnetKeyUpListener = null;
		}
	}
	ngAfterContentInit() {
		if (this.customOptions && this.customOptions.length > 0) {
			this.showNative = false;
			this.showCustomOptions = true;
		} else {
			this.showNative = true;
			this.showCustomOptions = false;
		}
	}
	toggleDropdown() {
		if (!this.isDisabled) {
			this.isOpen = !this.isOpen;
		}
		if (this.isOpen) {
			this.addDocumentListener();
		} else {
			this.clearDocumentListener();
		}
	}
	toggleItemSelection(item: IUifDropdownItem) {
		this.options.forEach((option: IUifDropdownItem) => {
			if (option.key === item.key) {
				option.selected = !option.selected;
			} else {
				if (!this.isMultiSelectable) {
					option.selected = false;
				}
			}
		});
		if (!this.isMultiSelectable) {
			this.isOpen = false;
		}
	}
	getCurrentSelected(): string {
		let result = 'Choose a option';
		if (this.showSelectedText) {
			if (this.showNative) {
				if (this.options.filter(x => x.selected).length > 0) {
					result = this.options.filter((option: IUifDropdownItem) => option.selected).map(x => x.text).join(', ');
				}
			} else if (this.showCustomOptions) {
				const items = this.customOptions.filter(x => x.selected);
				result = this.customOptions.filter((option: UifDropdownOptionComponent) => option.selected).map(x => x.text).join(', ');
			}
		}
		return result;
	}
	clearDocumentListener() {
		if (this.onDocumnetKeyUpListener) {
			this.onDocumnetKeyUpListener.unsubscribe();
			this.onDocumnetKeyUpListener = null;
		}
	}
	addDocumentListener() {
		this.clearDocumentListener();
		this.onDocumnetKeyUpListener = Observable.fromEvent(document, 'keyup')
			.subscribe(($event: KeyboardEvent) => {
				if ($event.key === 'Escape' && this.isOpen) {
					this.isOpen = false;
					this.isOpenChange.emit(this.isOpen);
				}
			});
	}
}
