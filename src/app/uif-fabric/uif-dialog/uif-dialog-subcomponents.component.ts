import { Component } from '@angular/core';

@Component({
	selector: 'uif-dialog-header, [uifDialogHeader]',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifDialogHeaderComponent {
}

@Component({
	selector: 'uif-dialog-content, [uifDialogContent]',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifDialogContentComponent {
}

@Component({
	selector: 'uif-dialog-footer, [uifDialogFooter]',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifDialogFooterComponent {
}

