import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { UifPanelDirectionHint, UifPanelSizeHint } from './uif-panel.models';

@Component({
	selector: 'uif-panel',
	templateUrl: './uif-panel.component.html',
	styleUrls: [
		'./uif-panel.component.scss',
		'../uif-fabric.shared.scss'
	]
})
export class UifPanelComponent implements OnChanges {
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange = new EventEmitter<boolean | Boolean>();
	@Input() hasOverlay: boolean | Boolean = true;
	@Input() isClosable: boolean | Boolean = true;
	@Input() directionalHint: UifPanelDirectionHint = UifPanelDirectionHint.Right;
	@Input() size: UifPanelSizeHint = UifPanelSizeHint.Default;
	ngOnChanges() {
		if (this.isOpen && this.hasOverlay) {
			document.body.classList.add('ms-u-overflowHidden');
		} else {
			document.body.classList.remove('ms-u-overflowHidden');
		}
	}
	closePane() {
		this.isOpen = false;
		this.isOpenChange.emit(this.isOpen);
	}
}
