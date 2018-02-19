import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { UifAccordionService } from './uif-accordion.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'uif-accordion-item, [uifAccordionItem]',
	templateUrl: './uif-accordion-item.component.html',
	styleUrls: ['./uif-accordion.component.scss']
})
export class UifAccordionItemComponent implements OnChanges {
	@Input() disabled: boolean | Boolean = false;
	@Input() isOpen: boolean | Boolean = false;
	@Output() isOpenChange = new EventEmitter<boolean | Boolean>();
	@ViewChild('contentElement') contentElement: ElementRef;
	@ViewChild('contentHolderElement') contentHolderElement: ElementRef;
	isItemOpen = false;
	private initialized = false;
	private _id;
	constructor(
		private accordionService: UifAccordionService
	) { }
	@HostListener('window:resize')
	ngOnChanges() {
		if (this.isOpen) {
			this.openItemDrawer();
		} else {
			this.closeItemDrawer();
		}
	}
	toggleItemOpen() {
		if (this.disabled) {
			return;
		}
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
	openItemDrawer() {
		console.log(1111);
		this.isItemOpen = true;
		setTimeout(() => {
			const contentElm = this.contentElement.nativeElement as HTMLElement;
			const contentHolderElm = this.contentHolderElement.nativeElement as HTMLElement;
			if (contentElm) {
				const contentElmRect = contentElm.getBoundingClientRect();
				if (contentElmRect) {
					contentHolderElm.style.height = contentElmRect.height + 'px';
				}
			}
		});
	}
	closeItemDrawer() {
		setTimeout(() => {
			const contentHolderElm = this.contentHolderElement.nativeElement as HTMLElement;
			contentHolderElm.style.height = '0px';
			setTimeout(() => {
				this.isItemOpen = false;
			}, 250);
		});
	}
}
