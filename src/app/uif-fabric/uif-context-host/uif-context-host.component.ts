import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'uif-context-host-header, [uifContextHostHeader]',
	template: '<ng-content></ng-content>'
})
export class UifContextHostHeaderComponent {
}

@Component({
	selector: 'uif-context-host-content, [uifContextHostContent]',
	template: '<ng-content></ng-content>'
})
export class UifContextHostContentComponent {
}

@Component({
	selector: 'uif-context-host',
	templateUrl: './uif-context-host.component.html',
	styleUrls: [ './uif-context-host.component.scss' ]
})
export class UifContextHostComponent {
	@Input() isOpen:  boolean | Boolean = false;
	@Output() isOpenChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
}
