import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UifAccordionService } from './uif-accordion.service';

@Component({
	selector: 'uif-accordion-item, [uifAccordionItem]',
	templateUrl: './uif-accordion-item.component.html',
	styleUrls: [ './uif-accordion.component.scss' ]
})
export class UifAccordionItemComponent {
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange = new EventEmitter<boolean | Boolean>();
	private _id;
	constructor(
		private accordionService: UifAccordionService
	) {}
	toggleItemOpen() {
		if (!this.isOpen) {
			this.accordionService.openItem(this._id);
		} else {
			this.isOpen = false;
			this.emitOpenChange();
		}
	}
	emitOpenChange() {
		this.isOpenChange.emit(this.isOpen);
	}
	getId() {
		return this._id;
	}
	setId(val) {
		this._id = val;
	}
}
