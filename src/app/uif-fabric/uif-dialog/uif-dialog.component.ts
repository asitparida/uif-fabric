import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'uif-dialog',
	templateUrl: './uif-dialog.component.html',
	styleUrls: ['./uif-dialog.component.scss']
})
export class UifDialogComponent implements OnChanges {
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
	@Input() isBlocking: boolean | Boolean = false;
	@Input() isLargeHeader: boolean | Boolean =  false;
	@Input() isCloseable: boolean | Boolean = false;
	originalOveflowStyle = null;
	originalOveflowStyleAvailable = false;
	ngOnChanges() {
		if (this.isOpen) {
			if (this.isBlocking) {
				this.originalOveflowStyle = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
				this.originalOveflowStyleAvailable = true;
			}
		} else {
			if (this.isBlocking) {
				if (this.originalOveflowStyleAvailable) {
					document.body.style.overflow = this.originalOveflowStyle;
					this.originalOveflowStyleAvailable = false;
				}
			}
		}
	}
	closeDialog() {
		this.isOpen = false;
		this.isOpenChange.emit(this.isOpen);
	}
}
