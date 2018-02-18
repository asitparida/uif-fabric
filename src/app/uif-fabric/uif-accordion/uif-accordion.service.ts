import { Injectable, QueryList } from '@angular/core';
import { UifAccordionItemComponent } from './uif-accordion-item.component';
import { GetRandomInt } from '../helpers';

@Injectable()
export class UifAccordionService {
	oneItemOpenOnly =  false;
	accordionItems: QueryList<UifAccordionItemComponent>;
	loadItems(items: QueryList<UifAccordionItemComponent>, oneItemOpenOnly) {
		this.accordionItems = items;
		this.oneItemOpenOnly = oneItemOpenOnly;
		this.accordionItems.forEach((item: UifAccordionItemComponent, index) => {
			item.setId('acc_item_' + GetRandomInt());
		});
		const activeItem = this.accordionItems.find(x => x.isOpen as boolean);
		this.accordionItems.forEach((item: UifAccordionItemComponent, index) => {
			if (this.oneItemOpenOnly) {
				if (!item.disabled) {
					item.isOpen = item.getId() === activeItem.getId();
				}
			}
			item.emitOpenChange();
		});
	}
	openItem(id: string) {
		this.accordionItems.forEach((item: UifAccordionItemComponent, index) => {
			if (!item.disabled) {
				if (item.getId() === id) {
					item.isOpen = true;
				} else {
					if (this.oneItemOpenOnly) {
						item.isOpen = false;
					}
				}
			}
			item.emitOpenChange();
		});
	}
}
