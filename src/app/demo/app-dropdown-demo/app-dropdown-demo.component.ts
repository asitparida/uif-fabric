import { Component } from '@angular/core';

@Component({
	selector: 'app-dropdown-demo',
	templateUrl: './app-dropdown-demo.component.html'
})
export class DropdownDemoComponent {
	isMultiSelectable = true;
	options = [
		{ key: 'dogBarking', text: 'Dog Barking', selected: false, extra: 'woof woof woof woof' },
		{ key: 'mindBlowing', text: 'Wind Blowing', selected: true, extra: 'sshh sshhh ssshhh ssssshhhhhh ' },
		{ key: 'duckQuacking', text: 'Duck Quacking', selected: false, extra: 'quack quack quack quack' },
		{ key: 'cowMooing', text: 'Cow Mooing', selected: false, extra: 'moo moo moo moo' }
	];
	isMultiSelectableHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	showSelectedText = true;
	disableDropdown = false;
	getJSON(val: any) {
		return JSON.stringify(val);
	}
	getOptionsJson() {
		return this.options.map((option) => {
			return ` \n key: ${option.key}, text: ${option.text}, selected: ${option.selected}`;
		});
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
