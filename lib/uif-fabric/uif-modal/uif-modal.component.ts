import { Component, Input, EventEmitter, Output, ContentChild } from '@angular/core';
import { UifModalSize } from './uif-modal.models';
import { UifModalFooterComponent, UifModalHeaderComponent, UifModalContentComponent } from './uif-modal-subcomponents.component';
@Component({
	selector: 'uif-modal',
	templateUrl: './uif-modal.component.html',
	styleUrls: ['./uif-modal.component.scss']
})
export class UifModalComponent {
	isModal = true;
	@Input() isLargeHeader: boolean | Boolean = true;
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange = new EventEmitter<boolean | Boolean>();
	@Input() isBlocking: boolean | Boolean = true;
	@Input() isCloseable: boolean | Boolean = true;
	@Input() size: UifModalSize = UifModalSize.Default;
	@ContentChild(UifModalHeaderComponent) uifModalHeader;
	@ContentChild(UifModalContentComponent) uifModalContent;
	@ContentChild(UifModalFooterComponent) uifModalFooter;
	onOpenChange($event) {
		this.isOpenChange.emit($event);
	}
}
