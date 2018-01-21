import { Component } from '@angular/core';

@Component({
	selector: 'uif-open-datepicker',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifOpenDatepickerComponent {
}

