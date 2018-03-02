import { Component } from '@angular/core';
import { UifModalSize } from '../../../../lib/uif-fabric/uif-fabric';

@Component({
	selector: 'app-modal-demo',
	templateUrl: './app-modal-demo.component.html'
})
export class ModalDemoComponent {
	isModalOpen = false;
	isBlocking: boolean | Boolean = true;
	isCloseable: boolean | Boolean = true;
	isLargeHeader: boolean | Boolean = true;
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	size = UifModalSize.Default;
	sizeHints = [
		{ key: UifModalSize.Default, text: 'Default'},
		{ key: UifModalSize.Medium, text: 'Medium'},
		{ key: UifModalSize.Large, text: 'Large'},
		{ key: UifModalSize.ExtraLarge, text: 'Extra Large'}
	];
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
