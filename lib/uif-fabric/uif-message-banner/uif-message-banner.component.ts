import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'uif-message-banner',
	templateUrl: './uif-message-banner.component.html',
	styleUrls: [
		'./uif-message-banner.component.scss',
		'../uif-fabric.shared.scss'
	]
})
export class UifMessageBannerComponent {
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange = new EventEmitter<boolean | Boolean>();
	@Input() hasOverlay: boolean | Boolean = false;
	@Input() isClosable: boolean | Boolean = false;
	closePane() {
		this.isOpen = false;
		this.isOpenChange.emit(this.isOpen);
	}
}
