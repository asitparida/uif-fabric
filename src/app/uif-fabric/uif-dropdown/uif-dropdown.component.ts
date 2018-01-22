import { Component, Input, AfterContentInit, ContentChildren, OnInit } from '@angular/core';
import { UifDropdownOptionComponent, UifDropdownItemService } from './uif-dropdown-subcomponents.component';
import { IUifDropdownItem } from './uif-dropdown.models';

@Component({
	selector: 'uif-dropdown',
	templateUrl: './uif-dropdown.component.html',
	styleUrls: [ './uif-dropdown.component.scss' ],
	providers: [ UifDropdownItemService ]
})
export class UifDropdownComponent implements AfterContentInit, OnInit {
	@Input() isOpen: boolean | Boolean = false;
	@Input() title: string | String = 'Choose sounds';
	@Input() isMultiSelectable: boolean | Boolean = false;
	@Input() options: IUifDropdownItem[] = [];
	@Input() showSelectedText: boolean | Boolean = false;
	@Input() isDisabled: boolean | Boolean = false;
	@ContentChildren(UifDropdownOptionComponent) customOptions: UifDropdownOptionComponent[];
	showNative = false;
	showCustomOptions = false;
	constructor(private dropdownItemService: UifDropdownItemService) {}
	ngOnInit() {
		this.dropdownItemService.onDropdownItemToggled.subscribe((id: any) => {
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
}
