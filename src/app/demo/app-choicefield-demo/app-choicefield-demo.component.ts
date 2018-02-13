import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-choicefield-demo',
	templateUrl: './app-choicefield-demo.component.html'
})
export class ChoicefieldDemoComponent {
	label = 'Sample choicefields label';
	value = 'animal-1';
	disabled = false;
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	options = [
		{ key: 'animal-1', text: 'Animal 1' },
		{ key: 'animal-2', text: 'Animal 2' },
		{ key: 'animal-3', text: 'Animal 3' },
		{ key: 'animal-4', text: 'Animal 4' },
		{ key: 'animal-5', text: 'Animal 5' }
	];
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
