import { Component, QueryList, ContentChildren, AfterViewInit, Input } from '@angular/core';
import { UifAccordionService } from './uif-accordion.service';
import { UifAccordionItemComponent } from './uif-accordion-item.component';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'uif-accordion',
	templateUrl: './uif-accordion.component.html',
	styleUrls: [ './uif-accordion.component.scss' ],
	providers: [UifAccordionService]
})
export class UifAccordionComponent implements AfterViewInit, OnChanges {
	@Input() oneItemOpenOnly: boolean | Boolean = true;
	@ContentChildren(UifAccordionItemComponent) accordionItems: QueryList<UifAccordionItemComponent>;
	initialized = false;
	constructor(
		private accordionService: UifAccordionService
	) {}
	ngOnChanges() {
		if (this.initialized) {
			this.accordionService.loadItems(this.accordionItems, this.oneItemOpenOnly);
		}
	}
	ngAfterViewInit() {
		this.accordionItems.changes.subscribe((items) => {
			this.accordionService.loadItems(this.accordionItems, this.oneItemOpenOnly);
		});
		setTimeout(() => {
			this.accordionService.loadItems(this.accordionItems, this.oneItemOpenOnly);
		});
		this.initialized = true;
	}
}
