import { Component } from '@angular/core';

@Component({
	selector: 'uif-modal-header, [uifModalHeader]',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifModalHeaderComponent {
}

@Component({
	selector: 'uif-modal-content, [uifModalContent]',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifModalContentComponent {
}

@Component({
	selector: 'uif-modal-footer, [uifModalFooter]',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifModalFooterComponent {
}

