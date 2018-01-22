import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UifDropdownItemService {
	private dropdownItemToggled: Subject<any> = new Subject<any>();
	onDropdownItemToggled = this.dropdownItemToggled.asObservable();
	toggleDropdown(id: any) {
		this.dropdownItemToggled.next(id);
	}
}

@Component({
	selector: 'uif-dropdown-option, [uifDropdownOption]',
	styles: [
		':host {display: block; }'
	],
	template:
	`<div class="ms-Dropdown-item">
		<button
			[attr.checked]="selected"
			[attr.id]="'checkbox_' + id"
			role="checkbox"
			type="button"
			class="ms-Checkbox is-checked is-enabled"
			[attr.aria-checked]="selected"
				tabindex="0" (click)="fireSelection()">
				<ng-content></ng-content>
		</button>
	</div>`
})
export class UifDropdownOptionComponent {
	@Input() selected: boolean | Boolean = false;
	@Input() text = '';
	@Output() selectedChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
	id = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
	constructor(private dropdownItemService: UifDropdownItemService) {}
	fireSelection() {
		this.dropdownItemService.toggleDropdown(this.id);
	}
	toggleItemSelection() {
		this.selected = !this.selected;
		this.selectedChange.emit(this.selected);
	}
}
