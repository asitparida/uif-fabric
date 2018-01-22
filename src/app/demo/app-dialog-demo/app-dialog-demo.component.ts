import { Component } from '@angular/core';

@Component({
	selector: 'app-dialog-demo',
	templateUrl: './app-dialog-demo.component.html'
})
export class DialogDemoComponent {
	isDialogOpened: boolean | Boolean = false;
	isBlocking: boolean | Boolean = true;
	isCloseable: boolean | Boolean = true;
	isLargeHeader: boolean | Boolean = true;
	closeHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
