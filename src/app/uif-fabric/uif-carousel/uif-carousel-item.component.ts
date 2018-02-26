import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'uif-carousel-item',
	template: `<div class="uif-carousel-item-content" [hidden]="!active"><ng-content></ng-content></div>`,
	styleUrls: ['./uif-carousel.component.scss']
})
export class UifCarouselItemComponent {
	private _id;
	@Input() active = false;
	@Output() activeChange = new EventEmitter<boolean | Boolean>();
	getId() {
		return this._id;
	}
	setId(val) {
		this._id = val;
	}
	emitOpenChange() {
		this.activeChange.emit(this.active);
	}
}
