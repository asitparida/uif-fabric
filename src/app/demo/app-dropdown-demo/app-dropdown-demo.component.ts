import { Component } from '@angular/core';

@Component({
	selector: 'app-dropdown-demo',
	templateUrl: './app-dropdown-demo.component.html'
})
export class DropdownDemoComponent {
	isMultiSelectable = true;
	options = [
		{ key: 'dogBarking', text: 'Dog Barking', selected: false },
		{ key: 'mindBlowing', text: 'Wind Blowing', selected: true },
		{ key: 'duckQuacking', text: 'Duck Quacking', selected: false },
		{ key: 'cowMooing', text: 'Cow Mooing', selected: false }
	];
	isMultiSelectableHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	getJSON(val: any) {
		return JSON.stringify(val);
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
