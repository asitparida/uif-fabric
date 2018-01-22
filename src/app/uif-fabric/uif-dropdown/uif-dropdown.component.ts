import { Component, Input } from '@angular/core';
import { UifDropdownItem } from './uif-dropdown.models';

@Component({
	selector: 'uif-dropdown',
	templateUrl: './uif-dropdown.component.html',
	styleUrls: [ './uif-dropdown.component.scss' ]
})
export class UifDropdownComponent {
	@Input() isOpen: boolean | Boolean = false;
	@Input() title: string | String = 'Choose sounds';
	@Input() isMultiSelectable: boolean | Boolean = false
	@Input() options: UifDropdownItem[] = [];
	toggleItemSelection(item: UifDropdownItem) {
		this.options.forEach((option: UifDropdownItem) => {
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
		if (this.options.filter(x => x.selected).length > 0) {
			result = this.options.filter((option: UifDropdownItem) => option.selected).map(x => x.text).join(', ');
		}
		return result;
	}
}
