import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'uif-breadcrumb',
	templateUrl: './uif-breadcrumb.component.html'
})
export class UifBreadcrumbComponent implements OnInit {
	title = 'app';
	@Input() maxDisplayedItems = Number.MAX_SAFE_INTEGER;
	@Input() items = [];
	showOverflow = false;
	ngOnInit() {}
	get breadcrumbItems(): any[] {
		let items = [].concat(this.items);
		this.maxDisplayedItems  = this.maxDisplayedItems ? this.maxDisplayedItems : Number.MAX_SAFE_INTEGER;
		this.showOverflow = false;
		if (this.maxDisplayedItems < items.length) {
			items = items.slice(items.length - this.maxDisplayedItems, items.length);
			this.showOverflow = true;
		}
		return items;
	}
}
