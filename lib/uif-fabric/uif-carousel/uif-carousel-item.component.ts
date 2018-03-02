import { Component, Input, EventEmitter, Output, OnChanges, ElementRef } from '@angular/core';

@Component({
	selector: 'uif-carousel-item',
	template: `<div class="uif-carousel-item-content" [hidden]="!active"><ng-content></ng-content></div>`,
	styleUrls: ['./uif-carousel-item.component.scss']
})
export class UifCarouselItemComponent {
	private _id;
	@Input() active = false;
	@Output() activeChange = new EventEmitter<boolean | Boolean>();
	constructor(private elemRef: ElementRef) {}
	getId() {
		return this._id;
	}
	setId(val) {
		this._id = val;
	}
	emitOpenChange() {
		this.activeChange.emit(this.active);
	}
	processForClass(dir = 'left') {
		const elm = this.elemRef.nativeElement;
		if (elm) {
			const trgt = (elm as HTMLElement).querySelector('.uif-carousel-item-content');
			if (trgt) {
				if (this.active) {
					(trgt as HTMLElement).classList.add('fade-in-item', dir);
				} else {
					(trgt as HTMLElement).classList.remove('fade-in-item', 'left', 'right');
				}
			}
		}
	}
}
